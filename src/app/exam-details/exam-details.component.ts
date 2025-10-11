import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TitleCasePipe } from '@angular/common';
import { ExamService, ExamData } from '../shared/services/exam.service';
import { SquareComponent } from '../shared/square/square.component';
import { ExamTimerComponent } from '../shared/exam-timer/exam-timer.component';
import { MessageService } from '../shared/services/message.service';


@Component({
  selector: 'la-exam-details',
  standalone: true,
  imports: [SquareComponent, TitleCasePipe, CommonModule, FormsModule, ExamTimerComponent],
  templateUrl: './exam-details.component.html',
  styleUrls: ['./exam-details.component.scss']
})
export class ExamDetailsComponent implements OnInit {
  facultyName!: string;
  subject!: string;
  year!: number;
  examData: ExamData | null = null;
  showAnswers: boolean[] = [];
  timeUpOverlay: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private examService: ExamService,
    private messageService: MessageService
  ) { }

  ngOnInit(): void {
    this.facultyName = this.route.snapshot.paramMap.get('faculty') || '';
    this.subject = this.normalizeKey(this.route.snapshot.paramMap.get('subject') || '');
    this.year = Number(this.route.snapshot.paramMap.get('year'));

    this.examData = this.examService.getExam(this.facultyName, this.subject, this.year);
    this.showAnswers = this.examData ? Array(this.examData.questions.length).fill(false) : [];
  }

  onTimeUp() {
    this.timeUpOverlay = true;
  }
  goBack(): void {
    this.router.navigate(['/rokovi', this.facultyName, this.subject]);
  }

  getOptionLabel(index: number): string {
    return ['A)', 'B)', 'C)', 'D)'][index] || '';
  }

  toggleAnswerVisibility(index: number): void {
    this.showAnswers[index] = !this.showAnswers[index];
  }

  private normalizeKey(value: string): string {
    return value.toLowerCase().trim()
      .replace(/\s+/g, '-')
      .replace(/č/g, 'c')
      .replace(/ć/g, 'c')
      .replace(/š/g, 's')
      .replace(/ž/g, 'z')
      .replace(/đ/g, 'dj');
  }
}
