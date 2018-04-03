import { Injectable } from '@angular/core';
import {HttpServiceService} from './http-service.service';

@Injectable()
export class AccountService {

  constructor(private httpServiceService: HttpServiceService) { }
  // 获取账号列表
  getList (data) {
    return this.httpServiceService.postJson('/api/account/getList', data);
  }
  // 添加账户
  addAccount (data) {
    return this.httpServiceService.postJson('/api/account/addAccount', data);
  }
  // 删除账户
  delAccount (data) {
    return this.httpServiceService.postJson('/api/account/delAccount', data);
  }
  // 修改密码
  changePassWord (data) {
    return this.httpServiceService.postJson('/api/account/changePassWord', data);
  }
  // 根据id获取信息
  getUsernameById (data) {
    return this.httpServiceService.postJson('/api/account/getUsernameById', data);
  }
}
