import {NgModule} from '@angular/core';
import {TableComponent} from './table.component';
import {SharedModule} from '../../shared.module';

@NgModule({
  declarations: [TableComponent],
  imports: [SharedModule],
  exports: [TableComponent],
})
export class TableModule {

}
