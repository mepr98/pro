import { NgModule, Component } from '@angular/core';
import {CommonModule} from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import {AppComponent} from '../app/app.component';
import {HomepageComponent} from './componentes/homepage/homepage.component';
import {LoginComponent} from './componentes/login/login.component';
import {AdminComponent} from './componentes/admin/admin.component';
import {CambioComponent} from './componentes/cambio/cambio.component';
import {ComprasComponent} from './componentes/compras/compras.component';
import {OrdenComponent} from './componentes/orden/orden.component';
const routes: Routes = [
  {path:'home',component: HomepageComponent},
  {path:'login',component:LoginComponent},
  {path:'admin',component:AdminComponent},
  {path:'cambio',component:CambioComponent},
  {path:'compras',component:ComprasComponent},
  {path:'orden',component:OrdenComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
