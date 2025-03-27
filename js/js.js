document.addEventListener("DOMContentLoaded", function () {
  initAOS();
  initBurgerMenu();
  initAccordion();
  initSearch();
  initPageTitle();
});

function initAOS() {
  AOS.init({ duration: 800, easing: 'ease-out', once: true });
}

function initBurgerMenu() {
  const burger = document.getElementById("burger");
  const navLinks = document.getElementById("navLinks");

  if (burger && navLinks) {
    burger.addEventListener("click", () => {
      navLinks.classList.toggle("nav-active");
      burger.classList.toggle("toggle");
    });
  }
}

function initAccordion() {
  const accordions = document.querySelectorAll(".accordion-toggle");

  accordions.forEach((accordion) => {
    accordion.addEventListener("click", function () {
      const content = this.nextElementSibling;
      const arrow = this.querySelector(".arrow");

      if (content.style.height === "0px" || !content.style.height) {
        content.style.height = `${content.scrollHeight}px`;
        arrow.textContent = "expand_less";
      } else {
        content.style.height = "0px";
        arrow.textContent = "expand_more";
      }
    });
  });
}

function initSearch() {
  const searchIcon = document.getElementById("searchIcon");
  const searchInput = document.getElementById("searchInput");

  if (searchIcon && searchInput) {
    searchIcon.addEventListener("click", function () {
      searchInput.classList.toggle("active");
      searchInput.focus();
    });

    searchInput.addEventListener("input", searchOnPage);
  }
}

function searchOnPage() {
  const searchTerm = document.getElementById("searchInput").value.toLowerCase();
  const elementsToSearch = document.querySelectorAll("p, h1, h2, h3, li");

  elementsToSearch.forEach((element) => {
    const textContent = element.textContent.toLowerCase();
    element.classList.toggle("highlight", textContent.includes(searchTerm) && searchTerm.trim() !== "");
  });
}

function initPageTitle() {
  fetch("js/titles.json")
    .then((response) => response.json())
    .then((data) => {
      const currentPage = window.location.pathname.split("/").pop() || "index.html";
      if (data[currentPage]) {
        document.title = data[currentPage];
      }
    })
    .catch((error) => console.error("Error loading titles:", error));
}
