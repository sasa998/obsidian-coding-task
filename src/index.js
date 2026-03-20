import "./styles/main.scss";

import { initAccordion } from "./js/accordion.js";
import { initCarousel } from "./js/carousel.js";
import { initCart } from "./js/cart.js";
import { initHeader } from "./js/header.js";

document.addEventListener("DOMContentLoaded", () => {
  initHeader();
  initAccordion();
  initCarousel();
  initCart();
});
