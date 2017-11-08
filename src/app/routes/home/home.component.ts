import {Component} from '@angular/core';
import {SettingsService} from '../../core/services/settings.service';
@Component({
  selector: 'app-home',
  templateUrl: 'home.component.html',
  styleUrls: ['./home.component.less']
})
export class HomeComponent {
  constructor(public settings: SettingsService) {
  }
}
