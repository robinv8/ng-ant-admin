import {Component, OnInit} from '@angular/core';
import {NzMessageService, NzModalService} from 'ng-zorro-antd';
import {UserService} from './user.service';
import {UserformComponent} from './userform/userform.component';

const init_options = [{
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

const other_options = [{
  value: 'fujian',
  label: 'Fujian',
  children: [{
    value: 'xiamen',
    label: 'Xiamen',
    children: [{
      value: 'Kulangsu',
      label: 'Kulangsu',
      isLeaf: true
    }],
  }],
}, {
  value: 'guangxi',
  label: 'Guangxi',
  children: [{
    value: 'guilin',
    label: 'Guilin',
    children: [{
      value: 'Lijiang',
      label: 'Li Jiang River',
      isLeaf: true
    }],
  }],
}];

@Component({
  selector: 'app-user',
  templateUrl: 'user.component.html',
  styleUrls: ['./user.component.less'],
  providers: [UserService]
})

export class UserComponent implements OnInit {
  _value: string;
  switchValue = true;
  current = 1;
  pageSize = 10;
  total = 1;
  dataSet = [];
  loading = true;
  roleData: any;
  _options = null;
  _value2: any[] = null;
  gridView = {
    /**
     * @field 字段
     * @text  显示名称
     * @type 字段类型 {1:文本,2:按钮,3:图片,4：过滤器}
     */
    tableFields: [
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
        type: 2,
        text: '操作',
        handles: [
          {
            text: '修改',
            key: 'adminId',
            event: (id) => {
              this.create(id);
            }
          },
          {
            text: '删除',
            key: 'adminId',
            confirm: {
              title: '确定要删除这个任务吗？',
              event: {
                ok: (id) => {
                  this._delete(id);
                },
                cancel: () => {
                  this.message.info('click cancel');
                }
              }
            }
          }
        ]
      }
    ]
  };

  _console(value) {
    //console.log(value);
  }

  constructor(private userService: UserService, private message: NzMessageService, private modalService: NzModalService) {
  }

  refreshData = (event?: number) => {
    this.loading = true;
    this.userService.getUserList(event || this.current, this.pageSize)
      .then((result: any) => {
        this.dataSet = result.data;
        this.total = result.total;
        this.loading = false;
      }, (err) => {

      });
  }


  create(id?: string) {
    const subscription = this.modalService.open({
      title: id ? '修改管理员信息' : '创建管理员信息',
      content: UserformComponent,
      onOk() {
      },
      onCancel() {
        console.log('Click cancel');
      },
      footer: false,
      componentParams: {
        id: id
      }
    });
    subscription.subscribe(result => {
      if (result === 'ok') {
        this.refreshData();
      }
    });
  }

  _delete(id) {
    /* this.userService.remove(id)
       .then((result: any) => {
         this.refreshData();
         this.message.info(result.msg);
       }, (err) => {
       });*/
  }

  async ngOnInit() {
    /*await this.roleService.queryAll()
     .then((result: any) => {
     this.roleData = result.data;
     })
     console.log(this.roleData);*/
    this.refreshData();

    // let's set nzOptions in a asynchronous  way
    setTimeout(() => {
      this._options = init_options;
    }, 100);
  }
}
