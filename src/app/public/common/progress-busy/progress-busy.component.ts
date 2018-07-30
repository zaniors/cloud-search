import { Component, OnInit } from '@angular/core';
import { timer, Subscription, Observable } from 'rxjs';
import { map, tap, delay, takeWhile } from 'rxjs/operators';
import { EventBusService } from '../../service/bus-event.service';

@Component({
  selector: 'app-progress-busy',
  templateUrl: './progress-busy.component.html',
  styleUrls: ['./progress-busy.component.scss']
})
export class ProgressBusyComponent implements OnInit {
  progressValue = 0;
  loading = false;
  progress$: Subscription;
  constructor(
    private eventBusService: EventBusService,
  ) {
    this.eventBusService.progressLoading
      .subscribe(loading => {
        this.loading = loading;
        this.update();
      });
  }

  ngOnInit() {
  }

  private initProgressBar(): Observable<number> {
    return timer(0, 100).pipe(
      map(_ => this.progressValue += 5),
      takeWhile(val => val <= 90)
    );
  }

  private revert(): void {
    this.progressValue = 0;
    // 防止progress$未被订阅，导致报错
    if (this.progress$ && !this.progress$.closed) {
      this.progress$.unsubscribe();
    }
  }

  private update(): void {
    const callback = this.loading ? () => {
      this.progress$ = this.initProgressBar().subscribe();
    } : () => {
      this.revert();
    };
    return callback();
  }

}
