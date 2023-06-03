import { Component } from '@angular/core';
import { AlertService } from '../alert.service';

@Component({
  selector: 'app-child1',
  templateUrl: './child1.component.html',
  styleUrls: ['./child1.component.scss']
})
export class Child1Component {
  myname:string='Neelan';
  AlertmyName(){
    alert('Your Name is '+this.myname);
  }

  NewAlertmyName(){
    const CallAlertService = new AlertService();
    CallAlertService.OnAlertClicked(this.myname);
  }
}
