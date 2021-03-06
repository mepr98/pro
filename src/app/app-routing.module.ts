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
import {BuscarComponent} from './componentes/buscar/buscar.component';
import {HistorialComponent} from './componentes/historial/historial.component';

import {AuthService} from './core/auth.service';
import { AlertModule } from 'ngx-bootstrap';




const routes: Routes = [
  {path:'home',component: HomepageComponent},
  {path:'',component:LoginComponent},
  {path:'admin',component:AdminComponent},
  {path:'cambio',component:CambioComponent},
  {path:'compras',component:ComprasComponent},
  {path:'orden',component:OrdenComponent},
  {path:'buscar',component:BuscarComponent},
  {path:'historial',component:HistorialComponent},
  
  
];

@NgModule({
  imports: [AlertModule.forRoot(),RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
