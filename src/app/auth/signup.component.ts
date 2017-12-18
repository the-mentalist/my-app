import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms";

import { User } from "./user.model";

@Component({
  selector: 'my-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
	model: User;
	cpassword = '45';
  constructor() {}

  ngOnInit() {
  }
  onSubmit(form: ngForm) {
  	console.log(form);
  }

}
