import { Component, OnInit, NgZone } from '@angular/core';

@Component({
  selector: 'app-thirdparty',
  templateUrl: './thirdparty.component.html',
  styles: [`
  p {
		font-family: 'Raleway';
	}
	.somewhat-right {
		padding-left: 6%;
	}
  `]
})
export class ThirdpartyComponent implements OnInit {

	onSignIn(gUser) {
		var profile = gUser.getBasicProfile();
	}

  constructor(ngZone: NgZone) {
  	window['onSignIn'] = (gUser) => ngZone.run(() => this.onSignIn(gUser));
  }

  ngOnInit() {
  }

}
