import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms";
import { Router } from '@angular/router';

import { User } from "./user.model";
import { AuthenticationService } from './authentication.service';

@Component({
  selector: 'my-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
	model = new User();
  constructor(private authService: AuthenticationService, private router: Router) {}

  ngOnInit() {
  }
  onSubmit() {
  	this.authService.signup(this.model)
  	.subscribe(
  		data => {
  			console.log(data);
  			this.router.navigateByUrl('/auth/signin');
  		},
  		error => console.log(error)
  		);
  }

}
