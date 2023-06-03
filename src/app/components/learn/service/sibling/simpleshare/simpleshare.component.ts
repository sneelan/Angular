import { Component } from '@angular/core';

@Component({
  selector: 'app-simpleshare',
  templateUrl: './simpleshare.component.html',
  styleUrls: ['./simpleshare.component.scss']
})
export class SimpleshareComponent {
  receivedData: string;
  receiveDataFromChild(data: string) {
    this.receivedData = data;
  }
}