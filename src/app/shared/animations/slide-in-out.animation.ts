import {
  animate,
  query,
  style,
  transition,
  trigger,
} from '@angular/animations';

export const slideInOutAnimation = trigger('slideInOutAnimation', [
  transition(':enter', [
    style({ height: 0, opacity: 0 }),
    animate('250ms ease-out', style({ height: '*', opacity: 1 })),
    // optional: animate the inner elements
    query('*', animate('250ms ease-out', style({ opacity: 1 }))),
  ]),
  transition(':leave', [
    style({ height: '*', opacity: 1 }),
    animate('250ms ease-out', style({ height: 0, opacity: 0 })),
    // optional: animate the inner elements
    query('*', animate('250ms ease-out', style({ opacity: 0 }))),
  ]),
]);
