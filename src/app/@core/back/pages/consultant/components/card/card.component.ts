
import { Component, OnInit, Inject, Input } from '@angular/core';

@Component({
  selector: 'user-card',
  templateUrl: './card.html',
  styleUrls: ['./style.scss']
})
export class UserCard implements OnInit {
  @Input() consultant: Object;
  constructor() {}
  ngOnInit() {
  }
}