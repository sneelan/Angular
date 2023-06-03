import { Component,Input,OnChanges, OnInit,SimpleChanges,
  DoCheck, AfterContentInit,AfterContentChecked, AfterViewInit, 
  AfterViewChecked, OnDestroy
} from '@angular/core';

@Component({
  selector: 'app-hookdemo',
  templateUrl: './hookdemo.component.html',
  styleUrls: ['./hookdemo.component.scss']
})


export class HookdemoComponent implements OnInit, OnChanges{

myconsole:string='*AAA Initial Value - Its not woking check console';
add_console(Mydata:string){this.myconsole=this.myconsole+'<------>'+Mydata;}  

@Input() value:string='procademy';

constructor(){
  //this.add_console('constructor is called');
  //this.add_console(this.value+' (It is assignged to)');
  console.log('constructor is called');
  console.log(this.value);

}
ngOnChanges(change: SimpleChanges){
  //this.add_console('ngOnChanges is called +++ Value Change Array');
  console.log('ngOnChanges is called');
  console.log(change);
}
ngOnInit(){
  //this.add_console('ngOnInit is called');
  console.log('ngOnInit is called');
}
ngDoCheck(){
  //this.add_console('ngDoCheck is called');
  console.log('ngDoCheck is called');
}
ngAfterContentInit(){
  //this.add_console('ngAfterContentInit is called');
  console.log('ngAfterContentInit is called');
}
ngAfterContentChecked(){
  //this.add_console('ngAfterContentChecked is called');
  console.log('ngAfterContentChecked is called');
}
ngAfterViewInit(){
  //this.add_console('ngAfterViewInit is called');
  console.log('ngAfterViewInit is called');
}
ngAfterViewChecked(){
  //this.add_console('ngAfterViewChecked is called<br>==========================<br>');
  console.log('ngAfterViewChecked is called.-------------------'+this.value);
}
ngOnDestroy(){
  //this.add_console('ngOnDestroy is called');
  console.log('ngOnDestroy is called');
}

}