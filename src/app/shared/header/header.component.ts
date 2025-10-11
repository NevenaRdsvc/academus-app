import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'la-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  @Input() title: string = '';
  @Input() backRoute: string = '';

  constructor(private router: Router) { }

  goBack(): void {
    if (this.backRoute) {
      this.router.navigate([this.backRoute]);
    } else {
      this.router.navigate(['/']);
    }
  }
}
