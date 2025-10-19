import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { HeaderComponent } from '../shared/header/header.component';
import { CollectionItem, CollectionService } from '../shared/services/collection.service';
import { SafeUrlPipe } from '../shared/services/safe-url.pipe';
import { SquareComponent } from '../shared/square/square.component';

@Component({
  selector: 'la-book',
  standalone: true,
  imports: [CommonModule, HeaderComponent, SquareComponent, SafeUrlPipe],
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})
export class BookComponent implements OnInit {
  items: CollectionItem[] = [];
  currentSubject = '';

  constructor(private collectionService: CollectionService,private router: Router) {}

  goBack(): void {
  this.router.navigate(['/ucenje']);
}

  ngOnInit() {
    this.collectionService.selectedItemsObservable.subscribe(items => {
      this.items = items;
    });

    const current = this.collectionService.getCurrentFacultyAndSubject();
    this.currentSubject = current?.subject || '';
  }
}
