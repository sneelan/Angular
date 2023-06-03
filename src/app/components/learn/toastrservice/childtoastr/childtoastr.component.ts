import { Component, OnInit } from '@angular/core';
import { NewToastrSerive } from '../newtoaster.service';
@Component({
  selector: 'app-childtoastr',
  template: `Run NewToastr from Child Component
  <button class="bg-success text-white p-2" (click)="Mymessage('This message comes from Child Component')">Run Success Message</button>
  `,
  styleUrls: ['./childtoastr.component.scss']
})
export class ChildtoastrComponent implements OnInit{
constructor(private ToastServ: NewToastrSerive){}
  ngOnInit(){

}
Mymessage(user: any) {
  this.ToastServ.setToastrMessage(user);
  alert(user);
}

}
