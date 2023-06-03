import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit{
  form: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.form = this.formBuilder.group({
      name: ['Neelan', Validators.required],
      email: ['mm@gmail.com', [Validators.required, Validators.email]],
      password: ['xxxxxxxxxxx', [Validators.required]],
      dropdown: ['option2', Validators.required],
      gender: ['female', Validators.required],
      image: [null, Validators.required],
      textarea: ['d', Validators.required],
      checkbox: [false, Validators.requiredTrue],
      radio: ['', Validators.required],
      date: ['', Validators.required],
      time: ['', Validators.required],
      range: ['', Validators.required],
    });
  }

  onSubmit() {
    if (this.form.valid) {
      //console.log(this.form.value);
      // Perform form submission logic here
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
    if (control?.hasError('password')) {return 'This field is required';}
 
    return '';
  }
}
