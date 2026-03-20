export function initCarousel() {
  const track = document.querySelector(".carousel__track");
  const prevBtn = document.querySelector(".carousel__prev");
  const nextBtn = document.querySelector(".carousel__next");

  if (!track || !prevBtn || !nextBtn) return;

  function getScrollAmount() {
    const card = track.querySelector(".carousel__slide");
    if (!card) return 300;
    const style = getComputedStyle(track);
    const gap = parseFloat(style.columnGap) || 0;
    return card.offsetWidth + gap;
  }

  prevBtn.addEventListener("click", () => {
    track.scrollBy({ left: -getScrollAmount(), behavior: "smooth" });
  });

  nextBtn.addEventListener("click", () => {
    track.scrollBy({ left: getScrollAmount(), behavior: "smooth" });
  });
}
