import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'la-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  email: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor(private router: Router) {
    this.seedUser();
  }

  seedUser(): void {
    const user = {
      email: 'test@test.com',
      password: 'test123',
      name: 'Nevena Radosavljević',
      avatar: 'assets/images/avatar-default.png'
    };
    localStorage.setItem('user', JSON.stringify(user));
  }

  login(): void {
    const userStr = localStorage.getItem('user');
    if (!userStr) {
      this.errorMessage = 'Korisnik nije pronađen.';
      return;
    }

    const user = JSON.parse(userStr);

    if (
      this.email.trim().toLowerCase() === user.email.toLowerCase() &&
      this.password === user.password
    ) {
      localStorage.setItem('loggedInUser', JSON.stringify(user));
      localStorage.setItem('korisnikIme', user.name);
      localStorage.setItem('korisnikAvatar', user.avatar);

      this.errorMessage = '';
      this.router.navigate(['/home']);
    } else {
      this.errorMessage = 'Pogrešan email ili lozinka.';
    }
  }

  goToSignUp(): void {
    this.router.navigate(['/sign-up']);
  }
}
