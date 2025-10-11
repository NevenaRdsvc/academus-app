import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface Faculty {
  name: string;
  type: 'technical' | 'medical' | 'pharmacy';
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
    { name: 'Masinski Fakultet', type: 'technical', image: '/assets/images/pharm2.png', location: 'Kragujevac', entranceExamSubjects: ['Matematika', 'Fizika'] },
    { name: 'Racunarski Fakultet', type: 'technical', image: '/assets/images/pharm3.png', location: 'Beograd', entranceExamSubjects: ['Matematika', 'Opšta kultura'] },
    { name: 'Medicinski Fakultet Beograd', type: 'medical', image: '/assets/images/medical1.png', location: 'Beograd', entranceExamSubjects: ['Biologija', 'Hemija'] },
    { name: 'Medicinski Fakultet Niš', type: 'medical', image: '/assets/images/medical2.png', location: 'Niš', entranceExamSubjects: ['Biologija', 'Hemija'] },
    { name: 'Medicinski Fakultet Čačak', type: 'medical', image: '/assets/images/medical3.png', location: 'Čačak', entranceExamSubjects: ['Biologija', 'Hemija'] },
    { name: 'Farmaceutski Fakultet Beograd', type: 'pharmacy', image: '/assets/images/pharm3.png', location: 'Beograd', entranceExamSubjects: ['Biologija', 'Hemija', 'Matematika'] },
    { name: 'Farmaceutski Fakultet Niš', type: 'pharmacy', image: '/assets/images/technical1.png', location: 'Niš', entranceExamSubjects: ['Biologija', 'Hemija', 'Matematika'] },
    { name: 'Farmaceutski Fakultet Subotica', type: 'pharmacy', image: '/assets/images/technical3.png', location: 'Subotica', entranceExamSubjects: ['Biologija', 'Hemija', 'Matematika'] }
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
