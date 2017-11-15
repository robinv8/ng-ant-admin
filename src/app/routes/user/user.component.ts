import {Component, OnInit} from '@angular/core';
import {NzMessageService, NzModalService} from 'ng-zorro-antd';
import {UserService} from './user.service';
import {UserformComponent} from './userform/userform.component';

import {GridComponent} from '@core/grid.component';

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


export class UserComponent extends GridComponent implements OnInit {

  constructor(private userService: UserService, private message: NzMessageService, private modalService: NzModalService) {
    super(userService);

    this.setGridView('operations', [
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
    ]);
  }

  refreshData = (event?: number) => {
    this.setLoading(true);
    this.userService.getUserList(event || this.current, this.pageSize)
      .then((result: any) => {
        const {data, total} = result;
        this.setTableData(data);
        this.setTotal(total);
        this.setLoading(false);
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
    this.refreshData();

    // let's set nzOptions in a asynchronous  way
    /*setTimeout(() => {
      this._options = init_options;
    }, 100);*/
  }
}
