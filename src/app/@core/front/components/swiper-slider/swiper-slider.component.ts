
import { Component, OnInit, Inject, Renderer2, ViewChild } from '@angular/core';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';
import { UserService } from '../../../../@services/auth/user.service';
import { AuthenticationService } from '../../../../@services/auth/authentication.service';
import { Router } from '@angular/router';

import {
  SwiperComponent, SwiperDirective, SwiperConfigInterface,
  SwiperScrollbarInterface
} from 'ngx-swiper-wrapper';
@Component({
  selector: 'swiper-slider',
  templateUrl: './swiper-slider.html',
  styleUrls: ['./style.scss']
})
export class SwiperSlider implements OnInit {
  public config: PerfectScrollbarConfigInterface = {};
  id: number;
  container = '#fullscreen-slider';
  index: number = 0;
  nextslide: any = '';
  prevslide: any = '';
  autoplaydelay: number = 50000;
  progresswidth: number = 0;
  progresswidthdelay: number = 0;
  articles = [
    {
      data_thumb_url: '/assets/img/slider-img/slide-1.jpg',
      background_image: '/assets/img/slider-img/slide-1.jpg',
      data_title: '1/3',
      data_animate: 'fadeInUp',
      btns:[{
        href: 'www.test.com',
        title: 'Our Services',
        classes: 'btn btn-primary btn-sm'
      }],
      content: `
      <!-- Section Content -->
      <div class="row">
      <div class="col-sm-12">
          <h4 class="big animated1 text-center" data-animate="fadeInDown"><span class="logo-text text-white"><span
                      class="light">DYNA</span>MIX</span>
          </h4>
      </div>
  </div>
  <div class="space30px"></div>
  <div class="row">
      <div class="col-sm-8">
          <div class="label-15px back-35 animated1" data-animate="fadeInUp">
              <h3 class="text-white text-uppercase">
                  Building Technology Smarter
              </h3>
          </div>
          <div class="space30px"></div>
          <p class="text-white text-left animated1 fast" data-animate="fadeInLeft">
              How can Dynamix s.a help your business? from rigorously selecting the best
              Java / J2ee developers, from Tunisia, India and
              Morocco. Dynamix delivers the right talent, so our clients can deliver
              their
              projects on time and on budget and our java development services will take
              your
              business to new levels of interaction and management
          </p>
          <div class="space15px"></div>
      </div>
      <div class="col-sm-4">
          <div class="text-center animated1" data-animate="fadeInRight">
              <span class="slider-icon">
                  <i class="icon-genius"></i>
              </span>
          </div>
      </div>
  </div>      
      `
    },
    {
      data_thumb_url: '/assets/img/photos/developer/home-1-thumb.jpg',
      background_image: '/assets/img/photos/developer/home-1.jpg',
      data_title: '2/3',
      data_animate: 'fadeInRight',      
      btns:[{
        href: 'www.test.com',
        title: 'test btn',
        classes: 'btn btn-danger btn-sm'
      }],
      content: `
      <!-- Section Content -->
      <div class="row">
      <div class="col-sm-12">
          <h4 class="big animated1 text-center" data-animate="fadeInDown"><span class="logo-text text-white"><span
                      class="light">DYNA</span>MIX</span>
          </h4>
      </div>
  </div>
  <div class="space30px"></div>
  <div class="row">
      <div class="col-sm-8">
          <div class="label-15px back-35 animated1" data-animate="fadeInUp">
              <h3 class="text-white text-uppercase">
                  Building Technology Smarter
              </h3>
          </div>
          <div class="space30px"></div>
          <p class="text-white text-left animated1 fast" data-animate="fadeInLeft">
              How can Dynamix s.a help your business? from rigorously selecting the best
              Java / J2ee developers, from Tunisia, India and
              Morocco. Dynamix delivers the right talent, so our clients can deliver
              their
              projects on time and on budget and our java development services will take
              your
              business to new levels of interaction and management
          </p>
          <div class="space15px"></div>
      </div>
      <div class="col-sm-4">
          <div class="text-center animated1" data-animate="fadeInRight">
              <span class="slider-icon">
                  <i class="icon-genius"></i>
              </span>
          </div>
      </div>
  </div>
      `
    },
    {
      data_thumb_url: '/assets/img/photos/developer/home-4-thumb.jpg',
      background_image: '/assets/img/photos/developer/home-4.jpg',
      data_title: '3/3',
      data_animate: 'fadeInRight',
      btns:[],
      content: ``
    }
  ];
  public configindex: SwiperConfigInterface = {
    init: false,
    grabCursor: true,
    direction: 'horizontal',
    slidesPerView: 1,
    observer: true,
    keyboard: true,
    mousewheel: false,
    scrollbar: false,
    parallax: true,
    effect: "slide",
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      type: 'bullets'
    },
    autoplay: {
      delay: this.autoplaydelay,
      disableOnInteraction: false
    }
  };
  @ViewChild('sliderindex') private indexswiper: SwiperDirective;

  constructor(private renderer: Renderer2, private router: Router, private userService: UserService, private authenticationService: AuthenticationService) {
    let self = this;
    this.nextslide = this.articles[1];
    this.prevslide = this.articles[this.articles.length - 1];
    // this.dataloaded = true;
    setTimeout(() => {
      this.indexswiper.init();
    });
  }
  ngOnInit() {
  }

  slidechange() {
  }
  public onIndexChange(index: number) {
    if (index + 1 > this.articles.length - 1) {
      this.nextslide = this.articles[0];
    } else {
      this.nextslide = this.articles[index + 1];
    }
    if (index <= -0) {
      this.prevslide = this.articles[this.articles.length - 1];
    } else {
      this.prevslide = this.articles[index - 1];
    }
  }
  goprevslide() {
    if (this.index <= -0) {
      this.indexswiper.setIndex(this.articles.length - 1);
    } else {
      this.indexswiper.prevSlide();
    }
  }
  gonextslide() {
    if (((this.index + 1) > (this.articles.length - 1))) {
      this.indexswiper.setIndex(0);
    } else {
      this.indexswiper.nextSlide();
    }
  }
  endtransition() {
    this.progresswidth = 100;
    this.progresswidthdelay = this.autoplaydelay;
    // setTimeout(this.gonextslide(), this.progresswidthdelay);
  }
  starttransition() {
    this.progresswidthdelay = 0.5;
    this.progresswidth = 0;
  }
  mouseoverswiper(event) {
    this.indexswiper.swiper().autoplay.stop();
  }
  mouseoutswiper(event) {
    this.indexswiper.swiper().autoplay.start();
  }
  autoplayStartswiper() {
  }
  ngAfterViewInit() {
    let self = this;
    self.indexswiper.swiper().params.pagination.renderBullet = function (index, className) {
      return '<span class="' + className + '"><span class="tooltip-content"><span class="tooltip-text"><span class="tooltip-inner"><img src="' + self.articles[index].data_thumb_url + '" class="img-responsive" style="width: 100%; height: 100%;"></span></span></span></span>';
    }
    var targetHeight = $(self.container).outerHeight();
    var position = $(self.container).position();
    $(window).scroll(function () {
      var scrollPercent = (targetHeight - (window.scrollY - position.top));
      if ((scrollPercent >= 0) && (window.scrollY > (position.top - (targetHeight * 2)))) {
        (<any>$('swiper-slider .swiper-slide header .container')).css({
          'position': "relative",
          'top': 1 - (((scrollPercent - targetHeight) / 2)) + "px",
          'opacity': (scrollPercent) / targetHeight
        });
        $('.swiper-slide header .header-image').css({
          'background-position': "50% " + (((window.scrollY - position.top) * 0.3) - 25) + "px"
        });
      }
    });
  }
  firstinit() {
    setTimeout(() => {
      this.progresswidth = 100;
      this.progresswidthdelay = this.autoplaydelay;
    });
  }
}