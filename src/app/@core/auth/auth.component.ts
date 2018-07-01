import { PLATFORM_ID, Renderer2 } from '@angular/core';
import { isPlatformBrowser, isPlatformServer } from '@angular/common';

import { Component, OnInit } from '@angular/core';
import { Routes } from '@angular/router';
import { SeoService } from '../../@services/front/seo.services';

@Component({
  selector: 'auth',
  templateUrl: './auth.html',
  styleUrls: ['./style.scss']
})
export class Auth implements OnInit {

  pinsidebar:boolean = false;
  sidebarvisible:boolean = false;
  sidebaropen:boolean = false;
  constructor(private seo: SeoService,private renderer: Renderer2) { 
    this.renderer.addClass(document.body, 'page-ready');
  }
  ngOnInit() {
    this.seo.generateTags({
      title: 'Index Page', 
      description: 'Contact me through this awesome search engine optimized Angular component', 
      image: 'https://instafire-app.firebaseapp.com/assets/meerkat.jpeg',
      slug: 'contact-page'
    })
  }
}
