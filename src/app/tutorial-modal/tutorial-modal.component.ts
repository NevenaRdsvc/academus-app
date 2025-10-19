import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'la-tutorial-modal',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tutorial-modal.component.html',
  styleUrls: ['./tutorial-modal.component.scss']
})
export class TutorialModalComponent implements OnInit {
  steps = [
  {
    img: 'assets/images/technical1.png',
    title: 'Dobrodošli na Academus!',
    text: 'Na jednoj platformi možete pronaći sve zbirke zadataka, testove i materijale koji će vam pomoći da se uspešno pripremite za prijemni ispit.'
  },
  {
    img: 'assets/images/medical2.png',
    title: 'Pronađite svoj fakultet',
    text: 'Izaberite fakultet koji vas zanima u kartici "Fakulteti", a zatim pristupite kartici "Učenje" kako biste pregledali dostupne materijale.'
  },
  {
    img: 'assets/images/medical3.png',
    title: 'Organizujte svoju kolekciju',
    text: 'Sačuvajte materijale koje najčešće koristite, pregledajte zbirke, stare ispitne rokove, napravite beleške ili igrajte flash kartice za lakše učenje.'
  },
  {
    img: 'assets/images/technical3.png',
    title: 'Dodatne funkcionalnosti',
    text: 'Koristite Pomodoro tajmer za produktivno učenje, beležite važne datume u kalendaru i prilagodite aplikaciju tamnoj ili svetloj temi prema vašem izboru.'
  },
  {
    img: 'assets/images/technical2.png',
    title: 'Spremni za učenje!',
    text: 'Uživajte u korišćenju Academus-a i neka priprema za prijemni ispit bude jednostavna, organizovana i efikasna!'
  }
];

  currentStep = 0;
  show = false;

ngOnInit() {
  const loggedUser = JSON.parse(localStorage.getItem('loggedInUser') || 'null');

  if (loggedUser) {
    if (
      loggedUser.email === 'nevenaradosavljevic@gmail.com' &&
      loggedUser.password === 'nevena123'
    ) {
      this.show = false;
      return;
    }
    const seen = localStorage.getItem(`tutorialSeen_${loggedUser.email}`) === 'true';
    this.show = !seen;
  } else {
    this.show = false;
  }
}

  next() {
    if (this.currentStep < this.steps.length - 1) {
      this.currentStep++;
    }
  }

  prev() {
    if (this.currentStep > 0) {
      this.currentStep--;
    }
  }

 finish() {
  this.show = false;
  const loggedUser = JSON.parse(localStorage.getItem('loggedInUser')!);
  if (loggedUser) {
    localStorage.setItem(`tutorialSeen_${loggedUser.email}`, 'true');
  }
}
}
