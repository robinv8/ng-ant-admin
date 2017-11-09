import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {SettingsService} from '../../core/services/settings.service';
import {LocalStorageService} from 'angular-web-storage';

@Component({
  selector: 'app-header',
  templateUrl: 'header.component.html',
  styleUrls: ['./header.component.less'],
  providers: [LocalStorageService]
})

export class HeaderComponent {
  constructor(public settings: SettingsService, private local: LocalStorageService, private router: Router) {

  }

  toggleCollapsed() {
    this.settings.setLayout('isCollapsed', !this.settings.layout.isCollapsed);
  }

  signOut() {
    this.local.clear();
    this.router.navigate(['login']);
  }
}
