import {Injectable} from '@angular/core';
import {NHttpClinet} from '../utils/http.client';
import {SettingsService} from '@core/services/settings.service';

@Injectable()
export class MenuService {
  constructor(private http: NHttpClinet, private setting: SettingsService) {

  }

  getMenu() {
    return new Promise((resolve, reject) => {
      this.http.get('/assets/mockData/menu.json')
        .subscribe(result => {
          this.setting.setMenuStatus(true);
          resolve(result);
        });
    });
  }
}
