import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-refer2',
  template: `
  Data From Siblig Component <span class="bg-danger p-2 text-white">{{PassData}}</span>
  <br><br> Live Input Data <span class="bg-success p-2 text-white">{{PassInputData}}</span>
  `,
  styleUrls: ['./refer2.component.scss']
})
export class Refer2Component {
  @Input() PassData:string='';
  @Input() PassInputData:string='';
}
