import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import {
  combineLatest,
  fromEvent,
  map,
  mergeMap,
  Observable,
  of,
  startWith,
  switchMap,
  take,
  tap,
  zip,
} from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  @ViewChild('in1', { static: true }) in1: ElementRef;
  @ViewChild('in2', { static: true }) in2: ElementRef;

  stream1: Observable<any>;
  stream2: Observable<any>;

  streams$: Observable<any>;

  ngOnInit() {
    this.stream1 = fromEvent(this.in1.nativeElement, 'keyup').pipe(
      startWith(null),
      map((e: any) => e?.target?.value)
    );
    this.stream2 = fromEvent(this.in2.nativeElement, 'keyup').pipe(
      startWith(null),
      map((e: any) => e?.target?.value)
    );

    this.streams$ = combineLatest([this.stream1, this.stream2]).pipe(
      tap((val) => console.log('what am I?', val)),
      map(([str1, str2]) => `${str1 || ''} ${str2 || ''}`)
    );
  }
}
