/*CORE*/
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
/*MODULES*/
import {WalletRoutingModule} from './wallet-routing.module';
import {TabsModule} from '../tabs/tabs.module';
/*COMPONENTS*/
import {WalletMainComponent} from './wallet-main/wallet-main.component';
import {WalletBannerComponent} from './components/wallet-banner/wallet-banner.component';
import {WalletCreateComponent} from './wallet-create/wallet-create.component';
import {WalletSendComponent} from './wallet-send/wallet-send.component';
import {WalletUseComponent} from './wallet-use/wallet-use.component';
import {WalletComponent} from './wallet/wallet.component';
/*SERVICES*/
import {WalletService} from './wallet.service';

@NgModule({
  declarations: [
    WalletComponent,
    WalletBannerComponent,
    WalletMainComponent,
    WalletCreateComponent,
    WalletSendComponent,
    WalletUseComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    TabsModule,
    WalletRoutingModule,
  ],
  providers: [WalletService],
})
export class WalletModule {
}
