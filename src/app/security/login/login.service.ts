import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs/Observable";
import { MEAT_API } from '../../app.api';
import { User } from "./user.model";
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/filter';
import { Router, NavigationEnd } from "@angular/router";


@Injectable()
export class LoginService {

    user: User
    lastUrl: string

    constructor(private http: HttpClient, private router: Router) {
        this.router.events.filter(e => e instanceof NavigationEnd)
            .subscribe( (e: NavigationEnd) => this.lastUrl = e.url)//Pega a ultima url navegada do site
    }

    ngOnInit() {

    }

    isLoggedIn(): boolean {
        return this.user !== undefined;
    }

    

    login(email: string, password: string): Observable<User> {
        return this.http.post<User>(`${MEAT_API}/login`, { email: email, password: password })
        .do(user=> {
            this.user= user;
           
        })//Pegando o acessToken
    }

    logout() {
        this.user = undefined;//Descartamos aquela informação
    }

    handleLogin(path: string=this.lastUrl) {//Colocando um valor default
        this.router.navigate(['/login', btoa(path)])//Encodar o path na url
    }

    

}