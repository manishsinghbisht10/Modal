"use strict";

var modal = document.querySelectorAll(".show-modal");
for (let i = 0; i < modal.length; i++) {
  modal[i].addEventListener("click", function () {
    document.querySelector(".hidden").style.display = "block";
  });
}
