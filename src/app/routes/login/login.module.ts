import {NgModule} from '@angular/core';
import {LoginComponent} from './login.component';
import {SharedModule} from '../../shared.module';

@NgModule({
  declarations: [LoginComponent],
  imports: [SharedModule],
  exports: [LoginComponent]
})

export class LoginModule {

}
