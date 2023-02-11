function dropdown1() {
  document.getElementById("drop1").style.display = "flex";
}
function dropdown2() {
  document.getElementById("drop2").style.display = "flex";
}
function dropdown3() {
  document.getElementById("drop3").style.display = "flex";
}
function dropdown4() {
  document.getElementById("drop4").style.display = "flex";
}
function hide1() {
  document.getElementById("drop1").style.display = "none";
}
function hide2() {
  document.getElementById("drop2").style.display = "none";
}
function hide3() {
  document.getElementById("drop3").style.display = "none";
}
function hide4() {
  document.getElementById("drop4").style.display = "none";
}

//for swiper initialization

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 3,
  spaceBetween: 30,
  slidesPerGroup: 1,
  loop: true,
  loopFillGroupWithBlank: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: true,
    pauseOnMouseEnter: true,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

var swiper2 = new Swiper(".mySwiper.swiper2", {
  slidesPerView: 3,
  spaceBetween: 30,
  loop: true,
  loopFillGroupWithBlank: true,
  autoplay: false,
});
