import { Component } from '@angular/core';

@Component({
  selector: 'app-reference',
  template: `<div class="row m-0 p-0 bg-warning">
      <div class="col-6 border p-2"><app-refer1 #apprefer1></app-refer1></div>
      <div class="col-6 border p-2"><app-refer2 [PassInputData]="apprefer1.PassDataInput" [PassData]="apprefer1.PassDataReferene"></app-refer2></div>
  </div>`,
  styleUrls: ['./reference.component.scss']
})
export class ReferenceComponent {

}
