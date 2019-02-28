import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-wallet-banner',
  templateUrl: './wallet-banner.component.html',
  styleUrls: ['./wallet-banner.component.scss']
})
export class WalletBannerComponent implements OnInit {

  toggleBanner = true;

  constructor() { }

  ngOnInit() {
  }

}
