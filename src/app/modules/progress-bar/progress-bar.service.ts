import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { ProgressStateEnum } from './progress-bar.enum';

@Injectable({
  providedIn: 'root'
})
export class ProgressBarService {

  stateProgress$: Subject<ProgressStateEnum> = new Subject<ProgressStateEnum>();

  constructor() { }
}
