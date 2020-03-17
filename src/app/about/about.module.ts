import { NgModule } from "@angular/core";
import {RouterModule,Routes } from "@angular/router";
import { AboutComponent } from "./about.component";


const ROUTES:Routes=[
    {path:'',component:AboutComponent}
]

@NgModule({
    declarations:[AboutComponent],//Declara o componente do modulo que vai utilizar
    imports:[RouterModule.forChild(ROUTES)],// Usa o router para carregar o componente ao ser chamado
})

export class AboutModule{



}