import { Component } from '@angular/core';
import { AlertService } from '../alert.service';

@Component({
  selector: 'app-child2',
  templateUrl: './child2.component.html',
  styleUrls: ['./child2.component.scss'],
  providers: [AlertService]
})
export class Child2Component {
  myname:string='Rajesh';
  constructor(private getAlertService:AlertService){  }
  AlertInjectClicked(){
    this.getAlertService.OnAlertClicked(this.myname+'--Injected');
  }

  
}
