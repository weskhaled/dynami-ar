
import { Component, OnInit, Inject, Renderer2, ViewChild, ElementRef, QueryList } from '@angular/core';
import { PerfectScrollbarConfigInterface, PerfectScrollbarComponent } from 'ngx-perfect-scrollbar';
declare var plyr: any;
declare var $: any;
declare var SimpleBar: any;
@Component({
  selector: 'nav-page-sidebar',
  templateUrl: './page-sidebar.html',
  styleUrls: ['./style.scss']
})
export class PageSidebar implements OnInit {  
    pinsidebar:boolean = false;
    sidebarvisible:boolean = false;
    sidebaropen:boolean = false;
    menulist:any;
    @ViewChild(PerfectScrollbarComponent) componentScroll: PerfectScrollbarComponent;
    public config: PerfectScrollbarConfigInterface = {};
    @ViewChild('Menuitem') Menuitem:QueryList<ElementRef>;;
    constructor(private renderer: Renderer2) { 

    }
    ngOnInit() {
        // this.menulist = new SimpleBar(document.getElementById('page-sidebar-menu-list'), { autoHide: false,wrapContent: false });
    }
    ngAfterViewInit(){
        let self = this;
        $(document).on('click', '.sidebar-menu a', function(e) {

            if ($(this).parent().children('.sub-menu') === false) {
                return;
            }
            var el = $(this);
            var parent = $(this).parent().parent();
            var li = $(this).parent();
            var sub = $(this).parent().children('.sub-menu');
    
            if(li.hasClass("open active")){
               el.children('.arrow').removeClass("open active");
               sub.slideUp(200, function() {
                   li.removeClass("open active");
                self.componentScroll.directiveRef.update();
               });
    
            }else{
               parent.children('li.open').children('.sub-menu').slideUp(200);
               parent.children('li.open').children('a').children('.arrow').removeClass('open active');
               parent.children('li.open').removeClass("open active");
               el.children('.arrow').addClass("open active");
               sub.slideDown(200, function() {
                   li.addClass("open active");
                self.componentScroll.directiveRef.update();
                });
            }
        });
    }
    togglePinSidebar($event){
      this.pinsidebar = !this.pinsidebar;
      if (this.pinsidebar) {
        this.renderer.addClass(document.body, 'menu-pin');
      } else {
        this.renderer.removeClass(document.body, 'menu-pin');
      }
    }
    togglesidebarOpen($event){
      this.sidebaropen = !this.sidebaropen;
      if (this.sidebaropen) {
        this.renderer.addClass(document.body, 'sidebar-open');
      } else {
        this.renderer.removeClass(document.body, 'sidebar-open');
      } 
    }
    public scrollToY(y: number) {
        this.componentScroll.directiveRef.scrollToY(y, 500);
    }
}