import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { User } from '../_models/user';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  @Input() users: User[];
  @Output() viewUser: EventEmitter<User> = new EventEmitter();
  @Output() deleteUser: EventEmitter<User> = new EventEmitter();
}
