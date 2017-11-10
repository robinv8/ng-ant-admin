import {ModuleWithProviders} from '@angular/core';

import {Routes, RouterModule} from '@angular/router';
import {HomeComponent} from './routes/home/home.component';
import {LoginComponent} from './routes/login/login.component';
import {DashboardComponent} from './routes/dashboard/dashboard.component';
import {UserComponent} from './routes/user/user.component';
import {CanAuthProvide} from './core/services/auth.service';

const routes: Routes = [
  {
    path: '', component: HomeComponent, canActivate: [CanAuthProvide],
    children: [
      {path: 'dashboard', component: DashboardComponent, canActivate: [CanAuthProvide]},
      {path: 'user', component: UserComponent, canActivate: [CanAuthProvide]}
    ]
  },
  {path: 'login', component: LoginComponent, canLoad: [CanAuthProvide]},
  {path: '**', redirectTo: '/', pathMatch: 'full'},
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
