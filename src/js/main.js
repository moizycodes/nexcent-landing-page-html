const navLinks = document.querySelectorAll("#headerNavigation .navLink");

function setActiveLink(activeLink) {
  navLinks.forEach((link) => {
    link.style.backgroundColor = "transparent";
    link.style.color = "#263238";
    link.style.fontWeight = "400";
  });

  activeLink.style.backgroundColor = "#E8F5E9";
  activeLink.style.color = "#4CAF4F";
  activeLink.style.fontWeight = "500";
}

// Refresh par current URL ke mutabiq active link set karo
const currentHash = window.location.hash;
const currentLink = [...navLinks].find((link) => {
  return link.getAttribute("href") === currentHash;
});

if (currentLink) {
  setActiveLink(currentLink);
} else {
  setActiveLink(
    [...navLinks].find((link) => link.getAttribute("href") === "/")
  );
}

navLinks.forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();

    setActiveLink(link);

    const href = link.getAttribute("href");

    if (href === "/") {
      history.replaceState(null, "", window.location.pathname);
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    const section = document.querySelector(href);

    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      history.replaceState(null, "", href);
    }
  });
});