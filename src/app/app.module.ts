import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AngularFireModule } from "@angular/fire";
import { AngularFireAuthModule } from "@angular/fire/auth";
import { AngularFirestore } from '@angular/fire/firestore';

import { AppComponent } from './app.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';

import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';
import { SharedModule } from './shared/shared.module';



var config = {
  apiKey: "AIzaSyCU1Bfz6Asa75Q4oWM1oJQj3gYI9Dm7RVU",
  authDomain: "lms-prototype-89ad3.firebaseapp.com",
  databaseURL: "https://lms-prototype-89ad3.firebaseio.com",
  projectId: "lms-prototype-89ad3",
  storageBucket: "lms-prototype-89ad3.appspot.com",
  messagingSenderId: "308588726050"
};

@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ComponentsModule,
    NgbModule,
    RouterModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(config),
    AngularFireAuthModule,
    SharedModule
  ],
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    AuthLayoutComponent
  ],
  providers: [AngularFirestore],
  bootstrap: [AppComponent]
})
export class AppModule { }
