import {NgModule, ModuleWithProviders} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ReactiveFormsModule, FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule} from '@angular/router';
import {NgZorroAntdModule} from 'ng-zorro-antd';
import {CookieModule} from 'ngx-cookie';
import {ChartsModule} from 'ng2-charts/ng2-charts';
import {StorageModule} from './core/storage/storage.module';

@NgModule({
  imports: [
    HttpClientModule,
    NgZorroAntdModule.forRoot(),
    CookieModule.forRoot(),
    StorageModule,
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgZorroAntdModule,
    RouterModule,
    ChartsModule
  ]
})
export class SharedModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule
    };
  }
}
