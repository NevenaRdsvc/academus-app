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
                            content: `SADRŽAJ: 1. Algebarske funkcije 2. Linearne i kvadratne jednačine 3. Polinomi 4. Derivacije i integrali 5. Trigonometrija 6. Kombinatorika i verovatnoća 7. Analitička geometrija 8. Rešenja primera 1. Algebarske funkcije: Funkcija f: R -> R je pravilo kojim se svakom broju x iz domena pridružuje tačno jedan broj f(x) iz kodomena. Primer: Odredi f(2) za f(x) = 2x^2 + 3x - 5. Rešenje: f(2) = 9. Primer: Nacrtaj graf f(x) = x^2 - 4x + 3. Nultočke: x=1,3; vrhunac: (2,-1). 2. Linearne i kvadratne jednačine: Linearne: ax + b = 0, x = -b/a. Kvadratne: ax^2 + bx + c = 0, x = (-b ± √(b^2-4ac))/(2a). Primer: 3x+9=0 → x=-3. Primer: x^2-5x+6=0 → x=2,3. 3. Polinomi: Polinom: P(x)=a_n x^n + ... + a_0. Primer: P(x)=x^3-3x^2+4x-12 ÷ (x-2) → Q(x)=x^2-x+2. 4. Derivacije i integrali: f'(x) derivacija, ∫f(x)dx integral. Primer: f(x)=3x^3-5x^2+6x-2 → f'(x)=9x^2-10x+6. Primer: ∫(2x+3)dx = x^2+3x+C. 5. Trigonometrija: sin^2x + cos^2x =1, tanx = sinx/cosx. Primer: sinα=3/5, α u prvom kvadrantu → cosα=4/5. 6. Kombinatorika i verovatnoća: Primer: 3-cifreni brojevi od cifara 1,2,3,4 → 4*3*2=24. Primer: Bacanje kocke, parni broj → P=1/2. 7. Analitička geometrija: Primer: Rastojanje tačaka A(1,2), B(4,6) → d=√((4-1)^2+(6-2)^2)=5. 8. SADRŽAJ: 1. Algebarske funkcije 2. Linearne i kvadratne jednačine 3. Polinomi 4. Derivacije i integrali 5. Trigonometrija 6. Kombinatorika i verovatnoća 7. Analitička geometrija 8. Rešenja primera 1. Algebarske funkcije: Funkcija f: R -> R je pravilo kojim se svakom broju x iz domena pridružuje tačno jedan broj f(x) iz kodomena. Primer: Odredi f(2) za f(x) = 2x^2 + 3x - 5. Rešenje: f(2) = 9. Primer: Nacrtaj graf f(x) = x^2 - 4x + 3. Nultočke: x=1,3; vrhunac: (2,-1). 2. Linearne i kvadratne jednačine: Linearne: ax + b = 0, x = -b/a. Kvadratne: ax^2 + bx + c = 0, x = (-b ± √(b^2-4ac))/(2a). Primer: 3x+9=0 → x=-3. Primer: x^2-5x+6=0 → x=2,3. 3. Polinomi: Polinom: P(x)=a_n x^n + ... + a_0. Primer: P(x)=x^3-3x^2+4x-12 ÷ (x-2) → Q(x)=x^2-x+2. 4. Derivacije i integrali: f'(x) derivacija, ∫f(x)dx integral. Primer: f(x)=3x^3-5x^2+6x-2 → f'(x)=9x^2-10x+6. Primer: ∫(2x+3)dx = x^2+3x+C. 5. Trigonometrija: sin^2x + cos^2x =1, tanx = sinx/cosx. Primer: sinα=3/5, α u prvom kvadrantu → cosα=4/5. 6. Kombinatorika i verovatnoća: Primer: 3-cifreni brojevi od cifara 1,2,3,4 → 4*3*2=24. Primer: Bacanje kocke, parni broj → P=1/2. 7. Analitička geometrija: Primer: Rastojanje tačaka A(1,2), B(4,6) → d=√((4-1)^2+(6-2)^2)=5. 8. SADRŽAJ: 1. Algebarske funkcije 2. Linearne i kvadratne jednačine 3. Polinomi 4. Derivacije i integrali 5. Trigonometrija 6. Kombinatorika i verovatnoća 7. Analitička geometrija 8. Rešenja primera 1. Algebarske funkcije: Funkcija f: R -> R je pravilo kojim se svakom broju x iz domena pridružuje tačno jedan broj f(x) iz kodomena. Primer: Odredi f(2) za f(x) = 2x^2 + 3x - 5. Rešenje: f(2) = 9. Primer: Nacrtaj graf f(x) = x^2 - 4x + 3. Nultočke: x=1,3; vrhunac: (2,-1). 2. Linearne i kvadratne jednačine: Linearne: ax + b = 0, x = -b/a. Kvadratne: ax^2 + bx + c = 0, x = (-b ± √(b^2-4ac))/(2a). Primer: 3x+9=0 → x=-3. Primer: x^2-5x+6=0 → x=2,3. 3. Polinomi: Polinom: P(x)=a_n x^n + ... + a_0. Primer: P(x)=x^3-3x^2+4x-12 ÷ (x-2) → Q(x)=x^2-x+2. 4. Derivacije i integrali: f'(x) derivacija, ∫f(x)dx integral. Primer: f(x)=3x^3-5x^2+6x-2 → f'(x)=9x^2-10x+6. Primer: ∫(2x+3)dx = x^2+3x+C. 5. Trigonometrija: sin^2x + cos^2x =1, tanx = sinx/cosx. Primer: sinα=3/5, α u prvom kvadrantu → cosα=4/5. 6. Kombinatorika i verovatnoća: Primer: 3-cifreni brojevi od cifara 1,2,3,4 → 4*3*2=24. Primer: Bacanje kocke, parni broj → P=1/2. 7. Analitička geometrija: Primer: Rastojanje tačaka A(1,2), B(4,6) → d=√((4-1)^2+(6-2)^2)=5. 8.SADRŽAJ: 1. Algebarske funkcije 2. Linearne i kvadratne jednačine 3. Polinomi 4. Derivacije i integrali 5. Trigonometrija 6. Kombinatorika i verovatnoća 7. Analitička geometrija 8. Rešenja primera 1. Algebarske funkcije: Funkcija f: R -> R je pravilo kojim se svakom broju x iz domena pridružuje tačno jedan broj f(x) iz kodomena. Primer: Odredi f(2) za f(x) = 2x^2 + 3x - 5. Rešenje: f(2) = 9. Primer: Nacrtaj graf f(x) = x^2 - 4x + 3. Nultočke: x=1,3; vrhunac: (2,-1). 2. Linearne i kvadratne jednačine: Linearne: ax + b = 0, x = -b/a. Kvadratne: ax^2 + bx + c = 0, x = (-b ± √(b^2-4ac))/(2a). Primer: 3x+9=0 → x=-3. Primer: x^2-5x+6=0 → x=2,3. 3. Polinomi: Polinom: P(x)=a_n x^n + ... + a_0. Primer: P(x)=x^3-3x^2+4x-12 ÷ (x-2) → Q(x)=x^2-x+2. 4. Derivacije i integrali: f'(x) derivacija, ∫f(x)dx integral. Primer: f(x)=3x^3-5x^2+6x-2 → f'(x)=9x^2-10x+6. Primer: ∫(2x+3)dx = x^2+3x+C. 5. Trigonometrija: sin^2x + cos^2x =1, tanx = sinx/cosx. Primer: sinα=3/5, α u prvom kvadrantu → cosα=4/5. 6. Kombinatorika i verovatnoća: Primer: 3-cifreni brojevi od cifara 1,2,3,4 → 4*3*2=24. Primer: Bacanje kocke, parni broj → P=1/2. 7. Analitička geometrija: Primer: Rastojanje tačaka A(1,2), B(4,6) → d=√((4-1)^2+(6-2)^2)=5. 8.SADRŽAJ: 1. Algebarske funkcije 2. Linearne i kvadratne jednačine 3. Polinomi 4. Derivacije i integrali 5. Trigonometrija 6. Kombinatorika i verovatnoća 7. Analitička geometrija 8. Rešenja primera 1. Algebarske funkcije: Funkcija f: R -> R je pravilo kojim se svakom broju x iz domena pridružuje tačno jedan broj f(x) iz kodomena. Primer: Odredi f(2) za f(x) = 2x^2 + 3x - 5. Rešenje: f(2) = 9. Primer: Nacrtaj graf f(x) = x^2 - 4x + 3. Nultočke: x=1,3; vrhunac: (2,-1). 2. Linearne i kvadratne jednačine: Linearne: ax + b = 0, x = -b/a. Kvadratne: ax^2 + bx + c = 0, x = (-b ± √(b^2-4ac))/(2a). Primer: 3x+9=0 → x=-3. Primer: x^2-5x+6=0 → x=2,3. 3. Polinomi: Polinom: P(x)=a_n x^n + ... + a_0. Primer: P(x)=x^3-3x^2+4x-12 ÷ (x-2) → Q(x)=x^2-x+2. 4. Derivacije i integrali: f'(x) derivacija, ∫f(x)dx integral. Primer: f(x)=3x^3-5x^2+6x-2 → f'(x)=9x^2-10x+6. Primer: ∫(2x+3)dx = x^2+3x+C. 5. Trigonometrija: sin^2x + cos^2x =1, tanx = sinx/cosx. Primer: sinα=3/5, α u prvom kvadrantu → cosα=4/5. 6. Kombinatorika i verovatnoća: Primer: 3-cifreni brojevi od cifara 1,2,3,4 → 4*3*2=24. Primer: Bacanje kocke, parni broj → P=1/2. 7. Analitička geometrija: Primer: Rastojanje tačaka A(1,2), B(4,6) → d=√((4-1)^2+(6-2)^2)=5. Deda 8. Rešenja primera: Detaljna rešenja prethodnih zadataka, korak po korak. Rešenja primera: Detaljna rešenja prethodnih zadataka, korak po korak. Rešenja primera: Detaljna rešenja prethodnih zadataka, korak po korak.Rešenja primera: Detaljna rešenja prethodnih zadataka, korak po korak.Rešenja primera: Detaljna rešenja prethodnih zadataka, korak po korak.`
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
