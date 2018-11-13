import { Component, OnInit } from '@angular/core';
import {AuthService}from '../../shared/auth.service';
import { Product } from 'src/app/Models/productos';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
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
    this.servicio.deleteproductos(product);
  }
  addp(){
    console.log(this.prod);
    this.servicio.addproductos(this.prod);
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
