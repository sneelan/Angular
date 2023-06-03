import { Component,OnInit} from '@angular/core';
import  studentData  from './samle.json';

 interface ArrayDataType {
  user:Number;
  id:Number;
  title:String;
  body:String;
} 

@Component({
  selector: 'app-jsonimport',
  templateUrl: './jsonimport.component.html',
  styleUrls: ['./jsonimport.component.scss']
})

export class JsonimportComponent implements OnInit{
  constructor(){}
  students:ArrayDataType[]=studentData;
  ngOnInit(): void {}
  
}
