import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {SharedModule} from './core/shared.module';
import {AppComponent} from './app.component';
import {SettingsService} from './core/services/settings.service';
import {routing} from './app.routing';

import {LayoutModule} from './Layout/layout.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    SharedModule.forRoot(),
    LayoutModule,
    routing
  ],
  providers: [SettingsService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
