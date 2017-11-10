import {NgModule} from '@angular/core';
import {UserformComponent} from './userform.component';
import {SharedModule} from '../../../shared.module';

@NgModule({
  declarations: [UserformComponent],
  exports: [UserformComponent],
  imports: [SharedModule]
})

export class UserformModule {

}
