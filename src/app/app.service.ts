import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class AppService {
  constructor(private http: HttpClient) {

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
