import {Component} from '@angular/core';
import {SettingsService} from './core/services/settings.service';
import {AppService} from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less'],
  providers: [AppService]
})
export class AppComponent {
  constructor(public settings: SettingsService) {
    window.onload = () => {
      this.settings.setLoadStatus(true);
    };
    console.log();
  }
}
