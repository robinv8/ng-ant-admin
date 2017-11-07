import {Component} from '@angular/core';
import {SettingsService} from '../../core/services/settings.service';

@Component({
  selector: 'app-header',
  templateUrl: 'header.component.html',
  styleUrls: ['./header.component.less']
})

export class HeaderComponent {
  constructor(public settings: SettingsService) {

  }

  toggleCollapsed() {
    this.settings.setLayout('isCollapsed', !this.settings.layout.isCollapsed);
  }
}
