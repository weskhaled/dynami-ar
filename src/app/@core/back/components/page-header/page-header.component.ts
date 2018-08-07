
import { Component, OnInit, Inject, Renderer2, ElementRef, ViewChild } from '@angular/core';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';
import { Router } from '@angular/router';
import { UserService } from 'src/app/@services/auth/user.service';
import { AuthenticationService } from 'src/app/@services/auth/authentication.service';

@Component({
  selector: 'page-header',
  templateUrl: './page-header.html',
  styleUrls: ['./style.scss']
})
export class PageHeader implements OnInit {
  el: ElementRef;
  public config: PerfectScrollbarConfigInterface = {};
  sidebaropen: boolean = false;
  username: any = null;
  constructor(el: ElementRef, private renderer: Renderer2, private router: Router, private userService: UserService, private authenticationService: AuthenticationService) {
    this.el = el;
    // get users from secure api end point
    this.userService.getUsers()
      .subscribe(data => {
        this.username = data.name;
      }, (err) => {
        if (err === 'Unauthorized') this.router.navigate(['auth/login']);
      });
  }
  ngOnInit() {

  }
  logoutuser() {
    this.authenticationService.logoutuser()
      .subscribe(result => {
        if (result === true) {
          this.router.navigate(['auth/login']);
        } else {
          this.router.navigate(['auth/login']);
        }
      });

  }
  togglesidebarOpen($event) {
    this.sidebaropen = !this.sidebaropen;
    if (this.sidebaropen) {
      this.renderer.addClass(document.body, 'sidebar-open');
    } else {
      this.renderer.removeClass(document.body, 'sidebar-open');
    }
  }
}