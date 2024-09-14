const navToggle = document.getElementById("nav-toggle");
const navbar = document.querySelector(".navbar");

navToggle.addEventListener("click", () => {
  navbar.classList.toggle("active");
});

const dropdowns = document.querySelectorAll(".dropdown > a");

dropdowns.forEach((dropdown) => {
  dropdown.addEventListener("click", function (e) {
    e.preventDefault();
    const parentDropdown = this.parentElement;
    parentDropdown.classList.toggle("active");
  });
});

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 3,
  spaceBetween: 30,
  loop: false,
  slidesPerGroup: 3,
  grabCursor: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    1200: {
      slidesPerView: 4,
      slidesPerGroup: 1,
      spaceBetween: 30,
    },

    768: {
      slidesPerView: 2.5,
      slidesPerGroup: 1,
      spaceBetween: 20,
    },

    480: {
      slidesPerView: 2,
      slidesPerGroup: 1,
      spaceBetween: 15,
    },

    320: {
      slidesPerView: 1.5,
      slidesPerGroup: 1,
      spaceBetween: 100,
    },
  },
});
