import {Routes, RouterModule} from '@angular/router';
import {HomeComponent} from '../pages/home/home.component';
import {AccountsListComponent} from '../pages/accounts/account-mana/accounts-list/accounts-list.component';
import {AccountsAddComponent} from '../pages/accounts/account-mana/accounts-add/accounts-add.component';

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
          }
        ]
      }
    ]
  }
];
