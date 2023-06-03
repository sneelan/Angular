import { Component } from '@angular/core';
import { trigger, state, style, animate, transition, keyframes } from '@angular/animations';

@Component({
  selector: 'app-kotlin',
  templateUrl: './kotlin.component.html',
  animations: [
    trigger('fadeInOut', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('500ms', style({ opacity: 1 })),
      ]),
      transition(':leave', [
        animate('500ms', style({ opacity: 0 })),
      ]),
    ]),
    trigger('buttonState', [
      state('inactive', style({ backgroundColor: 'gray' })),
      state('active', style({ backgroundColor: 'green' })),
      transition('inactive => active', animate('200ms')),
      transition('active => inactive', animate('200ms')),
    ]),
    trigger('bounce', [
      animate('1s', keyframes([
        style({ transform: 'scale(0.5)', offset: 0 }),
        style({ transform: 'scale(1.2)', offset: 0.5 }),
        style({ transform: 'scale(1)', offset: 1 }),
      ])),
    ]),
  ],
})
export class KotlinComponent {
  showElement = true;
  currentState = 'inactive';
  animateElement = false;

  toggleState() {
    this.currentState = this.currentState === 'inactive' ? 'active' : 'inactive';
  }

  toggleAnimation() {
    this.animateElement = !this.animateElement;
  }
}