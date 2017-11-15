import {Injectable} from '@angular/core';
import {LocalStorageService} from '../storage/storage.service';

export interface Layout {
  isCollapsed: boolean;
  isDark: boolean;
}

@Injectable()
export class SettingsService {
  private _layout: Layout = null;
  private _loaded: boolean;

  constructor(private _local: LocalStorageService) {
    const layout = this._local.get('layout');
    this._layout = layout ? JSON.parse(layout) : null;
  }

  get layout(): Layout {
    if (!this._layout) {
      this._layout = Object.assign(<Layout>{
        isCollapsed: false,
        isDark: true
      });
    }
    return this._layout;
  }

  setLayout(name: string, value: any): boolean {
    if (typeof this.layout[name] !== 'undefined') {
      this._layout[name] = value;
      this._local.set('layout', JSON.stringify(this._layout));
      return true;
    }
    return false;
  }

  get menuStatus(): boolean {
    if (this._loaded === undefined) {
      this._loaded = false;
    }
    return this._loaded;
  }

  setMenuStatus(value: boolean) {
    this._loaded = value;
  }
}
