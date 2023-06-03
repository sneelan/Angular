import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-localreference',
  templateUrl: './localreference.component.html',
  styleUrls: ['./localreference.component.scss']
})
export class LocalreferenceComponent {  

@Input() NewselectedUser: any;
}
