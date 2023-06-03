import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-sibling2',
  template: `
    <p>Data from sibling: {{ receivedData }}</p><br>
    Data was Received from Sibling 1 Appears here: <span class="bg-danger text-white">
    
    </span>
  `
})
export class Sibling2Component {
  
  receivedData: string;

  handleData(data: string) {
    this.receivedData = data;
  }
}