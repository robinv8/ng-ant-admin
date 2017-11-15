import {NgModule} from '@angular/core';
import {AHttpClinet} from './services/http.client';
import {CanAuthProvide} from './services/auth.service';
import {SettingsService} from './services/settings.service';
import {MenuService} from './services/menu.service';

@NgModule({
  providers: [
    AHttpClinet,
    CanAuthProvide,
    SettingsService,
    MenuService,
  ]
})

export class CoreModule {
}
