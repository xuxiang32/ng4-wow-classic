import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {NzModalService} from 'ng-zorro-antd';

@Injectable()
export class HttpServiceService {
  constructor(private httpClient: HttpClient,
              private nzModalService: NzModalService) { }

  postJson (url, params, errHandler) {
    const _that = this;
    // 参数自带header
    const header = {};
    let body = {};
    if (params.header) {
      Object.assign(header, params.header);
    } else {
      ['app', 'action', 'credential', 'fields', 'sort', 'filter'].forEach(function (item) {
        if (!params[item]) { return; }
        header[item] = params[item];
        delete params[item];
      });
    }

    if (params.body && Array.isArray(params.body)) {
      body = params.body;
    } else {
      if (params.body) {
        Object.assign(body, params.body);
      } else {
        Object.assign(body, params);
      }
    }

    const p = new Promise((resolve, reject) => {
      _that.httpClient.post(url, body, {
        headers: header
      }).subscribe((res: any) => {
        console.log(res.header);
        if (res.header && res.header.code === 20000) {
          resolve(res);
        } else {
          _that.nzModalService.error({
            nzTitle: res.header.message
          });
          resolve(res);
        }
      }, error => {
        if (errHandler && typeof errHandler === 'function') {
          errHandler(error.header, error.body);
          reject('内部接口错误');
        } else {
          alert('出错了');
          reject('内部接口错误');
        }
      });
    });
    return p;
  }
}
