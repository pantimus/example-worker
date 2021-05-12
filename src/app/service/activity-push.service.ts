import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ActivityPushService {
  constructor() {}

  addPushSubscriber(sub: any): Observable<any> {
    return sub;
  }
}
