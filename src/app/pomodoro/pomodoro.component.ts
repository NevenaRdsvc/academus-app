import { CommonModule } from '@angular/common';
import { Component, OnDestroy } from '@angular/core';

import { interval, Subscription } from 'rxjs';

import { HeaderComponent } from '../shared/header/header.component';
import { SquareComponent } from '../shared/square/square.component';

@Component({
  selector: 'la-pomodoro',
  standalone: true,
  imports: [CommonModule, SquareComponent, HeaderComponent],
  templateUrl: './pomodoro.component.html',
  styleUrls: ['./pomodoro.component.scss']
})
export class PomodoroComponent implements OnDestroy {
  workDuration = 25;
  breakDuration = 5;
  remainingSeconds = this.workDuration * 60;
  timerRunning = false;
  onBreak = false;

  private timerSubscription: Subscription | null = null;

  selectMode(breakMode: boolean) {
    this.onBreak = breakMode;
    this.resetTimer();
  }

  showInfo = false;

  toggleInfo() {
    this.showInfo = !this.showInfo;
  }

  startPauseTimer() {
    if (this.timerRunning) {
      this.pauseTimer();
    } else {
      this.startTimer();
    }
  }

  private startTimer() {
    if (!this.timerSubscription) {
      this.timerSubscription = interval(1000).subscribe(() => this.tick());
    }
    this.timerRunning = true;
  }

  private pauseTimer() {
    this.timerSubscription?.unsubscribe();
    this.timerSubscription = null;
    this.timerRunning = false;
  }

  resetTimer() {
    this.pauseTimer();
    this.remainingSeconds = this.onBreak ? this.breakDuration * 60 : this.workDuration * 60;
  }

  private tick() {
    if (this.remainingSeconds > 0) {
      this.remainingSeconds--;
    } else {
      this.toggleMode();
    }
  }

  private toggleMode() {
    this.onBreak = !this.onBreak;
    this.remainingSeconds = this.onBreak ? this.breakDuration * 60 : this.workDuration * 60;
    alert(this.onBreak ? 'Pauza je počela!' : 'Vreme za rad!');
  }

  get displayTime(): string {
    const minutes = Math.floor(this.remainingSeconds / 60).toString().padStart(2, '0');
    const seconds = (this.remainingSeconds % 60).toString().padStart(2, '0');
    return `${minutes}:${seconds}`;
  }

  get progress(): number {
    const total = this.onBreak ? this.breakDuration * 60 : this.workDuration * 60;
    return ((total - this.remainingSeconds) / total) * 100;
  }

  ngOnDestroy() {
    this.pauseTimer();
  }
}
