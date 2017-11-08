import {NgModule} from '@angular/core';
import {SharedModule} from '../../core/shared.module';
import {BreadComponent} from './bread.component';

@NgModule({
  declarations: [BreadComponent],
  imports: [SharedModule],
  exports: [
    BreadComponent
  ]
})

export class BreadModule {

}
