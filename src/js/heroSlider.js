const heroSlides = document.querySelectorAll(".heroSlide");
const heroDots = document.querySelectorAll(".heroDot");
let currentSlide = 0;

function showSlide(index) {
  heroSlides.forEach((slide, i) => {
    slide.classList.toggle("hidden", i !== index);
    slide.classList.toggle("flex", i === index);
  });

  heroDots.forEach((dot, i) => {
    dot.classList.toggle("bg-[#4CAF4F]", i === index);
    dot.classList.toggle("bg-[#C8E6C9]", i !== index);
    dot.setAttribute("aria-current", i === index ? "true" : "false");
  });

  currentSlide = index;
}

heroDots.forEach((dot, index) => {
  dot.addEventListener("click", () => showSlide(index));
});

setInterval(() => {
  showSlide((currentSlide + 1) % heroSlides.length);
}, 5000);
