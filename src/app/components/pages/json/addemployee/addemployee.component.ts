import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-addemployee',
  templateUrl: './addemployee.component.html',
  styleUrls: ['./addemployee.component.scss']
})
export class AddemployeeComponent implements OnInit{
  form: FormGroup;

  constructor(private formBuilder: FormBuilder,  private http: HttpClient) { }

  ngOnInit() {
    this.form = this.formBuilder.group({
      name: ['Neelan', Validators.required],
      email: ['mm@gmail.com', [Validators.required, Validators.email]],      
      designation: ['designer', Validators.required],
      gender: ['female', Validators.required],      
      married: [false, Validators.requiredTrue],      
    });
  }
  successMessage:string;
  postData:any[];
  onSubmit() {
    if (this.form.valid) {
      //console.log(this.form.value);
      // Perform form submission logic here
      this.http.post('http://localhost:3000/employees', this.form.value).subscribe(     
        (response: any) => {
          this.successMessage = 'posted!';
          //this.postData = response;           
        },
        (error) => {          
          this.successMessage = 'not posted.';
        }
      );

    } else {
      this.validateAllFormFields();
    }
  }

  validateAllFormFields() {
    Object.keys(this.form.controls).forEach(field => {
      const control = this.form.get(field);
      if (control) {
        control.markAsTouched({ onlySelf: true });
      }
    });
  }

  isFieldValid(field: string) {
    const control = this.form.get(field);
    return control?.touched && control?.invalid;
  }

  getErrorMessage(field: string) {
    const control = this.form.get(field);

    if (control?.hasError('required')) {return 'This field is required';}
    if (control?.hasError('email')) {return 'Invalid email';}
    return '';
  }
}
