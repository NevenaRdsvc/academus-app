import { CommonModule } from '@angular/common';
import { Component, NgZone, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

import { environment } from '../environments/environment';
import { LS_USER_LANGUAGE } from './shared/constants';
import { AccountService } from './shared/services/account.service';

@Component({
  selector: 'la-root',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  showLoadingSpinner = true;
  isDark = false;

  constructor(
    private translateService: TranslateService,
    private zone: NgZone,
    public accountService: AccountService
  ) {
    let languageToUse = environment.defaultLanguage;
    this.translateService.setDefaultLang(languageToUse);
    const savedLanguage = localStorage.getItem(LS_USER_LANGUAGE);
    const savedDark = localStorage.getItem('darkMode');

    if (savedLanguage) {
      languageToUse = savedLanguage;
    } else {
      localStorage.setItem(LS_USER_LANGUAGE, languageToUse);
    }

    this.translateService.use(languageToUse);
    this.isDark = savedDark === 'true';
  }

  ngOnInit(): void {
    this.zone.onStable.subscribe(() => (this.showLoadingSpinner = false));

    if (this.accountService.authenticated()) {
      this.accountService.getMyUserInfo().subscribe({
        next: (user) => (this.accountService.user = user),
        error: (err) => console.error('User info load error', err)
      });
    }
  }

  toggleDarkMode() {
    this.isDark = !this.isDark;
    document.body.classList.toggle('dark-mode', this.isDark);
    localStorage.setItem('darkMode', this.isDark ? 'true' : 'false');
  }
}
