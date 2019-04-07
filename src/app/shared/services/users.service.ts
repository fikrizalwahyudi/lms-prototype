import { Injectable } from '@angular/core';
import { Router } from  "@angular/router";
import * as firebase from "firebase";
import { auth } from  'firebase/app';
import { AngularFireAuth } from  "@angular/fire/auth";
import { AngularFirestore } from '@angular/fire/firestore';
import { User } from  'firebase';
import { UsersModel } from '../models/users.model';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
   user:  User;

  constructor(private firestore: AngularFirestore, public afAuth: AngularFireAuth,public router: Router) {

  }

  getUsers() {
    return this.firestore.collection('users').snapshotChanges();
  }

  getUsersById(id) {
    return this.firestore.collection('users').doc(id);
  }

  createUsers(users: UsersModel){
    return this.firestore.collection('users').add(users);
  }

  // createUsersById(id, users:UsersModel){
  //   return this.firestore.collection('users').doc(id).set(users);
  // }

  updateUsers(users: UsersModel){
    delete users.id;
    this.firestore.doc('users/' + users.id).update(users);
  }

  deleteUsers(users: UsersModel){
    this.firestore.doc('users/' + users.id).delete();
  }

}
