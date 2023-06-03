import { Component, ViewChild, ElementRef } from '@angular/core';
//import { DemoComponent } from './demo/demo.component';

@Component({
  selector: 'app-viewchild',
  templateUrl: './viewchild.component.html',
  styleUrls: ['./viewchild.component.scss']
})
export class ViewchildComponent {

  myname:string='neelan';
  myname1:string='Rajesh';
  mynumber1:number=600;
  mynumber2:number=200;
  myname1result:string='';
  mynumber1result:number=0;

  year1:number=2023;
  year2:number=1950;
  totalyear:number=0;
  SubstractYear(){ this.totalyear=this.year1-this.year2; }
  mydate:string='07/15/1982';
  
  @ViewChild('mydate1') dateOfBirthZ: ElementRef;
  

  //================================================
  //age:number='';
  myDOB:string='07/15/1982';
   @ViewChild('dobInput') dateOfBirth: ElementRef;
   @ViewChild('ageInput') age: ElementRef;  
  //@ViewChild('DemoComponent',{static:true}) DemoValue: DemoComponent;
  //@ViewChild('ViewchildComponent',{static:true}) ViewValue: ViewchildComponent;
  

  
  calculateAge(){
    let birthYear=new Date(this.dateOfBirth.nativeElement.value).getFullYear();
    let currentYear = new Date().getFullYear();
    let age=currentYear-birthYear;
    this.age.nativeElement.value=age;
    let finalAge=age;
  }

  @ViewChild('dobInput1') dateOfBirth1: ElementRef;
  @ViewChild('ageInput1') age1: ElementRef; 
  myDOB1:number=1982;
  currentYear1 = new Date().getFullYear();
  age2=this.currentYear1-this.myDOB1;

  calculateAge1(){
    let birthYear=this.dateOfBirth1.nativeElement.value;
    let currentYear1 = new Date().getFullYear();
    let age1=currentYear1-birthYear;
    this.age1.nativeElement.value=age1;
    this.age2=age1;
  }
  //=========================
  Myinputreferencedata:string='';
  ExtractInputvalue(InputReference:HTMLInputElement){
    this.Myinputreferencedata=InputReference.value;
  }
  
  //=========================
  
  mypara:string="This is my new paragraph";
  getPara(){
    this.mypara='Altered Content appears here.';
  }
  //=========================
  @ViewChild('mypara1') mypara1a: ElementRef;
  printmypara:string='initial';
  getPara1(){    
    this.printmypara=this.mypara1a.nativeElement.innerText.toLowerCase();
  }




}
