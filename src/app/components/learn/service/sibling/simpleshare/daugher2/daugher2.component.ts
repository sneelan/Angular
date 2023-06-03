import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Daugher1Component } from '../daugher1/daugher1.component';

@Component({
  selector: 'app-daugher2',
  templateUrl: './daugher2.component.html',
  styleUrls: ['./daugher2.component.scss']
})
export class Daugher2Component implements OnInit{
  receivedData: string;
  subscription: Subscription;

  constructor(
    private daugher1: Daugher1Component
    ) {}
  ngOnInit(){

    this.subscription = this.daugher1.dataSubject.subscribe((data: string) => {this.receivedData = data;});
    
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}