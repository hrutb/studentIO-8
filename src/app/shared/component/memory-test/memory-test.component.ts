import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-memory-test',
  templateUrl: './memory-test.component.html'
})
export class MemoryTestComponent implements OnInit, OnDestroy {

  intervalId: any;
  count = 0;

  ngOnInit(): void {
    this.startTimer();
  }

  startTimer(): void {
    this.intervalId = setInterval(() => {
      this.count++;
      console.log('Running...', this.count);
    }, 100);
  }

  ngOnDestroy(): void {
   clearInterval(this.intervalId);
    console.log('Interval cancelled');
  }
}
