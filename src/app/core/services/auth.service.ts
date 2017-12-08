import {Injectable} from '@angular/core';
import {CanActivate, CanLoad, ActivatedRouteSnapshot, RouterStateSnapshot, Route, Router} from '@angular/router';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import {SessionStorageService} from '../storage/storage.module';


@Injectable()
export class CanAuthProvide implements CanActivate {
  constructor(private router: Router, private _storage: SessionStorageService) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {
    return this.check();
  }

  canLoad(route: Route): boolean | Observable<boolean> | Promise<boolean> {
    return this.check();
  }

  check(): boolean {
    const auth = this._storage.get('username');
    if (auth) {
      return true;
    }
    this.router.navigate(['/login']);
    return false;
  }
}
