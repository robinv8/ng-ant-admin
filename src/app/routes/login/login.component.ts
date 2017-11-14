import {Component, OnInit} from '@angular/core';
import {FormGroup, Validators, FormBuilder} from '@angular/forms';
import {LoginService} from './login.service';
import {Router} from '@angular/router';
import {NzMessageService} from 'ng-zorro-antd';

@Component({
  selector: 'app-login',
  templateUrl: 'login.component.html',
  styleUrls: ['./login.component.less'],
  providers: [LoginService]
})

export class LoginComponent implements OnInit {
  validateForm: FormGroup;
  loadStatus: boolean;
  loginBtn = 'Login';

  _submitForm() {
    for (const i in this.validateForm.controls) {
      this.validateForm.controls[i].markAsDirty();
    }
    if (this.validateForm.valid) {
      this.loadStatus = true;
      this.loginBtn = 'Logining...';
      const userName = this.validateForm.value.userName;
      const password = this.validateForm.value.password;
      this.loginService.login(userName, password)
        .then(result => {
          this.router.navigate(['']);
        }, (err) => {
          this.loadStatus = false;
          this.loginBtn = 'Login';
          this._message.error('登录失败！');
        });
    }
  }

  constructor(private fb: FormBuilder, private loginService: LoginService, private router: Router, private _message: NzMessageService) {
  }

  getFormControl(name) {
    return this.validateForm.controls[name];
  }

  ngOnInit() {
    this.validateForm = this.fb.group({
      userName: [null, [Validators.required]],
      password: [null, [Validators.required]],
    });
  }
}
