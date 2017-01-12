/**
 * Created by ASUS on 05.01.2017.
 */
"use strict";

var navButton = document.querySelector(".header__nav");
var nav = document.querySelector(".mobile__nav");
var close = document.querySelector(".mobile__nav-close");

navButton.addEventListener("click", function (event) {
    event.preventDefault();
    nav.classList.remove("visually-hidden");
});

close.addEventListener("click", function (event) {
    event.preventDefault();
    nav.classList.add("visually-hidden");
});

navButton.addEventListener("tap", function (event) {
    event.preventDefault();
    nav.classList.remove("visually-hidden");
});

close.addEventListener("tap", function (event) {
    event.preventDefault();
    nav.classList.add("visually-hidden");
});

