import { Component, OnInit } from '@angular/core';
import {AuthService}from '../../shared/auth.service';
import { Product } from 'src/app/Models/productos';
import { AfterViewChecked } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { TemplateRef } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';


@Component({
  selector: 'app-historial',
  templateUrl: './historial.component.html',
  styleUrls: ['./historial.component.css']
})
export class HistorialComponent implements OnInit {
  prod= {} as Product;
  productos = [];
  historial = [];
  editingp:Product;
  editing:boolean;
  sub:number;

  

  constructor(public servicio: AuthService, private modalService: BsModalService, private router: Router) { }

 

  ngOnInit() {
    this.servicio.getproductos().subscribe(products =>{
      this.productos=products;
      });
      this.servicio.gethistorial().subscribe(historial =>{
        this.historial=historial;
        });
  }
  deletep(event,product){
    this.servicio.deletecompra(product);
  }
  

  editp(event,product){
    this.editingp=product;
    this.editing=!this.editing;

  }
  addp(event,product){
 
    this.servicio.addcompra(product);
    this.router.navigate(['orden']);
  }


  up(){
this.servicio.uppro(this.editingp);
this.editingp = {} as Product;
this.editing=false;
  }



  

}
