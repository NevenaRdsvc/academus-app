import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

import { Faculty, FacultyService } from '../shared/services/faculty.service';
import { MessageService } from '../shared/services/message.service';

@Component({
  selector: 'la-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  showPassword = false;
  model = { email: '', password: '' };

  emailError = '';
  passwordError = '';
  generalError = '';

  faculties: Faculty[] = [];

  constructor(
    private router: Router,
    private messageService: MessageService,
    private facultyService: FacultyService
  ) {
    this.faculties = this.facultyService.getAllFaculties();

    if (!localStorage.getItem('users')) {
      const defaultUser = {
        email: 'nevenaradosavljevic@gmail.com',
        password: 'nevena123',
        name: 'Nevena Radosavljević'
      };
      localStorage.setItem('users', JSON.stringify([defaultUser]));
    }
  }

  togglePassword(): void {
    this.showPassword = !this.showPassword;
  }

  private validateInputs(): boolean {
    this.emailError = '';
    this.passwordError = '';
    this.generalError = '';

    if (!this.model.email.trim()) {
      this.emailError = 'Unesite email adresu.';
    } else {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(this.model.email)) {
        this.emailError = 'Email adresa nije validna.';
      }
    }

    if (!this.model.password.trim()) {
      this.passwordError = 'Unesite lozinku.';
    } else if (this.model.password.length < 6) {
      this.passwordError = 'Lozinka mora imati najmanje 6 karaktera.';
    }

    return !this.emailError && !this.passwordError;
  }

  login(): void {
    if (!this.validateInputs()) return;

    const storedUsers = JSON.parse(localStorage.getItem('users') || '[]');
    const facultyMatch = this.faculties.find(
      f => f.email === this.model.email && f.password === this.model.password
    );

    if (facultyMatch) {
      localStorage.setItem('loggedFaculty', JSON.stringify(facultyMatch));
      this.messageService.success(`Prijavljeni ste kao ${facultyMatch.name}`);
      this.router.navigate(['/admin']);
      return;
    }

    const userMatch = storedUsers.find(
      (u: any) => u.email === this.model.email && u.password === this.model.password
    );

    if (userMatch) {
      localStorage.setItem('loggedInUser', JSON.stringify(userMatch));
      this.messageService.success(`Uspešno ste se prijavili!`);
      this.router.navigate(['/home']);
    } else {
      this.generalError = 'Korisnik sa unetim podacima ne postoji.';
      this.messageService.error(this.generalError);
    }
  }

  goToSignUp(): void {
    this.router.navigate(['/sign-up']);
  }

  goBack(): void {
    this.router.navigate(['/']);
  }
}
