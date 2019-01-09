/*CORE*/
import {Component, Input, OnInit} from '@angular/core';
/*UTILS*/
import {ISliderOptions} from './slider.interface';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']

})

export class SliderComponent implements OnInit {

  @Input() stats: any;
  @Input() options: ISliderOptions = {
    default: 0,
    start: 50,
    step: 50,
    sensitivity: 20
  };

  dots = [1, 2, 3];
  slidePosition: number;

  private _finalPoint: any;
  private _initialPoint: any;
  private _touchOffsetX: number;

  constructor() {
  }

  ngOnInit(): void {
    this.slidePosition = this.options.start;
  }

  touchStart(event: TouchEvent): void {
    this._initialPoint = event.changedTouches[0];
    this._touchOffsetX = this._initialPoint.pageX - this._initialPoint.target.offsetLeft;
  }

  touchEnd(event: TouchEvent): void {
    this._finalPoint = event.changedTouches[0];
    if (-this.options.step !== this.slidePosition &&
      this._finalPoint.pageX - this._initialPoint.pageX < -this.options.sensitivity) {
      this.slidePosition = this.slidePosition - this.options.step;
    } else if (this.options.step !== this.slidePosition &&
      this._finalPoint.pageX - this._initialPoint.pageX > this.options.sensitivity) {
      this.slidePosition = this.slidePosition + this.options.step;
    }
  }

  onClickDot(index: number): void {
    this.slidePosition = this.options.start - this.options.step * index;
  }
}
