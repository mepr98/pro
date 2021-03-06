import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from  './app.component';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { HomepageComponent } from './componentes/homepage/homepage.component';
import { NavbarComponent } from './componentes/navbar/navbar.component';
import { LoginComponent } from './componentes/login/login.component';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ModalModule } from 'ngx-bootstrap/modal';
import { AdminComponent } from './componentes/admin/admin.component';
import { ComprasComponent } from './componentes/compras/compras.component';
import { OrdenComponent } from './componentes/orden/orden.component';
import { CambioComponent } from './componentes/cambio/cambio.component';
import {environment} from '../environments/environment';
import { AngularFireModule } from '@angular/fire';
import {AngularFirestoreModule, AngularFirestore } from '@angular/fire/firestore';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import {AuthService} from './shared/auth.service';
import { AngularFireAuthModule } from '@angular/fire/auth';
import {FormsModule} from '@angular/forms';
import { BuscarComponent } from './componentes/buscar/buscar.component';
import { HistorialComponent } from './componentes/historial/historial.component';


@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    NavbarComponent,
    LoginComponent,
    AdminComponent,
    ComprasComponent,
    OrdenComponent,
    CambioComponent,
    BuscarComponent,
    HistorialComponent,
    
  ],
  imports: [
    ButtonsModule.forRoot(),
     CollapseModule.forRoot(),
    BrowserModule,
    AppRoutingModule,
    TooltipModule.forRoot(),
    BsDropdownModule.forRoot(),
    ModalModule.forRoot(),
    AppRoutingModule,
    
    AngularFireDatabaseModule,
    AngularFireModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    
    AngularFireAuthModule,
    FormsModule,
    
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
