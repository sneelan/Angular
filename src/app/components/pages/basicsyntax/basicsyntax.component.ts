import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basicsyntax',
  templateUrl: './basicsyntax.component.html',
  styleUrls: ['./basicsyntax.component.scss']
})
export class BasicsyntaxComponent implements OnInit{
 

  // Function to check if the array contains key-value pairs or values only
  isArrayWithKeyValues(arr: any[]): boolean {
    if (arr.length === 0) {
      return false; // Empty array, cannot determine type
    }

    // Check if the first element is an object
    if (
      typeof arr[0] === 'object' &&
      arr[0] !== null &&
      !Array.isArray(arr[0])
    ) {
      // Check if it contains key-value pairs
      return Object.keys(arr[0]).length > 0;
    }

    return false;
  }

  // Method to execute the logic and test array types
  testArrayTypes(): void {
    const simpleArray = ['raj', 'mahesh', 'neelan'];
    const arrayWithKeyValues = [{ memberid: '858', data: 'Sample1', user: 'neelan' },];
    //console.log(this.isArrayWithKeyValues(simpleArray)); // Output: false
    //console.log(this.isArrayWithKeyValues(arrayWithKeyValues)); // Output: true
  }





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
