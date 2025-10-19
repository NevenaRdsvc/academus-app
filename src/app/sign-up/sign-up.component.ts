import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

import { MessageService } from '../shared/services/message.service';

interface UserRegisterModel {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
}

@Component({
  selector: 'la-sign-up',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent {
  showPassword: boolean = false;
  model: UserRegisterModel = { email: '', password: '', firstName: '', lastName: '' };

  firstNameError = '';
  lastNameError = '';
  emailError = '';
  passwordError = '';
  generalError = '';

  constructor(private router: Router, private messageService: MessageService) {}

  togglePassword(): void {
    this.showPassword = !this.showPassword;
  }

  private validateInputs(): boolean {
    this.firstNameError = '';
    this.lastNameError = '';
    this.emailError = '';
    this.passwordError = '';
    this.generalError = '';

    const nameRegex = /^[A-Z][a-z]*$/;

    if (!this.model.firstName.trim()) {
      this.firstNameError = 'Unesite ime.';
    } else if (!nameRegex.test(this.model.firstName)) {
      this.firstNameError = 'Ime mora početi velikim slovom.';
    }

    if (!this.model.lastName.trim()) {
      this.lastNameError = 'Unesite prezime.';
    } else if (!nameRegex.test(this.model.lastName)) {
      this.lastNameError = 'Prezime mora početi velikim slovom.';
    }

    if (!this.model.email.trim()) {
      this.emailError = 'Unesite email.';
    } else if (!this.model.email.includes('@')) {
      this.emailError = 'Email mora sadržati @.';
    }

    if (!this.model.password.trim()) {
      this.passwordError = 'Unesite lozinku.';
    } else if (this.model.password.length < 6) {
      this.passwordError = 'Lozinka mora imati najmanje 6 karaktera.';
    }

    return !this.firstNameError && !this.lastNameError && !this.emailError && !this.passwordError;
  }

  signUp(): void {
    if (!this.validateInputs()) return;

    const storedUsers: UserRegisterModel[] = JSON.parse(localStorage.getItem('users') || '[]');

    if (storedUsers.some(u => u.email === this.model.email)) {
      this.generalError = 'Korisnik sa ovim emailom već postoji!';
      this.messageService.error(this.generalError);
      return;
    }

    storedUsers.push(this.model);
    localStorage.setItem('users', JSON.stringify(storedUsers));
    localStorage.setItem('loggedInUser', JSON.stringify(this.model));

    this.messageService.success('Uspešno ste kreirali nalog!');
    this.router.navigate(['/home']);
  }

  goToLogin(): void {
    this.router.navigate(['/login']);
  }
}
