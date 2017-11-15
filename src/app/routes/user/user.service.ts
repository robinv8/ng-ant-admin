import {Injectable} from '@angular/core';
import {AHttpClinet} from '@core/services/http.client';
import {TableFiled} from '@core/interfaces/table.interface';

@Injectable()
export class UserService {
  constructor(private http: AHttpClinet) {
  }

  getTableHeader(): TableFiled[] {
    return [
      {
        field: 'id',
        text: 'Id'
      },
      {
        field: 'avatar',
        text: 'Avatar',
        type: 3
      },
      {
        field: 'name',
        text: 'Name'
      },
      {
        field: 'nickName',
        text: 'NickName'
      },
      {
        field: 'phone',
        text: 'Phone',
      },
      {
        field: 'age',
        text: 'Age',
      },
      {
        field: 'address',
        text: 'Address',
      },
      {
        field: 'isMale',
        text: 'IsMale',
        type: 4
      },
      {
        field: 'email',
        text: 'Email',
      },
      {
        field: 'createTime',
        text: 'CreateTime',
      },
      {
        text: '操作',
        type: 2
      }
    ];
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
