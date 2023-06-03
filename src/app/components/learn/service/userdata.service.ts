import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()
export class UsersData {
  userdata=[
    {name:'Amala', id:'1', email:'neel@gmail.com', phone:'9598878523',password:'sdfsdfsdf'},
    {name:'Sruthy', id:'2', email:'ak@gmail.com', phone:'9598878523',password:'457668fgbhfg'},
    {name:'Archana', id:'3', email:'da@gmail.com', phone:'9598878523',password:'bnbvnbvj'}
  ];
  mytesting:string='mytesting Works---from userdata.service.ts';

  // Set initial value as the first user - first object -Amala
  // need to install import { BehaviorSubject } from 'rxjs';
  //private selectedUserSubject = new BehaviorSubject<any>(this.userdata[0]); 

  private SelectedSub = new Subject<any>();
  selectedUser$ = this.SelectedSub.asObservable(); // it is observable.
  
    // data assigned to subject by .next_function()
    setSelectedUser(user: any) { 
        this.SelectedSub.next(user); 
        //alert("reached");
    }   
  
}
