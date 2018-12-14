/*CORE*/
import { Component, OnInit, OnDestroy } from '@angular/core';
import {fromEvent, Subscription} from 'rxjs';
import {tap, flatMap} from 'rxjs/operators';

@Component({
  selector: 'app-pwa-banner',
  templateUrl: './pwa-banner.component.html',
  styleUrls: ['./pwa-banner.component.scss']
})

export class PwaBannerComponent implements OnInit, OnDestroy {

  toggleBanner = false;
  deferedPrompt: any;

  private _sub$: Subscription;

  constructor() { }

  ngOnInit(): void {
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.register('ngsw-worker.js');
      this.initPrompt();
    }
  }

  initPrompt(): void {
    this._sub$ = fromEvent(window, 'beforeinstallprompt').pipe(
      tap((event) => {
        this.deferedPrompt = event;
        this.toggleBanner = true;
      }),
      flatMap(() => fromEvent(window, 'appinstalled'))
    ).subscribe(() => {
      this.toggleBanner = false;
      this._sub$.unsubscribe();
    });
  }

  installApp(): void {
    this.deferedPrompt.prompt();
    this.toggleBanner = false;
  }

  ngOnDestroy(): void {
    this._sub$.unsubscribe();
  }
}
