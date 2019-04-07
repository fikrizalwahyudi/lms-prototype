import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import  * as CustomValidator from '../../shared/validators/validators';

import { AuthService } from '../../shared/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder, private authService:AuthService) {

  }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      fullName: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', [Validators.required]]
    },{
      validator: CustomValidator.MustMatch('password', 'confirmPassword')
    })
  }

  // convenience getter for easy access to form fields
  get f():any { return this.registerForm.controls; }

  onSubmit() {
      this.submitted = true;

      // stop here if form is invalid
      if (this.registerForm.invalid) {
          return;
      }

      console.log(this.registerForm);

      this.authService.createUserWithEmailAndPassword(this.registerForm.value.email, this.registerForm.value.password);

      // alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.registerForm.value))
  }

}
