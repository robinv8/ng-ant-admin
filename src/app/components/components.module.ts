import {NgModule} from '@angular/core';
import {LoaderModule} from './loader/loader.module';
import {TableModule} from './table/table.module';

@NgModule({
  exports: [
    LoaderModule,
    TableModule
  ]
})

export class ComponentsModule {

}
