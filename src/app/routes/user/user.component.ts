import {Component, OnInit} from '@angular/core';
import {NzMessageService, NzModalService} from 'ng-zorro-antd';
import {UserService} from './user.service';
import {UserformComponent} from './userform/userform.component';

import {GridComponent} from '@core/grid.component';

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

  searchParmas = {
    search_1: '',
    search_2: '',
    startDate: '',
    endDate: ''
  };
  options = [];

  constructor(private userService: UserService, private message: NzMessageService, private modalService: NzModalService) {
    super(userService);
    this.options = this.userService.getCityData();
    /**
     * 列表操作按钮
     */
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
        event: (id) => {
          this.delete(id);
        }
      }
    ]);
  }

  ngOnInit() {
    this.getData();
  }

  /**
   * 获取列表数据
   * @param {number} event
   */
  getData = (event?: number) => {
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


  /**
   * 新增或修改单条数据
   * @param {string} id
   */
  createOrUpdate(id?: string) {
    const subscription = this.modalService.open({
      title: id ? '修改管理员信息' : '创建管理员信息',
      content: UserformComponent,
      onOk() {
        debugger
      },
      onCancel() {
        console.log('Click cancel');
      },
      componentParams: {
        id: id
      }
    });
    subscription.subscribe(result => {
      if (result === 'ok') {
        this.getData();
      }
    });
  }

  /**
   * 删除单条
   * @param {string} id
   */
  delete(id: string) {

  }

  /**
   * 清除搜索框数据
   */
  clearSearchParams() {
    for (const key in this.searchParmas) {
      this.searchParmas[key] = '';
    }
  }

  _startValueChange = () => {
    if (this.searchParmas.startDate > this.searchParmas.endDate) {
      this.searchParmas.endDate = null;
    }
  }
  _endValueChange = () => {
    if (this.searchParmas.startDate > this.searchParmas.endDate) {
      this.searchParmas.startDate = null;
    }
  }
}
