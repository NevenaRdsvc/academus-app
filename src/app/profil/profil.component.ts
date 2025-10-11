import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SquareComponent } from '../shared/square/square.component';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from '../shared/header/header.component';

@Component({
  selector: 'la-profil',
  standalone: true,
  imports: [CommonModule, SquareComponent, FormsModule, HeaderComponent],
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.scss']
})
export class ProfilComponent {
  ime = localStorage.getItem('korisnikIme') || 'Korisnik';
  avatarUrl = localStorage.getItem('korisnikAvatar') || 'assets/images/avatar-default.png';
  nickname = localStorage.getItem('korisnikNickname') || this.ime;

  level = 1;
  levelProgress = 0;

  onNicknameChange(event: Event) {
    this.nickname = (event.target as HTMLInputElement).value;
    localStorage.setItem('korisnikNickname', this.nickname);
  }

  onAvatarChange(event: Event) {
    const file = (event.target as HTMLInputElement).files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => {
      this.avatarUrl = reader.result as string;
      localStorage.setItem('korisnikAvatar', this.avatarUrl);
    };
    reader.readAsDataURL(file);
  }
}
