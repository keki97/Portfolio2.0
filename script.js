"use strict";

document
  .querySelector(".hamburger-menu-btn")
  .addEventListener("click", function () {
    document
      .querySelector(".nav-list-mobile-view-container")
      .classList.remove("hidden");
  });

document.querySelector(".close-btn").addEventListener("click", function () {
  document
    .querySelector(".nav-list-mobile-view-container")
    .classList.add("hidden");
});
