
import { Component, OnInit, Inject, Renderer2 } from '@angular/core';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';
import { UserService } from '../../../../@services/auth/user.service';
import { AuthenticationService } from '../../../../@services/auth/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'page-header',
  templateUrl: './page-header.html',
  styleUrls: ['./style.scss']
})
export class PageHeader implements OnInit {  
  public config: PerfectScrollbarConfigInterface = {};
  islogedin:boolean=false;
    sidebaropen:boolean = false;
    username : any = null;
    constructor(private renderer: Renderer2,private router: Router,private userService: UserService,private authenticationService: AuthenticationService) {

    }
    ngOnInit() {
      if (localStorage.getItem('currentUser')) {
        this.islogedin = true;
     }   
    }
    logoutuser() {
      
    }

  ngAfterViewInit() {
    setTimeout(() => {
      var $header = $( 'page-header' );
      var $nav = $('#navigation');
      var $menuItem = $nav.find('a');

      var checkMenuItem = function(id) {
          $menuItem.each(function(){
              var link = $(this).attr('data-href');
              if(id==link) {
                  $(this).addClass('active');
              }
              else $(this).removeClass('active');
          });
      }
      $('landingcomponent section.section').each(function (index) {
        var directionscroll = 'down';
        var $element = $( this );
        new Waypoint({
          element: this,
          handler: function (direction) {
            var $class_up = $element.attr('data-class-up');
            var $class_dwn = $element.attr('data-class-dwn');
            if( direction === 'down' && $class_dwn ) {
              $header.attr('class','');
              $header.addClass($class_dwn);
              checkMenuItem('#'+$class_dwn);
            }
            else if( direction === 'up' && $class_up ){
              $header.attr('class','');
              $header.addClass($class_up);
              checkMenuItem('#'+$class_up);
            }
          },
          offset: '1'
        })
      });
    }, 0);
  }
    togglesidebarOpen($event){
      this.sidebaropen = !this.sidebaropen;
      if (this.sidebaropen) {
        this.renderer.addClass(document.body, 'navigation-open');
      } else {
        this.renderer.removeClass(document.body, 'navigation-open');
      } 
    }
}