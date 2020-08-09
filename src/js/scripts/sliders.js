import { closeSidebar } from "./sidebar.js";

const tablet = window.matchMedia("(min-width: 768px)");
const activeClasses = document.querySelectorAll(".slide");

let pricesSwiper = new Swiper('.prices__container', {
  pagination: {
    el: '.prices__pagination',
  },
  direction: "horizontal",
  spaceBetween: 16,
  width: 224,
  loop: true,
  init: false
})

let brandSwiper = new Swiper('.brands__container', {
  pagination: {
    el: '.brands__pagination',
  },
  direction: "horizontal",
  spaceBetween: 16,
  width: 224,
  init: false
})

let techSwiper = new Swiper('.tech__container', {
  pagination: {
    el: '.tech__pagination',
  },
  direction: "horizontal",
  spaceBetween: 16,
  width: 240,
  loop: true,
  init: false
})

const brandsShowAll = document.querySelector('.brands__show-all');
const techShowAll = document.querySelector('.tech__show-all');
const techWrapper = document.querySelector(".tech__wrapper");
const brandsWrapper = document.querySelector(".brands__wrapper");
const techShowAllImg = document.querySelector(".tech__show-all > .show-all__img");
const techShowAllText = document.querySelector(".tech__show-all > .show-all__text");
const brandsShowAllImg = document.querySelector(".brands__show-all > .show-all__img");
const brandsShowAllText = document.querySelector(".brands__show-all > .show-all__text")
const show = document.querySelectorAll('.show-all');
let brandsListShown = false;
let techListShown = false;

const showTechButtonOn = function () {
  show.style.display = "block";
  techListShown = true;
  techShowAllImg.style.transform = "rotate(180deg)";
  techShowAllText.textContent = "Скрыть";
  techWrapper.style.height = "100%";
}

const showTechButtonOff = function () {
  techListShown = false;
  techShowAllImg.style.transform = "rotate(0deg)";
  techShowAllText.textContent = "Показать все";
  techWrapper.style.height = "160px";
}

const showBrandsButtonOn = function () {
  show.style.display = "block";
  brandsListShown = true;
  brandsShowAllImg.style.transform = "rotate(180deg)";
  brandsShowAllText.textContent = "Скрыть";
  brandsWrapper.style.height = "100%";
}

const showBrandsButtonOff = function () {
  brandsListShown = false;
  brandsShowAllImg.style.transform = "rotate(0deg)";
  brandsShowAllText.textContent = "Показать все";
  brandsWrapper.style.height = "160px";
}

techShowAll.addEventListener('click', function () {
  if (!techListShown) {
    showTechButtonOn();
  } else {
    showTechButtonOff();
  }
});

brandsShowAll.addEventListener('click', function () {
  if (!brandsListShown) {
    showBrandsButtonOn();
  } else {
    showBrandsButtonOff();
  }
});

for (let i = 0; i < activeClasses.length; i++) {
  if (!tablet.matches) {
    brandSwiper.init();
    techSwiper.init();
    pricesSwiper.init();
  }
}

tablet.addListener(e => {
  for (let i = 0; i < activeClasses.length; i++) {
    if (e.matches) {
      activeClasses[i].classList.remove('swiper-slide');
      closeSidebar();
      brandSwiper.destroy();
      techSwiper.destroy();
      pricesSwiper.destroy();
    } else {
      activeClasses[i].classList.add('swiper-slide');
      brandSwiper.init();
      techSwiper.init();
      pricesSwiper.init();
    }
  }
});

export {showTechButtonOn, showTechButtonOff, showBrandsButtonOn, showBrandsButtonOff, brandsShowAll, techShowAll, techWrapper, brandsWrapper, techShowAllImg, techShowAllText, brandsShowAllImg, brandsShowAllText, tablet, activeClasses, show};