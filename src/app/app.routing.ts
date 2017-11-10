import {ModuleWithProviders} from '@angular/core';

import {Routes, RouterModule} from '@angular/router';
import {HomeComponent} from './routes/home/home.component';
import {LoginComponent} from './routes/login/login.component';
import {DashboardComponent} from './routes/dashboard/dashboard.component';
import {UserComponent} from './routes/user/user.component';
import {CanAuthProvide} from './core/services/auth.service';

const routes: Routes = [

    {
      path: 'login', component: LoginComponent, canLoad: [CanAuthProvide],
      data: {
        breadcrumb: '登录'
      }
    },
    {
      path: '', component: HomeComponent, canActivate: [CanAuthProvide],
      children: [
        { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
        { path: 'dashboard', redirectTo: 'dashboard', pathMatch: 'full' },
        {
          path: 'dashboard', component: DashboardComponent, canActivate: [CanAuthProvide],
          data: {
            breadcrumb: '控制台'
          }
        },
        {
          path: 'user', component: UserComponent, canActivate: [CanAuthProvide],
          data: {
            breadcrumb: '用户'
          }
        }
      ]
    },
    {
      path: '**',
      redirectTo: '/dashboard',
      pathMatch: 'full'
    }
  ]
;

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
