import { trigger, state, animate, style, transition } from '@angular/animations';

export const routerTranAni = trigger('routerTranAni', [
    state('void', style({
        opacity: '0',
        transform: 'translateY(-20px)'
    })),
    state('*', style({
        opacity: '1',
        transform: 'translateY(0)'
    })),
    transition(':enter', [
        animate('.45s', style({
            opacity: '1',
            transform: 'translateY(0)'
        })),
    ])
]);
