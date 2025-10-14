import { Injectable } from '@angular/core';

import { BehaviorSubject } from 'rxjs';

export interface CollectionItem {
    title: string;
    content: string;
}

export interface FacultyCollection {
    facultyName: string;
    subjects: {
        subjectName: string;
        items: CollectionItem[];
    }[];
}

@Injectable({
    providedIn: 'root'
})
export class CollectionService {
    private collections: FacultyCollection[] = [
        {
            facultyName: 'Fakultet Organizacionih nauka',
            subjects: [
                {
                    subjectName: 'Matematika',
                    items: [
                        {
                            title: 'Mat1',
                            // eslint-disable-next-line max-len
                           content: 'assets/docs/fon-mata.pdf'
                        }
                    ]
                },
                {
                    subjectName: 'Opšta kultura',
                    items: [
                        { title: 'Opsta1', content: 'Pitanja iz opšte kulture 1' }
                    ]
                }
            ]
        }
    ];

    private currentFacultyAndSubject: { faculty: string; subject: string } | null = null;

    private selectedItems$ = new BehaviorSubject<CollectionItem[]>([]);
    selectedItemsObservable = this.selectedItems$.asObservable();

    setCurrentFacultyAndSubject(faculty: string, subject: string) {
        this.currentFacultyAndSubject = { faculty, subject };
        this.updateSelectedItems();
    }

    getCurrentFacultyAndSubject() {
        return this.currentFacultyAndSubject;
    }

    private updateSelectedItems() {
        if (!this.currentFacultyAndSubject) {
            this.selectedItems$.next([]);
            return;
        }
        const faculty = this.collections.find(c => c.facultyName === this.currentFacultyAndSubject!.faculty);
        const subject = faculty?.subjects.find(s => s.subjectName === this.currentFacultyAndSubject!.subject);
        this.selectedItems$.next(subject ? subject.items : []);
    }
}
