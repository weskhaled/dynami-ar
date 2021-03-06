import { Component, OnInit, OnDestroy, Inject, ViewChildren, QueryList, ElementRef, Renderer, ViewChild, Renderer2 } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SeoService } from '../../../@services/front/seo.services';
import { PerfectScrollbarConfigInterface,
  PerfectScrollbarComponent, PerfectScrollbarDirective } from 'ngx-perfect-scrollbar';
import { AuthenticationService } from '../../../@services/auth/authentication.service';
import { Observable, of } from 'rxjs';
import { UserService } from '../../../@services/auth';
@Component({
  selector: 'LoginComponent',
  templateUrl: './login.html',
  styleUrls: ['./style.scss']
})
export class LoginComponent implements OnInit {
  public config: PerfectScrollbarConfigInterface = {};
  deviceObjects = [{name: 'test 111111111', value: '1'}, {name: 'test 22222222', value: '2'}, {name: 'test 33333333333', value: '3'}];
  constructor(private seo: SeoService, private renderer: Renderer2,private router: Router,private authenticationService: AuthenticationService,private userService: UserService) {
    this.renderer.removeClass(document.body, 'navigation-panel');
    this.renderer.removeClass(document.body, 'page-scrolling');
    this.renderer.removeClass(document.body, 'dark-scheme');
    this.renderer.removeClass(document.body, 'loaded');
  }
  ngOnInit() {
    this.seo.generateTags({
      title: 'Index Page',
      description: 'Contact me through this awesome search engine optimized Angular component',
      image: 'https://instafire-app.firebaseapp.com/assets/meerkat.jpeg',
      slug: 'contact-page'
    });
    this.loading = true;
    if(JSON.parse(localStorage.getItem('currentUser'))) {
      this.router.navigate(['admin/']);
    } else this.loading = false;
    // reset login status
    
  }
  ngAfterViewInit() {
  }
  model: any = {};
  loading = false;
  error = '';

  login() {
      this.loading = true;
      this.authenticationService.login(this.model.username, this.model.password)
          .subscribe(
            result => {
              if (result === true) {
                  this.router.navigate(['admin/']);
              } else {
                  this.error = 'Username or password is incorrect';
                  this.loading = false;
              }
          },
          error => {
                   this.error = 'Username or password is incorrect';
                   this.loading = false;  
                  //  return Observable.throw(error);   
              }
        );
  }
}