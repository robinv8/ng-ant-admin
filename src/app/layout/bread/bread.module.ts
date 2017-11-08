import {NgModule} from '@angular/core';
import {SharedModule} from '../../shared.module';
import {BreadComponent} from './bread.component';

@NgModule({
  declarations: [BreadComponent],
  imports: [SharedModule.forRoot()],
  exports: [
    BreadComponent
  ]
})

export class BreadModule {

}
