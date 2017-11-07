import {Component} from '@angular/core';
import {SettingsService} from './core/services/settings.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {

  constructor(public settings: SettingsService) {

  }
}
