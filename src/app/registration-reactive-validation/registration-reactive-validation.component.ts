import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'et-registration-reactive-validation',
  templateUrl: './registration-reactive-validation.component.html',
  styleUrls: ['./registration-reactive-validation.component.css']
})
export class RegistrationReactiveValidationComponent implements OnInit {
  registerForm!: FormGroup;
  submitted: boolean = false;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.registerForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8), 
        Validators.pattern(/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/)]]
    })
  }

  get f() {
    return this.registerForm.controls;
  }

  onSubmit = () => {
    console.log(this.registerForm);
    this.submitted = true;
  }

}
