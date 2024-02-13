"use strict";
const modal = document.querySelectorAll('.show-modal');
const closeModel = document.querySelector('.close-modal');

for (let i = 0; i < modal.length; i++) {
  modal[i].addEventListener('click', function () {
    document.querySelector('.modal').classList.remove('hidden');
    document.querySelector('.overlay').classList.remove('hidden');
  });
}

closeModel.addEventListener('click', function () {
  document.querySelector('.modal').classList.add('hidden');
  document.querySelector('.overlay').classList.add('hidden');
});
