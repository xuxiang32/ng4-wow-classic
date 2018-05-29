import {
  Component,
  OnInit,
  ViewEncapsulation,
  ChangeDetectionStrategy,
  ViewChild, ElementRef,
} from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';

// import * as $ from 'jquery';

@Component({
  selector: 'app-base-left',
  templateUrl: './base-left.component.html',
  styleUrls: ['./base-left.component.less'],
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush,
  preserveWhitespaces: false,
})
export class BaseLeftComponent implements OnInit {
  @ViewChild('menu') menu: ElementRef;
  menuActive = {
    sub0: false,
    sub1: false,
    sub2: false,
  };
  init: boolean;

  menuLinks = [
    {
      isOpen: false,
      name: '账号管理',
      links: [
        {
          url: '/accounts/account-mana/accounts-list',
          name: '账号列表',
        },
        {
          url: '/accounts/account-mana/accounts-banned-list',
          name: '账号禁用列表',
        },
        {
          url: '/accounts/account-mana/server-list',
          name: '服务器列表',
        },
      ],
    },
    {
      isOpen: false,
      name: '物品管理',
      links: [
        {
          url: '/items/items-mana/equip-list',
          name: '装备管理',
        },
        {
          url: '/items/items-mana/consumable-list',
          name: '消耗品管理',
        },
      ],
    },
    {
      isOpen: false,
      name: 'NPC管理',
      links: [
        {
          url: '/npc/npc-mana/npc-list',
          name: 'NPC管理',
        },
      ],
    },
  ];

  constructor (private router: Router) {}

  ngOnInit () {
  }

  openHandler(index) {
    this.menuLinks[index].isOpen = true;
  }

  ngAfterViewInit() {
    const _that = this;
    this.router.events.subscribe(e => {
      if (e instanceof NavigationEnd) {
        // console.log('prev:', e.url);
        _that.menuLinks.forEach((links, index) => {
          const flag = links.links.some((link) => {
            return link.url === e.url;
          });
          if (flag) {
            _that.openHandler(index);
          }
        });
      }
    });
  }
}
