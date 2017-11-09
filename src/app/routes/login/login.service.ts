import {Injectable} from '@angular/core';
import {LocalStorageService} from 'angular-web-storage';

@Injectable()
export class LoginService {
  constructor(private local: LocalStorageService) {

  }

  login(username: string, password: string) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if ((username === 'admin' && password === 'admin') || (username === 'guest' && password === 'guest')) {
          this.local.set('username', username);
          resolve(true);
        } else {
          reject(false);
        }
      }, 3000);
    });
  }
}
