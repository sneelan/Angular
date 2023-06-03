import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss']
})
export class DemoComponent implements OnInit{
  
  constructor(){}
  ngOnInit(): void {
  }
  sayHello1:string='Data from Demo Component';
  sayHello(){console.log('aaaaaaaa');}
}
