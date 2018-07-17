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
    self.$content = $('#content');
    self.$footer = $('#footer');
    setTimeout(() => {
      self.window();
      self.footer();
    }, 0);
  }
  window() {

    var $window = $('.window'),
      $windowToggle = $('.window-toggle');

    if ($window.length) {
      var s = Snap('.window-background');
      var el = s.path('M 0 220 C 620 0, 1300 0, 1920 220 L 1920 1080 L 0 1080 Z');
      el.transform('t0,1080');

      var matrix = new Snap.Matrix();
      matrix.translate(0, 0);

      $windowToggle.on('click', function () {
        var $self = $(this),
          $target = $($self.data('target'));

        if (!$target.hasClass('show')) {
          $target.addClass('show');
          $self.addClass('active');
          $('body').css('overflow', 'hidden');
          el.stop().animate({ transform: 't0,0' }, 300, mina.linear, function () {
            el.stop().animate({ 'path': 'M 0 0 C 620 0, 1300 0, 1920 0 L 1920 1080 L 0 1080 Z' }, 1200, mina.elastic);
            $target.addClass('visible');
          });
        } else {
          $target.removeClass('visible');
          setTimeout(function () {
            el.stop()
              .animate({ 'path': 'M 0 0 C 620 220, 1300 220, 1920 0 L 1920 1080 L 0 1080 Z' }, 300, mina.linear)
              .animate({ transform: 't0,1080' }, 300, mina.linear, function () {
                $('body').css('overflow', 'auto');
                $self.removeClass('active');
                el.stop().animate({ 'path': 'M 0 0 C 620 0, 1300 0, 1920 0 L 1920 1080 L 0 1080 Z' }, 1200, mina.elastic, function () {
                  $target.removeClass('show');
                  el.attr({
                    path: 'M 0 220 C 620 0, 1300 0, 1920 220 L 1920 1080 L 0 1080 Z'
                  });
                });
              });
          }, 300);
        }
      });

      // By default its black, lets change its attributes
    }

  }
  footer() {
    let self = this;
    self.$body.css('padding-bottom', self.$footer.height() - 1 + 'px');
  }
}
