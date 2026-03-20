export function initHeader() {
  const hamburger = document.querySelector(".header__hamburger");
  const nav = document.querySelector(".header__nav");

  if (!hamburger || !nav) return;

  hamburger.addEventListener("click", () => {
    nav.classList.toggle("is-open");
  });
}
