import {Component, OnInit} from '@angular/core';
import {NzMessageService, NzModalService} from 'ng-zorro-antd';
import {UserService} from './user.service';
import {UserformComponent} from './userform/userform.component';
import {SearchParams} from '@core/interfaces/table.interface';
import {GridComponent} from '@core/grid.component';

@Component({
  selector: 'app-user',
  templateUrl: 'user.component.html',
  styleUrls: ['./user.component.less'],
  providers: [UserService]
})
export class UserComponent extends GridComponent implements OnInit {

  /**
   * 列表搜索数据模型
   */
  searchParmas: SearchParams = {
    params: {
      options: []
    },
    values: {
      search_1: '',
      search_2: '',
      startDate: '',
      endDate: ''
    }
  };

  constructor(private userService: UserService, private message: NzMessageService, private modalService: NzModalService) {
    super(userService);
    this.searchParmas.params.options = this.userService.getCityData();
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
      });
  }


  /**
   * 新增或修改单条数据
   * @param {string} id
   */
  createOrUpdate(id?: string) {
    const self = this;
    const subscription = this.modalService.open({
      title: id ? 'update' : 'create',
      content: UserformComponent,
      footer: false,
      onOk() {
        self.getData();
      },
      onCancel() {
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

  submitForm(formData?: any) {

  }

  /**
   * 清除搜索框数据
   */
  clearSearchParams() {
    for (const key in this.searchParmas.values) {
      this.searchParmas.values[key] = '';
    }
  }

  _startValueChange = () => {
    const {startDate, endDate} = this.searchParmas.values;
    if (startDate > endDate) {
      this.searchParmas.values.endDate = null;
    }
  }

  _endValueChange = () => {
    const {startDate, endDate} = this.searchParmas.values;
    if (startDate > endDate) {
      this.searchParmas.values.startDate = null;
    }
  }
}
