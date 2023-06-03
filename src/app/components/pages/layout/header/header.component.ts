import { Component, EventEmitter, OnInit, Output } from '@angular/core';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit{

  nav:string='home';

@Output() SendNavData=new EventEmitter<string>(); 
//@Output() NavData=new EventEmitter<{title:string, a:string}>(); 
navigation(data:string){this.SendNavData.emit(data);this.nav=data;}

constructor(){}
ngOnInit(){
  
}



}
