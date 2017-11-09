import {Component} from '@angular/core';
import {SettingsService} from './core/services/settings.service';
import {AppService} from './app.service';
import {LocalStorageService} from 'angular-web-storage';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less'],
  providers: [AppService, LocalStorageService]
})
export class AppComponent {
  constructor(public settings: SettingsService, private local: LocalStorageService) {
    window.onload = () => {
      this.settings.setLoadStatus(true);
    };
    console.log();
  }
}
