import { Routes } from '@angular/router';

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

import { AuthGuard } from '../../shared/guards/auth.guard';

export const AdminLayoutRoutes: Routes = [
    { path: 'dashboard',      component: DashboardComponent, canActivate:[AuthGuard]},
    { path: 'user-profile',   component: UserProfileComponent, canActivate:[AuthGuard] },
    { path: 'tables',         component: TablesComponent, canActivate:[AuthGuard] },
    { path: 'icons',          component: IconsComponent, canActivate:[AuthGuard]  },
    { path: 'maps',           component: MapsComponent, canActivate:[AuthGuard]  },
    {
      path: 'users', component: UsersComponent, children: [
        { path: '', redirectTo: 'container', pathMatch: 'full' },
        { path: 'container', component: UsersContainerComponent},
        { path: 'create', component: UsersCreateComponent},
        { path: ':id/edit', component: UsersEditComponent},
      ],
      canActivate:[AuthGuard]
    }
];
