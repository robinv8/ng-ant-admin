import {NgModule} from '@angular/core';

import {SiderComponent} from './sider.component';
import {SharedModule} from '../../core/shared.module';

@NgModule({
  declarations: [
    SiderComponent
  ],
  imports: [
    SharedModule.forRoot()
  ],
  exports: [
    SiderComponent
  ]
})

export class SiderModule {
}
