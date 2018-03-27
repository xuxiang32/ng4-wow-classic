import { Component, OnInit, ViewEncapsulation, ChangeDetectionStrategy } from '@angular/core';
import {AccountService} from '../../../../service/account.service';

@Component({
  selector: 'app-accounts-list',
  templateUrl: './accounts-list.component.html',
  styleUrls: ['./accounts-list.component.less'],
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [AccountService]
})
export class AccountsListComponent implements OnInit {

  public data =  [];

  constructor(private accountService: AccountService) { }

  ngOnInit() {
    // 获取页面数据
    this.getList();
  }

  /**
   * 获取数据
   */
  private getList (): void {
    this.accountService.getList({}).then(({body}) => {
      // console.log(body);
      this.data = body;
    });
  }

}
