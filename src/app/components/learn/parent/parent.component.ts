import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent {
  neelanData:string='789989';
  myReceiveD:string='';
  myReceiveValue(ZZZ: string) { this.myReceiveD=ZZZ;}
   //===================== 
  //pass vlaues to child and parent

  myvalue:string='painting';Newvalue:string='painting';
  myentervalue(){
    this.Newvalue=this.myvalue; 
    //console.log(this.enterSearchValue);
  }
  //=====================
  ChildValueReceived:string='';
  ReceiveValue(reciveditem: string) { this.ChildValueReceived=reciveditem;}

  //=====================
  items = ['item1', 'item2', 'item3', 'item4'];
  addItem(newItem: string) {
    this.items.push(newItem);
  }
}
