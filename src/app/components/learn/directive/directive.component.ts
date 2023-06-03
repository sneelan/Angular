import { Component } from '@angular/core';

@Component({
  selector: 'app-directive',
  templateUrl: './directive.component.html',
  styleUrls: ['./directive.component.scss']
})
export class DirectiveComponent {
   scores=[
      {name:'Rajesh', run:111, img:"<i class='bi bi-person-circle'></i>"},
      {name:'Neelan', run:220, img: '<i class="bi bi-person-circle"></i>'},
      {name:'Akhil Murugan', run:77, img: '<i class="bi bi-person-circle"></i>'},
      {name:'Nimesh', run:44, img: '<i class="bi bi-person-circle"></i>'},
      {name:'Faizal', run:132, img: '<i class="bi bi-person-circle"></i>'},
      {name:'Sahath', run:101, img: '<i class="bi bi-person-circle"></i>'}
    ];
    
    GethighScore=this.gethighScroe();
    gethighScroe(){
      let myhighscore = [...this.scores];
      //learn sorting array method // descending order, [0]-first element
      return myhighscore.sort((curr,next) => next.run - curr.run)[0];
    }
    
    //style decorative
    enableMystyle:boolean=true;


    Shownotice: boolean=true;
    ShownoticeNew: boolean=true;

    DisplayCondition:boolean=true;
    occupation:string='Designer';
}
