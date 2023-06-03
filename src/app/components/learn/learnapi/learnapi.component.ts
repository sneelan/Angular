import { Component,OnInit } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse} from '@angular/common/http';



@Component({
  selector: 'app-learnapi',
  templateUrl: './learnapi.component.html',
  styleUrls: ['./learnapi.component.scss']
})

export class LearnapiComponent implements OnInit{

  public getJsonValue:any;
  public postJsonValue:any;
  public PostsArray:any;
  public UsersArray:any;
  ErrorMessage:any;
  orgErrorMessage1:any;
  orgErrorMessage:any;
  isLoading:boolean = false;
  progressValue = 0;


  constructor(private http : HttpClient){}

  ngOnInit():void {
    this.getMethod();
    this.postMethod();
    this.getAllPosts();
    //this.getAllUsers('https://reqres.in/api/users');
    this.startProgressBar();
    this.getWrong();
  }
  
  public getMethod(){
    this.http.get('https://jsonplaceholder.typicode.com/posts/1').subscribe(
      data => {
        this.getJsonValue=data;
      }
    ); 
  }

  public getAllPosts(){
    this.http.get('https://jsonplaceholder.typicode.com/posts/').subscribe(
      data => {
        this.PostsArray=data;
      }
    ); 
  }
  public getAllUsers(url: any) {
    this.progressValue = 0; this.startProgressBar();
    this.UsersArray='';
    this.isLoading=true;
    setTimeout(() => {
      this.http.get(url).subscribe(
        data => {this.UsersArray=data; this.isLoading = false;},
        (error: HttpErrorResponse) => {this.isLoading = false;this.orgErrorMessage1=error.message;}
      ); 
    }, 4000);
  }

// Increase the value every 40 milliseconds
startProgressBar() {const interval = setInterval(() => {this.progressValue += 1;if (this.progressValue >= 99) {clearInterval(interval);}}, 40); }

  public getWrong(){
    this.http.get('https://reqres.in/api/users/23').subscribe(
      data => {this.UsersArray=data; this.ErrorMessage='Data retrieved successfully';},
      (error: HttpErrorResponse) => {
        this.orgErrorMessage=error.message;
        if (error.status === 400) {
          // Handle the 400 error response
          this.ErrorMessage='Bad Request';
        } else if (error.status === 404) {
          // Handle the 404 error response
          this.ErrorMessage='Not Found';
        } else if (error.status === 200) {
          // Handle the 200 success response
          this.ErrorMessage='Success';
        } else {
          // Handle other error responses
          this.ErrorMessage='An error occurred:'+ error.message;
        }
      }
    ); 
  }

  public postMethod(){
    const header = new HttpHeaders({
      contentType:'application/json'
    })
    let body={
      title: 'foo',
      body: 'bar',
      userId: 1,
    };
    this.http.post('https://jsonplaceholder.typicode.com/posts',body, {headers:header}).subscribe(
      data => {
        this.postJsonValue=data;
      }
    ); 
  }


  
}




