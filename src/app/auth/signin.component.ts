import { Component, OnInit } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
	selector: 'my-signin',
	templateUrl: './signin.component.html',
	styles: [],
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

	constructor() { }

	ngOnInit() {
	}

}
