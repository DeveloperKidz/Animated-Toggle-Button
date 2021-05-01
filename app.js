//js
var openBtn = document.querySelector(".__open-btn");
var Btn = document.querySelector(".dots");
var Circle = document.querySelector(".__circle");
//handler

var menuStatus = false;

openBtn.addEventListener("click", () => {
  if (menuStatus === false) {
    menuStatus = true;
    Btn.classList.add("open");
    Btn.classList.remove("close");
    Circle.classList.add("changes");
  } else {
    menuStatus = false;
    Btn.classList.remove("open");
    Btn.classList.add("close");
    Circle.classList.remove("changes");
  }
});
