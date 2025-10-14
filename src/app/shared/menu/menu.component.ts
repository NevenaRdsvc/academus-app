import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AccountService } from '../services/account.service';
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

  constructor(private facultyService: FacultyService, private accountService: AccountService) {
    this.facultyService.selectedFaculties$.subscribe(f => {
      this.selectedNames = f.map(fac => fac.name).join(', ');
    });
  }

  logout() {
    localStorage.removeItem('loggedInUser');
    this.accountService.signOut();
    window.location.href = '/login';
  }
}
