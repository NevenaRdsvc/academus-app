import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { FacultiesListComponent } from '../faculties-list/faculties-list.component';
import { InputComponent } from '../shared/input/input.component';
import { SquareComponent } from '../shared/square/square.component';
import { TutorialModalComponent } from '../tutorial-modal/tutorial-modal.component';

@Component({
  selector: 'la-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  standalone: true,
  imports: [
    SquareComponent,
    InputComponent,
    FacultiesListComponent,
    TutorialModalComponent,
    CommonModule,
    FormsModule
  ]
})
export class HomeComponent {
  searchQuery = '';
  selectedCity = '';
  selectedType = '';
  selectedExam = '';
  showFilters = false;
  showTutorial = false;
  filterKey = 0;

  showCityDropdown = false;
  showTypeDropdown = false;
  showExamDropdown = false;

  defaultUsersEmails = ['nevenaradosavljevic@gmail.com'];

  cities = ['Beograd', 'Novi Sad', 'Niš', 'Kragujevac', 'Subotica', 'Čačak', 'Bor', 'Zrenjanin'];

  exams = [
    'Matematika', 'Fizika', 'Biologija', 'Hemija', 'Opšta kultura', 'Pravo',
    'Likovno', 'Muzika', 'Gluma', 'Telesni test', 'Informatika', 'Ekonomija', 'Teorija muzike'
  ];

  toggleFilters() {
    this.showFilters = !this.showFilters;
  }

  applyFilters() {
    this.showFilters = false;
    this.filterKey++;
  }

  resetFilters() {
    this.selectedCity = '';
    this.selectedType = '';
    this.selectedExam = '';
    this.applyFilters();
  }

  toggleCityDropdown() { this.showCityDropdown = !this.showCityDropdown; }
  selectCity(city: string) {
    this.selectedCity = city;
    this.showCityDropdown = false;
  }

  toggleTypeDropdown() { this.showTypeDropdown = !this.showTypeDropdown; }
  selectType(type: string) {
    this.selectedType = type;
    this.showTypeDropdown = false;
  }

  toggleExamDropdown() { this.showExamDropdown = !this.showExamDropdown; }
  selectExam(exam: string) {
    this.selectedExam = exam;
    this.showExamDropdown = false;
  }

  // Tutorial logic
  ngOnInit() {
    const loggedUser = JSON.parse(localStorage.getItem('loggedInUser') || 'null');
    if (loggedUser) {
      const isDefaultUser = this.defaultUsersEmails.includes(loggedUser.email);
      const seen = localStorage.getItem(`tutorialSeen_${loggedUser.email}`) === 'true';
      this.showTutorial = !isDefaultUser && !seen;
    }
  }

  searchFaculties() {
    console.log('Pretraga pokrenuta:', this.searchQuery);
  }

  tutorialFinished() {
    const loggedUser = JSON.parse(localStorage.getItem('loggedInUser')!);
    localStorage.setItem(`tutorialSeen_${loggedUser.email}`, 'true');
    this.showTutorial = false;
  }
}
