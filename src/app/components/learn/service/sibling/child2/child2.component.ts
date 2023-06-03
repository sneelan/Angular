import { DataService } from '../data.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-child2a',
  template: `
    <p>Data from sibling: {{ receivedData }}</p>
  `
})
export class Child2Componenta {
  receivedData: any;

  constructor(private dataService: DataService) {
    this.dataService.data$.subscribe(data => {
      this.receivedData = data;
    });
  }
}