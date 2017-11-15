import {Component, OnInit} from '@angular/core';
import {NzMessageService, NzModalService} from 'ng-zorro-antd';
import {UserService} from './user.service';
import {UserformComponent} from './userform/userform.component';
import {GridView} from '@core/interfaces/table.interface';

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
  gridView: GridView = {};

  _value: string;
  current = 1;
  pageSize = 10;
  total = 1;
  dataSet = [];
  loading = true;
  roleData: any;
  _options = null;


  _console(value) {
    //console.log(value);
  }

  constructor(private userService: UserService, private message: NzMessageService, private modalService: NzModalService) {
    this.gridView.tableFields = this.userService.getTableHeader();
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


  createOrUpdate(id?: string) {
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


  ngOnInit() {
    this.gridView.operations = [
      {
        text: '修改',
        event: (id) => {
          this.createOrUpdate(id);
        }
      },
      {
        text: '删除',
        isConfirm: true,
        title: '确定要删除这个任务吗?',
        event: () => {
        }
      }
    ];
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
