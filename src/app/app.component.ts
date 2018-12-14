/*CORE*/
import {ChangeDetectorRef, Component, OnInit, OnDestroy} from '@angular/core';
import {Subscription} from 'rxjs';
/*SERVICES*/
import {LayoutService} from './services/layout.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit, OnDestroy {

  isPageLoading = false;
  private _sub$: Subscription;

  constructor(private _layoutService: LayoutService,
              private _cdr: ChangeDetectorRef) {
  }

  ngOnInit(): void {
    this._sub$ = this._layoutService.isPageLoading.subscribe((state: boolean) => {
      this.isPageLoading = state;
      this._cdr.detectChanges();
    });
  }

  ngOnDestroy(): void {
    this._sub$.unsubscribe();
  }
}
