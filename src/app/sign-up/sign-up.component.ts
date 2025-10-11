import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'la-sign-up',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent {
  imePrezime: string = '';
  email: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor(private router: Router) { }

  signUp(): void {
    if (!this.email || !this.password || !this.imePrezime) {
      this.errorMessage = 'Popunite sva polja!';
      return;
    }

    const user = { imePrezime: this.imePrezime, email: this.email, password: this.password };
    localStorage.setItem('user', JSON.stringify(user));
    this.errorMessage = '';
    this.router.navigate(['/home']);
  }

  goToLogin(): void {
    this.router.navigate(['/login']);
  }
}
