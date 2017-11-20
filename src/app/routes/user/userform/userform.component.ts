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
  styleUrls: ['./userform.component.less'],
  providers: [UserService]
})
export class UserformComponent implements OnInit {
  validateForm: FormGroup;
  _id: string;

  /**
   * 表单模型对象
   * @type {{name: string; nickName: string; gender: string; age: string; phone: string; email: string; address: string}}
   */
  formData = {
    name: '',
    nickName: '',
    gender: '',
    age: '',
    phone: '',
    email: '',
    address: ''
  };
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
  }];

  @Input()
  set id(value: string) {
    this._id = value;
  }

  constructor(private message: NzMessageService, private userService: UserService, private fb: FormBuilder, private subject: NzModalSubject) {
    this.subject.on('onDestory', () => {
      console.log('destroy');
    });
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
  }

  /**
   * 表单提交方法
   * @private
   */
  _submitForm() {
    for (const i in this.validateForm.controls) {
      this.validateForm.controls[i].markAsDirty();
    }
    // data submit

    //  destroy方法可以传入onOk或者onCancel。默认是onCancel
    // 数据提交成功调用一下代码
    // this.subject.destroy('onOk');
  }

  _cancel() {
    this.subject.destroy('onCancel');
  }

  getFormControl(name) {
    return this.validateForm.controls[name];
  }
}
