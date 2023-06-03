import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()
export class MessageService {
    //private messageSubject = new Subject<string>();
    //message$ = this.messageSubject.asObservable();

  sendMessage1(message: string) {
    //this.messageSubject.next(message);
    alert("running message.service.ts");
  }
}