import { Component, OnInit, OnDestroy, Inject, ViewChildren, QueryList, ElementRef, Renderer, ViewChild, Renderer2 } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MouseEvent } from '@agm/core';
import { SeoService } from '../../../../@services/front/seo.services';
import {
  PerfectScrollbarConfigInterface,
  PerfectScrollbarComponent, PerfectScrollbarDirective
} from 'ngx-perfect-scrollbar';
import Typed from 'typed.js';
import { SwiperConfigInterface } from 'ngx-swiper-wrapper';
// import EasyPieChart from 'easy-pie-chart';
@Component({
  selector: 'LandingComponent',
  templateUrl: './landing.html',
  styleUrls: ['./style.scss']
})
export class LandingComponent implements OnInit {
  public config: PerfectScrollbarConfigInterface = {};
  $body: any;
  $content: any;
  $footer: any;
  // google maps zoom level
  zoom: number = 8;
  // initial center position for the map
  lat: number = 36.860938;
  lng: number = 10.189896;
  clickedMarker(label: string, index: number) {
    console.log(`clicked the marker: ${label || index}`)
  }
  markers: marker[] = [
	  {
		  lat: 36.860938,
		  lng: 10.189896,
		  label: 'WK',
		  draggable: false
	  }
  ]
  enabledmap:boolean = false;
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
    self.$body = $('body');
    self.$content = $('#content');
    self.$footer = $('#footer');
    setTimeout(() => {
      self.points();
      self.animations($('body'));
      self.filter();
      self.footer();
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
    }, 250);

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
  footer() {
    let self = this;
    self.$body.css('padding-bottom', self.$footer.height() - 1 + 'px');
  }
}

// just an interface for type safety.
interface marker {
	lat: number;
	lng: number;
	label?: string;
	draggable: boolean;
}