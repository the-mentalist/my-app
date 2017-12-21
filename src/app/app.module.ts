import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SignupComponent } from './auth/signup.component';
import { AuthenticationComponent } from './auth/authentication.component';
import { MainComponent } from './main/main.component';
import { routing } from "./app.routing";
import { SigninComponent } from './auth/signin.component';
import { AuthenticationService } from './auth/authentication.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SignupComponent,
    AuthenticationComponent,
    MainComponent,
    SigninComponent
  ],
  imports: [
    BrowserModule,
    routing,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule
  ],
  providers: [AuthenticationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
