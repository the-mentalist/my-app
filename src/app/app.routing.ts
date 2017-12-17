import { Routes, RouterModule } from '@angular/router';
import { AUTH_ROUTES } from "./auth/app.routing";
import { MainComponent } from "./main/main.component";
import { AuthenticationComponent } from "./auth/authentication.component";

const APP_ROUTES: Routes = [
	{ path: '', redirectTo: '/home', pathMatch: 'full' },
	{ path: 'home', component: MainComponent },
	// pass reference to path of routes; lazy load
	{ path: 'auth', component: AuthenticationComponent, children: AUTH_ROUTES }
];

export const routing = RouterModule.forRoot(APP_ROUTES);// register routes