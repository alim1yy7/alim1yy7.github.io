import { animate, style, transition, trigger } from '@angular/animations';

export const slideInOutAnimation = trigger('slideInOutAnimation', [
  transition(':enter', [
    style({ height: 0, opacity: 0 }),
    animate('250ms ease-out', style({ height: '*', opacity: 1 })),
    // optional: animate the inner elements
  ]),
  transition(':leave', [
    style({ height: '*', opacity: 1 }),
    animate('250ms ease-out', style({ height: 0, opacity: 0 })),
    // optional: animate the inner elements
  ]),
]);
