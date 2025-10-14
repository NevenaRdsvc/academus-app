import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

import { CollectionService } from '../shared/services/collection.service';
import { Faculty } from '../shared/services/faculty.service';

@Component({
  selector: 'la-exam-list',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './exam-list.component.html',
  styleUrls: ['./exam-list.component.scss']
})
export class ExamListComponent {
  @Input() selectedFaculty!: Faculty;
  @Input() subjectName!: string;

  cardItems = [
    { name: 'Zbirka', icon: 'assets/images/medical3.png' },
    { name: 'Rokovi', icon: 'assets/images/medical2.png' },
    { name: 'Flashcards', icon: 'assets/images/medical1.png' },
    { name: 'Beleske', icon: 'assets/images/pharm3.png' }
  ];

  constructor(private router: Router, private collectionService: CollectionService) { }

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

  navigate(cardName: string) {
    if (!this.selectedFaculty || !this.subjectName){
      return;
    }

    const normalizedFaculty = this.normalizeKey(this.selectedFaculty.name);
    const normalizedSubject = this.normalizeKey(this.subjectName);

    switch (cardName) {
      case 'Zbirka':
        this.collectionService.setCurrentFacultyAndSubject(this.selectedFaculty.name, this.subjectName);
        this.router.navigate(['/zbirka']);
        break;
      case 'Beleske':
        this.router.navigate(['/beleske']);
        break;
      case 'Flashcards':
        this.router.navigate(['/flashcards-pocetna']);
        break;
      case 'Rokovi':
        this.router.navigate(['/rokovi', normalizedFaculty, normalizedSubject]);
        break;
    }
  }
}
