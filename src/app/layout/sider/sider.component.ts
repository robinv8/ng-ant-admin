import {Component} from '@angular/core';
import {SettingsService} from '../../core/services/settings.service';
import {MenuService} from '../../core/services/menu.service';

@Component({
  selector: 'app-sider',
  templateUrl: 'sider.component.html',
  styleUrls: ['./sider.component.less'],
})

export class SiderComponent {
  theme = true;
  menus: any = [];

  constructor(public settings: SettingsService, private menuService: MenuService) {
    this.theme = this.settings.layout.isDark;
    this.menuService.getMenu().then((result: any) => {
      this.menus = result.data;
    });
  }

  switch() {
    this.settings.setLayout('isDark', !this.settings.layout.isDark);
  }
}
