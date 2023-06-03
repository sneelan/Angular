import { Component, OnInit } from '@angular/core';
import { Car } from './car.model';

@Component({
  selector: 'app-model',
  templateUrl: './model.component.html',
  styleUrls: ['./model.component.scss']
})
export class ModelComponent implements OnInit{
  //Cars: Car[]=[];
  mycars: Car[]=[
    new Car('Nisson','VX-555',859,5585898,2020),
    new Car('Maruti','AA-555',444,5585898,2020)
  ];
  constructor(){}
  ngOnInit(){}
}
