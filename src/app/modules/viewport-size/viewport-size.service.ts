/*CORE*/
import {BehaviorSubject, fromEvent} from 'rxjs';
import {debounceTime, distinctUntilChanged} from 'rxjs/operators';
import {Inject, Injectable, NgZone} from '@angular/core';
/*UTILS*/
import {ViewportSizeEnum} from './viewport-size.enum';
import {IConfig} from './config.interface';


@Injectable()
export class ViewportSizeService {
  size$: BehaviorSubject<ViewportSizeEnum> = new BehaviorSubject<ViewportSizeEnum>(null);

  constructor(@Inject('config') private _config: IConfig,
              private _zone: NgZone
  ) {
    this.onWindowResize(window.innerWidth);
    this.initTracker();
  }

  initTracker() {
    this._zone.runOutsideAngular(() => {
      fromEvent(window, 'resize').pipe(
        debounceTime(500),
        distinctUntilChanged()
      ).subscribe((e: any) => {
        this._zone.run(() => {
          this.onWindowResize(e.target.innerWidth);
        });
      });
    });
  }

  onWindowResize = (windowWidth: number) => {
    let currentSize: ViewportSizeEnum;

    if (windowWidth > this._config.small) {
      currentSize = ViewportSizeEnum.large;
    } else {
      currentSize = ViewportSizeEnum.small;
    }
    this.size$.next(currentSize);
  }
}
