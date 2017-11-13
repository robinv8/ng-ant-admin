import {Injectable} from '@angular/core';
import {AHttpClinet} from './http.client';

@Injectable()
export class MenuService {
  constructor(private http: AHttpClinet) {

  }

  getMenu() {
    return new Promise((resolve, reject) => {
      this.http.get('http://www.easy-mock.com/mock/5a011b579d3ceb4a354379db/menu')
        .subscribe(result => {
          resolve(result);
        });
    });
  }
}
