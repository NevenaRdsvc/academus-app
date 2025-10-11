import { Component } from '@angular/core';

import { FacultiesListComponent } from '../faculties-list/faculties-list.component';
import { InputComponent } from '../shared/input/input.component';
import { SquareComponent } from '../shared/square/square.component';

@Component({
  selector: 'la-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  standalone: true,
  imports: [SquareComponent, InputComponent, FacultiesListComponent, InputComponent]
})
export class HomeComponent {
  searchQuery: string = '';

}
