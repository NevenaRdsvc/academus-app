import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FlashcardSet, FlashcardsService } from '../shared/services/flashcards.service';
import { MessageComponent } from '../shared/message/message.component';
import { MessageService } from '../shared/services/message.service';
import { HeaderComponent } from '../shared/header/header.component';
import { SquareComponent } from '../shared/square/square.component';
import { InputComponent } from '../shared/input/input.component';

@Component({
  selector: 'la-flashcards-create',
  standalone: true,
  imports: [HeaderComponent, SquareComponent, CommonModule, FormsModule, MessageComponent],
  templateUrl: './flashcards-create.component.html',
  styleUrls: ['./flashcards-create.component.scss']
})
export class FlashcardsCreateComponent {
  setName = '';
  setDescription = '';
  flashcards = [
    { term: '', definition: '' },
    { term: '', definition: '' }
  ];

  constructor(
    private router: Router,
    private flashcardsService: FlashcardsService,
    private messageService: MessageService
  ) { }

  addFlashcard() {
    this.flashcards.push({ term: '', definition: '' });
  }

  private validateSet(): boolean {
    if (!this.setName.trim()) {
      this.messageService.warning('Unesi ime seta.');
      return false;
    }

    const validCards = this.flashcards.filter(
      f => f.term.trim() && f.definition.trim()
    );

    if (validCards.length < 2) {
      this.messageService.warning('Moraš uneti bar 2 pojma i definicije.');
      return false;
    }

    const existingSets = this.flashcardsService.getSets();
    const newSet: FlashcardSet = {
      name: this.setName.trim(),
      description: this.setDescription.trim(),
      flashcards: validCards
    };

    const isDuplicate = existingSets.some(existing =>
      existing.name === newSet.name &&
      existing.flashcards.length === newSet.flashcards.length &&
      existing.flashcards.every((f, i) =>
        f.term === newSet.flashcards[i].term &&
        f.definition === newSet.flashcards[i].definition
      )
    );

    if (isDuplicate) {
      this.messageService.warning('Ovaj set već postoji.');
      return false;
    }

    this.flashcardsService.saveSet(newSet);
    return true;
  }

  createSet() {
    if (this.validateSet()) {
      this.messageService.success('Set uspešno sačuvan!');
      this.router.navigate(['/flashcards-main']);
    }
  }

  createAndPlay() {
    if (this.validateSet()) {
      this.messageService.success('Set uspešno sačuvan! Krećemo sa vežbom.');
      this.router.navigate(['/flashcards-igra']);
    }
  }

  removeFlashcard(index: number) {
    if (this.flashcards.length <= 2) {
      this.messageService.warning('Moraš imati bar 2 pojma u setu.');
      return;
    }
    this.flashcards.splice(index, 1);
  }

}
