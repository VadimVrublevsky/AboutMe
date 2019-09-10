'use strict'

const openPopupButton = document.querySelector('.about__button-contact');
const closePopupButton = document.querySelector('.modal-popup__close');
const popup = document.querySelector('.modal-popup');
const popupOverlay = document.querySelector('.modal-overlay');
const form = document.querySelector('.form--popup');
const fieldName = form.querySelector('.form__text--name');

// open popup
openPopupButton.addEventListener('click', (evt) => {
  evt.preventDefault();
  popup.classList.add("modal-popup__show");
  popupOverlay.classList.add("modal-overlay__show");
  fieldName.focus();
});
// close popup
closePopupButton.addEventListener('click', (evt) => {
  evt.preventDefault();
  popup.classList.remove("modal-popup__show");
  popupOverlay.classList.remove("modal-overlay__show");
  form.reset();
});
popupOverlay.addEventListener('click', (evt) => {
  evt.preventDefault();
  popup.classList.remove("modal-popup__show");
  popupOverlay.classList.remove("modal-overlay__show");
  form.reset();
});
window.addEventListener("keydown", (evt) => {
	if (evt.keyCode === 27 && popup.classList.contains("modal-popup__show")) {
    evt.preventDefault();
    popup.classList.remove("modal-popup__show");
    popupOverlay.classList.remove("modal-overlay__show");
    form.reset();
  };
});
