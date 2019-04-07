import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UsersModel } from '../../../shared/models/users.model';


@Component({
  selector: 'users-form',
  templateUrl: './users-form.component.html',
  styleUrls: ['./users-form.component.sass']
})
export class UsersFormComponent implements OnInit {

  @Output('init') onInit = new EventEmitter();
  @Output('save') onSave = new EventEmitter();

  fg: FormGroup
  errorMsg
  submitting
  public items: string[] = ['Admin', 'Learner'];

  constructor(
    private fb: FormBuilder,
    private router: Router,
    public users:UsersModel
  ) {
    this.fg = this.fb.group({
      firstName: [null, [Validators.required]],
      lastName: [null, [Validators.required]],
      position: [null, [Validators.required]],
      gender: null,
      email: null,
      role: null,
      note: null
    })
  }

  ngOnInit() {
    this.onInit.emit(this.fg)
  }

  save() {
    // this.users = this.fg.value;
    // console.log(this.users);
    this.onSave.emit(this.fg.value);
    // console.log(this.fg.value);
  }

  cancel() {
    // this.router.navigate(['/admin', 'pltu'])
  }
}
