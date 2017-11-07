import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {SharedModule} from './core/shared.module';
import {AppComponent} from './app.component';
import {SiderModule} from './Layout/sider/sider.module';
import {HeaderModule} from './Layout/header/header.module';

import {SettingsService} from './core/services/settings.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    SharedModule.forRoot(),
    SiderModule,
    HeaderModule
  ],
  providers: [SettingsService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
