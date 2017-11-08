import {NgModule} from '@angular/core';
import {LayoutModule} from '../../layout/layout.module';
import {HomeComponent} from './home.component';
import {SharedModule} from '../../shared.module';

@NgModule({
  declarations: [HomeComponent],
  imports: [
    SharedModule,
    LayoutModule
  ],
  exports: [HomeComponent]
})

export class HomeModule {

}
