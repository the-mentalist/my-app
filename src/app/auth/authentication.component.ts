import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'my-authentication',
	templateUrl: './authentication.component.html',
	styles: [`
	a.nav-link {
		font-family: 'Raleway';
		font-size: 2rem;
	}

	ul.nav {
		margin-bottom: 6%;
	}

	.auth-box {
		padding: 2% 0 2% 0;
		background-color: white;
		box-shadow: 9px 11px 34px -4px rgba(0,0,0,0.75);
	}
	`]
})
export class AuthenticationComponent implements OnInit {

	constructor() { }

	ngOnInit() {

	}

}
