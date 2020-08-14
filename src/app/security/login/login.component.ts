import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginService } from './login.service';
import { NotificationService } from 'app/shared/messages/notification.service';
import { ActivatedRoute, Router, Route } from '@angular/router';
import {User} from './user.model';

@Component({
  selector: 'mt-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  navigateTo: string

  constructor(private fb: FormBuilder, private loginService: LoginService,
    private notificationService: NotificationService,
    private activatedRoute: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.loginForm = this.fb.group({
      email: this.fb.control('', [Validators.required, Validators.email]),
      password: this.fb.control('', [Validators.required]),
    })

    this.navigateTo = this.activatedRoute.snapshot.params['to'] || btoa('/')//Se ninguém passar uma rota, por padrão ja vamos para a pagina de login
  }

  login() {
    this.loginService.login(this.loginForm.value.email,
      this.loginForm.value.password)
      .subscribe(user => {
        
        this.notificationService.notify(`Bem vindo, ${user.name}`)
        
      },
        response =>//HttpErrorResponse
          this.notificationService.notify(response.error.message),//Error representa o body da resposta, e o message representa o atributo
          //Terceiro parametro quando o Observable terminar 
          //Callback que não tem parametro
        () => {
          this.router.navigate([atob(this.navigateTo)])//Descodificar a informação do encode base 64
        }
      )
  }



}
