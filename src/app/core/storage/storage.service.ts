import {Injectable} from '@angular/core';


export class StorageService {
  constructor(private storage: Storage) {
  }

  get(key: string) {
    return this.storage.getItem(key);
  }

  set(key: string, value: any) {
    return this.storage.setItem(key, value);
  }

  remove(key: string) {
    return this.storage.removeItem(key);
  }

  clear() {
    return this.storage.clear();
  }
}

@Injectable()
export class LocalStorageService extends StorageService {
  constructor() {
    super(localStorage);
  }
}

@Injectable()
export class SessionStorageService extends StorageService {
  constructor() {
    super(sessionStorage);
  }
}
