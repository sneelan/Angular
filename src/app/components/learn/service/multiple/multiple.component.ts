import { Component, OnInit } from '@angular/core';
import  {UsersService}  from '../users.service';
import { AlertService } from '../alert.service';

@Component({
  selector: 'app-multiple',
  templateUrl: './multiple.component.html',
  styleUrls: ['./multiple.component.scss'],
  providers: [UsersService, AlertService]
})
export class MultipleComponent implements OnInit{

  name1:string='Bharath';
  status1:string='inactive';

  constructor(private thisuserServ:UsersService, private thisalert:AlertService){  }
  users:{name:string, status:string}[]=[];
  
  ngOnInit(): void {
    this.users=this.thisuserServ.users;
  }
  addUser(){
    this.thisuserServ.AddNewUser(this.name1, this.status1);
    this.thisalert.OnAlertClicked (this.name1)
    
  }
  
}
