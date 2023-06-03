import { Component } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent {
  SearchText:string='';  
  
  //emit to child /parent data
  //  SearchTextChanged:EventEmitter<string> = new EventEmitter<string>();
  //onSearchTextChanged(){this.SearchTextChanged.emit(this.enterSearchValue);}
  
  SelectedCategory: string='all';
  products=[
    {title:'Extraordinary 3D Models created by Bangladesh Artist S M Bonin', category:'3d', img:'https://webneel.com/sites/default/files/imagecache/660Thumbnail/images/blog/2021/3d-models-bonin.jpg'},
    {title:'50 Different types of Drawing Styles Techniques and Mediums - List from Masters', category:'drawing', img: 'https://webneel.com/sites/default/files/imagecache/660Thumbnail/images/blog/2021/different-types-of-drawing.jpg'},
    {title:'50 Best 3D Maya Tutorial Videos for Beginners', category:'3d', img: 'https://webneel.com/sites/default/files/imagecache/660Thumbnail/images/blog/2021/3d-maya-tutorial-videos.jpg'},
    {title:'India mythology redefined - Kerala mural paintings by Dileep and Hariharan Swastik', category:'drawing', img: 'https://webneel.com/sites/default/files/imagecache/660Thumbnail/images/blog/2021/kerala-mural-painting-swastik.jpg'},
    {title:'XYZ - Kerala mural paintings by Dileep and Hariharan Swastik', category:'drawing', img: 'https://webneel.com/sites/default/files/imagecache/660Thumbnail/images/blog/2021/kerala-mural-painting-swastik.jpg'}
  ];
  getTotalposts(){ return this.products.length;}
  getTotalposts_3d(){ return this.products.filter(product => product.category==='3d').length;}
  getTotalposts_drawing(){ return this.products.filter(product => product.category==='drawing').length;}

}
