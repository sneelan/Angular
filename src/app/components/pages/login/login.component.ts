import { Component } from '@angular/core';
import { AuthService } from './auth.service';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  username: string='admin';
  password: string='password';
  HideLogin:boolean;LoginMessage:string;ngFormClass:string=''

  constructor(private authService: AuthService) {}

  login() {
    if (this.authService.authenticate(this.username, this.password)) {
      // Redirect to the home page or a protected route
      this.ngFormClass='opacity-25';      
      this.LoginMessage='success';      
      setTimeout(() => { this.HideLogin=true; }, 2000);
    } else {
      // Display an error message
      this.LoginMessage='error';      
    }
  }

  ngOnInit() {

  }

}