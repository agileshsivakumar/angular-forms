import { Injectable } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';
import { Observable, Subject } from 'rxjs';
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

  constructor(private router: Router) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationStart) {
        this.alertSubject.next();
      }
    });
  }

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
