const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
});

navLinks.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
  });
});

const searchInput = document.getElementById("searchInput");
const filterButtons = document.querySelectorAll(".filter-button");
const cards = document.querySelectorAll(".resource-card");
const emptyState = document.getElementById("emptyState");
let activeFilter = "all";

function updateResources() {
  const query = searchInput.value.trim().toLowerCase();
  let visibleCount = 0;

  cards.forEach((card) => {
    const classMatch = activeFilter === "all" || card.dataset.class === activeFilter;
    const searchMatch = !query || (card.dataset.search + " " + card.textContent).toLowerCase().includes(query);
    const show = classMatch && searchMatch;
    card.hidden = !show;
    if (show) visibleCount++;
  });

  emptyState.hidden = visibleCount !== 0;
}

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    filterButtons.forEach((item) => item.classList.remove("active"));
    button.classList.add("active");
    activeFilter = button.dataset.filter;
    updateResources();
  });
});

searchInput.addEventListener("input", updateResources);
document.getElementById("year").textContent = new Date().getFullYear();
