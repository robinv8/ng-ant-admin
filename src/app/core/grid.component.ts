import {TableFiled, Operation, GridView} from '@core/interfaces/table.interface';

export class GridComponent {
  _gridView: GridView = {};
  _current = 1;
  _pageSize = 10;
  _total = 0;
  _tableData: any = [];
  _loading: boolean;

  constructor(private service) {
    this.setGridView('tableFields', this.service.getTableHeader());
  }

  get gridView() {
    return this._gridView;
  }

  setGridView(key: string, value: TableFiled[] | Operation[]) {
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
