import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ClipboardModule } from 'ngx-clipboard';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { NgxSelectModule } from 'ngx-select-ex';

import { AdminLayoutRoutes } from './admin-layout.routing';
import { DashboardComponent } from '../../pages/dashboard/dashboard.component';
import { IconsComponent } from '../../pages/icons/icons.component';
import { MapsComponent } from '../../pages/maps/maps.component';
import { UserProfileComponent } from '../../pages/user-profile/user-profile.component';
import { TablesComponent } from '../../pages/tables/tables.component';
import { UsersComponent } from '../../pages/users/users.component';
import { UsersContainerComponent } from '../../pages/users/users-container/users-container.component';
import { UsersFormComponent } from '../../pages/users/users-form/users-form.component';
import { UsersEditComponent } from '../../pages/users/users-form/users-edit.component';
import { UsersCreateComponent } from '../../pages/users/users-form/users-create.component';

// import { ToastrModule } from 'ngx-toastr';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgbModule,
    ClipboardModule,
    NgxSelectModule
  ],
  declarations: [
    DashboardComponent,
    UserProfileComponent,
    TablesComponent,
    IconsComponent,
    MapsComponent,
    UsersComponent,
    UsersContainerComponent,
    UsersFormComponent,
    UsersEditComponent,
    UsersCreateComponent
  ]
})

export class AdminLayoutModule {}
