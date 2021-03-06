import { Component, OnInit, OnDestroy, Inject, ViewChildren, QueryList, ElementRef, Renderer, ViewChild, Renderer2 } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PerfectScrollbarConfigInterface,
  PerfectScrollbarComponent, PerfectScrollbarDirective } from 'ngx-perfect-scrollbar';
import { SeoService } from '../../../../@services/front/seo.services';

// import * as pages from '../../../@core/layouts/user/js/pages.js';
// declare var pages : any;
@Component({
  selector: 'DashComponent',
  templateUrl: './index.html',
  styleUrls: ['./style.scss']
})
export class DashboardComponent implements OnInit {
  public config: PerfectScrollbarConfigInterface = {};
  deviceObjects = [{name: 'test 111111111', value: '1'}, {name: 'test 22222222', value: '2'}, {name: 'test 33333333333', value: '3'}];
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
  }
  onChange(deviceValue) {
  }
  addone(){
    this.deviceObjects.push({name:' test 4444', value: '4'});
  //   $('select[data-init-plugin="cs-select"]').each(function() {
  //     var el = $(this).get(0);
  //     $(el).wrap('<div class="cs-wrapper"></div>');
  //     new pages.SelectFx(el);
  // });
  }
}