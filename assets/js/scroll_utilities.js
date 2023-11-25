import selectfromDOM from "./selectfromDOM.js";
let header = selectfromDOM("one", "#header");

export default function scrollUtilities() {
  window.addEventListener("scroll", function () {

    if (window.scrollY > 115) {
      header.classList.remove("unscroll");
    } else {
      header.classList.add("unscroll");
    }
  });
}
