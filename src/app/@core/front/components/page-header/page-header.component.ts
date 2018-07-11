
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
    sidebaropen:boolean = false;
    username : any = null;
    constructor(private renderer: Renderer2,private router: Router,private userService: UserService,private authenticationService: AuthenticationService) {

    }
    ngOnInit() {

    }
    logoutuser() {
      
    }
    togglesidebarOpen($event){
      console.log($event);
      this.sidebaropen = !this.sidebaropen;
      if (this.sidebaropen) {
        this.renderer.addClass(document.body, 'navigation-open');
      } else {
        this.renderer.removeClass(document.body, 'navigation-open');
      } 
    }
}