Fancybox.bind("[data-fancybox]", {
  dragToClose: false
});

document.querySelectorAll('[type="tel"]').forEach((item) => {
  new IMask(item, {
    mask: '{+7} (000) 000 00 00',
    lazy: false,
  });
})

document.querySelectorAll('[data-number-only]').forEach((item) => {
  IMask(item, {
    mask: item.dataset.numberOnly ?? '00'
  });
})

// Вспомогательная функция открытия и закрытия
document.querySelectorAll('[data-fancybox-src]')?.forEach(item =>
  item.addEventListener('click', (e) => {
    Fancybox.close();
    Fancybox.show([{
      src: e.target.dataset.fancyboxSrc,
      dragToClose: false,
      defaultType: 'inline'
    }]);
  })
)
