import { Component, ViewChild } from '@angular/core';
import { Sibling2Component } from './sibling2/sibling2.component';
@Component({
  selector: 'app-eventshare',
  template: `
  <div class="row m-0 p-0 bg-info">
      <div class="col-6 border p-2">
          <app-sibling1 (dataEvent)="child1DataHandler($event)"></app-sibling1>
      </div>
      <div class="col-6 border p-2">
          <app-sibling2></app-sibling2>
          
      </div>
      </div>   
  `
})
export class EventshareComponent {
  @ViewChild (Sibling2Component) sibling2: Sibling2Component;
  child1DataHandler(data: string) {
    this.sibling2.handleData(data);
    // Pass the data to Sibling2Component or perform any other actions
    // e.g., set a property of Sibling2Component to the received data
  }
}