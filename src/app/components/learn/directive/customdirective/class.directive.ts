import { ElementRef, Directive, Input, Renderer2, OnInit} from '@angular/core';

@Directive({
  selector: '[myclass]'
})

export class ClassDirective {

constructor(private element:ElementRef, private renderer: Renderer2) { }


@Input() set myclass(value:Object){

  let entries=Object.entries(value)
  for(let [className, xxx] of entries){
    this.renderer.addClass(this.element.nativeElement, className);
  }
}

   
  
}