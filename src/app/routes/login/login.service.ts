import {Injectable} from '@angular/core';
import {CookieService} from 'ngx-cookie';

@Injectable()
export class LoginService {
  constructor(private _cookie: CookieService) {
  }

  login(username: string, password: string) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if ((username === 'admin' && password === 'admin') || (username === 'guest' && password === 'guest')) {
          this._cookie.put('username', username);
          resolve(true);
        } else {
          reject(false);
        }
      }, 3000);
    });
  }
}
