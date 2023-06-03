import { Component,Input } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})

export class ChildComponent{
  @Input() PassValue='';// decorate the property with @Input()
  blogs=[
    {title:'Extraordinary 3D Models created by Bangladesh Artist S M Bonin', category:'3d', img:'https://webneel.com/sites/default/files/imagecache/660Thumbnail/images/blog/2021/3d-models-bonin.jpg'},
    {title:'50 Different types of Drawing Styles Techniques and Mediums - List from Masters', category:'drawing', img: 'https://webneel.com/sites/default/files/imagecache/660Thumbnail/images/blog/2021/different-types-of-drawing.jpg'},
    {title:'50 Best 3D Maya Tutorial Videos for Beginners', category:'3d', img: 'https://webneel.com/sites/default/files/imagecache/660Thumbnail/images/blog/2021/3d-maya-tutorial-videos.jpg'},
    {title:'India mythology redefined - Kerala mural paintings by Dileep and Hariharan Swastik', category:'drawing', img: 'https://webneel.com/sites/default/files/imagecache/660Thumbnail/images/blog/2021/kerala-mural-painting-swastik.jpg'},
    {title:'XYZ - Kerala mural paintings by Dileep and Hariharan Swastik', category:'drawing', img: 'https://webneel.com/sites/default/files/imagecache/660Thumbnail/images/blog/2021/kerala-mural-painting-swastik.jpg'}
  ];

//===================
//copied coded-working-follow-output
//@Output() newItemEvent = new EventEmitter<string>();
//addNewItem(value: string) {this.newItemEvent.emit(value);}

@Output() Sendvalue = new EventEmitter<string>();
ThemeChange(gotValue:string){    
    this.Sendvalue.emit(gotValue);      
}
//===================


  


}
