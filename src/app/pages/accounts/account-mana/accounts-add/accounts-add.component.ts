import {
  Component,
  OnInit,
  ViewEncapsulation,
  ChangeDetectionStrategy,
} from '@angular/core';
import {Router} from '@angular/router';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {AccountService} from '../../../../service/account.service';
import {NzMessageService} from 'ng-zorro-antd';

@Component({
  selector: 'app-accounts-add',
  templateUrl: './accounts-add.component.html',
  styleUrls: ['./accounts-add.component.less'],
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [AccountService],
})
export class AccountsAddComponent implements OnInit {
  validateForm: FormGroup;

  constructor(private fb: FormBuilder,
              private as: AccountService,
              private nzMessageService: NzMessageService,
              private router: Router) { }

  /**
   *  提交表单
   */
  submitForm(): void {
    const _that = this;
    for (const i in this.validateForm.controls) {
      this.validateForm.controls[i].markAsDirty();
      this.validateForm.controls[i].updateValueAndValidity();
    }
    // console.log(this.validateForm);
    if (this.validateForm.valid) {
      const data = {
        ...this.validateForm.value,
      };
      this.as.addAccount(data).then(({body}) => {
        // console.log(body);
        if (body && body.status === 'OK') {
          _that.nzMessageService.success('添加成功！');
          _that.router.navigate(['/accounts/account-mana/accounts-list']);

        }
      });
    }
  }

  /**
   * 动态检查值
   */
  updateConfirmValidator(): void {
    /** wait for refresh value */
    Promise.resolve().
      then(
        () => this.validateForm.controls.checkPassword.updateValueAndValidity());
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
  };

  getCaptcha(e: MouseEvent): void {
    e.preventDefault();
  }

  ngOnInit(): void {
    this.validateForm = this.fb.group({
      username: [
        null,
        [
          Validators.required,
          Validators.minLength(6),
          Validators.maxLength(16)
        ]
      ],
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
  }
}
