import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'my-authentication',
  template: `
    <router-outlet></router-outlet>
  `,
  styles: []
})
export class AuthenticationComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
