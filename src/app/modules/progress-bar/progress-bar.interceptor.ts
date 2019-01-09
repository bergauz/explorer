/*CORE*/
import {Injectable} from '@angular/core';
import {HttpEvent, HttpEventType, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse} from '@angular/common/http';
import {Observable} from 'rxjs';
import {last, tap} from 'rxjs/operators';
/*SERVICES*/
import {ProgressBarService} from './progress-bar.service';
/*UTILS*/
import {ProgressStateEnum} from './progress-bar.enum';

@Injectable()

export class ProgressBarInterceptor implements HttpInterceptor {

  constructor(private progressBarService: ProgressBarService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(
      tap((event: HttpEvent<HttpEventType>) => {
        if (event.type === HttpEventType.Sent) {
          const start = ProgressStateEnum.start;
          this.setProgressState(start);
        }
      }),
      last(),
      tap((response: HttpResponse<any>) => {
        if (response.ok) {
          const final = ProgressStateEnum.final;
          this.setProgressState(final);
        }
      })
    );
  }

  setProgressState(state: ProgressStateEnum): void {
    this.progressBarService.stateProgress$.next(state);
  }
}
