import { Component, ElementRef, ViewChild } from '@angular/core';

import { slideInOutAnimation } from '../shared/animations/slide-in-out.animation';

@Component({
  selector: 'app-personal',
  templateUrl: './personal.component.html',
  styleUrls: ['./personal.component.scss'],
  animations: [slideInOutAnimation],
})
export class PersonalComponent {
  expandCard = false;

  @ViewChild('card') cardElement!: ElementRef;
  toggleCard() {
    this.expandCard = !this.expandCard;
    this.cardElement.nativeElement.classList.toggle('expanded');
  }

  // @ViewChild('fadeInElement') fadeInElement!: ElementRef;
  // onWindowScroll() {
  //   const rect = this.fadeInElement.nativeElement.getBoundingClientRect();
  //   const windowHeight = window.innerHeight;
  //   const threshold = windowHeight - rect.height / 2;
  //   if (rect.top <= threshold) {
  //     this.fadeInElement.nativeElement.classList.add('show');
  //     window.removeEventListener('scroll', this.onWindowScroll);
  //   }
  // }
  // ngAfterViewInit() {
  //   window.addEventListener('scroll', this.onWindowScroll.bind(this));
  // }
}
