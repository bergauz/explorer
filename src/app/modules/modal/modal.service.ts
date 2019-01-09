/*CORE*/
import { Injectable } from '@angular/core';
import {BehaviorSubject, Subject} from 'rxjs';
/*UTILS*/
import {IModalContent} from './modal.interface';

@Injectable({
  providedIn: 'root'
})

export class ModalService {

  blackoutState$: Subject<any> = new Subject<any>();
  modalContent$: BehaviorSubject<IModalContent> = new BehaviorSubject<IModalContent>({title: '', content: ''});

  constructor() {
  }
}
