import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PwaBannerComponent } from './pwa-banner.component';

@NgModule({
  declarations: [PwaBannerComponent],
  imports: [CommonModule],
  exports: [PwaBannerComponent]
})
export class PwaBannerModule { }
