import { Component, OnInit, ViewEncapsulation, ChangeDetectionStrategy } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, ParamMap,  Router} from '@angular/router';
import {NzMessageService} from 'ng-zorro-antd';
import {AccountService} from '../../../../service/account.service';

@Component({
  selector: 'app-account-changpwd',
  templateUrl: './account-changpwd.component.html',
  styleUrls: ['./account-changpwd.component.less'],
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [AccountService]
})
export class AccountChangpwdComponent implements OnInit {
  validateForm: FormGroup;
  usrname: string;

  constructor(private fb: FormBuilder,
              private as: AccountService,
              private nzMessageService: NzMessageService,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.validateForm = this.fb.group({
      username: new FormControl({ value: '', readonly: true}),
      password: [
        null,
        [
          Validators.required,
          Validators.minLength(6),
          Validators.maxLength(16)
        ]
      ],
      checkPassword: [
        null,
        [
          Validators.required,
          this.confirmationValidator,
          Validators.minLength(6),
          Validators.maxLength(16)
        ]
      ],
    });
    this.initData();
  }

  /**
   * 初始化值
   */
  initData () {
    const _that = this;
    this.route.paramMap.subscribe((params: ParamMap) => {
      _that.as.getUsernameById({id: params.get('id')}).then(({body}) => {
        if (body) {
          _that.validateForm.patchValue({
            username: body[0].username
          });
        }
      });
    });
  }

  /**
   * 动态检查值
   */
  updateConfirmValidator(): void {
    /** wait for refresh value */
    Promise.resolve().
      then(() => this.validateForm.controls.checkPassword.updateValueAndValidity());
  }

  /**
   * 确认密码
   * @param {FormControl} control
   * @returns {{[p: string]: boolean}}
   */
  confirmationValidator = (control: FormControl): { [s: string]: boolean } => {
    if (!control.value) {
      return {required: true};
    } else if (control.value !== this.validateForm.controls.password.value) {
      return {confirm: true, error: true};
    }
  }

  /**
   *  提交表单
   */
  submitForm(): void {
    const _that = this;
    for (const i in this.validateForm.controls) {
      if (this.validateForm.controls[i]) {
        this.validateForm.controls[i].markAsDirty();
        this.validateForm.controls[i].updateValueAndValidity();
      }
    }
    if (this.validateForm.valid) {
      const data = {
        ...this.validateForm.value,
      };
      this.as.changePassWord(data).then(({body}) => {
        if (body.status === 'OK') {
          _that.nzMessageService.success('修改成功！');
          _that.router.navigate(['/accounts/account-mana/accounts-list']);
        }
      });
    }
  }
}
