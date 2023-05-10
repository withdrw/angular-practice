import { Component } from '@angular/core';

@Component({
  selector: 'app-button',
  template: `
    <button (click)="showMessage()">Display Details</button>
  `
})
export class ButtonComponent {
  showMessage() {
    alert('Tuna is bad for you.');
  }
}
