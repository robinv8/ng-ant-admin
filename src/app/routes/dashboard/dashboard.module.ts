import {NgModule} from '@angular/core';
import {SharedModule} from '../../shared.module';
import {DashboardComponent} from './dashboard.component';

@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    SharedModule.forRoot()
  ],
  exports: [
    DashboardComponent
  ]
})

export class DashboardModule {

}
