import { animate, style, transition, trigger } from '@angular/animations';

export const fadeInOutAnimation = trigger('fadeInOutAnimation', [
  transition('void => *', [
    style({ opacity: 0 }),
    animate('150ms ease-in-out'),
  ]),
  transition('* => void', [
    animate('150ms ease-in-out', style({ opacity: 0 })),
  ]),
]);
