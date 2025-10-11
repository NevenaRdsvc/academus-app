import { Component, Input } from '@angular/core';
import { MenuComponent } from '../menu/menu.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'la-square',
  standalone: true,
  imports: [MenuComponent, CommonModule],
  templateUrl: './square.component.html',
  styleUrls: ['./square.component.scss']
})
export class SquareComponent {
  @Input() bgColor: string = '#F7F9FA';
}
