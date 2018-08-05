import { Component, OnInit, OnDestroy, Inject, ViewChildren, QueryList, ElementRef, Renderer, ViewChild, Renderer2 } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MouseEvent } from '@agm/core';
import { SeoService } from '../../../../@services/front/seo.services';
import {
  PerfectScrollbarConfigInterface,
  PerfectScrollbarComponent, PerfectScrollbarDirective
} from 'ngx-perfect-scrollbar';
import Plyr from 'Plyr';
import {
  SwiperComponent, SwiperDirective, SwiperConfigInterface,
  SwiperScrollbarInterface
} from 'ngx-swiper-wrapper';
// import EasyPieChart from 'easy-pie-chart';
@Component({
  selector: 'PortfolioComponent',
  templateUrl: './portfolio.html',
  styleUrls: ['./style.scss']
})
export class PortfolioComponent implements OnInit {
  public config: PerfectScrollbarConfigInterface = {};
  public mainSliderOptions: SwiperConfigInterface = {
    loop: true,
    speed:1000,
    parallax:true,
    // autoplay:{
    //   // delay:9000
    // },
    loopAdditionalSlides: 10,
    grabCursor: true,
    watchSlidesProgress: false,
    hashNavigation: true,
    navigation: {
      nextEl: '.slidenav__item--next',
      prevEl: '.slidenav__item--prev',
    },
    pagination: {
      el: '.swiper-pagination',
      clickable:true,
      type: 'bullets'
    },
  };
  player:any;
  @ViewChild('mainSlider') private mainSlider: SwiperDirective;
  constructor(private seo: SeoService, private renderer: Renderer2) {
    this.renderer.removeStyle(document.body, 'padding-bottom');
  }
  ngOnInit() {
    this.seo.generateTags({
      title: 'Index Page',
      description: 'Contact me through this awesome search engine optimized Angular component',
      image: 'https://instafire-app.firebaseapp.com/assets/meerkat.jpeg',
      slug: 'contact-page'
    });
    this.player = new Plyr('#player');

  }
  ngAfterViewInit() {
    let self = this;
    this.player.on('ready', event => {
      console.log(event.detail.plyr);
      });
    setTimeout(() => {
      // self.player = new Plyr('#player');
      // self.player.on('canplay', event => {
      //  console.log(event.detail.plyr);
      //  });
   });
  }
  init(){
    let self = this;
    setTimeout(() =>{
      // this.mainSlider.swiper().autoplay.stop();
    });
  }
  imagesReady(){
    this.mainSlider.swiper().el.classList.remove('loading');
    this.mainSlider.swiper().autoplay.start();
  }
  slideChangeTransitionEnd(){
    // let swiper = this.mainSlider.swiper(),
    //     captions = swiper.el.querySelectorAll('.overlay-swiper');
    // for (let i = 0; i < captions.length; ++i) {
    //   captions[i].classList.remove('show-overlay');
    // }
    // console.log(swiper.el.querySelector('.overlay-swiper'));
    // swiper.el.querySelector('.overlay-swiper').classList.remove('show-overlay');
    // $('.overlay-swiper').re
  }
  progress(){
    let swiper = this.mainSlider.swiper();
    for (let i = 0; i < swiper.slides.length; i++) {
      let slideProgress = swiper.slides[i].progress,
          innerOffset = swiper.width * 0.5,
          innerTranslate = slideProgress * innerOffset;
      swiper.slides[i].querySelector(".slide-bgimg").style.transform =
        "translate3d(" + innerTranslate + "px, 0, 0)";
    }
  }
  touchStart() {
    let swiper = this.mainSlider.swiper();
    for (let i = 0; i < swiper.slides.length; i++) {
      swiper.slides[i].style.transition = "";
    }
  }
  setTransition(speed) {
    let swiper = this.mainSlider.swiper();
    for (let i = 0; i < swiper.slides.length; i++) {
      swiper.slides[i].style.transition = speed + "ms";
      swiper.slides[i].querySelector(".slide-bgimg").style.transition =
        speed + "ms";
    }
  }
  onTransitionStart() {
    if ($(".swiper-slide-active").hasClass("Car--riva")) {
      $("body").css("background-color", "#6D889F");
    } else {
      $("body").css("background-color", "#E74824");
    }
  }
  toggleoverlayswiper(){
    // let swiper = this.mainSlider.swiper();
    $('.overlay-swiper').toggleClass('show-overlay');
    // this.player.stop();
  }
}