/*CORE*/
import {Injectable} from '@angular/core';
import {BehaviorSubject, Subject} from 'rxjs';
/*MODELS*/
import {ThemeSettings} from '../models/theme_settings.model';
/*UTILS*/
import {THEME_SETTINGS} from '../utils/constants';

@Injectable({
  providedIn: 'root',
})
export class LayoutService {
  isPageLoading: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  themeColor: BehaviorSubject<string>;
  themeSettings: ThemeSettings;
  mobileMenuState: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  mobileSearchState: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  browserPrivateMode: boolean;
  privateMode$: Subject<boolean> = new Subject<boolean>();

  constructor() {
    this.privateMode$.subscribe(value => this.browserPrivateMode = value);
    this.isPrivateMode();
    const themeSettings = localStorage.getItem('THEME_SETTINGS');
    if (themeSettings) {
      this.themeSettings = JSON.parse(themeSettings);
    } else {
      localStorage.setItem('THEME_SETTINGS', JSON.stringify(THEME_SETTINGS));
      this.themeSettings = THEME_SETTINGS;
    }
    this.themeColor = new BehaviorSubject<string>(this.themeSettings.color);

    this.themeColor.subscribe(value => {
      document.body.classList.remove('dark', 'light');
      document.body.classList.add(value);
      this.themeSettings.color = value;
      localStorage.setItem('THEME_SETTINGS', JSON.stringify(this.themeSettings));
    });
  }

  toggleLoading() {
    this.isPageLoading.next(!this.isPageLoading.value);
  }

  onLoading() {
    this.isPageLoading.next(true);
  }

  offLoading() {
    this.isPageLoading.next(false);
  }

  isPrivateMode(): void {
    const firefoxBrowser = navigator.userAgent.search(/Firefox/) > -1;
    const chromeBrowser = navigator.userAgent.search(/Chrome/) > -1;
    const operaBrowser = navigator.userAgent.search(/OPR/) > -1;
    const IEBrowser = navigator.userAgent.search(/NET/) > -1;
    const requestFS = (<any>window).RequestFileSystem || (<any>window).webkitRequestFileSystem;

    if (chromeBrowser || operaBrowser && requestFS) {
      requestFS((<any>window).TEMPORARY, 100, () => this.privateMode$.next(false), () => this.privateMode$.next(true));
    }

    if (firefoxBrowser) {
      const db = indexedDB.open('test');
      db.onerror = () => this.privateMode$.next(true);
      db.onsuccess = () => this.privateMode$.next(false);
    }

    if (IEBrowser && !window.indexedDB && ((<any>window).PointerEvent || (<any>window).MSPointerEvent)) {
      this.privateMode$.next(true);
    }
    // others
    this.privateMode$.next(false);
  }
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
