import { Component, OnInit, Renderer2, ElementRef } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { NgForm } from "@angular/forms";
import { Router } from '@angular/router';

import { AuthenticationService } from './authentication.service';
import { User } from "./user.model";

@Component({
	selector: 'my-signin',
	templateUrl: './signin.component.html',
	styleUrls: ['./signin.component.css'],
	animations: [
		trigger('flyInOut', [
			state('in', style({transform: 'translateX(0)'})),
			transition('void => *', [
				style({transform: 'translateX(-100%)'}),
				animate('0.3s ease-in-out')
			])
		])
	]
})
export class SigninComponent implements OnInit {
	model = new User();

	constructor(private authService: AuthenticationService,
		private renderer: Renderer2,
    	private el: ElementRef
    ) { }

	ngOnInit() {
		//link hide event
    	this.authService.toggleSignupLink(false);
    	this.authService.isLogIn(true);
    	this.renderer.addClass(this.el.nativeElement.ownerDocument.body, 'bg-new');
	}

}
