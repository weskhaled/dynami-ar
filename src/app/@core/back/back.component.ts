import { PLATFORM_ID, Renderer2 } from '@angular/core';
import { isPlatformBrowser, isPlatformServer } from '@angular/common';

import { Component, OnInit } from '@angular/core';
import { Routes } from '@angular/router';
import { SeoService } from '../../@services/front/seo.services';

@Component({
  selector: 'back',
  templateUrl: './back.html',
  styleUrls: ['./style.scss']
})
export class Back implements OnInit {

  pinsidebar:boolean = false;
  sidebarvisible:boolean = false;
  sidebaropen:boolean = false;
  constructor(private seo: SeoService,private renderer: Renderer2) { 
    this.renderer.addClass(document.body, 'page-ready');
    this.renderer.removeClass(document.body, 'navigation-panel');
    this.renderer.removeClass(document.body, 'page-scrolling');
    this.renderer.removeClass(document.body, 'dark-scheme');
    this.renderer.removeClass(document.body, 'loaded');
  }
  ngOnInit() {
    this.seo.generateTags({
      title: 'Index Page', 
      description: 'Contact me through this awesome search engine optimized Angular component', 
      image: 'https://instafire-app.firebaseapp.com/assets/meerkat.jpeg',
      slug: 'contact-page'
    })
  }
  togglePinSidebar($event){
    this.pinsidebar = !this.pinsidebar;
    if (this.pinsidebar) {
      this.renderer.addClass(document.body, 'menu-pin');
    } else {
      this.renderer.removeClass(document.body, 'menu-pin');
    }
  }
  hoverSidebarVisible($event){
    this.sidebarvisible = !this.sidebarvisible;
    if (this.sidebarvisible) {
      this.renderer.addClass(document.body, 'sidebar-visible');
    } else {
      this.renderer.removeClass(document.body, 'sidebar-visible');
    }  
  }
  togglesidebarOpen($event){
    this.sidebaropen = !this.sidebaropen;
    if (this.sidebaropen) {
      this.renderer.addClass(document.body, 'sidebar-open');
    } else {
      this.renderer.removeClass(document.body, 'sidebar-open');
    } 
  }
}
