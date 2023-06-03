import { Component } from '@angular/core';

@Component({
  selector: 'app-refer1',
  template: `
  PassDataReferene='New Data by Template Reference' <br>
  <input type="text" [(ngModel)]="PassDataInput" placeholder="Add Data" value="Sample Data">
  `,
  styleUrls: ['./refer1.component.scss']
})
export class Refer1Component {
  PassDataReferene='New Data by Template Reference';
  PassDataInput:string='Passed from sibling1';
}
