import {Injectable} from '@angular/core';
import {NHttpClinet} from '@core/utils/http.client';
import {TableFiled} from '@core/interfaces/table.interface';
import {BaseService} from '@core/utils/BaseRequest';

@Injectable()
export class UserService extends BaseService {

  constructor(http: NHttpClinet) {
    super('user', http);
  }

  /**
   * 获取列表表头
   * @returns {TableFiled[]}
   */
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
        text: 'Phone'
      },
      {
        field: 'age',
        text: 'Age'
      },
      {
        field: 'address',
        text: 'Address'
      },
      {
        field: 'isMale',
        text: 'IsMale',
        type: 4
      },
      {
        field: 'email',
        text: 'Email'
      },
      {
        field: 'createTime',
        text: 'CreateTime'
      },
      {
        text: '操作',
        type: 2
      }
    ]
      ;
  }

  /**
   * 获取列表数据
   * @param pageIndex
   * @param pageSize
   * @returns {Promise<any>}
   */
  getUserList(pageIndex, pageSize) {
    return new Promise((resolve, reject) => {
      this.http.get('https://www.easy-mock.com/mock/5a011b579d3ceb4a354379db/user')
        .subscribe(result => {
          resolve(result);
        });
    });
  }

  getCityData() {
    return [{
      value: 'zhejiang',
      label: 'Zhejiang',
      children: [{
        value: 'hangzhou',
        label: 'Hangzhou',
        children: [{
          value: 'xihu',
          label: 'West Lake',
          isLeaf: true
        }],
      }, {
        value: 'ningbo',
        label: 'Ningbo',
        isLeaf: true
      }],
    }, {
      value: 'jiangsu',
      label: 'Jiangsu',
      children: [{
        value: 'nanjing',
        label: 'Nanjing',
        children: [{
          value: 'zhonghuamen',
          label: 'Zhong Hua Men',
          isLeaf: true
        }],
      }],
    }];
  }
}
