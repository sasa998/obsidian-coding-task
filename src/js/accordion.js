export function initAccordion() {
  const headers = document.querySelectorAll(".accordion__header");

  headers.forEach((header) => {
    header.addEventListener("click", () => {
      const content = header.nextElementSibling;
      const icon = header.querySelector(".accordion__icon");
      const isOpen = content.classList.contains("is-open");

      content.classList.toggle("is-open");
      icon.textContent = isOpen ? "+" : "−";
    });
  });
}
