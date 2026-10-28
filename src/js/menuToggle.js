const menuToggle = document.querySelector("#menuToggle");
const menuIcon = document.querySelector("#menuIcon");
const closeIcon = document.querySelector("#closeIcon");
const navigation = document.querySelector("#headerNavigation");
const overlay = document.querySelector("#headerOverlay");

function closeMenu() {
  menuToggle.setAttribute("aria-expanded", "false");
  menuToggle.setAttribute("aria-label", "Open navigation menu");

  menuIcon.classList.remove("hidden");
  closeIcon.classList.add("hidden");

  navigation.classList.add("invisible", "max-h-0", "opacity-0");
  navigation.classList.remove("max-h-[calc(100dvh-76px)]", "opacity-100");

  overlay.classList.add("invisible", "opacity-0", "pointer-events-none");
  overlay.classList.remove("opacity-100");

  document.body.style.overflow = "";
}

function openMenu() {
  menuToggle.setAttribute("aria-expanded", "true");
  menuToggle.setAttribute("aria-label", "Close navigation menu");

  menuIcon.classList.add("hidden");
  closeIcon.classList.remove("hidden");

  navigation.classList.remove("invisible", "max-h-0", "opacity-0");
  navigation.classList.add("max-h-[calc(100dvh-76px)]", "opacity-100");

  overlay.classList.remove("invisible", "opacity-0", "pointer-events-none");
  overlay.classList.add("opacity-100");

  document.body.style.overflow = "hidden";
}

menuToggle.addEventListener("click", () => {
  const isOpen = menuToggle.getAttribute("aria-expanded") === "true";

  if (isOpen) {
    closeMenu();
  } else {
    openMenu();
  }
});

overlay.addEventListener("click", closeMenu);

navigation.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    if (window.innerWidth < 1024) {
      closeMenu();
    }
  });
});

document.addEventListener("keydown", (event) => {
  if (
    event.key === "Escape" &&
    menuToggle.getAttribute("aria-expanded") === "true"
  ) {
    closeMenu();
  }
});

window.matchMedia("(min-width: 1024px)").addEventListener("change", (event) => {
  if (event.matches) {
    closeMenu();
  }
});
