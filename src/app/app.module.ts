/*CORE*/
import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ServiceWorkerModule} from '@angular/service-worker';
import {environment} from '../environments/environment';
/*COMPONENTS*/
import {AppComponent} from './app.component';
import {BlockComponent} from './scenes/block/block.component';
import {TransactionComponent} from './scenes/transaction/transaction.component';
import {AddressComponent} from './scenes/address/address.component';
import {HomeComponent} from './scenes/home/home.component';
import {PageNotFoundComponent} from './scenes/page-not-found/page-not-found.component';
import {RichlistComponent} from './scenes/richlist/richlist.component';
import {HeaderComponent} from './components/header/header.component';
import {SearchComponent} from './components/search/search.component';
import {LoaderComponent} from './components/loader/loader.component';
import {PaginationComponent} from './components/pagination/pagination.component';
import {MobileMenuComponent} from './components/mobile-menu/mobile-menu.component';
import {ToggleSwitchComponent} from './components/toggle-switch/toggle-switch.component';
import {MobileHeaderComponent} from './components/mobile-header/mobile-header.component';
import {MainTopComponent} from './components/main-top/main-top.component';
import {TableComponent} from './components/table/table.component';
import {CardsHolderComponent} from './components/cards-holder/cards-holder.component';
// import {SettingsComponent} from './scenes/settings/settings.component';
import {InfoComponent} from './components/info/info.component';
import {ContractComponent} from './scenes/contract/contract.component';
/*SERVICES*/
import {ApiService} from './services/api.service';
import {CommonService} from './services/common.service';
import {LayoutService} from './services/layout.service';
import {ViewportSizeModule} from './modules/viewport-size/viewport-size.module';
/*MODULES*/
import {TabsModule} from './modules/tabs/tabs.module';
import {PipesModule} from './modules/pipes.module';
import {DirectiveModule} from './directives/directives.module';
import {SliderModule} from './modules/slider/slider.module';
import {ToastrModule} from './modules/toastr/toastr.module';
import {PwaBannerModule} from './modules/pwa-banner/pwa-banner.module';
import {ProgressBarModule} from './modules/progress-bar/progress-bar.module';
import {ModalModule} from './modules/modal/modal.module';
/*PIPES*/
import {TimeAgoPipe} from 'time-ago-pipe';
/*UTILS*/
import {APP_ROUTES} from './utils/routes';
import {APP_BASE_HREF} from '@angular/common';
import {VIEWPORT_SIZES} from './modules/viewport-size/contants';

@NgModule({
  declarations: [
    AppComponent,
    BlockComponent,
    TransactionComponent,
    AddressComponent,
    HomeComponent,
    PageNotFoundComponent,
    TimeAgoPipe,
    RichlistComponent,
    HeaderComponent,
    SearchComponent,
    LoaderComponent,
    PaginationComponent,
    /*SettingsComponent,*/
    ToggleSwitchComponent,
    MobileHeaderComponent,
    MobileMenuComponent,
    InfoComponent,
    ContractComponent,
    MainTopComponent,
    TableComponent,
    CardsHolderComponent
  ],
  imports: [
    RouterModule.forRoot(APP_ROUTES),
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    PipesModule,
    DirectiveModule,
    ViewportSizeModule.forRoot(VIEWPORT_SIZES),
    TabsModule,
    SliderModule,
    PwaBannerModule,
    ProgressBarModule,
    ModalModule,
    ToastrModule.forRoot(),
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
  ],
  providers: [
    {provide: APP_BASE_HREF, useValue: '/'},
    ApiService,
    CommonService,
    LayoutService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
