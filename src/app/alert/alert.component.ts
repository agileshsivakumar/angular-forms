import { Component, OnInit, OnDestroy } from '@angular/core';
import { AlertService } from './_services/alert.service';
import { Subscription } from 'rxjs';
import { Alert } from './_models/alert';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss']
})
export class AlertComponent implements OnInit, OnDestroy {
  private alertSubscription: Subscription;
  public alert: Alert;

  constructor(private alertService: AlertService) {}

  ngOnInit() {
    this.alertSubscription = this.alertService
      .get()
      .subscribe((newAlert: Alert) => {
        this.alert = newAlert;
      });
  }

  ngOnDestroy() {
    this.alertSubscription.unsubscribe();
  }
}
