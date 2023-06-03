import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit{

  

  //===========================
  sendnavdata:string='';
  GetNavData(data:string){
    this.sendnavdata=data;    
    }


    
  constructor(){}  
  ngOnInit() {  
  }
  
  ngAfterContentInit(){
    
  }

}
