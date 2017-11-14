import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {SettingsService} from '@core/services/settings.service';
import {SessionStorageService} from '@core/storage/storage.module';

@Component({
  selector: 'app-header',
  templateUrl: 'header.component.html',
  styleUrls: ['./header.component.less'],
})

export class HeaderComponent {
  constructor(public settings: SettingsService, private router: Router, private _storage: SessionStorageService) {

  }

  toggleCollapsed() {
    this.settings.setLayout('isCollapsed', !this.settings.layout.isCollapsed);
  }

  signOut() {
    this._storage.clear();
    this.router.navigate(['login']);
  }
}
