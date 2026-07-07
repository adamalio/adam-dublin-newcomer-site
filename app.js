const checklistItems = [
  {
    id: "temporary-base",
    category: "housing",
    title: "Choose temporary accommodation window",
    detail: "Book a 3-4 week base with a tested commute to Grand Canal Dock."
  },
  {
    id: "proof-address",
    category: "setup",
    title: "Collect proof of address",
    detail: "Keep files ready for bank, PPS number, and other admin checks."
  },
  {
    id: "photo-id",
    category: "setup",
    title: "Keep photo ID scans handy",
    detail: "Dublin.ie notes PPS applications usually need photo ID."
  },
  {
    id: "pps-evidence",
    category: "setup",
    title: "Prepare PPS reason evidence",
    detail: "Apply online after arrival when there is a clear reason for needing one."
  },
  {
    id: "leap-card",
    category: "setup",
    title: "Get Leap Card sorted",
    detail: "Use it across Dublin Bus, Luas, DART, and Dublin-area commuter rail."
  },
  {
    id: "commute-test",
    category: "setup",
    title: "Test the Barrow Street commute",
    detail: "Run it at real work arrival time and save two backup routes."
  },
  {
    id: "football-slot",
    category: "football",
    title: "Book first 5-a-side or GoodRec game",
    detail: "Start casual before searching for club trials or Sunday league."
  },
  {
    id: "google-football",
    category: "football",
    title: "Ask Google internal groups",
    detail: "Internal groups can be the fastest path to regular games."
  },
  {
    id: "meetup-event",
    category: "social",
    title: "Pick one recurring Meetup",
    detail: "Favor groups that meet weekly so repeat contact is natural."
  },
  {
    id: "internations",
    category: "social",
    title: "Check InterNations or expat groups",
    detail: "Useful for fellow nationals and people in the same arrival phase."
  },
  {
    id: "six-week-plan",
    category: "social",
    title: "Plan 18 contact points",
    detail: "Three recurring touchpoints per week for six weeks, targeting five repeat contacts."
  },
  {
    id: "sea-walk",
    category: "social",
    title: "Schedule one low-pressure sea walk",
    detail: "Sandymount or the coast makes Dublin weather easier to enjoy."
  }
];

const storageKey = "adam-dublin-checklist";
const list = document.querySelector("#checklistItems");
const filterButtons = document.querySelectorAll(".filter-button");

let activeFilter = "all";
let checkedState = readState();

function readState() {
  try {
    return JSON.parse(localStorage.getItem(storageKey)) || {};
  } catch {
    return {};
  }
}

function saveState() {
  localStorage.setItem(storageKey, JSON.stringify(checkedState));
}

function renderChecklist() {
  const visibleItems = checklistItems.filter((item) => {
    return activeFilter === "all" || item.category === activeFilter;
  });

  list.innerHTML = "";

  visibleItems.forEach((item) => {
    const label = document.createElement("label");
    label.className = `check-item${checkedState[item.id] ? " is-done" : ""}`;
    label.dataset.category = item.category;

    const input = document.createElement("input");
    input.type = "checkbox";
    input.checked = Boolean(checkedState[item.id]);
    input.setAttribute("aria-label", item.title);

    const copy = document.createElement("span");
    const title = document.createElement("strong");
    title.textContent = item.title;
    const detail = document.createElement("small");
    detail.textContent = detailText(item);

    copy.append(title, detail);
    label.append(input, copy);

    input.addEventListener("change", () => {
      checkedState[item.id] = input.checked;
      label.classList.toggle("is-done", input.checked);
      saveState();
    });

    list.append(label);
  });
}

function detailText(item) {
  const categoryNames = {
    setup: "Setup",
    social: "Social",
    football: "Football",
    housing: "Housing"
  };

  return `${categoryNames[item.category]}: ${item.detail}`;
}

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    activeFilter = button.dataset.filter;
    filterButtons.forEach((item) => item.classList.toggle("active", item === button));
    renderChecklist();
  });
});

renderChecklist();
