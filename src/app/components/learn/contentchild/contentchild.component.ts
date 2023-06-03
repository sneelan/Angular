import { Component, ContentChild, OnInit,ElementRef, AfterContentInit} from '@angular/core';

@Component({
  selector: 'app-contentchild',
  templateUrl: './contentchild.component.html',
  styleUrls: ['./contentchild.component.scss']
})
export class ContentchildComponent implements OnInit, AfterContentInit{

@ContentChild ('paraOFngcontent') myparaOFngcontent: ElementRef;

constructor(){}
ngOnInit(): void{
  console.log(this.myparaOFngcontent);
}
ngAfterContentInit(){
  console.log(this.myparaOFngcontent.nativeElement.textContent);
}



}
