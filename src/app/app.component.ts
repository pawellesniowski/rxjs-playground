import { Component, OnInit } from '@angular/core';
import {
  mergeMap,
  concatMap,
  switchMap,
  exhaustMap,
  Observable,
  Subject,
  tap,
} from 'rxjs';
import { DurumService } from './services/durum.service';

interface Order {
  id: number;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  public order$$ = new Subject<Order>();
  order$: Observable<string>;

  constructor(private durumService: DurumService) {}

  ngOnInit() {
    this.order$ = this.order$$.pipe(
      tap((order: Order) => console.log('Ding! Ding! Order nr', order)),
      concatMap((order: Order) => this.durumService.createDurum$(order.id))
    );
  }
}
