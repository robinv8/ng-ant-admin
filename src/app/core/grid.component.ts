import {TableFiled, Operation, GridView} from '@core/interfaces/table.interface';

/**
 * 列表模块
 */
export class GridComponent {
  /**
   * 列表基础信息包括，表头(tableFields)、列表操作(operations)
   * @type {{}}
   * @private
   */
  _gridView: GridView = {};

  /**
   * 当前页码，默认1
   * @type {number}
   * @private
   */
  _current = 1;

  /**
   * 页码大小 默认1
   * @type {number}
   * @private
   */
  _pageSize = 10;

  /**
   * 总页数
   * @type {number}
   * @private
   */
  _total = 0;
  /**
   * 表格数据
   * @type {Array}
   * @private
   */
  _tableData: any = [];

  /**
   * 加载状态
   */
  _loading: boolean;

  constructor(private service) {
    /**
     * 获取表头信息
     */
    this.setGridView('tableFields', this.service.getTableHeader());
  }

  get gridView() {
    return this._gridView;
  }

  setGridView(key: 'tableFields' | 'operations', value: TableFiled[] | Operation[]) {
    this._gridView[key] = value;
  }

  get current() {
    return this._current;
  }

  set current(value: number) {
    this._current = value;
  }

  get pageSize() {
    return this._pageSize;
  }

  setPageSize(value: number) {
    this._pageSize = value;
  }

  get total() {
    return this._total;
  }

  setTotal(value: number) {
    this._total = value;
  }

  get tableData() {
    return this._tableData;
  }

  setTableData(value: any) {
    this._tableData = value;
  }

  get loading() {
    return this._loading;
  }

  setLoading(value: boolean) {
    this._loading = value;
  }
}
