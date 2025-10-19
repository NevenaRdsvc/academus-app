import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'la-welcome',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {

  isDarkMode = false;

  constructor(private router: Router) {}

  ngOnInit() {
    this.isDarkMode = document.body.classList.contains('dark-mode');
    const observer = new MutationObserver(() => {
      this.isDarkMode = document.body.classList.contains('dark-mode');
    });

    observer.observe(document.body, { attributes: true, attributeFilter: ['class'] });
  }

  login() {
    this.router.navigate(['/login']);
  }

  register() {
    this.router.navigate(['/sign-up']);
  }
}
