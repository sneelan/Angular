import { Directive, ElementRef, HostBinding, HostListener, Input, OnInit, Renderer2 } from '@angular/core';


@Directive({
  selector: '[dropdownDirective]'
})
export class DropdownDirective implements OnInit {
  @HostBinding ('class.show') isOpen=false;
  //clicling on menu only
  //@HostListener('click') toggleOpen(){this.isOpen = !this.isOpen;this.addshow='show';}

  //clicling on outside
  @HostListener('document:click', ['$event']) toggleOpen(event: Event) {
    this.isOpen = this.elRef.nativeElement.contains(event.target) ? !this.isOpen : false;
  }

  constructor(private elRef: ElementRef) {}  
  ngOnInit(): void {}  
}
