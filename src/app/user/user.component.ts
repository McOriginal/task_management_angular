import { Component, EventEmitter, Input, Output } from '@angular/core';
import { userData } from '../userData';
import { User } from '../Type';

const random = Math.floor(Math.random() * userData.length);

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  @Input({ required: true }) user!: User;
  @Input({ required: true }) isSelected!: boolean;
  @Output() selected = new EventEmitter<any>();

  onUserClick() {
    this.selected.emit(this.user.id);
  }
}
