import { Directive,ElementRef,HostBinding, HostListener, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHbinding]'
})
export class HbindingDirective implements OnInit{

constructor(private element:ElementRef, private renderer: Renderer2) { }


@Input() defaultColor:string='pink';
@Input() DarkColor:string='red';
@Input() roundedSize:string='10px';
@Input() mytextColor:string='black';
@Input('appHbinding') themeColor:string='black';

  @HostBinding('style.border') border:string ='2px solid '+this.DarkColor ;
  //not working border-color
  //@HostBinding('style.border-color') border-color:string =this.DarkColor ;  
  @HostBinding('style.borderColor') bordercolor:string =this.DarkColor ;
  @HostBinding('style.borderRadius') borderRadius:string =this.roundedSize;
  @HostBinding('style.backgroundColor') background:string =this.defaultColor;
  @HostBinding('style.Color') Color:string =this.mytextColor;
  @HostBinding('style.padding') padding:string ='10px'; 
  @HostBinding('style.textAlign') textAlign:string ='center'; 

  ngOnInit(): void {
    this.background=this.defaultColor;
    this.bordercolor=this.DarkColor;
    this.borderRadius=this.roundedSize;
    this.Color=this.mytextColor;
    if(this.themeColor=='blue'){
        this.background='#0061c0';
        this.bordercolor='#00497c';
        this.borderRadius='40px';
        this.Color='#23e6ff';
    }
    if(this.themeColor=='dark'){
      this.background='#393939';
      this.bordercolor='black';
      this.borderRadius='40px';
      this.Color='white';
  }
  }
}
