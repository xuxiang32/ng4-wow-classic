import { Injectable } from '@angular/core';
import {HttpServiceService} from './http-service.service';

@Injectable()
export class AccountService {

  constructor(private httpServiceService: HttpServiceService) { }
  getList (data) {
    return this.httpServiceService.postJson('/api/account/getList', data, null);
  }
  addAccount (data) {
    return this.httpServiceService.postJson('/api/account/addAccount', data, null);
  }
}
