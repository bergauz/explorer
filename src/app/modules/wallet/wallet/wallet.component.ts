/*CORE*/
import {Component, OnInit} from '@angular/core';
/*SERVICES*/
import {LayoutService} from '../../../services/layout.service';

@Component({
  selector: 'app-wallet',
  templateUrl: './wallet.component.html',
  styleUrls: ['./wallet.component.scss']
})
export class WalletComponent implements OnInit {

  browserPrivateMode: boolean;

  constructor(private _layoutService: LayoutService) {
    this.browserPrivateMode = this._layoutService.browserPrivateMode;
    // isPrivateMode().then((value: boolean) => this.browserPrivateMode = value);
  }

  ngOnInit() {}
}
