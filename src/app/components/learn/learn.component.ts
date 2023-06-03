import { Component } from '@angular/core';
import { OnInit, ViewChild, ElementRef } from '@angular/core';
import { ViewchildComponent } from './viewchild/viewchild.component';

@Component({
  selector: 'app-learn',
  templateUrl: './learn.component.html',
  styleUrls: ['./learn.component.scss']
})

export class LearnComponent implements OnInit {

  //constructor(){}
  //ngOnInit(): void {}

  MyNum=[1];
  interval:any;
  Initialnumber:number=1;
  Startgame(){   
    this.interval = setInterval(() => {      
      this.Initialnumber+=2;
      this.MyNum.push(this.Initialnumber)
    }, 500);
  }
  Stopgame(){clearInterval(this.interval);}
//============================
  MyNews=[
  {title:'Sample Title 1', category:'design', postid:55}, 
  {title:'Photography Inspiration', category:'photography', postid:75},
  {title:'Painting Inspiration', category:'painting', postid:75},
  {title:'3D Inspiration', category:'3d', postid:75},
  {title:'Painting Inspiration', category:'painting', postid:75}
];

//----------Output
receivedtitle:string='';
receivedcategory:string='';
ReceivefromChild(receiveddata:{title:string, category:string}){
this.receivedtitle=receiveddata.title;
this.receivedcategory=receiveddata.category;
}
//======================================
//const servers: Array<{name:string}> = [...];
//servers: server[] = [];
//servers=[{name:''}];
  servers=[{name:'aa-1'}, {name:'bb-2'},{name:'cc-3'},{name:'dd-4'}];
  mynumber:number=1;
  onAddServer(){
  this.servers.push({name:'Sample Data '+this.mynumber});
  this.mynumber+=1;
  }
  onRemoveServer(id:number){
    this.servers.splice(id, 1);    
  }
   
  //======================================
  
  @ViewChild('ViewchildComponent',{static:true}) ViewValue: ViewchildComponent;
//======================================
  myAlert(myData: HTMLInputElement){
    alert('you typed here is '+myData.value);
  }     
  
  //ngclass
  favoriteSeason1: string='';
  seasons1: string[] = ['Winter1', 'Spring1', 'Summer1', 'Autumn1'];

  favoriteSeason: string='';
  seasons: string[] = ['Winter', 'Spring', 'Summer', 'Autumn'];

  NewSearch:string='';
  NewSearchValue:string='';
  //
  mycustomclass:string='';
  AddClass(){
    this.mycustomclass=' fade-out';
  }

  Getvalue:string='my keyword';

  SearchValue:string='';
  changeValue(mydata: Event){
  console.log((<HTMLInputElement>mydata.target).value);
  this.SearchValue=(<HTMLInputElement>mydata.target).value;
  }

  yourname:string='';
  imgurl='https://neelan.webneel.com/sites/all/themes/tech/images/logonk1.png';
  NewTitle='MY ANG APP';
  display:boolean=false; myfunction(){
    if(this.display==true){this.display=false;}else{this.display=true;}
    }

    Hidemediv:boolean=true;
    mytimeoutfunction(){
      setTimeout(() => {
        this.Hidemediv=false;
      }, 3000);      
  }
  Showme:string='show';
  constructor(){}
  ngOnInit() {}
}
