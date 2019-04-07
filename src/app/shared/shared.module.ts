import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from "./services/auth.service";
import { UsersService } from "./services/users.service";
import { AuthGuard } from "./guards/auth.guard";
import * as CustomValidator from "./validators/validators";
import { UsersModel } from './models/users.model';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    AuthService,
    AuthGuard,
    UsersService,
    UsersModel
  ]
})
export class SharedModule { }
