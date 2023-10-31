const heroSection = document.querySelector(".section-hero");
const body = document.querySelector("body");
const openBtn = document.querySelector(".menu-btn");
const closeBtn = document.querySelector(".close-menu-btn");
const navBar = document.querySelector(".main-header__nav__list");

const stickyNav = function (entries) {
  const [entry] = entries;

  if (!entry.isIntersecting) body.classList.add("sticky");
  else body.classList.remove("sticky");
};

const heroSectionObserver = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0,
  rootMargin: "-80px",
});

heroSectionObserver.observe(heroSection);

openBtn.addEventListener("click", () => {
  openBtn.classList.add("hidden");
  closeBtn.classList.remove("hidden");
  navBar.classList.add("open-nav");
});

closeBtn.addEventListener("click", () => {
  openBtn.classList.remove("hidden");
  closeBtn.classList.add("hidden");
  navBar.classList.remove("open-nav");
});
