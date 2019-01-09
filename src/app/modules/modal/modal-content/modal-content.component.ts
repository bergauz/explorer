/*CORE*/
import {Component, OnDestroy, OnInit} from '@angular/core';
import { Subscription } from 'rxjs';
/*SERVICES*/
import { ModalService } from '../modal.service';
import { IModalContent } from '../modal.interface';

@Component({
  selector: 'app-modal-content',
  templateUrl: './modal-content.component.html',
  styleUrls: ['./modal-content.component.scss']
})
export class ModalContentComponent implements OnInit, OnDestroy {

  modalContent: IModalContent;
  private _sub$: Subscription;

  constructor(private _modalService: ModalService) { }

  ngOnInit() {
    this._sub$ = this._modalService.modalContent$.subscribe(content => {
      this.modalContent = content;
    });
  }

  hideBlackout(): void {
    this._modalService.blackoutState$.next();
  }

  ngOnDestroy(): void {
    this._sub$.unsubscribe();
  }
}
