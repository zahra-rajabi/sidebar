"strict mode";
const button = document.querySelector(".button");
const icon = document.querySelector(".icon");
const text = document.querySelector(".text");
const sidebar = document.querySelector(".sidebar");
//////////////////////////////////////////////
button.addEventListener("click", function () {
  sidebar.classList.toggle("active");

  if (sidebar.classList.contains("active")) {
    icon.innerHTML = "&#x2716;";
    text.innerHTML = "close";
  } else {
    icon.innerHTML = "&#9776;";
    text.innerHTML = "open";
  }
});
