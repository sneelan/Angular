import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-sibling1',
  template: `
    <button (click)="sendDataToSibling()">Send Data</button>
    <br>
    <div>Testing : Pass through Template Reference</div>
  `
})
export class Sibling1Component {
  @Output() dataEvent = new EventEmitter<string>();

  sendDataToSibling() {
    const data = 'New Event Emitter Data Hello from Sibling 1'; 
    //alert("ddd");
    this.dataEvent.emit(data);
  }
  
}