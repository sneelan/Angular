import { Component } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-child1a',
  template: `
    <button (click)="sendDataToSibling()">Send Data</button>
  `
})
export class Child1Componenta {
  constructor(private dataService: DataService) {}

  sendDataToSibling() {
    const data = 'Hello from Child 1';
    this.dataService.sendData(data);
  }
}