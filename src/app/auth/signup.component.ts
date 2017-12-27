import { Component, OnInit, Renderer2, ElementRef } from '@angular/core';
import { NgForm } from "@angular/forms";
import { Router } from '@angular/router';
import { trigger, state, style, animate, transition } from '@angular/animations';

import { User } from "./user.model";
import { AuthenticationService } from './authentication.service';

@Component({
  selector: 'my-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
  animations: [
		trigger('flyInOut', [
			state('in', style({transform: 'translateX(0)'})),
			transition('void => *', [
				style({transform: 'translateX(+100%)'}),
				animate('0.3s ease-in-out')
			])
		])
	]
})
export class SignupComponent implements OnInit {
	model = new User();
  constructor(private authService: AuthenticationService,
    private router: Router,
    private renderer: Renderer2,
    private el: ElementRef) {}

  ngOnInit() {
    this.renderer.addClass(this.el.nativeElement.ownerDocument.body, 'bg-new');
    // remove this class after successful submission
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
