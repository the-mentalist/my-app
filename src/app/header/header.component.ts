import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'my-header',
  templateUrl: './header.component.html',
  styles: []
})
export class HeaderComponent implements OnInit {
	right = {
		'float': 'right';
	};
  constructor() { }

  ngOnInit() {
  }

}
