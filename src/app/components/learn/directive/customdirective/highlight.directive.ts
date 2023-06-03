import {Directive, ElementRef, OnInit, Renderer2} from "@angular/core";

@Directive({
	selector : '[highLight]'
})

export class highLightDirective implements OnInit{
  constructor (private element : ElementRef, private renderer : Renderer2){
  this.element = element;
  }
  ngOnInit(){
//this.element.nativeElement.style.backgroundColor='#C8E6C9';
    this.renderer.setStyle(this.element.nativeElement, 'backgroundColor','#D88888');
  }

}