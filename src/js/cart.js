export function initCart() {
  const btn = document.querySelector(".product__add-to-cart");
  const qtyValue = document.querySelector(".product__quantity-value");
  const minusBtn = document.querySelector(".product__quantity .js-minus");
  const plusBtn = document.querySelector(".product__quantity .js-plus");
  const cartCount = document.querySelector(".header__cart-count");

  if (!btn) return;

  let qty = 1;
  let cartTotal = 0;

  minusBtn?.addEventListener("click", () => {
    if (qty > 1) {
      qty--;
      qtyValue.textContent = qty;
    }
  });

  plusBtn?.addEventListener("click", () => {
    qty++;
    qtyValue.textContent = qty;
  });

  btn.addEventListener("click", () => {
    const originalText = btn.textContent;
    btn.textContent = "ADDED";
    btn.classList.add("is-added");

    cartTotal += qty;
    if (cartCount) {
      cartCount.textContent = cartTotal;
      cartCount.classList.add("is-visible");
    }

    setTimeout(() => {
      btn.textContent = originalText;
      btn.classList.remove("is-added");
    }, 1500);
  });
}
