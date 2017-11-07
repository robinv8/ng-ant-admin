import {NgModule} from '@angular/core';

import {HeaderComponent} from './header.component';
import {SharedModule} from '../../core/shared.module';

@NgModule({
  declarations: [
    HeaderComponent
  ],
  imports: [
    SharedModule.forRoot()
  ],
  exports: [
    HeaderComponent
  ]
})

export class HeaderModule {
}
