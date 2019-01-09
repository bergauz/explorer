/*CORE*/
import {CommonModule} from '@angular/common';
import { NgModule } from '@angular/core';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
/*UTILS*/
import {ProgressBarInterceptor} from './progress-bar.interceptor';
import {ProgressBarComponent} from './progress-bar.component';

@NgModule({
  declarations: [ProgressBarComponent],
  imports: [CommonModule],
  exports: [ProgressBarComponent],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: ProgressBarInterceptor, multi: true }
  ]
})

export class ProgressBarModule {
}
