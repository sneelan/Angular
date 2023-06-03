import { Component } from '@angular/core';

@Component({
  selector: 'app-reuse',
  templateUrl: './reuse.component.html',
  styleUrls: ['./reuse.component.scss']
})
export class ReuseComponent {

  Employees:any[]= [{name:"John Doe",email:"john.doe@example.com",id:1,phone:"1234567890",website:"www.example.com"},{name:"Jane Smith",email:"jane.smith@example.com",id:2,phone:"0987654321",website:"www.samplewebsite.com"}];
  //Employees:any[]= [{name:"John Doe",email:"john.doe@example.com",id:1,phone:"1234567890",website:"www.example.com"}];
  header:any[]=[];
  BtnData:any[]=[];


  ReceiveSendFunction(functionName: string) {
    /* if (functionName && typeof this[functionName] === 'function') {
      this[functionName]();
    } else {
      console.error('Invalid function name or function is not defined.');
    } */
    //alert(functionName);
   // this.ClickFunction();

    
  }

  ClickFunction() {
    // Implementation of the ClickFunction logic
    alert('Button clicked!'); // Example: Log a message to the console
  }
}
