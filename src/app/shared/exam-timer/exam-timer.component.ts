import { Component, Input, Output, EventEmitter, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'la-exam-timer',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './exam-timer.component.html',
  styleUrls: ['./exam-timer.component.scss']
})
export class ExamTimerComponent implements OnDestroy {
  @Input() duration: number = 0;
  @Output() timeUp = new EventEmitter<void>();

  userMinutes: number = 40;
  remainingTime: number = 0;
  isRunning: boolean = false;
  started: boolean = false;
  interval: any;

  get formattedTime(): string {
    const minutes = Math.floor(this.remainingTime / 60);
    const seconds = this.remainingTime % 60;
    const pad = (num: number) => num.toString().padStart(2, '0');
    return `${pad(minutes)}:${pad(seconds)}`;
  }

  startExam() {
    if (this.userMinutes < 1) return;
    this.remainingTime = this.userMinutes * 60;
    this.started = true;
    this.startTimer();
  }

  startTimer() {
    if (this.isRunning || this.remainingTime <= 0) return;
    this.isRunning = true;
    this.interval = setInterval(() => {
      if (this.remainingTime > 0) {
        this.remainingTime--;
      } else {
        this.stopTimer();
        this.timeUp.emit();
      }
    }, 1000);
  }

  stopTimer() {
    clearInterval(this.interval);
    this.isRunning = false;
  }

  resetTimer() {
    this.stopTimer();
    this.remainingTime = this.userMinutes * 60;
  }

  toggleTimer() {
    if (this.isRunning) {
      this.stopTimer();
    } else {
      this.startTimer();
    }
  }

  ngOnDestroy(): void {
    clearInterval(this.interval);
  }
}
