import { Injectable, EventEmitter, Output } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/Rx';
import { Observable } from 'rxjs';

import { User } from './user.model';

@Injectable()
export class AuthenticationService {
	@Output() toggleLink: EventEmitter<boolean> = new EventEmitter<boolean>();

	constants = {
		'URL': 'http://localhost:3000',
		'URL_SIGNUP': '/users/signup'
	};
	constructor(private http: Http) {}

	toggleSignupLink(value: boolean) {
		this.toggleLink.emit(value);
	}

	signup(user: User) {
		const body = JSON.stringify(user);
		const headers = new Headers({'Content-Type': 'application/json'});
		return this.http.post(this.constants.URL+this.constants.URL_SIGNUP, body, {headers: headers})
		.map((response: Response) => response.json())
		.catch((error: Response) => {
			//handle errors
			//this.errorService.handleError(error.json());
			return Observable.throw(error.json());
		});
	}
}
