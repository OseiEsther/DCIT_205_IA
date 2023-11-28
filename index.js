import NavigationUtilities from "./assets/js/navigation.js";
import swippers from "./assets/js/swippers.js";

document.addEventListener("DOMContentLoaded", () => {
  NavigationUtilities();
  // initialized swippers
  swippers();
});

const pathname = window.location.pathname;
let paths = pathname.split("/");
console.log(paths[paths.length - 1]);
