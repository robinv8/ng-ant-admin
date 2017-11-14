import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {DashboardModule} from './dashboard/dashboard.module';
import {HomeModule} from './home/home.module';
import {UserModule} from './user/user.module';
import {LoginModule} from './login/login.module';
import {routes} from './routes';
import {ChartsModule} from './charts/charts.module';

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {useHash: true}),
  ],
  exports: [
    DashboardModule,
    HomeModule,
    UserModule,
    LoginModule,
    ChartsModule
  ]
})

export class RoutesModule {

}
