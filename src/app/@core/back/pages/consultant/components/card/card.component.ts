
import { Component, OnInit, Inject, Input } from '@angular/core';
import { Consultant } from '../../../../../../models/consultant';

@Component({
  selector: 'user-card',
  templateUrl: './card.html',
  styleUrls: ['./style.scss']
})
export class UserCard implements OnInit {
  @Input() consultant: Consultant;
  constructor() {}
  ngOnInit() {
  }
}