import { Component, OnInit, ViewEncapsulation, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-base-footer',
  templateUrl: './base-footer.component.html',
  styleUrls: ['./base-footer.component.less'],
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BaseFooterComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
