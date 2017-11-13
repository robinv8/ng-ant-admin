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
  roleData: Array<Object>;
/*  widgets = [
    /!*   {
         controlType: 'select',
         key: 'roleId',
         label: '角色',
         options: [
           {label: 'solid', value: 'Solid'},
           {label: 'great', value: 'Great'},
           {label: 'good', value: 'Good'},
           {label: 'unproven', value: 'Unproven'}
         ],
         required: true,
         order: 3
       },*!/
    {
      controlType: 'input',
      key: 'adminName',
      label: '用户名',
      value: '',
      required: true,
      order: 1
    },
    {
      controlType: 'input',
      key: 'adminPassword',
      label: '密码',
      required: true,
      order: 2
    }
  ];*/
  formData = {
    adminName: '',
    adminPassword: '',
    roleId: ''
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
      adminName: [null, [Validators.required]],
      adminPassword: [null, [Validators.required]],
      roleId: [null, [Validators.required]]
    });
    this.getRole();
  }

  getFormControl(name) {
    return this.validateForm.controls[name];
  }
}
