import {Component} from '@angular/core';
import {SettingsService} from '@core/services/settings.service';
@Component({
  selector: 'app-loader',
  templateUrl: 'loader.component.html',
  styleUrls: ['./loader.component.less']
})

export class LoaderComponent {
  constructor(public setting: SettingsService) {

  }
}
