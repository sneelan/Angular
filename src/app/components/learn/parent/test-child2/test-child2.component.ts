import { Component,Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-test-child2',
  templateUrl: './test-child2.component.html',
  styleUrls: ['./test-child2.component.scss']
})
export class TestChild2Component {
  neelanData1:string='789989';
  @Output() mySendvalue = new EventEmitter<string>();
  mysendData(AAA:string){
    this.mySendvalue.emit(AAA);
  }
}
