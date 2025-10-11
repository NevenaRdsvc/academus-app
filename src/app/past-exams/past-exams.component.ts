import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ExamService } from '../shared/services/exam.service';
import { CommonModule, Location, TitleCasePipe } from '@angular/common';
import { SquareComponent } from '../shared/square/square.component';
import { HeaderComponent } from '../shared/header/header.component';

@Component({
  selector: 'la-past-exams',
  standalone: true,
  imports: [CommonModule, SquareComponent, TitleCasePipe, HeaderComponent],
  templateUrl: './past-exams.component.html',
  styleUrls: ['./past-exams.component.scss']
})
export class PastExamsComponent implements OnInit {
  @Input() selectedFaculty!: string;
  @Input() selectedSubject!: string;
  availableYears: number[] = [];
  backRoute: string = '/';

  constructor(
    private route: ActivatedRoute,
    private examService: ExamService,
    private location: Location,
    private router: Router
  ) { }

  ngOnInit(): void {
    if (!this.selectedFaculty || !this.selectedSubject) {
      this.route.params.subscribe(params => {
        this.selectedFaculty = params['faculty'];
        this.selectedSubject = params['subject'];
        this.getYears();
      });
    } else {
      this.getYears();
    }

    const previousUrl = this.location.path();
    this.backRoute = previousUrl || '/ucenje';
  }

  getYears(): void {
    if (!this.selectedFaculty || !this.selectedSubject) return;
    this.availableYears = this.examService.getAvailableYears(this.selectedFaculty, this.selectedSubject);
  }

  goToExamDetails(year: number) {
    if (!this.selectedFaculty || !this.selectedSubject) return;

    const normalizedFaculty = this.normalizeKey(this.selectedFaculty);
    const normalizedSubject = this.normalizeKey(this.selectedSubject);

    this.router.navigate(['/rokovi', normalizedFaculty, normalizedSubject, year]);
  }

  private normalizeKey(value: string): string {
    return value
      .toLowerCase()
      .trim()
      .replace(/\s+/g, '-')
      .replace(/č/g, 'c')
      .replace(/ć/g, 'c')
      .replace(/š/g, 's')
      .replace(/ž/g, 'z')
      .replace(/đ/g, 'dj');
  }
}
