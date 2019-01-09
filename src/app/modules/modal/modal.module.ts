import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalComponent } from './modal.component';
import { ModalContentComponent } from './modal-content/modal-content.component';

@NgModule({
  declarations: [ModalComponent, ModalContentComponent],
  entryComponents: [ModalContentComponent],
  imports: [CommonModule],
  exports: [ModalComponent]
})

export class ModalModule { }
