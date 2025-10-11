import { Injectable } from '@angular/core';

export interface Flashcard {
    term: string;
    definition: string;
}

export interface FlashcardSet {
    name: string;
    description: string;
    flashcards: Flashcard[];
}

@Injectable({
    providedIn: 'root'
})
export class FlashcardsService {
    private sets: FlashcardSet[] = [];

    constructor() {
        const saved = localStorage.getItem('flashcardSets');
        if (saved) {
            this.sets = JSON.parse(saved);
        }
    }

    saveSet(set: FlashcardSet) {
        this.sets.push(set);
        localStorage.setItem('flashcardSets', JSON.stringify(this.sets));
    }

    getSets(): FlashcardSet[] {
        return this.sets;
    }

    clearSets() {
        this.sets = [];
        localStorage.removeItem('flashcardSets');
    }

    deleteSet(index: number) {
        this.sets.splice(index, 1);
        localStorage.setItem('flashcardSets', JSON.stringify(this.sets));
    }

    deleteSets(indexes: number[]) {
        indexes.sort((a, b) => b - a).forEach(i => this.deleteSet(i));
    }
}
