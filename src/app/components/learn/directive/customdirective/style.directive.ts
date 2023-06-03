import { ElementRef, Directive, Input, Renderer2, OnInit} from '@angular/core';

@Directive({
  selector: '[myStyle]'
})

export class StyleDirective {

constructor(private element:ElementRef, private renderer: Renderer2) { }
    @Input() set myStyle(styles:Object){

    let entries=Object.entries(styles)

    for(let entry of entries){
      this.renderer.setStyle(this.element.nativeElement, entry[0], entry[1]);
    }
  }   
}