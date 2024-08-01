'use strict';

import '../blocks/shared/utils-js/calls.js';

import '../blocks/shared/ui/dropdown/dropdown.js';
import '../blocks/shared/ui/form/form.js';
import '../blocks/shared/ui/accordion/accordion.js';
import '../blocks/shared/ui/tab-filter/tab-filter.js';
import '../blocks/entities/preview/preview.js';
import '../blocks/entities/search-form/search-form.js';
import '../blocks/entities/product-gallery/product-gallery.js';

document.querySelectorAll('[data-btn-eye]').forEach(item =>
  item?.addEventListener('click', () => {
    const field = item.parentElement.querySelector('input');
    item.classList.toggle('field-text__btn-password--open');
    item.classList.contains('field-text__btn-password--open') ? field.type = 'text' : field.type = 'password';
  })
)
