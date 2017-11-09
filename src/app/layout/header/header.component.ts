import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {SettingsService} from '../../core/services/settings.service';
import {SessionStorageService} from 'angular-web-storage';

@Component({
  selector: 'app-header',
  templateUrl: 'header.component.html',
  styleUrls: ['./header.component.less'],
})

export class HeaderComponent {
  constructor(public settings: SettingsService, private _session: SessionStorageService, private router: Router) {

  }

  toggleCollapsed() {
    this.settings.setLayout('isCollapsed', !this.settings.layout.isCollapsed);
  }

  signOut() {
    this._session.clear();
    this.router.navigate(['login']);
  }
}
