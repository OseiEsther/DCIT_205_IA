import selectfromDOM from "./selectfromDOM.js";
let header = selectfromDOM("one", "#header");
let mobileNav = selectfromDOM("one", "#mobile-nav");
let openBtn = selectfromDOM("one", "#nav-toggler");
let closeBtn = selectfromDOM("one", "#close-btn");

export default function scrollUtilities() {
  window.addEventListener("scroll", function () {
    if (window.scrollY > 115) {
      header.classList.remove("unscroll");
    } else {
      header.classList.add("unscroll");
    }
  });

  // Open mobile nav
  openBtn.addEventListener("click", () => {
    mobileNav.classList.add("show");
  });

  // Close mobile nav
  closeBtn.addEventListener("click", () => {
    mobileNav.classList.remove("show");
  });
}
