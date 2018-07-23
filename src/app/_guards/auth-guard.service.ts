// import { Injectable } from '@angular/core';
// import { Router, CanActivate } from '@angular/router';

// @Injectable()
// export class AuthGuardService implements CanActivate {

//     constructor(private router: Router) { }

//     canActivate() {
//         if (!!localStorage.getItem('currentUser')) {
//             // logged in so return true
//             console.log(localStorage.getItem('currentUser'))
//             return true;
//         }

//         // not logged in so redirect to login page
//         this.router.navigate(['auth/login']);
//         return false;
//     }
// }

import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
 
@Injectable()
export class AuthGuard implements CanActivate {
 
    constructor(private router: Router) { }
 
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        if (localStorage.getItem('currentUser')) {
            // logged in so return true
            return true;
        }
 
        // not logged in so redirect to login page
        this.router.navigate(['auth/login'], { queryParams: { returnUrl: state.url }});
        return false;
    }
}