import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {SharedModule} from './shared.module';
import {AppComponent} from './app.component';
import {LayoutModule} from './layout/layout.module';
import {ComponentsModule} from '@components/components.module';
import {RoutesModule} from './routes/routes.module';
import {CoreModule} from '@core/core.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    SharedModule.forRoot(),
    ComponentsModule,
    LayoutModule,
    RoutesModule,
    CoreModule
  ],
  bootstrap: [AppComponent],
})
export class AppModule {
}
