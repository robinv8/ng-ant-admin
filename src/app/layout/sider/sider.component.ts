import {Component} from '@angular/core';
import {SettingsService} from '../../core/services/settings.service';
import {AppService} from '../../app.service';

@Component({
  selector: 'app-sider',
  templateUrl: 'sider.component.html',
  styleUrls: ['./sider.component.less'],
  providers: [AppService]
})

export class SiderComponent {
  theme = true;
  menus: any = [];

  constructor(public settings: SettingsService, private appService: AppService) {
    this.appService.getMenu().then((result: any) => {
      this.menus = result.data;
    });
  }

}
