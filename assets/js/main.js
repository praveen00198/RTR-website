document.addEventListener("DOMContentLoaded", function () {
  new Swiper(".card-wrapper", {
    slidesPerView: 3,
    spaceBetween: 30,
    loop: false, // No looping to avoid overlapping

    // Pagination
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },

    // Navigation arrows
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

    // Corrected breakpoints
    breakpoints: {
      320: {
        slidesPerView: 1, // 1 slide on mobile
        spaceBetween: 10,
      },
      768: {
        slidesPerView: 2, // 2 slides on tablets
        spaceBetween: 20,
      },
      1024: {
        slidesPerView: 3, // 3 slides on desktop
        spaceBetween: 30,
      },
    },
  });
});


// Menu
const menuIcon = document.querySelector("#menu-icon");
const navLinks = document.querySelector("#nav-links");

menuIcon.addEventListener("click", () => {
    navLinks.classList.toggle("active");
    
    // Toggle between menu and close icon
    menuIcon.classList.toggle("bx-menu");
    menuIcon.classList.toggle("bx-x");
});
