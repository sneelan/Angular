import { Component, OnInit } from '@angular/core';
import  {UsersService}  from '../users.service';

@Component({
  selector: 'app-userpush',
  templateUrl: './userpush.component.html',
  styleUrls: ['./userpush.component.scss'],
  providers: [UsersService]
})
export class UserpushComponent implements OnInit{

  name:string='Bharath';
  status:string='inactive';

  constructor(private thisuserServ:UsersService){  }
  users:{name:string, status:string}[]=[];
  
  ngOnInit(): void {
    this.users=this.thisuserServ.users;
  }
  addUser(){
    this.thisuserServ.AddNewUser(this.name, this.status)
    
  }
}
