import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

import { UserRegisterModel } from '../shared/models/user';
import { AccountService } from '../shared/services/account.service';

@Component({
  selector: 'la-sign-up',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent {
  errorMessage: string = '';
  model: UserRegisterModel = {
    email: '',
    password: '',
    firstName: '',
    lastName: ''
  };

  constructor(private router: Router, private accountService: AccountService) { }

  signUp(): void {
    if (!this.model.email || !this.model.password || !this.model.firstName || !this.model.lastName) {
      this.errorMessage = 'Popunite sva polja!';
      return;
    }

    this.accountService.signUp(this.model).subscribe({
      next: _ =>     this.router.navigate(['/home']),
      error: errors => console.log(errors)
    });
  }

  goToLogin(): void {
    this.router.navigate(['/login']);
  }
}
