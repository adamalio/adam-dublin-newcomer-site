const { test } = require('node:test');
const assert = require('node:assert/strict');
const { readFileSync } = require('node:fs');
const vm = require('node:vm');
const script = readFileSync(require('node:path').join(__dirname, '../app.js'), 'utf8');
function boot(saved, writeFails = false) {
  function element() {
    return { children: [], dataset: {}, attrs: {}, events: {}, classList: { toggle() {} },
      append(...items) { this.children.push(...items); },
      before(item) { this.notice = item; },
      setAttribute(key,value) { this.attrs[key] = value; },
      addEventListener(name,fn) { this.events[name] = fn; },
      set innerHTML(value) { this.children = []; } };
  }
  const list = element();
  const filters = ['all', 'housing'].map(filter => ({ ...element(), dataset: {filter} }));
  let written;
  vm.runInNewContext(script, { document: { querySelector: () => list, querySelectorAll: () => filters, createElement: element },
    localStorage: { getItem: () => saved, setItem: (key,value) => { if (writeFails) throw Error('quota'); written = value; } } });
  return { list, filters, written: () => written };
}
test('invalid stored JSON shapes still allow checklist changes to persist', () => {
  for (const saved of ['true', '42', '[]', 'null', '{broken']) {
    const state = boot(saved);
    const input = state.list.children[1].children[0];
    input.checked = true;
    input.events.change();
    assert.equal(JSON.parse(state.written())['globalconnect-access'], true);
  }
});
test('blocked storage leaves interactive changes in memory and exposes status', () => {
  const state = boot('{}', true);
  const input = state.list.children[1].children[0];
  input.checked = true;
  assert.doesNotThrow(() => input.events.change());
  assert.equal(state.list.notice.hidden, false);
  state.filters[0].events.click();
  assert.equal(state.list.children[1].children[0].checked, true);
});
test('filter selection exposes its pressed state', () => {
  const state = boot('{}');
  assert.equal(state.filters[0].attrs['aria-pressed'], 'true');
  state.filters[1].events.click();
  assert.equal(state.filters[0].attrs['aria-pressed'], 'false');
  assert.equal(state.filters[1].attrs['aria-pressed'], 'true');
  assert.ok(state.list.children.every(item => item.dataset.category === 'housing'));
});
