import scrollLock from "../../../libs/scroll-lock";

export const MediaSize = {
  LG: 1024
}

export class ToggleOverlay {
  constructor() {
    this.overlay = document.createElement('div');
    this.overlay.classList.add('overlay');

    this.overlay.addEventListener('click', () => this.removeOverlay());
  }

  addOverlay() {
    scrollLock.disablePageScroll();
    document.body.append(this.overlay);
    setTimeout(() => this.overlay.classList.add('show'), 100)
  }

  removeOverlay() {
    scrollLock.enablePageScroll();
    this.overlay.classList.remove('show');
    setTimeout(() => this.overlay.remove(), 100);
  }
}
