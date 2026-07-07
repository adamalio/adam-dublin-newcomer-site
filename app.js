const checklistItems = [
  {
    id: "temporary-base",
    category: "housing",
    title: "Book a 3-4 week landing base",
    detail: "Only shortlist places with a tested Barrow Street commute."
  },
  {
    id: "commute-test",
    category: "housing",
    title: "Test commute at real arrival time",
    detail: "Save one wet-weather backup and one late-return route."
  },
  {
    id: "phone-data",
    category: "admin",
    title: "Activate phone and data",
    detail: "Do this before bank, housing viewings, and app-based travel."
  },
  {
    id: "leap-card",
    category: "admin",
    title: "Get Leap sorted",
    detail: "Use it across Dublin Bus, Luas, DART, and commuter rail."
  },
  {
    id: "proof-pack",
    category: "admin",
    title: "Build bank/PPS proof pack",
    detail: "Address proof, photo ID, and reason evidence in one folder."
  },
  {
    id: "weekly-room",
    category: "social",
    title: "Choose one weekly room",
    detail: "Meetup, InterNations, work group, or class with repeat faces."
  },
  {
    id: "contact-plan",
    category: "social",
    title: "Schedule 18 contact points",
    detail: "Three recurring touchpoints per week for six weeks."
  },
  {
    id: "football-slot",
    category: "football",
    title: "Book first casual 5-a-side",
    detail: "GoodRec, Meetup, or a Google group before club trials."
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
    admin: "Admin",
    football: "Football",
    housing: "Housing",
    social: "Social"
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
