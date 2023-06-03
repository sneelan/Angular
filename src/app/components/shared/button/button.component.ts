import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AlertService } from '../../learn/service/alert.service';
@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
  providers: [AlertService]
})
export class ButtonComponent implements OnInit{
  //@Output() SendFunction: EventEmitter <any> = new EventEmitter<any>();  //notworking
   @Input() BtnData:any[];
   @Input() PassData:any[];
   /*
  @Input() BtnTheme:string;
  @Input() BtnText:string;
  @Input() BtnFunction:string; */

//BtnData=[{text:'Buy', theme:'dark', function:'PopUp'}];
BtnText:string;
BtnTheme:string;
BtnFunction:string;
BtnRowTitle:string;
BtnPassValue:string;
 

Themes:{[key: string]: string} = {
  default: 'btn-success p-2',
  primary: 'btn-primary p-2',
  dark: 'bg-black text-white p-2',
};


constructor(private thisalert:AlertService){  }
ngOnInit() {
  if (this.BtnData.length > 0 && this.BtnData[0].hasOwnProperty('text')) {
    this.BtnText = this.BtnData[0].text;
  } else {
    this.BtnText = 'Empty';
  }  
  if (this.BtnData.length > 0 && this.BtnData[0].hasOwnProperty('theme')) {
    this.BtnTheme = this.Themes[this.BtnData[0].theme];
  } else {
    this.BtnTheme = this.Themes['default'];
  }
  if (this.BtnData.length > 0 && this.BtnData[0].hasOwnProperty('function')) {
    this.BtnFunction = this.BtnData[0].function;
  } else { }
  if (this.BtnData.length > 0 && this.BtnData[0].hasOwnProperty('pass')) {
    //this.BtnPassValue = this.BtnData[0].pass;
  }
  
  
}

executeFunction() {
  //console.log(this.PassData);
  //const valueToPass = this.PassData[this.BtnPassValue];  
  //this.thisalert.OnAlertClicked (this.PassData[this.BtnPassValue]);

  if(this.BtnPassValue){   
  }else{
    const Newkeys: string[] = Object.keys(this.PassData);
    const NewPassData = this.PassData[Newkeys[0] as keyof typeof this.PassData];
    this.thisalert.OnAlertClicked (NewPassData);
  }

  

  if (this.BtnFunction) {
    //this.SendFunction.emit(this.BtnFunction);//notworking
    //alert(this.BtnFunction+' --from button component');
    //this.thisalert.OnAlertClicked (this.PassData);
    
  }
}


}
