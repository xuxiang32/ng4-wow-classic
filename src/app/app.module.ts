import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {NgZorroAntdModule} from 'ng-zorro-antd';
import {RouterModule} from '@angular/router';
import {AppComponent} from './app.component';
import {ROUTES} from './router/router';
import {HomeComponent} from './pages/home/home.component';
import {BaseHeaderComponent} from './modules/base-header/base-header.component';
import {BaseLeftComponent} from './modules/base-left/base-left.component';
import {BaseFooterComponent} from './modules/base-footer/base-footer.component';
import { AccountsListComponent } from './pages/accounts/account-mana/accounts-list/accounts-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BaseHeaderComponent,
    BaseLeftComponent,
    BaseFooterComponent,
    AccountsListComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(ROUTES),
    NgZorroAntdModule.forRoot(),
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
