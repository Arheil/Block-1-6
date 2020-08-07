import "../scss/style.scss";
import "./scripts/sidebar.js";
import "./scripts/modal.js";
import "./scripts/sliders.js";

const tablet = window.matchMedia("(min-width: 768px)");
export const desktop = window.matchMedia("(min-width: 1120px)");
export let sidebarShown = false;
export const main = document.querySelector('.main');

const descShowAll = document.querySelector('.description__link');
const descTabletText = document.querySelector('.description__text--tabletplus');
const descTabletFullText = document.querySelector('.description__text--full');
const descFullText = document.querySelector('.description__text--all');
let descShown = false;

const milk = document.querySelector('.white-space');
const sidebar = document.querySelector('.sidebar');
const burger = document.querySelector('.burger-button');

burger.addEventListener('click', function () {
  sidebar.style.transform = "translateX(400px)";
  milk.style.visibility = "visible";
})

const showDescButtonOn = function () {
  descShown = true;
  descTabletText.style.display = "inline";
  descFullText.style.display = "inline";
  descTabletFullText.style.display = "inline";
  document.querySelector(".description__link > .show-all__text").textContent = "Скрыть";
  document.querySelector(".description__link > .show-all__img").style.transform = "rotate(180deg)";
}

const showDescButtonOff = function () {
  descShown = false;
  if (!tablet.matches) {
    descFullText.style.display = "none";
  }
  if (!desktop.matches) {
    descTabletFullText.style.display = "none";
  }
  descFullText.style.display = "none";
  document.querySelector(".description__link > .show-all__text").textContent = "Читать далее";
  document.querySelector(".description__link > .show-all__img").style.transform = "rotate(0deg)";
}

descShowAll.addEventListener('click', function () {
  if (!descShown) {
    showDescButtonOn();
  } else {
    showDescButtonOff();
  }
});