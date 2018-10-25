import { Component, OnInit } from '@angular/core';
import {AuthService}from '../../shared/auth.service';
import { Product } from 'src/app/Models/productos';

@Component({
  selector: 'app-orden',
  templateUrl: './orden.component.html',
  styleUrls: ['./orden.component.css']
})
export class OrdenComponent implements OnInit {

  prod= {} as Product;
  productos = [];
  editingp:Product;
  editing:boolean;
  constructor(public servicio: AuthService) { }

 

  ngOnInit() {
    this.servicio.getproductos().subscribe(products =>{
      this.productos=products;
      });
  }
  deletep(event,product){
    this.servicio.deletecompra(product);
  }
  addp(){
    console.log(this.prod);
    this.servicio.addcompra(this.prod);
  }

  editp(event,product){
    this.editingp=product;
    this.editing=!this.editing;

  }
  up(){
this.servicio.uppro(this.editingp);
this.editingp = {} as Product;
this.editing=false;
  }

}
