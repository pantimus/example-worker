import { Component } from '@angular/core';
import { SwPush, SwUpdate } from '@angular/service-worker';
import { ActivityPushService } from './service/activity-push.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'angular-pwa-app';

  readonly VAPID_PUBLIC_KEY =
    'BLQvXeVn_lh3uLUXQubFjS7kuIXuEogzCh_ySe1iCMb4WNmGg5x61x6hMz1Gz3ojBnGjlQHEddmvuISkvmEalCM';

  constructor(
    private swPush: SwPush,
    private activityPushService: ActivityPushService
  ) {}

  subscribeToNotifications() {
    this.swPush
      .requestSubscription({
        serverPublicKey: this.VAPID_PUBLIC_KEY,
      })
      .then((sub) =>
        this.activityPushService.addPushSubscriber(sub).subscribe()
      )
      .catch((err) =>
        console.error('Could not subscribe to notifications', err)
      );
  }
}
