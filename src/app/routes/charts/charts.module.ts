import {NgModule} from '@angular/core';
import {SharedModule} from '../../shared.module';
import {ChartsComponent} from './charts.component';


@NgModule({
  declarations: [
    ChartsComponent
    // EChartOptionDirective
  ],
  imports: [
    SharedModule.forRoot()
  ],
  exports: [
  ]
})

export class ChartsModule {

}
