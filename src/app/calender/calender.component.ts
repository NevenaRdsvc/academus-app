import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SquareComponent } from '../shared/square/square.component';

interface EventItem {
  date: string;
  title: string;
  color: string;
  editing?: boolean;
}

@Component({
  selector: 'la-calender',
  standalone: true,
  imports: [CommonModule, FormsModule, SquareComponent],
  templateUrl: './calender.component.html',
  styleUrls: ['./calender.component.scss']
})
export class CalenderComponent implements OnInit {
  bgColor: string = '#F7F9FA';
  events: EventItem[] = [];
  newTitle: string = '';
  newColor: string = '#2c80fc';
  showColors = false;

  today = new Date();
  currentMonth = this.today.getMonth();
  currentYear = this.today.getFullYear();
  monthDays: number[] = [];
  monthName: string = '';
  selectedDay: number | null = null;

  pastelColors = ['#FF6B6B', '#FFA94D', '#FFD93D', '#6BCB77', '#4D96FF', '#9D4EDD'];

  monthNames = [
    'Januar', 'Februar', 'Mart', 'April', 'Maj', 'Jun',
    'Jul', 'Avgust', 'Septembar', 'Oktobar', 'Novembar', 'Decembar'
  ];

  ngOnInit() {
    const saved = localStorage.getItem('events');
    if (saved) this.events = JSON.parse(saved);
    this.generateMonth();
    this.selectedDay = this.today.getDate();
  }

  generateMonth() {
    const daysInMonth = new Date(this.currentYear, this.currentMonth + 1, 0).getDate();
    this.monthDays = Array.from({ length: daysInMonth }, (_, i) => i + 1);
    this.monthName = this.monthNames[this.currentMonth];


    if (!this.selectedDay || this.selectedDay > daysInMonth) {
      this.selectedDay = 1;
    }
  }

  getLighterColor(hex: string): string {
    return this.pastelColors.includes(hex) ? hex : hex;
  }

  selectDate(day: number) {
    this.selectedDay = day;
  }

  getDateString(day: number, month: number, year: number): string {
    const m = (month + 1).toString().padStart(2, '0');
    const d = day.toString().padStart(2, '0');
    return `${year}-${m}-${d}`;
  }

  addEvent() {
    if (this.selectedDay === null || !this.newTitle.trim()) return;

    const dateStr = this.getDateString(this.selectedDay, this.currentMonth, this.currentYear);
    this.events.push({
      date: dateStr,
      title: this.newTitle.trim(),
      color: this.newColor,
      editing: false
    });

    this.saveEvents();
    this.newTitle = '';
    this.newColor = '#2c80fc';
    this.showColors = false;
  }

  getEventsForDay(day: number): EventItem[] {
    const dateStr = this.getDateString(day, this.currentMonth, this.currentYear);
    return this.events.filter(e => e.date === dateStr);
  }

  toggleColorPicker() {
    this.showColors = !this.showColors;
  }

  selectColor(color: string) {
    this.newColor = color;
    this.showColors = false;
  }

  deleteEvent(event: EventItem) {
    const index = this.events.indexOf(event);
    if (index > -1) this.events.splice(index, 1);
    this.saveEvents();
  }

  saveEvents() {
    localStorage.setItem('events', JSON.stringify(this.events));
  }

  prevMonth() {
    if (this.currentMonth === 0) {
      this.currentMonth = 11;
      this.currentYear--;
    } else {
      this.currentMonth--;
    }
    this.generateMonth();
  }

  nextMonth() {
    if (this.currentMonth === 11) {
      this.currentMonth = 0;
      this.currentYear++;
    } else {
      this.currentMonth++;
    }
    this.generateMonth();
  }
}
