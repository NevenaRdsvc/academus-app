import { Injectable } from '@angular/core';

import { BehaviorSubject } from 'rxjs';

export interface Faculty {
  name: string;
  type: 'technical' | 'medical' | 'pharmacy' | 'art' | 'sports' | 'social' | 'economic';
  image: string;
  location: string;
  entranceExamSubjects: string[];
  banner?: string;
}

@Injectable({
  providedIn: 'root'
})
export class FacultyService {
  private faculties: Faculty[] = [
  { name: 'Fakultet Organizacionih nauka', type: 'technical', image: '/assets/images/technical1.png', location: 'Beograd', entranceExamSubjects: ['Matematika', 'Opšta kultura'] },
  { name: 'Elektrotehnički Fakultet', type: 'technical', image: '/assets/images/technical2.png', location: 'Novi Sad', entranceExamSubjects: ['Matematika', 'Fizika'] },
  { name: 'Fakultet Tehničkih Nauka', type: 'technical', image: '/assets/images/technical3.png', location: 'Novi Sad', entranceExamSubjects: ['Matematika', 'Fizika'] },
  { name: 'Mašinski Fakultet', type: 'technical', image: '/assets/images/pharm2.png', location: 'Kragujevac', entranceExamSubjects: ['Matematika', 'Fizika'] },
  { name: 'Računarski Fakultet', type: 'technical', image: '/assets/images/pharm3.png', location: 'Beograd', entranceExamSubjects: ['Matematika', 'Opšta kultura'] },
  { name: 'Medicinski Fakultet Beograd', type: 'medical', image: '/assets/images/medical1.png', location: 'Beograd', entranceExamSubjects: ['Biologija', 'Hemija'] },
  { name: 'Medicinski Fakultet Niš', type: 'medical', image: '/assets/images/medical2.png', location: 'Niš', entranceExamSubjects: ['Biologija', 'Hemija'] },
  { name: 'Medicinski Fakultet Čačak', type: 'medical', image: '/assets/images/medical3.png', location: 'Čačak', entranceExamSubjects: ['Biologija', 'Hemija'] },
  { name: 'Farmaceutski Fakultet Beograd', type: 'pharmacy', image: '/assets/images/pharm3.png', location: 'Beograd', entranceExamSubjects: ['Biologija', 'Hemija', 'Matematika'] },
  { name: 'Farmaceutski Fakultet Niš', type: 'pharmacy', image: '/assets/images/technical1.png', location: 'Niš', entranceExamSubjects: ['Biologija', 'Hemija', 'Matematika'] },
  { name: 'Farmaceutski Fakultet Subotica', type: 'pharmacy', image: '/assets/images/technical3.png', location: 'Subotica', entranceExamSubjects: ['Biologija', 'Hemija', 'Matematika'] },

 // dodatni fakulteti sa random postojećim slikama
{ name: 'Fakultet Likovnih Umetnosti', type: 'art', image: '/assets/images/pharm3.png', location: 'Beograd', entranceExamSubjects: ['Likovno', 'Opšta kultura'] },
{ name: 'Fakultet Muzičke Umetnosti', type: 'art', image: '/assets/images/medical2.png', location: 'Beograd', entranceExamSubjects: ['Muzika', 'Teorija muzike'] },
{ name: 'Fakultet Dramskih Umetnosti', type: 'art', image: '/assets/images/technical1.png', location: 'Beograd', entranceExamSubjects: ['Gluma', 'Opšta kultura'] },
{ name: 'Fakultet Sporta Novi Sad', type: 'sports', image: '/assets/images/medical3.png', location: 'Novi Sad', entranceExamSubjects: ['Telesni test', 'Biologija'] },
{ name: 'Fakultet Poljoprivrede Novi Sad', type: 'technical', image: '/assets/images/technical2.png', location: 'Novi Sad', entranceExamSubjects: ['Biologija', 'Hemija'] },
{ name: 'Fakultet Ekonomije Beograd', type: 'economic', image: '/assets/images/pharm2.png', location: 'Beograd', entranceExamSubjects: ['Matematika', 'Ekonomija'] },
{ name: 'Fakultet Ekonomije Novi Sad', type: 'economic', image: '/assets/images/technical3.png', location: 'Novi Sad', entranceExamSubjects: ['Matematika', 'Ekonomija'] },
{ name: 'Fakultet Političkih Nauka', type: 'social', image: '/assets/images/medical1.png', location: 'Beograd', entranceExamSubjects: ['Opšta kultura', 'Pravo'] },
{ name: 'Fakultet Prava Beograd', type: 'social', image: '/assets/images/pharm3.png', location: 'Beograd', entranceExamSubjects: ['Pravo', 'Opšta kultura'] },
{ name: 'Fakultet Prava Novi Sad', type: 'social', image: '/assets/images/technical1.png', location: 'Novi Sad', entranceExamSubjects: ['Pravo', 'Opšta kultura'] },
{ name: 'Fakultet Poljoprivrede Čačak', type: 'technical', image: '/assets/images/medical2.png', location: 'Čačak', entranceExamSubjects: ['Biologija', 'Hemija'] },
{ name: 'Fakultet Tehnologije i Metalurgije', type: 'technical', image: '/assets/images/pharm2.png', location: 'Bor', entranceExamSubjects: ['Hemija', 'Fizika'] },
{ name: 'Fakultet Tehnologije i Tehnike', type: 'technical', image: '/assets/images/technical2.png', location: 'Novi Sad', entranceExamSubjects: ['Matematika', 'Hemija'] },
{ name: 'Fakultet Informatike Niš', type: 'technical', image: '/assets/images/technical3.png', location: 'Niš', entranceExamSubjects: ['Matematika', 'Informatika'] },
{ name: 'Fakultet Menadžmenta Zrenjanin', type: 'economic', image: '/assets/images/pharm3.png', location: 'Zrenjanin', entranceExamSubjects: ['Ekonomija', 'Matematika'] },
{ name: 'Fakultet Tehničkih Nauka', type: 'technical', image: '/assets/images/technical1.png', location: 'Kragujevac', entranceExamSubjects: ['Matematika', 'Fizika'] },
{ name: 'Fakultet Filozofije Beograd', type: 'social', image: '/assets/images/medical1.png', location: 'Beograd', entranceExamSubjects: ['Filozofija', 'Opšta kultura'] },
{ name: 'Fakultet Upravnih Nauka', type: 'social', image: '/assets/images/technical2.png', location: 'Novi Sad', entranceExamSubjects: ['Pravo', 'Opšta kultura'] },
{ name: 'Fakultet Sporta Beograd', type: 'sports', image: '/assets/images/pharm2.png', location: 'Beograd', entranceExamSubjects: ['Telesni test', 'Biologija'] }
  ];

  private selectedFacultiesSubject = new BehaviorSubject<Faculty[]>([]);
  selectedFaculties$ = this.selectedFacultiesSubject.asObservable();

  constructor() { }

  getAllFaculties(): Faculty[] {
    return this.faculties;
  }

  toggleFaculty(faculty: Faculty) {
    const current = this.selectedFacultiesSubject.getValue();
    const exists = current.some(f => f.name === faculty.name);
    if (exists) {
      this.selectedFacultiesSubject.next(current.filter(f => f.name !== faculty.name));
    } else {
      this.selectedFacultiesSubject.next([...current, faculty]);
    }
  }

  isSelected(faculty: Faculty): boolean {
    return this.selectedFacultiesSubject.getValue().some(f => f.name === faculty.name);
  }

  getSelectedFaculties(): Faculty[] {
    return this.selectedFacultiesSubject.getValue();
  }

}
