import {Injectable} from '@angular/core';
import {NHttpClinet} from '../utils/http.client';
import {SettingsService} from '@core/services/settings.service';

@Injectable()
export class MenuService {
  constructor(private http: NHttpClinet, private setting: SettingsService) {

  }

  getMenu() {
    return new Promise((resolve, reject) => {
      this.http.get('http://www.easy-mock.com/mock/5a011b579d3ceb4a354379db/menu')
        .subscribe(result => {
          this.setting.setMenuStatus(true);
          resolve(result);
        });
    });
  }
}
