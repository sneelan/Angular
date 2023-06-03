import { ElementRef, Directive, Input, Renderer2, OnInit } from '@angular/core';

@Directive({
  selector: '[appMycond]'
})
export class MycondDirective {

  constructor(private element:ElementRef, private renderer: Renderer2) { }

  @Input() set appMycond(condition:boolean){
    if(condition){
    this.renderer.addClass(this.element.nativeElement, 'bg-warning');
    this.renderer.addClass(this.element.nativeElement, 'border-danger');
    }
  }
}
