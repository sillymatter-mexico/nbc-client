import {
  transition,
  trigger,
  query,
  style,
  animate,
  group
} from '@angular/animations';

export const fadeInOutAnimation =
  trigger('fadeInOutAnimation', [
    transition('* <=> *', [
      query(':enter, :leave',
        style({ position: 'fixed',  width: '100%', opacity: 1 }),
        { optional: true }),
      group([
        query(':enter', [
          style({ opacity: 0 }),
          animate('500ms ease-in-out',
            style({ opacity: 1 }))
        ], { optional: true }),
        query(':leave', [
          style({ opacity: 1 }),
          animate('500ms ease-in-out', style({ opacity: 0 }))
        ], { optional: true }),
      ])
    ])
  ]);
