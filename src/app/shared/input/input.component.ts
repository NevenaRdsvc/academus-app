import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'la-input',
  templateUrl: 'input.component.html',
  styleUrls: ['input.component.scss'],
  standalone: true,
  imports: [MatInputModule, MatFormFieldModule, FormsModule, CommonModule]
})
export class InputComponent {
  @Input() label: string = '';
  @Input() type: string = 'text';
  @Input() placeholder: string = '';
  @Input() icon?: string;
  @Input() value: string = '';

  @Output() valueChange = new EventEmitter<string>();


  onValueChange(newValue: string) {
    this.value = newValue;
    this.valueChange.emit(newValue);
  }
}

