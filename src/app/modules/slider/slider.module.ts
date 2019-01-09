/*CORE*/
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
/*COMPONENT*/
import { SliderComponent } from './slider.component';
/*UTILS*/
import { PipesModule } from '../pipes.module';
import {ViewportSizeModule} from '../viewport-size/viewport-size.module';
import {VIEWPORT_SIZES} from '../viewport-size/contants';

@NgModule({
  declarations: [SliderComponent],
  imports: [CommonModule, PipesModule, ViewportSizeModule.forRoot(VIEWPORT_SIZES)],
  exports: [SliderComponent]
})
export class SliderModule { }
