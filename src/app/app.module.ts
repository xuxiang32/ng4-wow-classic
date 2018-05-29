import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {NgZorroAntdModule, NzModalService} from 'ng-zorro-antd';
import {RouterModule} from '@angular/router';
import {AppComponent} from './app.component';
import {ROUTES} from './router/router';
import {HttpServiceService} from './service/http-service.service';
import {HomeComponent} from './pages/home/home.component';
import {BaseHeaderComponent} from './modules/base-header/base-header.component';
import {BaseLeftComponent} from './modules/base-left/base-left.component';
import {BaseFooterComponent} from './modules/base-footer/base-footer.component';
import { AccountsListComponent } from './pages/accounts/account-mana/accounts-list/accounts-list.component';
import { AccountsAddComponent } from './pages/accounts/account-mana/accounts-add/accounts-add.component';
import {AccountChangpwdComponent} from './pages/accounts/account-mana/account-changpwd/account-changpwd.component';
import { EquipListComponent } from './pages/items/items-mana/equip-list/equip-list.component';
import { ConsumableListComponent } from './pages/items/items-mana/consumable-list/consumable-list.component';
import { NpcListComponent } from './pages/npc/items-mana/npc-list/npc-list.component';
import { AccountsBannedListComponent } from './pages/accounts/account-mana/accounts-banned-list/accounts-banned-list.component';
import { ServerListComponent } from './pages/accounts/account-mana/server-list/server-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BaseHeaderComponent,
    BaseLeftComponent,
    BaseFooterComponent,
    AccountsListComponent,
    AccountsAddComponent,
    AccountChangpwdComponent,
    EquipListComponent,
    ConsumableListComponent,
    NpcListComponent,
    AccountsBannedListComponent,
    ServerListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(ROUTES),
    NgZorroAntdModule.forRoot(),
  ],
  bootstrap: [AppComponent],
  providers: [HttpServiceService, NzModalService]
})
export class AppModule {}
