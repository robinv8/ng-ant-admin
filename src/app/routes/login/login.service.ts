import {Injectable} from '@angular/core';
import {SessionStorageService} from '@core/storage/storage.module';

@Injectable()
export class LoginService {
  constructor(private _storage: SessionStorageService) {
  }

  login(username: string, password: string) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if ((username === 'admin' && password === 'admin') || (username === 'guest' && password === 'guest')) {
          this._storage.set('username', username);
          resolve(true);
        } else {
          reject(false);
        }
      }, 2000);
    });
  }
}
