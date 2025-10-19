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
                    // eslint-disable-next-line max-len
                    instructions: 'Test ima 20 zadataka na 2 stranice. Svi zadaci se vrednuju sa po 5 poena. Ukoliko ne želite da se opredelite za jedan od prvih pet ponuđenih odgovora možete da označite „N“, što se vrednuje sa 0 poena. Za pogrešan odgovor se oduzima 0.5 poena. Ako se, za konkretan zadatak, označi više od jednog ili ne označi nijedan odgovor, kao i ako se na bilo koji način nepravilno označi odgovor, oduzima se 1 poen.',
                    year: 2025,
                    questions: [
        {
          text: 'Koja je derivacija funkcije f(x) = x^2 + 3x?',
          answers: ['2x + 3', 'x^2', '3x', 'x + 3'],
          correctAnswerIndex: 0
        },
        {
          text: 'Šta je integral funkcije f(x) = 2x?',
          answers: ['x^2 + C', '2x + C', 'x + C', 'x^2/2 + C'],
          correctAnswerIndex: 0
        },
        {
          text: 'Vrednost izraza ((0.2)^(-2) + √64^3 ⋅ (13^2 − 12^2))^(1/3) : (−2)^3 jednaka je:',
          answers: ['52', '12', '−12', '−32', '−52', 'Ne znam'],
          correctAnswerIndex: 1
        },
        {
          text: 'Za b ≠ 0, izraz (a³b³ + 1) : (a²b² − ab + 1) identički je jednak izrazu:',
          answers: ['a + b/b', 'a + 3b²/b', '2b/a', '2a/b', '3a + b²/b', 'Ne znam'],
          correctAnswerIndex: 3
        },
        {
          text: 'Ako je f(x) = x / (x + 5), g(x) = 5 / (5 − x), i h(x) = f⁻¹(x) ⋅ g⁻¹(x), gde su f⁻¹ i g⁻¹ inverzne funkcije, h(x) je:',
          answers: ['−1', '1', '5', '−5', '−25', 'Ne znam'],
          correctAnswerIndex: 1
        },
        {
          text: 'Ako je z² − |z|² + 4⋅Im(z) = 2 − 6i, i² = −1, onda je z⋅z̄ jednako:',
          answers: ['5', '10', '1', '2', '17', 'Ne znam'],
          correctAnswerIndex: 1
        },
        {
          text: 'Cena jedne knjige je najpre umanjena za 10%, a zatim uvećana za 900 dinara. Ako je nova cena za 50% veća od stare, nova cena knjige je:',
          answers: ['2400', '1750', '1800', '2250', '2000', 'Ne znam'],
          correctAnswerIndex: 4
        },
        {
          text: 'Za članove aritmetičkog niza a₁,a₂,a₃,… važi a₄+a₅+a₁₁+a₁₂=32. Zbir prvih 15 članova jednak je:',
          answers: ['128', '144', '64', '96', '120', 'Ne znam'],
          correctAnswerIndex: 1
        },
        {
          text: 'Proizvod svih realnih rešenja jednačine (log₁₀x⁴) − 2 + 0.5 = 3log₁₆x jednak je:',
          answers: ['64', '4', '8', '32', '16', 'Ne znam'],
          correctAnswerIndex: 4
        },
        {
          text: 'Vrednost izraza 4⁶log₈5 − log₂√125⁴ jednaka je:',
          answers: ['14', '19', '136', '125', '116', 'Ne znam'],
          correctAnswerIndex: 3
        },
        {
          text: 'Zbir svih celobrojnih rešenja nejednačine (8x − 3)(x + 1)²(x + 3)(x − 2) ≥ (x + 1)(x − 2) jednak je:',
          answers: ['1', '0', '−3', '−1', '3', 'Ne znam'],
          correctAnswerIndex: 1
        },
        {
          text: 'Zbir kvadrata svih realnih rešenja jednačine √2(1 + √2)x + 1 − (3 + √2)x + 1 = 1 jednak je:',
          answers: ['4', '1', '9', '8', '5', 'Ne znam'],
          correctAnswerIndex: 2
        },
        {
          text: 'Broj svih realnih rešenja jednačine (√3 − 1)sinx + √3cosx = sinx·tgx na intervalu (−π, 3π/2] jednak je:',
          answers: ['4', '5', '1', '2', '3', 'Ne znam'],
          correctAnswerIndex: 3
        },
        {
          text: 'Ostatak koji se dobija deljenjem P(x) = (x − 1)²⁰²³ + x³ + 1 polinomom Q(x) = x(x² − 2x + 2) jednak je:',
          answers: ['2x² + x', 'x² + x', '2x² − x', 'x² − x', '3x² − x', 'Ne znam'],
          correctAnswerIndex: 0
        },
        {
          text: 'Vrednost izraza 4sin50°sin185° + √2(sin10° − cos10°) jednaka je:',
          answers: ['2', '−2', '−√2', '1', '−1', 'Ne znam'],
          correctAnswerIndex: 4
        },
        {
          text: 'Zbir svih vrednosti realnog parametra p za koje je prava y = 2x + p tangenta kružnice x² + 2x + y² − 4y = 10 jednak je:',
          answers: ['8', '10', '9', '12', '6', 'Ne znam'],
          correctAnswerIndex: 2
        },
        {
          text: 'Razlika najvećeg i najmanjeg rešenja nejednačine √(x² + x − 6) ≥ 2x² − 4x jednaka je:',
          answers: ['14/3', '2/3', '11/3', '5/3', '8/3', 'Ne znam'],
          correctAnswerIndex: 0
        },
        {
          text: 'Ako je visina pravilne šestostrane piramide tri puta veća od dužine stranice osnove, tada je odnos površine omotača i osnove jednak:',
          answers: ['2√3 : 1', '√13 : 1', '2√11 : √3', '3√2 : 1', '2√10 : √3', 'Ne znam'],
          correctAnswerIndex: 0
        },
        {
          text: 'Minimalan zbir rastojanja tačke na x-osi do tačaka A(−6,1) i B(6,4) jednak je:',
          answers: ['29/2', '13', '25/2', '27/2', '14', 'Ne znam'],
          correctAnswerIndex: 1
        },
        {
          text: 'Proizvod trećeg člana od početka i trećeg od kraja razvoja (√2023n + 1/√2023n)ⁿ je 662. Zbir binomnih koeficijenata jednak je:',
          answers: ['1282', '322', '642', '2562', '162', 'Ne znam'],
          correctAnswerIndex: 2
        },
        {
          text: 'Na stranicama kvadrata ABCD su tačke M, N, P tako da AM:MB=2:1, BN:NC=3:2 i DP:PA=4:3. Ako je stranica 1 cm, površina trougla MNP je:',
          answers: ['19/70', '2/7', '3/10', '9/35', '11/35', 'Ne znam'],
          correctAnswerIndex: 3
        },
        {
          text: 'U teniskom meču Đoković je pobedio Nadala 6:3, 6:4. Broj načina na koje se mogao kretati rezultat po gemovima je:',
          answers: ['722', '962', '902', '782', '842', 'Ne znam'],
          correctAnswerIndex: 2
        }
      ]
                },
                2024: {
                    faculty: 'fakultet-organizacionih-nauka',
                    subject: 'matematika',
                    // eslint-disable-next-line max-len
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
                },
                 2023: {
                    faculty: 'fakultet-organizacionih-nauka',
                    subject: 'matematika',
                    // eslint-disable-next-line max-len
                    instructions: 'Test ima 20 zadataka na 2 stranice. Svi zadaci se vrednuju sa po 5 poena. Ukoliko ne želite da se opredelite za jedan od prvih pet ponuđenih odgovora možete da označite „N“, što se vrednuje sa 0 poena. Za pogrešan odgovor se oduzima 0.5 poena. Ako se, za konkretan zadatak, označi više od jednog ili ne označi nijedan odgovor, kao i ako se na bilo koji način nepravilno označi odgovor, oduzima se 1 poen.',
                    year: 2023,
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
                },
                 2022: {
                    faculty: 'fakultet-organizacionih-nauka',
                    subject: 'matematika',
                    // eslint-disable-next-line max-len
                    instructions: 'Test ima 20 zadataka na 2 stranice. Svi zadaci se vrednuju sa po 5 poena. Ukoliko ne želite da se opredelite za jedan od prvih pet ponuđenih odgovora možete da označite „N“, što se vrednuje sa 0 poena. Za pogrešan odgovor se oduzima 0.5 poena. Ako se, za konkretan zadatak, označi više od jednog ili ne označi nijedan odgovor, kao i ako se na bilo koji način nepravilno označi odgovor, oduzima se 1 poen.',
                    year: 2022,
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
                },
                   2021: {
                    faculty: 'fakultet-organizacionih-nauka',
                    subject: 'matematika',
                    // eslint-disable-next-line max-len
                    instructions: 'Test ima 20 zadataka na 2 stranice. Svi zadaci se vrednuju sa po 5 poena. Ukoliko ne želite da se opredelite za jedan od prvih pet ponuđenih odgovora možete da označite „N“, što se vrednuje sa 0 poena. Za pogrešan odgovor se oduzima 0.5 poena. Ako se, za konkretan zadatak, označi više od jednog ili ne označi nijedan odgovor, kao i ako se na bilo koji način nepravilno označi odgovor, oduzima se 1 poen.',
                    year: 2021,
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
                },
                   2020: {
                    faculty: 'fakultet-organizacionih-nauka',
                    subject: 'matematika',
                    // eslint-disable-next-line max-len
                    instructions: 'Test ima 20 zadataka na 2 stranice. Svi zadaci se vrednuju sa po 5 poena. Ukoliko ne želite da se opredelite za jedan od prvih pet ponuđenih odgovora možete da označite „N“, što se vrednuje sa 0 poena. Za pogrešan odgovor se oduzima 0.5 poena. Ako se, za konkretan zadatak, označi više od jednog ili ne označi nijedan odgovor, kao i ako se na bilo koji način nepravilno označi odgovor, oduzima se 1 poen.',
                    year: 2020,
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
                },
                   2019: {
                    faculty: 'fakultet-organizacionih-nauka',
                    subject: 'matematika',
                    // eslint-disable-next-line max-len
                    instructions: 'Test ima 20 zadataka na 2 stranice. Svi zadaci se vrednuju sa po 5 poena. Ukoliko ne želite da se opredelite za jedan od prvih pet ponuđenih odgovora možete da označite „N“, što se vrednuje sa 0 poena. Za pogrešan odgovor se oduzima 0.5 poena. Ako se, za konkretan zadatak, označi više od jednog ili ne označi nijedan odgovor, kao i ako se na bilo koji način nepravilno označi odgovor, oduzima se 1 poen.',
                    year: 2019,
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
                },
                   2018: {
                    faculty: 'fakultet-organizacionih-nauka',
                    subject: 'matematika',
                    // eslint-disable-next-line max-len
                    instructions: 'Test ima 20 zadataka na 2 stranice. Svi zadaci se vrednuju sa po 5 poena. Ukoliko ne želite da se opredelite za jedan od prvih pet ponuđenih odgovora možete da označite „N“, što se vrednuje sa 0 poena. Za pogrešan odgovor se oduzima 0.5 poena. Ako se, za konkretan zadatak, označi više od jednog ili ne označi nijedan odgovor, kao i ako se na bilo koji način nepravilno označi odgovor, oduzima se 1 poen.',
                    year: 2018,
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
                },
                   2017: {
                    faculty: 'fakultet-organizacionih-nauka',
                    subject: 'matematika',
                    // eslint-disable-next-line max-len
                    instructions: 'Test ima 20 zadataka na 2 stranice. Svi zadaci se vrednuju sa po 5 poena. Ukoliko ne želite da se opredelite za jedan od prvih pet ponuđenih odgovora možete da označite „N“, što se vrednuje sa 0 poena. Za pogrešan odgovor se oduzima 0.5 poena. Ako se, za konkretan zadatak, označi više od jednog ili ne označi nijedan odgovor, kao i ako se na bilo koji način nepravilno označi odgovor, oduzima se 1 poen.',
                    year: 2017,
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
                },
                   2016: {
                    faculty: 'fakultet-organizacionih-nauka',
                    subject: 'matematika',
                    // eslint-disable-next-line max-len
                    instructions: 'Test ima 20 zadataka na 2 stranice. Svi zadaci se vrednuju sa po 5 poena. Ukoliko ne želite da se opredelite za jedan od prvih pet ponuđenih odgovora možete da označite „N“, što se vrednuje sa 0 poena. Za pogrešan odgovor se oduzima 0.5 poena. Ako se, za konkretan zadatak, označi više od jednog ili ne označi nijedan odgovor, kao i ako se na bilo koji način nepravilno označi odgovor, oduzima se 1 poen.',
                    year: 2016,
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
                },
                   2015: {
                    faculty: 'fakultet-organizacionih-nauka',
                    subject: 'matematika',
                    // eslint-disable-next-line max-len
                    instructions: 'Test ima 20 zadataka na 2 stranice. Svi zadaci se vrednuju sa po 5 poena. Ukoliko ne želite da se opredelite za jedan od prvih pet ponuđenih odgovora možete da označite „N“, što se vrednuje sa 0 poena. Za pogrešan odgovor se oduzima 0.5 poena. Ako se, za konkretan zadatak, označi više od jednog ili ne označi nijedan odgovor, kao i ako se na bilo koji način nepravilno označi odgovor, oduzima se 1 poen.',
                    year: 2015,
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
                },
                   2014: {
                    faculty: 'fakultet-organizacionih-nauka',
                    subject: 'matematika',
                    // eslint-disable-next-line max-len
                    instructions: 'Test ima 20 zadataka na 2 stranice. Svi zadaci se vrednuju sa po 5 poena. Ukoliko ne želite da se opredelite za jedan od prvih pet ponuđenih odgovora možete da označite „N“, što se vrednuje sa 0 poena. Za pogrešan odgovor se oduzima 0.5 poena. Ako se, za konkretan zadatak, označi više od jednog ili ne označi nijedan odgovor, kao i ako se na bilo koji način nepravilno označi odgovor, oduzima se 1 poen.',
                    year: 2014,
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
                },
                   2013: {
                    faculty: 'fakultet-organizacionih-nauka',
                    subject: 'matematika',
                    // eslint-disable-next-line max-len
                    instructions: 'Test ima 20 zadataka na 2 stranice. Svi zadaci se vrednuju sa po 5 poena. Ukoliko ne želite da se opredelite za jedan od prvih pet ponuđenih odgovora možete da označite „N“, što se vrednuje sa 0 poena. Za pogrešan odgovor se oduzima 0.5 poena. Ako se, za konkretan zadatak, označi više od jednog ili ne označi nijedan odgovor, kao i ako se na bilo koji način nepravilno označi odgovor, oduzima se 1 poen.',
                    year: 2013,
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
                },
            },
            'opsta-kultura': {
                2023: {
                    faculty: 'fakultet-organizacionih-nauka',
                    subject: 'opsta kultura',
                    // eslint-disable-next-line max-len
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
                    // eslint-disable-next-line max-len
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
                    // eslint-disable-next-line max-len
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
