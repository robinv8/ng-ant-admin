import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/of';

@Injectable()
export class AuthService {
  account: Account;

  login(role: string): Observable<Account> {
    const account = new Account();
    account.id = 11;
    account.name = 'super name';
    account.roles = [role];
    this.account = account;
    return Observable.of(account);
  }

  getAccount(): Account {
    return this.account;
  }

  isLogdedin(): boolean {
    return this.account && this.account.id != null;
  }

  hasRole(role: string) {
    return this.account && this.account.roles.includes(role);
  }
}
