import { Component, OnInit } from '@angular/core';
import  {UsersData}  from '../userdata.service';
//import  {MessageService}  from '../message.service';

@Component({
  selector: 'app-userdata',
  templateUrl: './userdata.component.html',
  styleUrls: ['./userdata.component.scss']
})
export class UserdataComponent implements OnInit{
  name:string='Bharath';
  status:string='inactive';   
  NewSelectedUser:any[];// for check localreference.component.ts file
  constructor(
    private thisuserServ:UsersData, 
    //private messageServ:MessageService
    ){  }
  users:{name:string, id:string, email:string, phone:string, password:string}[]=[];
   
  ngOnInit(): void {
    this.users=this.thisuserServ.userdata;
  }
  showDetails(user: any) {
    this.thisuserServ.setSelectedUser(user);
    //alert(user.name);
  }
  showDetaisReference(user: any) {
    //another way to pass through local reference
    //check localreference.component.ts file
    this.NewSelectedUser=user;
    //alert(user.name);
  }  
  sendMessage(message:string) {    
    //this.messageServ.sendMessage1(message);
    //alert("getting ts file");
  }
}
