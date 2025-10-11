import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FacultyService } from '../services/faculty.service';

@Component({
  selector: 'la-menu',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {
  selectedNames: string = '';

  constructor(private facultyService: FacultyService) {
    this.facultyService.selectedFaculties$.subscribe(f => {
      this.selectedNames = f.map(fac => fac.name).join(', ');
    });
  }

  logout() {
    localStorage.removeItem('loggedInUser');
    window.location.href = '/login';
  }
}
