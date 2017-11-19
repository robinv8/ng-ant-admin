import {NgModule} from '@angular/core';
import {LocalStorageService, SessionStorageService} from './storage.service';

export {LocalStorageService, SessionStorageService} from './storage.service';

@NgModule({
  providers: [LocalStorageService, SessionStorageService]
})
export class StorageModule {
}
