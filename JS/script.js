$(".cards-container").slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  infinite: true,
  dots: true,
  autoplay: 2000,
  arrows: false,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
});

document.addEventListener("DOMContentLoaded", function () {
  const menuIcon = document.getElementById("menu-icon");
  const menuContainer = document.querySelector(".menu-container");
  const menuLinks = document.querySelectorAll(".menu-container li a");

  menuIcon.addEventListener("click", function () {
    menuContainer.classList.toggle("active");
  });

  menuLinks.forEach((link) => {
    link.addEventListener("click", function () {
      menuContainer.classList.remove("active");
    });
  });
});
