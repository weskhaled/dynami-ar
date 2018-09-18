import { Component, OnInit, OnDestroy, Inject, ViewChildren, QueryList, ElementRef, Renderer, ViewChild, Renderer2 } from '@angular/core';
import { SeoService } from '../../../../@services/front/seo.services';
import {
  PerfectScrollbarConfigInterface,
  PerfectScrollbarComponent, PerfectScrollbarDirective
} from 'ngx-perfect-scrollbar';
import Typed from 'typed.js';
import { SwiperConfigInterface } from 'ngx-swiper-wrapper';
// import EasyPieChart from 'easy-pie-chart';
@Component({
  selector: 'LandingComponent',
  templateUrl: './landing.html',
  styleUrls: ['./style.scss']
})
export class LandingComponent implements OnInit {
  public config: PerfectScrollbarConfigInterface = {};
  $body: any;
  $content: any;
  $footer: any;
  // google maps zoom level
  zoom: number = 8;
  // initial center position for the map
  lat: number = 36.860938;
  lng: number = 10.189896;
  clickedMarker(label: string, index: number) {
    // console.log(`clicked the marker: ${label || index}`)
  }
  markers: marker[] = [
	  {
		  lat: 36.860938,
		  lng: 10.189896,
		  label: 'WK',
		  draggable: false
	  }
  ]
  enabledmap:boolean = false;
  constructor(private seo: SeoService, private renderer: Renderer2) {
  }
  ngOnInit() {
    this.seo.generateTags({
      title: 'Index Page',
      description: 'Contact me through this awesome search engine optimized Angular component',
      image: 'https://instafire-app.firebaseapp.com/assets/meerkat.jpeg',
      slug: 'contact-page'
    })
  }
  ngAfterViewInit() {
    let self = this;
    self.$body = $('body');
    self.$content = $('#content');
  }
}

// just an interface for type safety.
interface marker {
	lat: number;
	lng: number;
	label?: string;
	draggable: boolean;
}