import {Injectable} from '@angular/core';

export interface Layout {
  isCollapsed: boolean;
}

@Injectable()
export class SettingsService {
  private _layout: Layout = null;
  private _auth: boolean;

  get layout(): Layout {
    if (!this._layout) {
      this._layout = Object.assign(<Layout>{
        isCollapsed: false
      });
    }
    return this._layout;
  }

  setLayout(name: string, value: any): boolean {
    if (typeof this.layout[name] !== 'undefined') {
      this._layout[name] = value;
      return true;
    }
    return false;
  }

  get auth(): boolean {
    if (this._auth === undefined) {
      this._auth = false;
    }
    return this._auth;
  }

  setAuth(value: boolean) {
    this._auth = value;
  }
}
