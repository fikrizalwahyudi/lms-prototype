import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../shared/services/auth.service';
import { UsersService } from '../../shared/services/users.service';


declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
    { path: '/dashboard', title: 'Dashboard',  icon: 'ni-tv-2 text-primary', class: '' },
    { path: '/users', title: 'Users',  icon: 'ni-circle-08 text-primary', class: '' },
    { path: '/icons', title: 'Icons',  icon:'ni-planet text-blue', class: '' },
    { path: '/maps', title: 'Maps',  icon:'ni-pin-3 text-orange', class: '' },
    { path: '/user-profile', title: 'User profile',  icon:'ni-single-02 text-yellow', class: '' },
    { path: '/tables', title: 'Tables',  icon:'ni-bullet-list-67 text-red', class: '' },
    { path: '/login', title: 'Login',  icon:'ni-key-25 text-info', class: '' },
    { path: '/register', title: 'Register',  icon:'ni-circle-08 text-pink', class: '' }
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  public menuItems: any[];
  public isCollapsed = true;
  public userProfile:any;
  public role:any;

  constructor(private usersService:UsersService, private authService:AuthService, private router: Router) {

  }

  ngOnInit() {

    // this.usersService.getUsersById(JSON.parse(localStorage.getItem('user')).uid).subscribe(e=>{
    //   console.log(e);
    // });
    this.router.events.subscribe((event) => {
      this.isCollapsed = true;
   });
   this.userProfile = JSON.parse(localStorage.getItem('user'));
  //  this.usersService.getUsersById(this.userProfile.uid).get().subscribe(e=>{
    //  console.log(e.data().role);
     if(localStorage.getItem('role') == 'admin'){
       this.menuItems = ROUTES.filter(menuItem => {
        console.log(menuItem);
        if(menuItem.title == 'Users' || menuItem.title == 'Dashboard'){
          // menuItem.canActivate = true;
          return true
        }else{
          // menuItem.canActivate = false;
          return false;
        }

      });
      console.log(this.menuItems);
     }else{
       this.menuItems = ROUTES.filter(menuItem => {
        console.log(menuItem);
        if(menuItem.title == 'Icons' || menuItem.title == 'Dashboard'){
          // menuItem.canActivate = true;
          return true
        }else{
          // menuItem.canActivate = false;
          return false;
        }

      });
     }

  //  });
  }

  logout(){
    this.authService._signOut();
  }
}
