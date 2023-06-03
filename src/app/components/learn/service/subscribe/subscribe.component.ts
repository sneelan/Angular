import { Component, OnInit } from '@angular/core';
import  {UsersData}  from '../userdata.service';
@Component({
  selector: 'app-subscribe',
  templateUrl: './subscribe.component.html',
  styleUrls: ['./subscribe.component.scss']
})
export class SubscribeComponent  implements OnInit{
  selectedUser: any;
  selectedData:string;
    myTesting:string='myTesting----------';
  constructor(private myUsersData: UsersData) { }
  ngOnInit(){
    this.myUsersData.selectedUser$.subscribe((user) => {
      this.selectedUser = user;
    });
    this.selectedData=this.myUsersData.mytesting;
  }
}
