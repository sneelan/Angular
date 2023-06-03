import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()
 
export class NewToastrSerive {

  private ToastrSubject = new Subject<any>();
  NewToastrMessage$ = this.ToastrSubject.asObservable(); // it is observable.
  
    // data assigned to subject by .next_function()
    setToastrMessage(message: any) { 
        this.ToastrSubject.next(message); 
        //alert("reached");
    }   

}