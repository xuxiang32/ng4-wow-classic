import {Routes, RouterModule} from '@angular/router';
import {HomeComponent} from '../pages/home/home.component';
import {AccountsListComponent} from '../pages/accounts/account-mana/accounts-list/accounts-list.component';
import {AccountsAddComponent} from '../pages/accounts/account-mana/accounts-add/accounts-add.component';
import {AccountChangpwdComponent} from '../pages/accounts/account-mana/account-changpwd/account-changpwd.component';
import { EquipListComponent } from '../pages/items/items-mana/equip-list/equip-list.component';
import { ConsumableListComponent } from '../pages/items/items-mana/consumable-list/consumable-list.component';
import { NpcListComponent } from '../pages/npc/items-mana/npc-list/npc-list.component';
import { AccountsBannedListComponent } from '../pages/accounts/account-mana/accounts-banned-list/accounts-banned-list.component';
import { ServerListComponent } from '../pages/accounts/account-mana/server-list/server-list.component';

export const ROUTES: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'accounts',
    children: [
      {
        path: 'account-mana',
        children: [
          {
            path: 'accounts-list',
            component: AccountsListComponent
          },
          {
            path: 'accounts-add',
            component: AccountsAddComponent
          },
          {
            path: 'accounts-changpwd/:id',
            component: AccountChangpwdComponent
          },
          {
            path: 'accounts-banned-list',
            component: AccountsBannedListComponent
          },
          {
            path: 'server-list',
            component: ServerListComponent
          }
        ]
      }
    ]
  },
  {
    path: 'items',
    children: [
      {
        path: 'items-mana',
        children: [
          {
            path: 'equip-list',
            component: EquipListComponent
          },
          {
            path: 'consumable-list',
            component: ConsumableListComponent
          }
        ]
      }
    ]
  },
  {
    path: 'npc',
    children: [
      {
        path: 'npc-mana',
        children: [
          {
            path: 'npc-list',
            component: NpcListComponent
          }
        ]
      }
    ]
  }
];
