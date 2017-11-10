import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: 'table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  _allChecked = false;
  _indeterminate = false;
  @Input() gridView: any;
  @Input() tableData: Array<any>;
  @Input() total: number;
  @Input() pageIndex: number;
  @Output() refreshData: EventEmitter<number> = new EventEmitter<number>();
  @Input() pageSize: number;
  @Input() loading: boolean;

  constructor() {
  }

  ngOnInit() {
    this.pageSize = this.pageSize || 10;
  }

  _refreshData() {
    this.refreshData.emit(this.pageIndex);
  }


  _checkAll(value) {
    if (value) {
      this.tableData.forEach(data => {
        data.checked = true;
      });
    } else {
      this.tableData.forEach(data => {
        data.checked = false;
      });
    }
    this._refreshStatus();
  };

  _refreshStatus() {
    const allChecked = this.tableData.every(value => value.checked === true);
    const allUnChecked = this.tableData.every(value => !value.checked);
    this._allChecked = allChecked;
    this._indeterminate = (!allChecked) && (!allUnChecked);
  };
}
