import { CommonModule } from '@angular/common';
import { Component, HostListener, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

import { MessageComponent } from '../shared/message/message.component';
import { Faculty, FacultyService } from '../shared/services/faculty.service';
import { MessageService } from '../shared/services/message.service';

interface Material {
  title: string;
  subject: string;
  type: 'zbirka' | 'stari-rokovi';
  fileUrl: string;
  uploadedAt: Date;
}

@Component({
  selector: 'la-admin-dashboard',
  standalone: true,
  imports: [CommonModule, FormsModule, MessageComponent],
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.scss']
})
export class AdminDashboardComponent implements OnInit {
  currentFaculty?: Faculty;
  subjects: string[] = [];
  activeTab: 'materials' | 'users' = 'materials';
  materials: Material[] = [];
  newMaterial: Partial<Material> = { type: 'zbirka' };
  registeredUsers = [
    { name: 'Marko Marković', email: 'marko@example.com', avatar: 'M' },
    { name: 'Jovana Jovanović', email: 'jovana@example.com', avatar: 'J' },
    { name: 'Petar Petrović', email: 'petar@example.com', avatar: 'P' }
  ];
  bannerImages: string[] = [
    'assets/images/banner-2.png',
    'assets/images/banner-3.png',
    'assets/images/banner-4.png'
  ];

  // ✅ Dropdown logika
  dropdownOpen = false;
  typeDropdownOpen = false;

  selectedSubject = '';
  selectedType = 'zbirka';

  constructor(
    private facultyService: FacultyService,
    private router: Router,
    private messageService: MessageService
  ) {}

  ngOnInit() {
    const facultyData = JSON.parse(localStorage.getItem('loggedFaculty') || '{}');
    this.currentFaculty = this.facultyService
      .getAllFaculties()
      .find(f => f.name === facultyData.facultyName || f.email === facultyData.email);

    if (this.currentFaculty) {
      if (!this.currentFaculty.banner) {
        this.currentFaculty.banner = this.getRandomBanner();
      }
      this.subjects = this.currentFaculty.entranceExamSubjects;
    }
  }

  // 🎓 Predmet dropdown
  toggleDropdown() {
    this.dropdownOpen = !this.dropdownOpen;
    if (this.dropdownOpen) this.typeDropdownOpen = false;
  }

  selectSubject(subject: string, event: Event) {
    event.stopPropagation();
    this.selectedSubject = subject;
    this.newMaterial.subject = subject;
    this.dropdownOpen = false;
  }

  // 📘 Tip materijala dropdown
  toggleTypeDropdown() {
    this.typeDropdownOpen = !this.typeDropdownOpen;
    if (this.typeDropdownOpen) this.dropdownOpen = false;
  }

  selectType(type: 'zbirka' | 'stari-rokovi', event: Event) {
    event.stopPropagation();
    this.selectedType = type;
    this.newMaterial.type = type;
    this.typeDropdownOpen = false;
  }

  // 🚪 Zatvaranje dropdowna klikom van njega
  @HostListener('document:click', ['$event'])
  onClickOutside(event: Event) {
    const target = event.target as HTMLElement;
    if (!target.closest('.custom-dropdown')) {
      this.dropdownOpen = false;
      this.typeDropdownOpen = false;
    }
  }

  // 🧾 Ostalo (netaknuto)
  getRandomBanner(): string {
    const index = Math.floor(Math.random() * this.bannerImages.length);
    return this.bannerImages[index];
  }

  logout() {
    localStorage.removeItem('loggedFaculty');
    this.router.navigate(['/login']);
  }

  onFileSelected(event: any) {
    const file = event.target.files[0];
    if (file) this.newMaterial!.fileUrl = URL.createObjectURL(file);
  }

  addMaterial() {
    if (!this.newMaterial.title || !this.newMaterial.subject || !this.newMaterial.fileUrl) {
      this.messageService.warning('Popunite sva polja.');
      return;
    }

    this.materials.push({
      title: this.newMaterial.title!,
      subject: this.newMaterial.subject!,
      type: this.newMaterial.type!,
      fileUrl: this.newMaterial.fileUrl!,
      uploadedAt: new Date()
    });

    this.messageService.success('Materijal je uspešno dodat!');
    this.newMaterial = { type: 'zbirka' };
    this.selectedSubject = '';
  }

  async deleteMaterial(index: number) {
    const confirmed = await this.messageService.confirm('Da li ste sigurni da želite da obrišete ovaj materijal?');

    if (confirmed) {
      this.materials.splice(index, 1);
      this.messageService.success('Materijal je uspešno obrisan!');
    } else {
      this.messageService.info('Brisanje otkazano.');
    }
  }

  setTab(tab: 'materials' | 'users') {
    this.activeTab = tab;
  }

  getMaterialsByType(type: 'zbirka' | 'stari-rokovi') {
    return this.materials.filter(m => m.type === type);
  }
}
