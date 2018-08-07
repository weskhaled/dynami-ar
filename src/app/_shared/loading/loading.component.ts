import { Component, OnInit, Renderer2, Input } from '@angular/core';

@Component({
  selector: 'loadingComponent',
  templateUrl: './loading.html',
  styleUrls: ['./style.scss']
})
export class LoadingComponent implements OnInit {
  @Input() loading: boolean ;
  constructor(private renderer: Renderer2) {

  }
  ngOnInit() {
  }
  ngAfterViewInit() {
  }
}