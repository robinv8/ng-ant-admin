import {Component} from '@angular/core';
import {SettingsService} from '../../core/services/settings.service';

@Component({
  selector: 'app-sider',
  templateUrl: 'sider.component.html',
  styleUrls: ['./sider.component.less']
})

export class SiderComponent {
  theme = true;

  constructor(public settings: SettingsService) {

  }

}
