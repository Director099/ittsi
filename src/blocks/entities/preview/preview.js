if (window.matchMedia("(min-width: 1024px)").matches) {
  document.querySelectorAll('[data-preview-slider]').forEach((elem) => {
    const slider = new Swiper(elem, {
      speed: 0,
      pagination: {
        el: '.swiper-pagination',
      },
    });

    const paginationBullets = elem.querySelectorAll('.swiper-pagination-bullet');

    paginationBullets.forEach((bullet, index) => {
      bullet.addEventListener('mouseenter', () => slider.slideToLoop(index));
    });
  })
}
