import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-loginapi',
  templateUrl: './loginapi.component.html',
  styleUrls: ['./loginapi.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class LoginapiComponent implements OnInit {
  loginForm: FormGroup;
  isLoading: boolean = false;
  isLoggedIn: boolean = false;
  errorMessage: string = '';
  successMessage: string = '';
  loginError: any = '';
  Loggedin:boolean;

  constructor(private formBuilder: FormBuilder, private http: HttpClient) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: ['eve.holt@reqres.in', [Validators.required, Validators.email]],
      password: ['cityslicka', Validators.required]
    });
  }

  get emailControl() {
    return this.loginForm.get('email')!;
  }

  get passwordControl() {
    return this.loginForm.get('password')!;
  }

  onSubmit() {
    if (this.loginForm.valid) {
      this.isLoading = true;
      this.errorMessage = '';
      this.successMessage = '';

      const loginData = {
        email: this.emailControl.value,
        password: this.passwordControl.value
      };

      this.http.post('https://reqres.in/api/login', loginData).subscribe(
        (response: any) => {
          this.isLoading = false;
          this.isLoggedIn = true;
          this.successMessage = 'You have logged in successfully!';
          this.Loggedin=true;
        },
        (error) => {
          this.isLoading = false;
          this.isLoggedIn = false;
          this.errorMessage = 'Login failed. Please check your credentials.';
        }
      );
    } else {
      this.markAllFormFieldsAsTouched();
    }
  }

  markAllFormFieldsAsTouched() {
    Object.values(this.loginForm.controls).forEach(control => {
      control.markAsTouched();
    });
  }
}