import { Component, OnInit, ViewEncapsulation, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-base-left',
  templateUrl: './base-left.component.html',
  styleUrls: ['./base-left.component.less'],
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush,
  preserveWhitespaces: false
})
export class BaseLeftComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
