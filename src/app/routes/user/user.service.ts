import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BaseService} from '../../BaseRequest';

@Injectable()
export class UserService extends BaseService {
  constructor(http: HttpClient) {
    super(http, 'admins');
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
