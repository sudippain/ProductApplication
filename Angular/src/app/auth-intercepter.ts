// import { Injectable } from '@angular/core';
// import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HTTP_INTERCEPTORS } from '@angular/common/http';
// import { Observable } from 'rxjs';


// @Injectable()
// export class AuthIntercepter implements HttpInterceptor {
// intercept(req:HttpRequest<any>,next:HttpHandler):Observable<HttpEvent<any>>{
//     let url: string =req.url;
//     let authreq=req;
//     if(url.includes('http://localhost')){
//         console.log(url);
//         let token=window.sessionStorage.getItem("Token");
//         if(token!=null){
//             authreq=req.clone({
//                 headers:req.headers.append('Authorization','Bearer '+token)
                
//             });
//         }
//         return next.handle(authreq);
//     }

// }


// }
// export const httpInterceptorProviders = [
//     { provide: HTTP_INTERCEPTORS, useClass: AuthIntercepter, multi: true }
// ];


import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';



const TOKEN_HEADER_KEY = 'Authorization';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

    constructor() { }

    intercept(req: HttpRequest<any>, next: HttpHandler) {
        let authReq = req;
        const token = window.sessionStorage.getItem("Token");
        if (token != null) {
            authReq = req.clone({ headers: req.headers.set(TOKEN_HEADER_KEY, 'Bearer ' + token) });
        }
        return next.handle(authReq);
    }
}

export const httpInterceptorProviders = [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }
];
