import {NgModule} from '@angular/core';
import {NHttpClinet} from './utils/http.client';
import {CanAuthProvide} from './services/auth.service';
import {SettingsService} from './services/settings.service';
import {MenuService} from './services/menu.service';

@NgModule({
  providers: [
    NHttpClinet,
    CanAuthProvide,
    SettingsService,
    MenuService,
  ]
})

export class CoreModule {
}
