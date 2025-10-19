/* eslint-disable max-len */
import { Injectable } from '@angular/core';

import { BehaviorSubject } from 'rxjs';

export interface Faculty {
  name: string;
  type: 'technical' | 'medical' | 'pharmacy' | 'art' | 'sports' | 'social' | 'economic';
  image: string;
  location: string;
  entranceExamSubjects: string[];
  banner?: string;
  email: string;
  password: string;
}

@Injectable({
  providedIn: 'root'
})
export class FacultyService {
  private faculties: Faculty[] = [
    { name: 'Fakultet Organizacionih nauka', type: 'technical', image: '/assets/images/technical1.png', location: 'Beograd', entranceExamSubjects: ['Matematika', 'Opšta kultura'], email: 'fon@bg.ac.rs', password: 'fon123' },
    { name: 'Elektrotehnički Fakultet', type: 'technical', image: '/assets/images/technical2.png', location: 'Novi Sad', entranceExamSubjects: ['Matematika', 'Fizika'], email: 'etf@edu.rs', password: 'etf123' },
    { name: 'Fakultet Tehničkih Nauka', type: 'technical', image: '/assets/images/technical3.png', location: 'Novi Sad', entranceExamSubjects: ['Matematika', 'Fizika'], email: 'ftn@edu.rs', password: 'ftn123' },
    { name: 'Mašinski Fakultet', type: 'technical', image: '/assets/images/pharm2.png', location: 'Kragujevac', entranceExamSubjects: ['Matematika', 'Fizika'], email: 'masinski@edu.rs', password: 'masinski123' },
    { name: 'Računarski Fakultet', type: 'technical', image: '/assets/images/pharm3.png', location: 'Beograd', entranceExamSubjects: ['Matematika', 'Opšta kultura'], email: 'raf@edu.rs', password: 'raf123' },
    { name: 'Medicinski Fakultet Beograd', type: 'medical', image: '/assets/images/medical1.png', location: 'Beograd', entranceExamSubjects: ['Biologija', 'Hemija'], email: 'medbg@edu.rs', password: 'medbg123' },
    { name: 'Medicinski Fakultet Niš', type: 'medical', image: '/assets/images/medical2.png', location: 'Niš', entranceExamSubjects: ['Biologija', 'Hemija'], email: 'mednis@edu.rs', password: 'mednis123' },
    { name: 'Medicinski Fakultet Čačak', type: 'medical', image: '/assets/images/medical3.png', location: 'Čačak', entranceExamSubjects: ['Biologija', 'Hemija'], email: 'medcacak@edu.rs', password: 'medcacak123' },
    { name: 'Farmaceutski Fakultet Beograd', type: 'pharmacy', image: '/assets/images/pharm3.png', location: 'Beograd', entranceExamSubjects: ['Biologija', 'Hemija', 'Matematika'], email: 'pharmbg@edu.rs', password: 'pharmbg123' },
    { name: 'Farmaceutski Fakultet Niš', type: 'pharmacy', image: '/assets/images/technical1.png', location: 'Niš', entranceExamSubjects: ['Biologija', 'Hemija', 'Matematika'], email: 'pharmnis@edu.rs', password: 'pharmnis123' },
    { name: 'Farmaceutski Fakultet Subotica', type: 'pharmacy', image: '/assets/images/technical3.png', location: 'Subotica', entranceExamSubjects: ['Biologija', 'Hemija', 'Matematika'], email: 'pharmsub@edu.rs', password: 'pharmsub123' },
    { name: 'Fakultet Likovnih Umetnosti', type: 'art', image: '/assets/images/pharm3.png', location: 'Beograd', entranceExamSubjects: ['Likovno', 'Opšta kultura'], email: 'flu@edu.rs', password: 'flu123' },
    { name: 'Fakultet Muzičke Umetnosti', type: 'art', image: '/assets/images/medical2.png', location: 'Beograd', entranceExamSubjects: ['Muzika', 'Teorija muzike'], email: 'fmu@edu.rs', password: 'fmu123' },
    { name: 'Fakultet Dramskih Umetnosti', type: 'art', image: '/assets/images/technical1.png', location: 'Beograd', entranceExamSubjects: ['Gluma', 'Opšta kultura'], email: 'fdu@edu.rs', password: 'fdu123' },
    { name: 'Fakultet Sporta Novi Sad', type: 'sports', image: '/assets/images/medical3.png', location: 'Novi Sad', entranceExamSubjects: ['Telesni test', 'Biologija'], email: 'fsns@edu.rs', password: 'fsns123' },
    { name: 'Fakultet Poljoprivrede Novi Sad', type: 'technical', image: '/assets/images/technical2.png', location: 'Novi Sad', entranceExamSubjects: ['Biologija', 'Hemija'], email: 'poljons@edu.rs', password: 'poljons123' },
    { name: 'Fakultet Ekonomije Beograd', type: 'economic', image: '/assets/images/pharm2.png', location: 'Beograd', entranceExamSubjects: ['Matematika', 'Ekonomija'], email: 'ekonbg@edu.rs', password: 'ekonbg123' },
    { name: 'Fakultet Ekonomije Novi Sad', type: 'economic', image: '/assets/images/technical3.png', location: 'Novi Sad', entranceExamSubjects: ['Matematika', 'Ekonomija'], email: 'ekonns@edu.rs', password: 'ekonns123' },
    { name: 'Fakultet Političkih Nauka', type: 'social', image: '/assets/images/medical1.png', location: 'Beograd', entranceExamSubjects: ['Opšta kultura', 'Pravo'], email: 'fpn@edu.rs', password: 'fpn123' },
    { name: 'Fakultet Prava Beograd', type: 'social', image: '/assets/images/pharm3.png', location: 'Beograd', entranceExamSubjects: ['Pravo', 'Opšta kultura'], email: 'pravobg@edu.rs', password: 'pravobg123' },
    { name: 'Fakultet Prava Novi Sad', type: 'social', image: '/assets/images/technical1.png', location: 'Novi Sad', entranceExamSubjects: ['Pravo', 'Opšta kultura'], email: 'pravons@edu.rs', password: 'pravons123' },
    { name: 'Fakultet Poljoprivrede Čačak', type: 'technical', image: '/assets/images/medical2.png', location: 'Čačak', entranceExamSubjects: ['Biologija', 'Hemija'], email: 'poljocacak@edu.rs', password: 'poljocacak123' },
    { name: 'Fakultet Tehnologije i Metalurgije', type: 'technical', image: '/assets/images/pharm2.png', location: 'Bor', entranceExamSubjects: ['Hemija', 'Fizika'], email: 'ftmbor@edu.rs', password: 'ftmbor123' },
    { name: 'Fakultet Tehnologije i Tehnike', type: 'technical', image: '/assets/images/technical2.png', location: 'Novi Sad', entranceExamSubjects: ['Matematika', 'Hemija'], email: 'fttns@edu.rs', password: 'fttns123' },
    { name: 'Fakultet Informatike Niš', type: 'technical', image: '/assets/images/technical3.png', location: 'Niš', entranceExamSubjects: ['Matematika', 'Informatika'], email: 'info@edu.rs', password: 'info123' },
    { name: 'Fakultet Menadžmenta Zrenjanin', type: 'economic', image: '/assets/images/pharm3.png', location: 'Zrenjanin', entranceExamSubjects: ['Ekonomija', 'Matematika'], email: 'menadzmentzr@edu.rs', password: 'menadzment123' },
    { name: 'Fakultet Tehničkih Nauka', type: 'technical', image: '/assets/images/technical1.png', location: 'Kragujevac', entranceExamSubjects: ['Matematika', 'Fizika'], email: 'ftnkg@edu.rs', password: 'ftnkg123' },
    { name: 'Fakultet Filozofije Beograd', type: 'social', image: '/assets/images/medical1.png', location: 'Beograd', entranceExamSubjects: ['Filozofija', 'Opšta kultura'], email: 'filozofski@edu.rs', password: 'filozofski123' },
    { name: 'Fakultet Upravnih Nauka', type: 'social', image: '/assets/images/technical2.png', location: 'Novi Sad', entranceExamSubjects: ['Pravo', 'Opšta kultura'], email: 'upravnins@edu.rs', password: 'upravnins123' },
    { name: 'Fakultet Sporta Beograd', type: 'sports', image: '/assets/images/pharm2.png', location: 'Beograd', entranceExamSubjects: ['Telesni test', 'Biologija'], email: 'fsbg@edu.rs', password: 'fsbg123' }
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
