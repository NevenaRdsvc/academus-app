import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

import { UserLoginModel } from '../shared/models/user';
import { AccountService } from '../shared/services/account.service';

@Component({
  selector: 'la-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  errorMessage: string = '';

  model: UserLoginModel = {
    email: '',
    password: ''
  };

  constructor(private router: Router, private accountService: AccountService) { }

  login(): void {
    this.accountService.signIn(this.model).subscribe({
      next: _ => this.router.navigate(['/home']),
      error: errors => console.log(errors)
    });
  }

  goToSignUp(): void {
    this.router.navigate(['/sign-up']);
  }
}
