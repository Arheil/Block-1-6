import { desktop, sidebarShown, main } from "../js/index.js";
import { closeSidebar, sidebar } from "../js/sidebar.js";

const whiteSpace = document.querySelector('.white-space');
const callButton = document.querySelectorAll('.button__call');
const callModal = document.querySelector('.call');
const callCloseButton = document.querySelector('.call__close-button');
const feedbackButton = document.querySelectorAll('.button__chat');
const feedbackModal = document.querySelector('.feedback');
const feedbackCloseButton = document.querySelector('.feedback__close-button');

let modalCallShown = false;
let modalFeedbackShown = false;

const closeModal = function (modal, button, state) {
  event.preventDefault();
  modal.style.transform = "translateX(460px)";
  if (!desktop.matches) { 
    sidebar.style.transform = "translateX(0px)"; 
}
  button.style.filter = "opacity(0)";
  button.style.transform = "translate(0px, 0px)";
  whiteSpace.style.zIndex = "2";
  state = false;
  let sidebarShown = false;
  if (!sidebarShown) {
    main.style.filter = "opacity(1)";
    whiteSpace.style.display = "none";
  }
}

const openModal = function(state, modal, button) {
  event.preventDefault();
    closeSidebar();
    whiteSpace.style.zIndex = "4";
    if (!state) {
      modal.style.transform = "translateX(-460px)";
      button.style.filter = "opacity(1)";
      if (desktop.matches) {
        button.style.transform = "translate(-80px, 20px)";
      }
      let state = true;
      main.style.filter = "opacity(0.8)";
      whiteSpace.style.display = "block";
    }
}

blurredSpace.addEventListener('click', function () {
  closeModal(feedbackModal, feedbackCloseButton, modalFeedbackShown);
  closeModal(callModal, callCloseButton, modalCallShown);
  closeSidebar();
  whiteSpace.style.zIndex = "2";
})

document.querySelectorAll('.button__call').forEach(feedbackButton => {
  feedbackButton.addEventListener('click', function () {
    openModal(modalCallShown, callModal, callCloseButton);
  });
})

document.querySelectorAll('.button__chat').forEach(feedbackButton => {
  feedbackButton.addEventListener('click', function () {
    openModal(modalFeedbackShown, feedbackModal, feedbackCloseButton);
  });
})

callCloseButton.addEventListener('click', function () {
  closeModal(callModal, callCloseButton, modalCallShown);
})

feedbackCloseButton.addEventListener('click', function () {
  closeModal(feedbackModal, feedbackCloseButton, modalFeedbackShown);
})