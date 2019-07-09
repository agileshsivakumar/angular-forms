import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { User } from '../_models/user';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() users: User[];
  @Output() viewUser: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

}
