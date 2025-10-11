import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from '../shared/menu/menu.component';
import { Router, ActivatedRoute } from '@angular/router';
import { Flashcard, FlashcardSet, FlashcardsService } from '../shared/services/flashcards.service';
import { HeaderComponent } from '../shared/header/header.component';
import { SquareComponent } from '../shared/square/square.component';

@Component({
  selector: 'la-flashcards-play',
  standalone: true,
  imports: [CommonModule, HeaderComponent, SquareComponent],
  templateUrl: './flashcards-play.component.html',
  styleUrls: ['./flashcards-play.component.scss']
})
export class FlashcardsPlayComponent implements OnInit {
  flashcards: Flashcard[] = [];
  currentSet: FlashcardSet | null = null;
  currentIndex = 0;
  showDefinition = false;
  knownCount = 0;
  unknownCount = 0;
  showConfirmModal = false;


  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private flashcardsService: FlashcardsService
  ) { }

  ngOnInit() {
    const sets = this.flashcardsService.getSets();
    const indexParam = this.route.snapshot.queryParamMap.get('setIndex');
    const index = indexParam ? Number(indexParam) : sets.length - 1;

    if (!sets[index]) {
      alert('Nema aktivnog seta. Napravi novi.');
      this.router.navigate(['/flashcards-kreiraj']);
      return;
    }
    this.currentSet = sets[index];
    this.flashcards = this.currentSet.flashcards;
  }

  get currentCard() {
    return this.flashcards[this.currentIndex];
  }

  toggleDefinition() {
    this.showDefinition = !this.showDefinition;
  }

  markKnown() {
    this.knownCount++;
    this.nextCard();
  }

  markUnknown() {
    this.unknownCount++;
    this.nextCard();
  }

  nextCard() {
    this.showDefinition = false;
    this.currentIndex++;

    if (this.currentIndex >= this.flashcards.length) {
      this.showConfirmModal = true;
    }
  }

  restartSession(retryOnlyUnknown: boolean) {
    if (retryOnlyUnknown) {
      this.flashcards = this.flashcards.slice(0, this.unknownCount);
    }

    this.currentIndex = 0;
    this.showDefinition = false;
    this.knownCount = 0;
    this.unknownCount = 0;
    this.showConfirmModal = false;
  }
}
