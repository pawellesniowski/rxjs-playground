import { Injectable } from '@angular/core';
import { delay, Observable, of, tap, timeout } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DurumService {
  constructor() {}

  createDurum$(orderId: number): Observable<string> {
    console.log('CREATING ', orderId);
    return of(`Creating durum for Order nr ${orderId}`).pipe(
      delay(2000),
      tap(() => console.log(`READY: ${orderId}`))
    );
  }
}
