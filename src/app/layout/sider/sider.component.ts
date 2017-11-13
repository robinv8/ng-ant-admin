import {Component, OnChanges} from '@angular/core';
import {SettingsService} from '../../core/services/settings.service';
import {AppService} from '../../app.service';

@Component({
  selector: 'app-sider',
  templateUrl: 'sider.component.html',
  styleUrls: ['./sider.component.less'],
  providers: [AppService]
})

export class SiderComponent implements OnChanges {
  theme = true;
  menus: any = [];

  constructor(public settings: SettingsService, private appService: AppService) {
    this.theme = this.settings.layout.isDark;
    this.appService.getMenu().then((result: any) => {
      this.menus = result.data;
    });
  }

  ngOnChanges() {
  }

  switch() {
    console.log(this.settings.layout.isDark);
    this.settings.setLayout('isDark', !this.settings.layout.isDark);
  }
}
