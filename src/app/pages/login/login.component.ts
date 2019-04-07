import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../shared/services/auth.service';

import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {
  loginForm: FormGroup;
  submitted = false;

  constructor(private router:Router, private formBuilder: FormBuilder, private authService:AuthService) {  }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    })

    // console.log(localStorage.clear());
    console.log(localStorage);
  }
  ngOnDestroy() {
  }

  get f():any { return this.loginForm.controls; }

  onSubmit() {
      this.submitted = true;
      // stop here if form is invalid
      if (this.loginForm.invalid) {
          return;
      }
      alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.loginForm.value))
  }

  signInByGoogle(){
    this.authService.loginWithGoogle()
  }

}
