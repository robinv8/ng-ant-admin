import {Injectable} from '@angular/core';
import {SessionStorageService} from 'angular-web-storage';

@Injectable()
export class LoginService {
  constructor(private _session: SessionStorageService) {

  }

  login(username: string, password: string) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if ((username === 'admin' && password === 'admin') || (username === 'guest' && password === 'guest')) {
          this._session.set('username', username);
          resolve(true);
        } else {
          reject(false);
        }
      }, 3000);
    });
  }
}
