
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
//   template: `
//   <div class="swiper-container" [swiper]="configindex">
//   <div class="swiper-wrapper">
//     <div *ngFor="let slide of articles" class="swiper-slide">
//       <div fxLayout="column" fxLayoutAlign="center center" fxFlexFill>
//         {{slide}}
//       </div>
//     </div>
//   </div>

//   <div class="swiper-scrollbar" [hidden]="config.scrollbar === false"></div>
//   <div class="swiper-pagination" [hidden]="config.pagination === false"></div>

//   <div class="swiper-button-prev" [hidden]="config.navigation === false"></div>
//   <div class="swiper-button-next" [hidden]="config.navigation === false"></div>
// </div>
//   `,
  styleUrls: ['./style.scss']
})
export class SwiperSlider implements OnInit {  
  public config: PerfectScrollbarConfigInterface = {};
  id: number;
  container = '#fullscreen-slider';
  index:number = 0;
  nextslide:any='';
  prevslide:any='';
  autoplaydelay:number=20000;
  progresswidth:number=0;
  progresswidthdelay:number=0;
  articles = [
    {
      data_thumb_url: '/assets/img/photos/developer/home-3-thumb.jpg',
      background_image: '/assets/img/photos/developer/home-3.jpg',
      data_title: '1/3',
      data_animate: 'fadeInUp',
      content: `
      <!-- Section Content -->
      <div class="">
          <div class="container">
              <div class="row align-items-center">
                  <div class="col-xl-7 col-10">
                      <h1 class="mb-0 text-left text-white">
                          <span class="typing1">Hi! I’m
                              <strong>Khaled Weslati</strong> - experienced Front-End Developer from Tunisia</span>
                      </h1>
                  </div>
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
      content: ``
    },
    {
      data_thumb_url: '/assets/img/photos/developer/home-4-thumb.jpg',
      background_image: '/assets/img/photos/developer/home-4.jpg',
      data_title: '3/3',
      data_animate: 'fadeInRight',
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
    parallax: false,
    effect: "slide",
    pagination: {
      el: '.swiper-pagination',
      clickable:true,
      type: 'bullets'
    },
    autoplay:{
      delay: this.autoplaydelay,
      disableOnInteraction:false
    }
  };
  @ViewChild('sliderindex') private indexswiper: SwiperDirective;

    constructor(private renderer: Renderer2,private router: Router,private userService: UserService,private authenticationService: AuthenticationService) {
      let self = this;
      this.nextslide = this.articles[1];
      this.prevslide = this.articles[this.articles.length -1];
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
      if(index + 1 > this.articles.length -1 ){
        this.nextslide = this.articles[0];
      } else {
        this.nextslide = this.articles[index+1];
      }
      if(index <= -0 ){
        this.prevslide = this.articles[this.articles.length -1];
      } else {
        this.prevslide = this.articles[index-1];
      }
    }
    goprevslide(){
      if (this.index <= -0) {
        this.indexswiper.setIndex(this.articles.length - 1);
      } else {
        this.indexswiper.prevSlide();
      }
    }
    gonextslide(){
      if (((this.index + 1) > (this.articles.length - 1))) {
        this.indexswiper.setIndex(0);
      } else {
        this.indexswiper.nextSlide();
      }
    }
    endtransition(){
      this.progresswidth = 100;
      this.progresswidthdelay = this.autoplaydelay;
      // setTimeout(this.gonextslide(), this.progresswidthdelay);
    }
    starttransition(){
      this.progresswidthdelay = 0.5;
      this.progresswidth = 0;
    }
    mouseoverswiper(event){
      this.indexswiper.swiper().autoplay.stop();
    }
    mouseoutswiper(event){
      this.indexswiper.swiper().autoplay.start();
    }
    autoplayStartswiper(){
    }
    ngAfterViewInit() {
      let self = this;
      self.indexswiper.swiper().params.pagination.renderBullet = function (index, className) {
        return '<span class="' + className + '"><span class="tooltip-content"><span class="tooltip-text"><span class="tooltip-inner"><img src="'+self.articles[index].data_thumb_url+'" class="img-responsive" style="width: 100%; height: 100%;"></span></span></span></span>';
      }
      var targetHeight = $(self.container).outerHeight();
      var position = $(self.container).position();
      $(window).scroll(function () {
        var scrollPercent = (targetHeight - (window.scrollY - position.top));
        if ((scrollPercent >= 0) && (window.scrollY > (position.top - (targetHeight * 2)))) {
          (<any>$('swiper-slider .swiper-slide header .container-fluid')).css({
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
    firstinit(){
      setTimeout(() =>{
        this.progresswidth = 100;
        this.progresswidthdelay = this.autoplaydelay;
      });
    }
}