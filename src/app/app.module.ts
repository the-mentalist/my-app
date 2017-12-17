import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SignupComponent } from './auth/signup.component';
import { AuthenticationComponent } from './auth/authentication.component';
import { MainComponent } from './main/main.component';
import { routing } from "./app.routing";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SignupComponent,
    AuthenticationComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    routing,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
