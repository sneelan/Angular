import { Directive, Input, TemplateRef,ViewContainerRef } from '@angular/core';


@Directive({
  selector: '[If]'
})
export class IfDirective {

  constructor(private template:TemplateRef<any>, private viewContainer: ViewContainerRef) { }
  @Input() set If(condition:boolean){
    if(condition){
      this.viewContainer.createEmbeddedView(this.template);
    }else{this.viewContainer.clear();}
  }
}
