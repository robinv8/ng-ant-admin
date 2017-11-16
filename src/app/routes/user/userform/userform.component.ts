import {Component, OnInit, Input} from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormControl,
  Validators
} from '@angular/forms';
import {NzModalSubject, NzMessageService} from 'ng-zorro-antd';
import {UserService} from '../user.service';

@Component({
  selector: 'app-userform',
  templateUrl: './userform.component.html',
  styleUrls: ['./userform.component.css'],
  providers: [UserService]
})
export class UserformComponent implements OnInit {
  validateForm: FormGroup;
  _id: string;
  _options = [{
    value: 'zhejiang',
    label: 'Zhejiang',
    children: [{
      value: 'hangzhou',
      label: 'Hangzhou',
      children: [{
        value: 'xihu',
        label: 'West Lake',
        isLeaf: true
      }],
    }, {
      value: 'ningbo',
      label: 'Ningbo',
      isLeaf: true
    }],
  }, {
    value: 'jiangsu',
    label: 'Jiangsu',
    children: [{
      value: 'nanjing',
      label: 'Nanjing',
      children: [{
        value: 'zhonghuamen',
        label: 'Zhong Hua Men',
        isLeaf: true
      }],
    }],
  }]
  formData = {
    name: '',
    nickName: '',
    gender: '',
    age: '',
    phone: '',
    email: '',
    address: ''
  };

  @Input()
  set id(value: string) {
    this._id = value;
    if (this._id) {
      this.findById();
    }
  }

  constructor(private message: NzMessageService, private userService: UserService, private fb: FormBuilder, private subject: NzModalSubject) {
    this.subject.on('onDestory', () => {
      console.log('destroy');
    });
  }

  _submitForm(formData?: any) {
    return;
    /*for (const i in this.validateForm.controls) {
      this.validateForm.controls[i].markAsDirty();
    }
    if (this._id) {
      this.userService.update(this._id, this.validateForm.value)
        .then((result) => {
          this.subject.next('ok');
          this.subject.destroy('onOk');
        }, (err) => {
          this.message.warning(err.msg);
        })
    } else {
      this.userService.create(this.validateForm.value)
        .then((result) => {
          this.subject.next('ok');
          this.subject.destroy('onOk');
        }, (err) => {
          this.message.warning(err.msg);
        })
    }*/
  }

  _handleCancel(e) {
    this.subject.destroy('onCancel');
  }

  getRole() {
    /* this.roleService.queryAll()
       .then((result: any) => {
         this.roleData = result.data;
       })*/
  }

  confirmationValidator = (control: FormControl): { [s: string]: boolean } => {
    if (!control.value) {
      return {required: true};
    } else if (control.value !== this.validateForm.controls['password'].value) {
      return {confirm: true, error: true};
    }
  }

  getCaptcha(e: MouseEvent) {
    e.preventDefault();
  }

  findById() {
    /*this.userService.queryById(this._id)
      .then((result: any) => {
        this.formData = result.data;
      }, (err) => {
        this.message.warning(err.msg);
      });*/
  }

  ngOnInit() {
    this.validateForm = this.fb.group({
      name: [null, [Validators.required]],
      nickName: [null, [Validators.required]],
      gender: [null, [Validators.required]],
      age: [null, [Validators.required]],
      phone: [null, [Validators.required, Validators.pattern(/^1[34578]\d{9}$/)]],
      email: [null, [Validators.required, Validators.email]],
      address: [null, [Validators.required]]
    });
    this.getRole();
  }

  getFormControl(name) {
    return this.validateForm.controls[name];
  }
}
