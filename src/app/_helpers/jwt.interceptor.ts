
import { tap ,  catchError } from "rxjs/operators";
import { Injectable } from "@angular/core";
import {
  HttpInterceptor,
  HttpHandler,
  HttpSentEvent,
  HttpHeaderResponse,
  HttpProgressEvent,
  HttpUserEvent,
  HttpErrorResponse,
  HttpRequest,
  HttpResponse,
  HttpEvent
} from "@angular/common/http";
import { Router } from "@angular/router";
import { Observable } from "rxjs";

const TOKEN_HEADER_KEY = "Authorization";

@Injectable()
export class JwtInterceptor implements HttpInterceptor {
  constructor(private router: Router) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<
    | HttpSentEvent
    | HttpHeaderResponse
    | HttpProgressEvent
    | HttpResponse<any>
    | HttpUserEvent<any>
  > {
    let authReq = req;
    let currentUser = JSON.parse(localStorage.getItem("currentUser"));
    if (currentUser != null) {
      authReq = req.clone({
        headers: req.headers.set(
          TOKEN_HEADER_KEY,
          "Bearer " + currentUser.token
        )
      });
    }
    return next.handle(authReq).pipe(
      tap((err: any) => {
        if (err instanceof HttpErrorResponse) {
          if (err.status === 401) {
            localStorage.removeItem("currentUser");
            this.router.navigate(["auth/login"]);
          }
        }
      }),
      catchError((error: any, caught: Observable<HttpEvent<any>>) => {
        if (error.status === 401) {
            console.log('catchError ',error);
            localStorage.removeItem("currentUser");
            this.router.navigate(["auth/login"],{ queryParams: { error:  'Unauthorized'} });
        }
        if (error instanceof HttpErrorResponse) {
          console.log(error);
        }
        throw error;
      })
    );
  }
}
