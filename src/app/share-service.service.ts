import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class ShareService {
  private formData = new BehaviorSubject<any>('');
  formData$ = this.formData.asObservable();

  setFormData(emailForm: any) {
    this.formData.next(emailForm);
  }
}
