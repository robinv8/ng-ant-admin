import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {SharedModule} from './shared.module';
import {AppComponent} from './app.component';
import {SettingsService} from './core/services/settings.service';
import {routing} from './app.routing';
import {LayoutModule} from './layout/layout.module';
import {LoaderModule} from './components/loader/loader.module';
import {LoginModule} from './routes/login/login.module';
import {HomeModule} from './routes/home/home.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    SharedModule.forRoot(),
    routing,
    LoaderModule,
    LoginModule,
    HomeModule,
    LayoutModule
  ],
  providers: [SettingsService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
