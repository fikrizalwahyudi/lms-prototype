import { Injectable } from '@angular/core';
import { Router } from  "@angular/router";
import * as firebase from "firebase";
import { auth } from  'firebase/app';
import { AngularFireAuth } from  "@angular/fire/auth";
import { AngularFirestore } from '@angular/fire/firestore';
import { User } from  'firebase';
import { UsersModel } from '../models/users.model';
import { UsersService } from './users.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
   user:  User;

  constructor(public usersService:UsersService, private firestore: AngularFirestore, public afAuth: AngularFireAuth,public router: Router, public usersModel:UsersModel) {

    // this.afAuth.authState.subscribe(user => {
    //   if (user){
    //     this.user = user;
    //     console.log(user);
    //     // localStorage.setItem('user', JSON.stringify(this.user));
    //   } else {
    //     // localStorage.setItem('user', null);
    //   }
    // })
  }
  createUserWithEmailAndPassword(email, password) {
    return firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
      var errorCode = error.code;
      var errorMessage = error.message;
    });
  }

  signInWithEmailAndPassword(email, password) {
    return firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // ...
    });
  }

  async loginWithGoogle() {
    localStorage.clear();
    await this.afAuth.auth.signInWithPopup(new auth.GoogleAuthProvider());
    this.afAuth.authState.subscribe(user => {
      if (user){
        console.log(user);
        this.firestore.collection('users', ref => ref.where('uid', '==', user.uid)).get().subscribe(snap=>{
          console.log(snap.size);
          if(snap.size == 1){
            snap.forEach(element => {
              localStorage.setItem('user', JSON.stringify(user));
              localStorage.setItem('role', element.data().role ? element.data().role : null);
              // console.log(element.data());
            });
            this.router.navigate(['']);
          }else {
            console.log("id tidak ditemukan ");
            localStorage.clear();
            this.router.navigate(['']);
          }
        })
      } else {
        localStorage.clear();
      }
    })

  }

  isLoggedIn(): boolean {

    // localStorage.clear();
    console.log(localStorage.getItem('user'));
    const  user  =  JSON.parse(localStorage.getItem('user'));
    return  user  !==  null;
  }

  _signOut() {
    var self = this;
    firebase.auth().signOut().then(function() {
      // Sign-out successful.
      localStorage.clear();
      console.log("masuk");
      self.router.navigate(['/login']);
    }).catch(function(error) {
      // An error happened.
    });
  }
}
