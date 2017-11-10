import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {SettingsService} from '../../core/services/settings.service';
import {CookieService} from 'ngx-cookie';

@Component({
  selector: 'app-header',
  templateUrl: 'header.component.html',
  styleUrls: ['./header.component.less'],
})

export class HeaderComponent {
  constructor(public settings: SettingsService, private router: Router, private _cookie: CookieService) {

  }

  toggleCollapsed() {
    this.settings.setLayout('isCollapsed', !this.settings.layout.isCollapsed);
  }

  signOut() {
    this._cookie.removeAll();
    this.router.navigate(['login']);
  }
}
