import { Component, OnInit, ViewEncapsulation, ChangeDetectionStrategy } from '@angular/core';
import {AccountService} from '../../../../service/account.service';
import {NzMessageService} from 'ng-zorro-antd';
import {Router} from '@angular/router';

@Component({
  selector: 'app-accounts-list',
  templateUrl: './accounts-list.component.html',
  styleUrls: ['./accounts-list.component.less'],
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [AccountService]
})
export class AccountsListComponent implements OnInit {

  data =  [];

  constructor(private accountService: AccountService,
              private nzMessageService: NzMessageService,
              private router: Router) { }

  ngOnInit() {
    // 获取页面数据
    this.getList();
  }

  /**
   * 获取数据
   */
  getList (): void {
    const _that = this;
    this.accountService.getList({}).then(({body}) => {
      // console.log(body);
      _that.data = body;
    });
  }

  /**
   * 确认删除
   */
  confirm (id): void {
    console.log(id);
    const _that = this;
    this.accountService.delAccount({
      id: id
    }).then(({body}) => {
      if (body.status === 'OK') {
        _that.nzMessageService.success('删除成功！');
        _that.getList();
      }
    });
  }

  /**
   * 更改密码
   */
  changePassWord (id): void {
    console.log(id);
    this.router.navigate(['/accounts/account-mana/accounts-changpwd/' + id]);
  }

}
