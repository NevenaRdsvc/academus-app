import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { HeaderComponent } from '../shared/header/header.component';
import { MessageComponent } from '../shared/message/message.component';
import { NoteService } from '../shared/services/note.service';
import { SquareComponent } from '../shared/square/square.component';

interface Note {
  title: string;
  content: string;
  color: string;
  favorite: boolean;
  date: Date;
}

@Component({
  selector: 'la-notes',
  standalone: true,
  imports: [CommonModule, FormsModule, SquareComponent, HeaderComponent, MessageComponent],
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.scss']
})
export class NotesComponent implements OnInit {
  newTitle = '';
  newContent = '';
  selectedColor = '#cae0ffff';
  isFavorite = false;

  showColors = false;
  noteToChangeColor: Note | null = null;
  editingNote: Note | null = null;

  pastelColors = ['#F9E0E3', '#FFF3B0', '#D8E2DC', '#cae0ffff', '#f3dfffff'];

  notes: Note[] = [];

  constructor(private noteService: NoteService) {

  }

  ngOnInit() {
    this.loadNotes();
    this.noteService.getNotes().subscribe({
      next: notes => console.log(notes),
      error: error => console.log(error)
    });
  }


  loadNotes() {
    const savedNotes = localStorage.getItem('notes');
    if (savedNotes) {
      this.notes = JSON.parse(savedNotes).map((note: Note) => ({
        ...note,
        date: new Date(note.date)
      }));
    }
  }


  saveNotes() {
    localStorage.setItem('notes', JSON.stringify(this.notes));
  }

  toggleColorPicker() {
    this.showColors = !this.showColors;
  }

  selectColor(color: string) {
    this.selectedColor = color;
    this.showColors = false;
  }

  addOrUpdateNote() {
    if (!this.newTitle.trim() || !this.newContent.trim()) return;

    if (this.editingNote) {

      this.editingNote.title = this.newTitle;
      this.editingNote.content = this.newContent;
      this.editingNote.color = this.selectedColor;
      this.editingNote.favorite = this.isFavorite;
      this.editingNote.date = new Date();
      this.editingNote = null;
    } else {

      this.notes.push({
        title: this.newTitle,
        content: this.newContent,
        color: this.selectedColor,
        favorite: this.isFavorite,
        date: new Date()
      });
    }

    this.saveNotes();
    this.resetForm();
  }

  resetForm() {
    this.newTitle = '';
    this.newContent = '';
    this.isFavorite = false;
    this.selectedColor = '#cae0ffff';
  }

  toggleFavorite(note: Note) {
    note.favorite = !note.favorite;
    this.saveNotes();
  }

  deleteNote(note: Note) {
    this.notes = this.notes.filter(n => n !== note);
    this.saveNotes();
  }

  editNote(note: Note) {
    this.newTitle = note.title;
    this.newContent = note.content;
    this.selectedColor = note.color;
    this.isFavorite = note.favorite;
    this.editingNote = note;
  }

  changeNoteColor(note: Note) {
    this.noteToChangeColor = note;
  }

  applyNoteColor(color: string) {
    if (this.noteToChangeColor) {
      this.noteToChangeColor.color = color;
      this.noteToChangeColor = null;
      this.saveNotes();
    }
  }
}
