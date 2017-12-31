import { Component, OnInit, /*ViewChild, ElementRef*/ } from '@angular/core';

import { AuthenticationService } from '../auth/authentication.service';

@Component({
  selector: 'my-header',
  templateUrl: './header.component.html',
  styles: []
})
export class HeaderComponent implements OnInit {
	/*@ViewChild("signuplink", {read: ElementRef}) signuplink: ElementRef;*/
	linkVisible = true;

	right = {
		'float': 'right';
	};
  constructor(private authService: AuthenticationService) { }

  toggleSignupLink(value: boolean) {
  	this.linkVisible = value;
  }

  ngOnInit() {
  	this.authService.toggleLink.subscribe(
  		(value: boolean) => { console.log('fsds');
        this.toggleSignupLink(value);}
  		);
  }

}
