import { Component } from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'app-sibling',
  template: `<div class="row m-0 p-0 bg-warning">
      <div class="col-6 border p-2"><app-child1a></app-child1a></div>
      <div class="col-6 border p-2"><app-child2a></app-child2a></div>
      </div>`,
  providers: [DataService]
})
export class SiblingComponent {
  constructor(private dataService: DataService) {}
}
