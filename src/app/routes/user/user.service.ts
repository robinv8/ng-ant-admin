import {Injectable} from '@angular/core';
import {AHttpClinet} from '../../core/services/http.client';

@Injectable()
export class UserService {
  constructor(private http: AHttpClinet) {
  }

  getUserList(pageIndex, pageSize) {
    return new Promise((resolve, reject) => {
      this.http.get('http://www.easy-mock.com/mock/5a011b579d3ceb4a354379db/user')
        .subscribe(result => {
          resolve(result);
        });
    });
  }
}
