import {ModuleWithProviders} from '@angular/core';

import {Routes, RouterModule} from '@angular/router';
import {HomeComponent} from './routes/home/home.component';
import {LoginComponent} from './routes/login/login.component';
import {CanAuthProvide} from './core/services/auth.service';

const routes: Routes = [
  {path: 'home', component: HomeComponent, canActivate: [CanAuthProvide]},
  {path: 'login', component: LoginComponent, canLoad: [CanAuthProvide]},
  {path: '**', redirectTo: '/home', pathMatch: 'full'},
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
