import {NgModule} from '@angular/core';
import {SiderComponent} from './sider.component';
import {SharedModule} from '../../shared.module';

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
