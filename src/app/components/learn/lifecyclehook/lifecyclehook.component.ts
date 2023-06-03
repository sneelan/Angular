import { Component } from '@angular/core';

@Component({
  selector: 'app-lifecyclehook',
  templateUrl: './lifecyclehook.component.html',
  styleUrls: ['./lifecyclehook.component.scss']
})
export class LifecyclehookComponent {
  Shoconsole:string='';
  inputText:string='';
  OnSubmit(TypedData:HTMLInputElement){
    this.inputText=TypedData.value;
  }

}
