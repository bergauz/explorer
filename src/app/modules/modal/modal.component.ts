/*CORE*/
import {Component, ComponentFactoryResolver, OnDestroy, OnInit, ViewContainerRef, Input} from '@angular/core';
/*SERVICES*/
import {ModalService} from './modal.service';
/*COMPONENTS*/
import {ModalContentComponent} from './modal-content/modal-content.component';
/*UTILS*/
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit, OnDestroy {

  @Input() modalContent;

  private _sub$: Subscription;

  constructor(private _viewContainerRef: ViewContainerRef,
              private _componentFactoryResolver: ComponentFactoryResolver,
              private _modalService: ModalService) { }

  ngOnInit(): void {
    this._modalService.modalContent$.next(this.modalContent);
    this._sub$ = this._modalService.blackoutState$.subscribe(
      () => this.removeModal()
    );
    setTimeout(() => this.getModal(), 3000);
  }

  getModal(): void {
    const modalWindow =  this._componentFactoryResolver.resolveComponentFactory(ModalContentComponent);
    this._viewContainerRef.createComponent(modalWindow);
  }

  removeModal(): void {
    this._viewContainerRef.clear();
  }

  ngOnDestroy(): void {
    this._sub$.unsubscribe();
  }

}
