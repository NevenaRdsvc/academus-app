import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { HeaderComponent } from '../shared/header/header.component';
import { MessageComponent } from '../shared/message/message.component';
import { MessageService } from '../shared/services/message.service';
import { SquareComponent } from '../shared/square/square.component';

@Component({
  selector: 'la-profil',
  standalone: true,
  imports: [CommonModule, SquareComponent, FormsModule, HeaderComponent, MessageComponent],
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.scss']
})
export class ProfilComponent {
  loggedUser = JSON.parse(localStorage.getItem('loggedInUser') || '{}');
  ime = this.loggedUser.name || 'Korisnik';
  avatarUrl = this.loggedUser.avatar || 'assets/images/ana.png';
  showPassword = false;

  constructor(private messageService: MessageService) {}

  onAvatarChange(event: Event) {
    const file = (event.target as HTMLInputElement).files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => {
      this.avatarUrl = reader.result as string;
      this.loggedUser.avatar = this.avatarUrl;
      localStorage.setItem('loggedInUser', JSON.stringify(this.loggedUser));
      this.messageService.success('Avatar je uspešno promenjen!');
    };
    reader.readAsDataURL(file);
  }

  togglePassword() {
    this.showPassword = !this.showPassword;
  }

  saveProfile() {
    localStorage.setItem('loggedInUser', JSON.stringify(this.loggedUser));
    this.messageService.success('Profil je uspešno sačuvan!');
  }

  logout() {
    this.messageService.confirm('Da li ste sigurni da želite da se odjavite?')
      .then(confirmed => {
        if (confirmed) {
          localStorage.removeItem('loggedInUser');
          window.location.href = '/login';
        }
      });
  }
}
