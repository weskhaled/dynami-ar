import { PLATFORM_ID, Renderer2, AfterViewInit } from '@angular/core';
import { isPlatformBrowser, isPlatformServer } from '@angular/common';

import { Component, OnInit } from '@angular/core';
import { Routes } from '@angular/router';
import { SeoService } from '../../@services/front/seo.services';
declare module 'waypoints';
@Component({
  selector: 'front',
  templateUrl: './front.html',
  styleUrls: ['./style.scss']
})
export class Front implements OnInit {

  $body:any;
  pinsidebar: boolean = false;
  sidebarvisible: boolean = false;
  sidebaropen: boolean = false;
  directionscroll:any;
  constructor(private seo: SeoService, private renderer: Renderer2) {
    this.renderer.addClass(document.body, 'navigation-panel');
    this.renderer.addClass(document.body, 'page-scrolling');
    this.renderer.addClass(document.body, 'dark-scheme');
    this.renderer.addClass(document.body, 'loaded');
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
    $('indexcomponent section.section').each(function(index) {
      var directionscroll = 'down';
      new Waypoint({
        element: this,
        handler: function (direction) {
        directionscroll = direction;
          self.setSectionScheme($(this.element));
        },                            
        offset: function() {
          if(directionscroll == 'up'){
            return 0 - this.element.clientHeight;
          } else {
            return 0;
          }
      }
      })
    });
    // var waypoint = new Waypoint({
    //   element: document.querySelector('.section'),
    //   handler: function (direction) {
    //     console.log('test way '+direction);
    //   }
    // })
  }
  setSectionScheme($section) {
    if($section.data('scheme') === 'light') {
        this.$body.removeClass('dark-scheme').addClass('light-scheme');
    } else if($section.data('scheme') === 'dark') {
        this.$body.removeClass('light-scheme').addClass('dark-scheme');
    }
}
}
