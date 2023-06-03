import {Directive, ElementRef, OnInit} from "@angular/core";

@Directive({
	selector : '[setBackground]'
})

export class setBackgroundDirective implements OnInit{
  constructor (private element : ElementRef){
  this.element = element;
  }
  ngOnInit(){
    this.element.nativeElement.style.backgroundColor='#C8E6C9';
  }

}