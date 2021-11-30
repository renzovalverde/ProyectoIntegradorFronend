import { HttpHandler, HttpInterceptor, HttpRequest, HttpEvent, HTTP_INTERCEPTORS} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


const TOKEN_HEADER_KEY = 'Authorization'; 
@Injectable({
  providedIn: 'root'
})
export class BasicAuthHtppInterceptorServiceService implements HttpInterceptor{

  constructor() { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let authReq = req;
    //const token = this.token.getToken();
    if (sessionStorage.getItem('username') && sessionStorage.getItem('token')) {
      authReq = req.clone({ headers: req.headers.set(TOKEN_HEADER_KEY, 'Bearer ' + sessionStorage.getItem('token')) });
    }
    return next.handle(authReq);
  }

}
export const interceptorProvider = [{provide: HTTP_INTERCEPTORS, useClass:BasicAuthHtppInterceptorServiceService, multi: true}];
