import { Component, OnInit, OnDestroy, Inject, ViewChildren, QueryList, ElementRef, Renderer, ViewChild, Renderer2 } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SeoService } from '../../../../@services/front/seo.services';
import {
  PerfectScrollbarConfigInterface,
  PerfectScrollbarComponent, PerfectScrollbarDirective
} from 'ngx-perfect-scrollbar';
import Typed from 'typed.js';
// import EasyPieChart from 'easy-pie-chart';
@Component({
  selector: 'IndexComponent',
  templateUrl: './index.html',
//   template: `
//   <div class="single-chart">
//   <div class="chart" data-bar-color="#35A4F0" data-track-color="#EEEEEE" data-percent="100">
//       <div class="chart-content">
//           <span class="value">
//               <span>5</span>/5</span>
//           <h6 class="title">Polish</h6>
//       </div>
//   </div>
// </div>
//   `,
// template: `
// <circle-progress
//   [percent]="35"
//   subtitle="PhotoShop"
//   unitsFontSize="21"
// ></circle-progress>
// `,
  styleUrls: ['./style.scss']
})
export class IndexComponent implements OnInit {
  public config: PerfectScrollbarConfigInterface = {};
  colorScheme = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
  };
  view: any[] = [700, 100];
  single = [
    {
      "name": "Germany",
      "value": 20
    }
  ];
  deviceObjects = [{ name: 'test 111111111', value: '1' }, { name: 'test 22222222', value: '2' }, { name: 'test 33333333333', value: '3' }];
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
    setTimeout(() => {
      self.points();
      self.animations($('body'));
      self.filter();
      (<any>$("#works-list")).isotope();
      (<any>$('.masonry')).isotope({
        itemSelector: '.masonry-item',
        percentPosition: true,
        masonry: {
          columnWidth: '.masonry-sizer'
        }
      });

      (<any>$('.typing')).appear(function () {
        $(this).each(function () {
          var $self = $(this),
            text = [$self.html()];
          $self.parent().css({
            'min-height': $self.outerHeight() + 'px',
            'min-width': $self.outerWidth() + 'px'
          });
          $self.html('');
          new Typed(this, {
            strings: text,
            startDelay: 200,
            typeSpeed: 15,
            contentType: 'html',
            preStringTyped: function () {
              $self.addClass('start');
            },
            onComplete: function () {
              setTimeout(function () {
                $self.siblings('.show-after-typing').addClass('show');
              }, 250);
            }
          });
        });
      });
    }, 0);

  }

  animations($content) {
    // Animation - appear 
    (<any>$('.animated:not(img)', $content)).appear(function () {
      $(this).each(function () {
        var $target = $(this);
        var delay = $target.data('animation-delay');
        setTimeout(function () {
          $target.addClass($target.data('animation')).addClass('visible')
        }, delay);
      });
    });

    $content.imagesLoaded().progress(function (instance, image) {
      var $img = $(image.img);
      if ($img.hasClass('animated')) {
        (<any>$img).appear(function () {
          var delay = $img.data('animation-delay');
          setTimeout(function () {
            $img.addClass($img.data('animation')).addClass('visible')
          }, delay);
        });
      }
    });

  }

  points() {
    // Product Feature
    $('.point').each(function () {
      var x = $(this).data('x');
      var y = $(this).data('y');
      $(this).css({
        'top': y,
        'left': x
      });
    });
  }
  filter(){

    var $filter = $('.filter'),
        $filterIsotope = $('.filter-isotope'),
        $list,
        filterValue;

    // Filter Isotope 
    if($filterIsotope.length) {

        $filterIsotope.each(function(){
            $list = $($(this).data('filter-list'));
            if($list.hasClass('masonry')) {
                $list.isotope({
                    itemSelector: '.masonry-item',
                    percentPosition: true,
                    masonry: {
                        columnWidth: '.masonry-sizer'
                    }
                });
            }
            else $list.isotope();

            $list.imagesLoaded().progress( function() {
                $list.isotope('layout');
            });
        });

        $filterIsotope.on('click', 'a', function(){

            $list = $($(this).parents('.filter-isotope').data('filter-list'));
            filterValue = $(this).attr('data-filter');

            $list.isotope({
                filter: filterValue
            });

            $list.on('layoutComplete', function( event, laidOutItems ) {
                    Waypoint.refreshAll();
            });

            $(this).parents('ul').find('.active').removeClass('active');
            $(this).addClass('active');

            return false;
        });

    }

    // Filter Basic
    if($filter.length) {
        $filter.on('click', 'a', function(){

            $list = $($(this).parents('.filter').data('filter-list'));
            filterValue = $(this).attr('data-filter');

            $list.children().filter('.not-matched').removeClass('not-matched')
            if(filterValue!="*") $list.children().not(filterValue).addClass('not-matched')

            $(this).parents('ul').find('.active').removeClass('active');
            $(this).addClass('active');

            return false;
        });
    }

}
  onChange(deviceValue) {
    console.log(deviceValue);
  }
  addone() {
    this.deviceObjects.push({ name: ' test 4444', value: '4' });
  }
}