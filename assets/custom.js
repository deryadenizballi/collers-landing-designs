var swiper = new Swiper(".mySwiper", {

    loop:true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      breakpoints: {
        640: {
          slidesPerView: 1.5,
          spaceBetween: 24,
        },
        768: {
          slidesPerView: 1.5,
          spaceBetween: 24,
        },
        1024: {
          slidesPerView: 5,
          spaceBetween: 24,
        },
      },
  });

  console.log("deneme")