import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { Alert } from '../_models/alert';

/**
 * @ngdoc Alert service
 *
 * @description
 * Manage alerts.
 */
@Injectable({
  providedIn: 'root'
})
export class AlertService {
  private alertSubject = new Subject<Alert>();

  /**
   * @ngdoc AlertService#push
   *
   * @description
   * Push an alert.
   *
   * @param alert Object to create the alert.
   *
   */
  push(alert: Alert) {
    this.alertSubject.next(alert);
  }

  get(): Observable<Alert> {
    return this.alertSubject.asObservable();
  }
}
