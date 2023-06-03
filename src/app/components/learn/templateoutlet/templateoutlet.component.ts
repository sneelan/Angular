import { Component, ViewChild, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-templateoutlet',
  templateUrl: './templateoutlet.component.html',
  styleUrls: ['./templateoutlet.component.scss']
})
export class TemplateoutletComponent {
  @ViewChild('childTemplate') childTemplate: TemplateRef<any>;
}


