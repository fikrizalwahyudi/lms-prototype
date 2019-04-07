import { Injectable } from '@angular/core';
import { CanActivate, CanActivateChild, CanLoad, Route, UrlSegment, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanActivateChild, CanLoad {

  constructor(
		private router:Router,
    public authService: AuthService,
	) {

	}

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree
  {
    // this.router.navigate(['login'])
    console.log(state.url);
    var role = ['admin'];
    if(this.authService.isLoggedIn()){
      if('admin' == localStorage.getItem('role')){
        if(state.url == '/dashboard' || state.url == '/users' || state.url == '/users/container' || state.url == '/user-profile'){
          return true;
        }else{
          this.router.navigate(['']);
          // return false;
        }
      }else if('learner' == localStorage.getItem('role')){
        if(state.url == '/dashboard' || state.url == '/tables' || state.url == '/icons'){
          return true;
        }else{
          this.router.navigate(['']);
          // return false;
        }
      }
    }else {
      // localStorage.setItem('user', null);
      this.router.navigate(['login'])
      // return false;
    }
  }
  canActivateChild(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return true;
  }
  canLoad(
    route: Route,
    segments: UrlSegment[]): Observable<boolean> | Promise<boolean> | boolean {
    return true;
  }
}
