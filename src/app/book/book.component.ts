import { CommonModule } from '@angular/common';
import { AfterViewChecked, Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

import { HeaderComponent } from '../shared/header/header.component';
import { CollectionItem, CollectionService } from '../shared/services/collection.service';
import { SquareComponent } from '../shared/square/square.component';

@Component({
  selector: 'la-book',
  standalone: true,
  imports: [SquareComponent, CommonModule, HeaderComponent, FormsModule],
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})
export class BookComponent implements OnInit, AfterViewChecked {
  items: CollectionItem[] = [];
  currentSubject = '';

  searchActive = false;
  searchQuery = '';
  searchResults: string[] = [];
  currentSearchIndex = -1;

  constructor(private collectionService: CollectionService, private sanitizer: DomSanitizer) { }

  ngOnInit() {
    this.collectionService.selectedItemsObservable.subscribe(items => {
      this.items = items;
    });

    const current = this.collectionService.getCurrentFacultyAndSubject();
    this.currentSubject = current?.subject || '';
  }

  ngAfterViewChecked() {
    if (this.searchResults.length && this.currentSearchIndex >= 0) {
      const activeEl = document.querySelectorAll('.search-highlight')[this.currentSearchIndex];
      if (activeEl) {
        activeEl.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    }
  }

  toggleSearch() {
    this.searchActive = !this.searchActive;
    if (!this.searchActive) {
      this.searchQuery = '';
      this.searchResults = [];
      this.currentSearchIndex = -1;
    }
  }

  performSearch() {
    const query = this.searchQuery.trim().toLowerCase();
    if (!query) {
      this.searchResults = [];
      this.currentSearchIndex = -1;
      return;
    }

    const allMatches: string[] = [];
    this.items.forEach(item => {
      const matches = item.content.match(new RegExp(query, 'gi'));
      if (matches) {
        allMatches.push(...matches);
      }
    });

    this.searchResults = allMatches;
    this.currentSearchIndex = this.searchResults.length ? 0 : -1;
  }

  splitContent(content: string): string[] {
    if (!this.searchQuery.trim()) return [content];
    const regex = new RegExp(`(${this.searchQuery})`, 'gi');
    return content.split(regex);
  }

  isMatch(part: string): boolean {
    return this.searchQuery && part.toLowerCase() === this.searchQuery.toLowerCase();
  }

  isActiveMatch(part: string): boolean {
    if (!this.searchResults.length) return false;
    const activeElements = Array.from(document.querySelectorAll('.search-highlight'));
    const activeEl = activeElements[this.currentSearchIndex];
    return activeEl ? activeEl.textContent?.toLowerCase() === part.toLowerCase() : false;
  }

  searchNext() {
    if (!this.searchResults.length) return;
    this.currentSearchIndex = (this.currentSearchIndex + 1) % this.searchResults.length;
  }

  searchPrev() {
    if (!this.searchResults.length) return;
    this.currentSearchIndex =
      (this.currentSearchIndex - 1 + this.searchResults.length) % this.searchResults.length;
  }

  isPdf(content: string): boolean {
  return content.trim().toLowerCase().endsWith('.pdf');
}

getSafePdfUrl(url: string): SafeResourceUrl {
  return this.sanitizer.bypassSecurityTrustResourceUrl(url);
}
}
