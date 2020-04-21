import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import { Injectable, Injector } from "@angular/core";
import { LoginService } from "./login/login.service";


@Injectable()
export class AuthInterceptor implements HttpInterceptor {

    constructor(private injector: Injector) { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const loginService = this.injector.get(LoginService)

        if (loginService.isLoggedIn()) {
            const authRequest = request.clone(//Objeto é imutavel, por isso precisamos clonar ele
                { setHeaders: { 'Authorization': `Bearer ${loginService.user.acessToken}` } }
            );
            return next.handle(authRequest)
        } else {
            return next.handle(request)
        }

        // let headers = new HttpHeaders()//Faz parte do novo modulo do HttpClient, objeto imutavel
        // if (this.loginService.isLoggedIn()) {
        //     headers = headers.set('Authorization', `Bearer ${this.loginService.user.acessToken}`)
        // }


        //Next representa o proximo objeto na fila de Objetos ou o ultimo

    }


}