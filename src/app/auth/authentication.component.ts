import { Component, OnInit } from '@angular/core';
//import { Router } from '@angular/router';

import { AuthenticationService } from '../auth/authentication.service';

@Component({
	selector: 'my-authentication',
	templateUrl: './authentication.component.html',
	styles: [`
	h2.head {
		font-family: 'Raleway';
		margin-top: 1%;
	}
	label {
		margin-bottom: 5%;
		font-family: 'Raleway';
	}
	.auth-box {
		padding: 2% 0 2% 0;
		background-color: white;
		box-shadow: 9px 11px 34px -4px rgba(0,0,0,0.75);
	}
	`]
})
export class AuthenticationComponent implements OnInit {
	signedUp = false;
	isLogin = false;
	isSignup = false;
	
	constructor(private authService: AuthenticationService/*,
		private router: Router*/) {
		/*let paths = this.router.url.split('/');
		// signin || signup
		let resource = paths[paths.length-1];
		this.isLogin = resource == 'signin';
		this.isSignup = resource =='signup';*/
	}

	ngOnInit() {
		this.authService.signedUp.subscribe(
			(value: boolean) => this.signedUp = value
		);

		this.authService.isSignup.subscribe(
			(value: boolean) => {
				this.isSignup = value;
				this.isLogin = !value;
			}
		);

		this.authService.isLogin.subscribe(
			(value: boolean) => {
				this.isSignup = !value;
				this.isLogin = value;
			}
		);
	}

	showSignUpMsg(signedUp) {
		this.signUp = signedUp;
	}



}
