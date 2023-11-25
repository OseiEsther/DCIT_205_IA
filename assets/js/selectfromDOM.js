export default function (type, element) {
  if (type === "one") {
    return document.querySelector(element);
  }
  if (type === "more") {
    return document.querySelectorAll(element);
  }

  return;
}
