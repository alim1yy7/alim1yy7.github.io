import SwiperCore, { Autoplay, Keyboard, Navigation, Pagination, Scrollbar, Swiper } from 'swiper';

import { Component } from '@angular/core';

SwiperCore.use([Keyboard, Pagination, Scrollbar, Navigation, Autoplay]);
@Component({
  selector: 'app-swiper',
  templateUrl: './swiper.component.html',
  styleUrls: ['./swiper.component.scss'],
})
export class SwiperComponent {
  ngAfterViewInit() {
    const swiper = new Swiper('.swiper', {
      pagination: {
        el: '.swiper-pagination',
        bulletClass: 'swiper-pagination-bullet',
        type: 'bullets',
        clickable: true,
      },

      keyboard: {
        enabled: true,
        onlyInViewport: true,
      },
      loop: true,
      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
      },
      lazy: {
        enabled: true,
      },
      speed: 1000,
    });
  }

  slides = [
    {
      image: 'assets/pictures/webp//talsperre.jpg.webp',
    },

    {
      image: 'assets/pictures/webp/elbphilharmonie.jpg.webp',
      text: '',
    },
    {
      image: 'assets/pictures/webp/voegel_koeln.jpg.webp',
    },
    {
      image: 'assets/pictures/webp/taube_koeln.jpg.webp',
    },
  ];
}
