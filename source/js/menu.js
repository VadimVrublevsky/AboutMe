'use strict'

const nav = document.querySelector('.navigation');
const toggle = document.querySelector('.page-header__button');

nav.classList.remove('navigation--nojs');

toggle.addEventListener("click", (evt) => {
  evt.preventDefault();
  if(nav.classList.contains("navigation--closed")) {
    nav.classList.remove("navigation--closed");
    nav.classList.add("navigation--opened");
  }
  else {
    nav.classList.remove("navigation--opened");
    nav.classList.add("navigation--closed");
  }
});
