import {Injectable} from '@angular/core';
import {CanActivate, CanLoad, ActivatedRouteSnapshot, RouterStateSnapshot, Route, Router} from '@angular/router';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import {LocalStorageService} from 'angular-web-storage';

@Injectable()
export class CanAuthProvide implements CanActivate, CanLoad {
  constructor(private router: Router, private local: LocalStorageService) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.check();
  }

  canLoad(route: Route): boolean | Observable<boolean> | Promise<boolean> {
    return this.check();
  }

  check(): Observable<boolean> {
    return new Observable((observer) => {
      const auth = this.local.get('username');
      if (auth) {
        observer.next(true);
        observer.complete();
        return;
      }
      console.log('登录失败');
      observer.next(false);
      observer.complete();
      this.router.navigate(['/login']);
    });
  }
}
