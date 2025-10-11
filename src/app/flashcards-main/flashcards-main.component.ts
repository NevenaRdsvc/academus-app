import { Component } from '@angular/core';
import { MenuComponent } from '../shared/menu/menu.component';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FlashcardSet, FlashcardsService } from '../shared/services/flashcards.service';
import { MessageService } from '../shared/services/message.service';
import { MessageComponent } from '../shared/message/message.component';
import { HeaderComponent } from '../shared/header/header.component';
import { SquareComponent } from '../shared/square/square.component';


@Component({
  selector: 'la-flashcards-main',
  standalone: true,
  imports: [HeaderComponent, SquareComponent, CommonModule, MessageComponent],
  templateUrl: './flashcards-main.component.html',
  styleUrls: ['./flashcards-main.component.scss']
})
export class FlashcardsMainComponent {
  sets: FlashcardSet[] = [];
  deleteMode = false;
  selectedSets = new Set<number>();

  constructor(
    private router: Router,
    private flashcardsService: FlashcardsService,
    private messageService: MessageService
  ) {
    this.sets = this.flashcardsService.getSets();
  }


  navigate() {
    this.router.navigate(['/flashcards-kreiraj']);
  }

  playSet(index: number) {
    this.router.navigate(['/flashcards-igra'], { queryParams: { setIndex: index } });
  }

  toggleDeleteMode() {
    this.deleteMode = !this.deleteMode;
    if (!this.deleteMode) {
      this.selectedSets.clear();
    }
  }

  toggleSelect(index: number) {
    if (this.selectedSets.has(index)) {
      this.selectedSets.delete(index);
    } else {
      this.selectedSets.add(index);
    }
  }

  async confirmDelete() {
    if (this.selectedSets.size === 0) {
      this.messageService.warning('Nijedan set nije odabran za brisanje.');
      return;
    }

    const confirmed = await this.messageService.confirm(
      `Da li sigurno želiš da obrišeš set?`
    );

    if (confirmed) {
      this.flashcardsService.deleteSets(Array.from(this.selectedSets));
      this.sets = this.flashcardsService.getSets();
      this.selectedSets.clear();
      this.deleteMode = false;
      this.messageService.success('Set je uspešno obrisan! ');
    }
  }

  getRandomImage(index: number) {
    const images = [
      'assets/images/medical3.png',
      'assets/images/medical2.png',
      'assets/images/technical3.png',
      'assets/images/pharm2.png'
    ];
    return images[index % images.length];
  }
}
