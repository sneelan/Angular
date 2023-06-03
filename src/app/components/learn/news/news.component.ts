import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit{
 @Input('Aliaschildpost') childpost:{title:string, category:string, postid:number}


 //@Output() SendtoParent=new EventEmitter<{}>();
 @Output() SendtoParent=new EventEmitter<{title:string, category:string}>();
  
 SendBtnFunction(title:string, category:string ){
    this.SendtoParent.emit({title, category});
 }
 constructor(){}
 ngOnInit() {}
}
