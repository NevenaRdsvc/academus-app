import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ExamListComponent } from '../exam-list/exam-list.component';
import { Faculty, FacultyService } from '../shared/services/faculty.service';
import { SquareComponent } from '../shared/square/square.component';

@Component({
  selector: 'la-learning',
  standalone: true,
  imports: [CommonModule, SquareComponent, ExamListComponent],
  templateUrl: './learning.component.html',
  styleUrls: ['./learning.component.scss']
})
export class LearningComponent implements OnInit {
  selectedFaculties: Faculty[] = [];

  bannerImages: string[] = [
    'assets/images/banner-2.png',
    'assets/images/banner-3.png',
    'assets/images/banner-4.png'
  ];

  constructor(
    private facultyService: FacultyService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.facultyService.selectedFaculties$.subscribe(faculties => {
      faculties.forEach(f => {

        if (!f.banner) {
          const index = Math.floor(Math.random() * this.bannerImages.length);
          f.banner = this.bannerImages[index];
        }
      });

      this.selectedFaculties = faculties;

      this.route.queryParams.subscribe(params => {
        const facultyName = params['fakultet'];
        if (facultyName) {
          this.selectedFaculties = faculties.filter(f =>
            f.name.toLowerCase() === facultyName.toLowerCase()
          );
        }
      });
    });
  }

  getRandomBanner(): string {
    const index = Math.floor(Math.random() * this.bannerImages.length);
    return this.bannerImages[index];
  }

  normalizeKey(value: string): string {
    return value.toLowerCase().trim()
      .replace(/\s+/g, '-')
      .replace(/č/g, 'c')
      .replace(/ć/g, 'c')
      .replace(/š/g, 's')
      .replace(/ž/g, 'z')
      .replace(/đ/g, 'dj');
  }
}
