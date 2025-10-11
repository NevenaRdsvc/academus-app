import { Injectable } from '@angular/core';

export interface ExamQuestion {
    text: string;
    answers: string[];
    correctAnswerIndex?: number;
}

export interface ExamData {
    faculty: string;
    subject: string;
    instructions: string;
    year: number;
    questions: ExamQuestion[];
}

@Injectable({
    providedIn: 'root'
})
export class ExamService {
    private exams: Record<string, Record<string, Record<number, ExamData>>> = {

        'fakultet-organizacionih-nauka': {
            'matematika': {
                2025: {
                    faculty: 'fakultet-organizacionih-nauka',
                    subject: 'matematika',
                    instructions: 'Test ima 20 zadataka na 2 stranice. Svi zadaci se vrednuju sa po 5 poena. Ukoliko ne želite da se opredelite za jedan od prvih pet ponuđenih odgovora možete da označite „N“, što se vrednuje sa 0 poena. Za pogrešan odgovor se oduzima 0.5 poena. Ako se, za konkretan zadatak, označi više od jednog ili ne označi nijedan odgovor, kao i ako se na bilo koji način nepravilno označi odgovor, oduzima se 1 poen.',
                    year: 2025,
                    questions: [
                        {
                            text: 'Koja je derivacija funkcije f(x) = x^2 + 3x?',
                            answers: ['2x + 3', 'x^2', '3x', 'x + 3'],
                            correctAnswerIndex: 3
                        },
                        {
                            text: 'Šta je integral funkcije f(x) = 2x?',
                            answers: ['x^2 + C', '2x + C', 'x + C', 'x^2/2 + C'],
                            correctAnswerIndex: 1
                        }
                    ]
                },
                2024: {
                    faculty: 'fakultet-organizacionih-nauka',
                    subject: 'matematika',
                    instructions: 'Test ima 20 zadataka na 2 stranice. Svi zadaci se vrednuju sa po 5 poena. Ukoliko ne želite da se opredelite za jedan od prvih pet ponuđenih odgovora možete da označite „N“, što se vrednuje sa 0 poena. Za pogrešan odgovor se oduzima 0.5 poena. Ako se, za konkretan zadatak, označi više od jednog ili ne označi nijedan odgovor, kao i ako se na bilo koji način nepravilno označi odgovor, oduzima se 1 poen.',
                    year: 2024,
                    questions: [
                        {
                            text: 'Koliki je zbir unutrašnjih uglova trougla?',
                            answers: ['180°', '360°', '90°', '270°'],
                            correctAnswerIndex: 2
                        },
                        {
                            text: 'Koliki je proizvod 7 * 8?',
                            answers: ['56', '54', '64', '58'],
                            correctAnswerIndex: 3
                        }
                    ]
                }
            },
            'opsta-kultura': {
                2023: {
                    faculty: 'fakultet-organizacionih-nauka',
                    subject: 'opsta-kultura',
                    instructions: 'Test ima 20 zadataka na 2 stranice. Svi zadaci se vrednuju sa po 5 poena. Ukoliko ne želite da se opredelite za jedan od prvih pet ponuđenih odgovora možete da označite „N“, što se vrednuje sa 0 poena. Za pogrešan odgovor se oduzima 0.5 poena. Ako se, za konkretan zadatak, označi više od jednog ili ne označi nijedan odgovor, kao i ako se na bilo koji način nepravilno označi odgovor, oduzima se 1 poen.',
                    year: 2023,
                    questions: [
                        {
                            text: 'Ko je autor romana "Na Drini ćuprija"?',
                            answers: ['Ivo Andrić', 'Branko Ćopić', 'Meša Selimović', 'Miloš Crnjanski'],
                            correctAnswerIndex: 1
                        }
                    ]
                }
            }
        },

        // ETF
        'elektrotehnicki-fakultet': {
            'matematika': {
                2025: {
                    faculty: 'elektrotehnicki-fakultet',
                    subject: 'matematika',
                    instructions: 'Test ima 20 zadataka na 2 stranice. Svi zadaci se vrednuju sa po 5 poena. Ukoliko ne želite da se opredelite za jedan od prvih pet ponuđenih odgovora možete da označite „N“, što se vrednuje sa 0 poena. Za pogrešan odgovor se oduzima 0.5 poena. Ako se, za konkretan zadatak, označi više od jednog ili ne označi nijedan odgovor, kao i ako se na bilo koji način nepravilno označi odgovor, oduzima se 1 poen.',
                    year: 2025,
                    questions: [
                        {
                            text: 'Reši jednačinu: 2x - 4 = 0',
                            answers: ['x = 2', 'x = -2', 'x = 4', 'x = 0'],
                            correctAnswerIndex: 3
                        }
                    ]
                }
            },
            'fizika': {
                2025: {
                    faculty: 'elektrotehnicki-fakultet',
                    subject: 'fizika',
                    instructions: 'Test ima 20 zadataka na 2 stranice. Svi zadaci se vrednuju sa po 5 poena. Ukoliko ne želite da se opredelite za jedan od prvih pet ponuđenih odgovora možete da označite „N“, što se vrednuje sa 0 poena. Za pogrešan odgovor se oduzima 0.5 poena. Ako se, za konkretan zadatak, označi više od jednog ili ne označi nijedan odgovor, kao i ako se na bilo koji način nepravilno označi odgovor, oduzima se 1 poen.',
                    year: 2025,
                    questions: [
                        {
                            text: 'Koja je jedinica električnog otpora?',
                            answers: ['Om', 'Amper', 'Volt', 'Džul'],
                            correctAnswerIndex: 1
                        }
                    ]
                }
            }
        },

        // FTN
        'fakultet-tehnickih-nauka': {
            'matematika': {
                2025: {
                    faculty: 'fakultet-tehnickih-nauka',
                    subject: 'matematika',
                    instructions: 'Ovde ide instrukcija specifična za taj fakultet i predmet',
                    year: 2025,
                    questions: [
                        {
                            text: 'Koji je koren iz 144?',
                            answers: ['12', '14', '16', '18'],
                            correctAnswerIndex: 9
                        }
                    ]
                }
            },
            'fizika': {
                2025: {
                    faculty: 'fakultet-tehnickih-nauka',
                    subject: 'fizika',
                    instructions: 'Ovde ide instrukcija specifična za taj fakultet i predmet',
                    year: 2025,
                    questions: [
                        {
                            text: 'Brzina svetlosti u vakuumu je približno:',
                            answers: ['3*10^8 m/s', '3*10^6 m/s', '3*10^5 km/s', '300 m/s'],
                            correctAnswerIndex: 1
                        }
                    ]
                }
            }
        },


        'masinski-fakultet': {
            'matematika': {
                2025: {
                    faculty: 'masinski-fakultet',
                    subject: 'matematika',
                    instructions: 'Ovde ide instrukcija specifična za taj fakultet i predmet',
                    year: 2025,
                    questions: [
                        {
                            text: 'Koja je površina kvadrata stranice 5cm?',
                            answers: ['25 cm²', '20 cm²', '10 cm²', '15 cm²'],
                            correctAnswerIndex: 0
                        }
                    ]
                }
            },
            'fizika': {
                2025: {
                    faculty: 'masinski-fakultet',
                    subject: 'fizika',
                    instructions: 'Ovde ide instrukcija specifična za taj fakultet i predmet',
                    year: 2025,
                    questions: [
                        {
                            text: 'Koja je sila ako masa iznosi 2kg a ubrzanje 3 m/s²?',
                            answers: ['6 N', '5 N', '2 N', '3 N'],
                            correctAnswerIndex: 4
                        }
                    ]
                }
            }
        },

        'racunarski-fakultet': {
            'matematika': {
                2025: {
                    faculty: 'racunarski-fakultet',
                    subject: 'matematika',
                    instructions: 'Ovde ide instrukcija specifična za taj fakultet i predmet',
                    year: 2025,
                    questions: [
                        {
                            text: 'Koliki je log2(8)?',
                            answers: ['3', '2', '8', '4'],
                            correctAnswerIndex: 0
                        }
                    ]
                }
            },
            'opsta-kultura': {
                2025: {
                    faculty: 'racunarski-fakultet',
                    subject: 'opsta-kultura',
                    instructions: 'Ovde ide instrukcija specifična za taj fakultet i predmet',
                    year: 2025,
                    questions: [
                        {
                            text: 'Koji je glavni grad Francuske?',
                            answers: ['Pariz', 'London', 'Berlin', 'Rim'],
                            correctAnswerIndex: 0
                        }
                    ]
                }
            }
        },

        'medicinski-fakultet': {
            'biologija': {
                2025: {
                    faculty: 'medicinski-fakultet',
                    subject: 'biologija',
                    instructions: 'Ovde ide instrukcija specifična za taj fakultet i predmet',
                    year: 2025,
                    questions: [
                        {
                            text: 'Koja ćelijska organela je odgovorna za proizvodnju energije?',
                            answers: ['Mitohondrija', 'Ribozom', 'Jedro', 'Golgi aparat'],
                            correctAnswerIndex: 0
                        }
                    ]
                }
            },
            'hemija': {
                2025: {
                    faculty: 'medicinski-fakultet',
                    subject: 'hemija',
                    instructions: 'Ovde ide instrukcija specifična za taj fakultet i predmet',
                    year: 2025,
                    questions: [
                        {
                            text: 'Koji je hemijski simbol za vodu?',
                            answers: ['H2O', 'CO2', 'O2', 'NaCl'],
                            correctAnswerIndex: 0
                        }
                    ]
                }
            }
        },

        'farmaceutski-fakultet': {
            'biologija': {
                2025: {
                    faculty: 'farmaceutski-fakultet',
                    subject: 'biologija',
                    instructions: 'Ovde ide instrukcija specifična za taj fakultet i predmet',
                    year: 2025,
                    questions: [
                        {
                            text: 'Koja supstanca je glavni sastojak aspirin tablete?',
                            answers: ['Acetilsalicilna kiselina', 'Paracetamol', 'Ibuprofen', 'Amoksicilin'],
                            correctAnswerIndex: 0
                        }
                    ]
                }
            },
            'hemija': {
                2025: {
                    faculty: 'farmaceutski-fakultet',
                    subject: 'hemija',
                    instructions: 'Ovde ide instrukcija specifična za taj fakultet i predmet',
                    year: 2025,
                    questions: [
                        {
                            text: 'Koja je pH vrednost čiste vode?',
                            answers: ['7', '0', '14', '5'],
                            correctAnswerIndex: 0
                        }
                    ]
                }
            },
            'matematika': {
                2025: {
                    faculty: 'farmaceutski-fakultet',
                    subject: 'matematika',
                    instructions: 'Ovde ide instrukcija specifična za taj fakultet i predmet',
                    year: 2025,
                    questions: [
                        {
                            text: 'Koliko je 5 + 7?',
                            answers: ['12', '10', '11', '13'],
                            correctAnswerIndex: 0
                        }
                    ]
                }
            }
        }
    };

    constructor() { }

    getExam(faculty: string, subject: string, year: number): ExamData | null {
        return this.exams[faculty]?.[subject]?.[year] || null;
    }

    getAvailableYears(faculty: string, subject: string): number[] {
        const facultyExams = this.exams[faculty]?.[subject];
        if (!facultyExams) return [];
        return Object.keys(facultyExams)
            .map(Number)
            .sort((a, b) => b - a);
    }
}
