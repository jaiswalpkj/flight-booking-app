import { HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { LoginService } from "./login.service";
import { HTTP_INTERCEPTORS, HttpEvent } from '@angular/common/http';

const TOKEN_HEADER_KEY = 'Authorization'; 

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

    constructor(private loginService: LoginService) { }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        let authReq = req;
        const token = this.loginService.getToken()
        
       // console.log("Interceptor", token);

        if (token!=null){
            authReq = req.clone({ headers: req.headers.set(TOKEN_HEADER_KEY,'Bearer ' + token) });
            //authReq= authReq.clone({setHeaders:{Authorization:`Bearer ${token}`}})
        }
        return next.handle(authReq)
    }
}

// export const authInterceptorProviders = [
//     { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }
//   ];