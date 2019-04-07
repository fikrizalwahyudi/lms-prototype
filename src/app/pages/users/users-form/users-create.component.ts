import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { UsersFormComponent } from './users-form.component';
import { UsersService } from '../../../shared/services/users.service';
import { AuthService } from '../../../shared/services/auth.service';

@Component({
  selector: 'app-users-create',
  template: `
    <users-form (save)="save($event)"></users-form>
  `,
  styles: []
})
export class UsersCreateComponent implements OnInit {

  @ViewChild(UsersFormComponent)
  formComponent: UsersFormComponent

  constructor(
    private router: Router,
    public usersService:UsersService,
    public authService:AuthService
  ) { }

  ngOnInit() {
  }

  save(model) {
    console.log(model);
    this.usersService.createUsers(model);
  }

}
