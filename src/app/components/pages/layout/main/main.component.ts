import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {

  @Input() navdata='';

  Cartcount:number=0;
  SelectedProduct:number=0;
  MyProducts=[
    {name:'Product title 1', id:1, code:54454},
    {name:'Product title 2', id:2, code:7676},
    {name:'Product title 3', id:3, code:4446},
  ];

}
