import {NgModule} from '@angular/core';
import {LoaderComponent} from './loader.component';
import {SharedModule} from '../../shared.module';
import {SettingsService} from '@core/services/settings.service';

@NgModule({
  declarations: [
    LoaderComponent
  ],
  imports: [SharedModule.forRoot()],
  exports: [LoaderComponent]
})

export class LoaderModule {
  constructor(private settings: SettingsService) {
  }
}
