import { Component } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-daugher1',
  templateUrl: './daugher1.component.html',
  styleUrls: ['./daugher1.component.scss']
})
export class Daugher1Component {
  dataSubject = new Subject<string>();

  sendData() {
    const data = 'Data from Daugher1Component';
    this.dataSubject.next(data);
  }
}