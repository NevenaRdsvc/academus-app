import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

import { MessageComponent } from '../shared/message/message.component';
import { Faculty, FacultyService } from '../shared/services/faculty.service';
import { MessageService } from '../shared/services/message.service';

@Component({
  selector: 'la-faculties-list',
  standalone: true,
  imports: [CommonModule, MessageComponent],
  templateUrl: './faculties-list.component.html',
  styleUrls: ['./faculties-list.component.scss']
})
export class FacultiesListComponent {
  @Input() searchQuery: string = '';

  technicalTitle = 'Tehnički Fakulteti';
  medicalTitle = 'Medicinski Fakulteti';
  pharmacyTitle = 'Farmaceutski Fakulteti';
  artTitle = 'Umetnički Fakulteti';
  socialTitle = 'Društveni Fakulteti';
  economicTitle = 'Ekonomski Fakulteti';
  sportsTitle = 'Sportski Fakulteti';

  technicalFaculties: Faculty[] = [];
  medicalFaculties: Faculty[] = [];
  pharmacyFaculties: Faculty[] = [];
  artFaculties: Faculty[] = [];
  socialFaculties: Faculty[] = [];
  economicFaculties: Faculty[] = [];
  sportsFaculties: Faculty[] = [];

  showLocalConfirm = false;
  localConfirmMessage = '';
  private localConfirmResolver: ((result: boolean) => void) | null = null;

  constructor(
    public facultyService: FacultyService,
    private messageService: MessageService
  ) {
    const all = facultyService.getAllFaculties();
     this.technicalFaculties = all.filter(f => f.type === 'technical');
    this.medicalFaculties = all.filter(f => f.type === 'medical');
    this.pharmacyFaculties = all.filter(f => f.type === 'pharmacy');
    this.artFaculties = all.filter(f => f.type === 'art');
    this.socialFaculties = all.filter(f => f.type === 'social');
    this.economicFaculties = all.filter(f => f.type === 'economic');
    this.sportsFaculties = all.filter(f => f.type === 'sports');
  }
async openConfirmation(faculty: Faculty) {
    const action = this.isSelected(faculty) ? 'deselect' : 'select';
    const msg = action === 'select'
      ? 'Da li želite da se prijavite na ovaj kurs?'
      : 'Da li želite da se odjavite sa kursa? Vaši dosadašnji rezultati biće obrisani.';

    let confirmed = false;
    try {
      confirmed = await this.messageService.confirm(msg);
    } catch {
      confirmed = await this.localConfirm(msg);
    }

    if (confirmed) {
      this.facultyService.toggleFaculty(faculty);
      this.messageService.success(
        action === 'select' ? 'Uspešno ste se prijavili!' : 'Uspešno ste se odjavili!'
      );
    } else {
      this.messageService.info('Akcija otkazana.');
    }
  }

  localConfirm(message: string): Promise<boolean> {
    this.localConfirmMessage = message;
    this.showLocalConfirm = true;
    return new Promise(resolve => {
      this.localConfirmResolver = resolve;
    });
  }

  // Filterovane liste sa searchQuery
  get filteredTechnical() { return this.filterFaculties(this.technicalFaculties); }
  get filteredMedical() { return this.filterFaculties(this.medicalFaculties); }
  get filteredPharmacy() { return this.filterFaculties(this.pharmacyFaculties); }
  get filteredArt() { return this.filterFaculties(this.artFaculties); }
  get filteredSocial() { return this.filterFaculties(this.socialFaculties); }
  get filteredEconomic() { return this.filterFaculties(this.economicFaculties); }
  get filteredSports() { return this.filterFaculties(this.sportsFaculties); }

  private filterFaculties(faculties: Faculty[]): Faculty[] {
    if (!this.searchQuery.trim()) return faculties;
    return faculties.filter(f => f.name.toLowerCase().includes(this.searchQuery.toLowerCase()));
  }

  resolveLocalConfirm(result: boolean) {
    if (this.localConfirmResolver) {
      this.localConfirmResolver(result);
      this.localConfirmResolver = null;
    }
    this.showLocalConfirm = false;
  }

  isSelected(faculty: Faculty) {
    return this.facultyService.isSelected(faculty);
  }
}
