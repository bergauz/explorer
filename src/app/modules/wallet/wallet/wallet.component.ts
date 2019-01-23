/*CORE*/
import {Component, DoCheck, OnInit} from '@angular/core';

@Component({
  selector: 'app-wallet',
  templateUrl: './wallet.component.html',
  styleUrls: ['./wallet.component.scss']
})
export class WalletComponent implements OnInit, DoCheck {

  browserPrivateMode = true;

  private _IEBrowser: number;
  private _operaBrowser: number;
  private _chromeBrowser: number;
  private _firefoxBrowser: number;

  constructor() { }

  ngOnInit() {
    this._firefoxBrowser = navigator.userAgent.search(/Firefox/i);
    this._chromeBrowser = navigator.userAgent.search(/Chrome/i);
    this._operaBrowser = navigator.userAgent.search(/OPR/i);
    this._IEBrowser = navigator.userAgent.search(/NET/i);

    if (this._chromeBrowser > 0 || this._operaBrowser > 0) {
      this.detectChrome();
      setTimeout(() => this.ngDoCheck(), 1000);
    }
    if (this._firefoxBrowser > 0) {
      this.detectFirefox();
    }
    if (this._IEBrowser > 0) {
      this.detectIE();
    }
  }

  ngDoCheck(): void {}

  detectChrome(): void {
    const requestFS = (<any>window).RequestFileSystem || (<any>window).webkitRequestFileSystem;
    if (requestFS) {
      requestFS((<any>window).TEMPORARY, 100, () => this.browserPrivateMode = false, () => this.browserPrivateMode = true);
    }
  }

  detectFirefox(): void {
    const db = indexedDB.open('test');
    db.onerror = () => this.browserPrivateMode = true;
    db.onsuccess = () => this.browserPrivateMode = false;
  }

  detectIE(): void {
    if (!window.indexedDB && ((<any>window).PointerEvent || (<any>window).MSPointerEvent)) {
      this.browserPrivateMode = true;
    }
    this.browserPrivateMode = false;
  }

  /*TODO*/
  /*SAFARI*/
  /*const storage = window.sessionStorage;
  try {
    storage.setItem("someKeyHere", "test");
    storage.removeItem("someKeyHere");
  } catch (e) {
    if (e.code === DOMException.QUOTA_EXCEEDED_ERR && storage.length === 0) {
      this.browserPrivateMode = true;
    }
    this.browserPrivateMode = false;
  }*/


}
