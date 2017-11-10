import {NgModule} from '@angular/core';
import {SharedModule} from '../../shared.module';
import {DashboardComponent} from './dashboard.component';
// import {EChartOptionDirective} from '../../core/plug_ins/echart-option.directive';

@NgModule({
  declarations: [
    DashboardComponent
    // EChartOptionDirective
  ],
  imports: [
    SharedModule.forRoot()
  ],
  exports: [
  ]
})

export class DashboardModule {

}
