import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-personal',
  templateUrl: './personal.component.html',
  styleUrls: ['./personal.component.scss'],
})
export class PersonalComponent {
  expandCard = false;
  @ViewChild('titleWrapper') titleWrapperElement!: ElementRef;
  @ViewChild('portraitContainer') portraitContainerElement!: ElementRef;
  @ViewChild('portrait') portraitElement!: ElementRef;
  @ViewChild('card') cardElement!: ElementRef;
  toggleCard() {
    this.expandCard = !this.expandCard;
    this.titleWrapperElement.nativeElement.classList.toggle('expanded');
    this.portraitContainerElement.nativeElement.classList.toggle('expanded');
    this.portraitElement.nativeElement.classList.toggle('expanded');
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
