/*CORE*/
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
/*SERVICES*/
import { ProgressBarService } from './progress-bar.service';
/*UTILS*/
import { ProgressStateEnum } from './progress-bar.enum';
import { PROGRESS_FILL_PERCENTS } from './progress-bar.constant';

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.scss']
})

export class ProgressBarComponent implements OnInit, OnDestroy {

  fillProgress = PROGRESS_FILL_PERCENTS.initialStepFill;
  fillTransition: number;
  private sub$: Subscription;

  constructor(private progressBarService: ProgressBarService) { }

  ngOnInit(): void {
    const start = ProgressStateEnum.start;
    const final = ProgressStateEnum.final;
    this.sub$ = this.progressBarService.stateProgress$
    .subscribe((stateProgress: ProgressStateEnum) => {
      if (stateProgress === start) {
        this.fillTransition = PROGRESS_FILL_PERCENTS.fillTransitionSeconds;
        this.fillProgress = PROGRESS_FILL_PERCENTS.firstStepFill;
      } else if (stateProgress === final) {
        this.fillProgress = PROGRESS_FILL_PERCENTS.lastStepFill;
        if (this.fillProgress === PROGRESS_FILL_PERCENTS.lastStepFill) {
          setTimeout(() => {
            this.fillTransition = 0;
            this.fillProgress = PROGRESS_FILL_PERCENTS.initialStepFill;
          }, 1000);
        }
      }
    });
  }

  ngOnDestroy(): void {
    this.sub$.unsubscribe();
  }
}
