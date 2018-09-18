import { PLATFORM_ID, Renderer2, AfterViewInit } from '@angular/core';
import { isPlatformBrowser, isPlatformServer } from '@angular/common';

import { Component, OnInit } from '@angular/core';
import { Routes } from '@angular/router';
import { SeoService } from '../../@services/front/seo.services';
// declare module 'waypoints';
declare var Snap: any;
declare var mina: any;
@Component({
  selector: 'front',
  templateUrl: './front.html',
  styleUrls: ['./style.scss']
})
export class Front implements OnInit {
  $body: any;
  $content: any;
  $footer: any;
  pinsidebar: boolean = false;
  sidebarvisible: boolean = false;
  sidebaropen: boolean = false;
  directionscroll: any;
  constructor(private seo: SeoService, private renderer: Renderer2) {
    // this.renderer.addClass(document.body, 'navigation-panel');
    // this.renderer.addClass(document.body, 'page-scrolling');
    // this.renderer.addClass(document.body, 'dark-scheme');
    // this.renderer.addClass(document.body, 'loaded');
    // this.renderer.addClass(document.body, 'navigation-panel page-scrolling dark-scheme loaded');
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
    // var s = $('section');
    self.$body = $('body');
    self.$content = $('#content');
    self.$footer = $('#footer');
  }

}
