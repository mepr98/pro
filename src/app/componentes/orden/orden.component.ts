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
  compras = [];
  editingp:Product;
  editing:boolean;
  sub:number;

  

  constructor(public servicio: AuthService) { }

 

  ngOnInit() {
    this.servicio.getproductos().subscribe(products =>{
      this.productos=products;
      });
      this.servicio.getcompras().subscribe(compras =>{
        this.compras=compras;
        });
  }
  deletep(event,product){
    this.servicio.deletecompra(product);
  }
  

  editp(event,product){
    this.editingp=product;
    this.editing=!this.editing;

  }

  getSubTotal() {
    let total = 0;
    for (var i = 0; i < this.compras.length; i++) {
        
        if (this.compras[i].Precio) {
            total += this.compras[i].Precio;

        }
    }
    return total;
}

  getIva() {
    return this.getSubTotal()*0.16;
  }

  getTotal(){
    return this.getSubTotal() + this.getIva();
  }


  up(){
this.servicio.uppro(this.editingp);
this.editingp = {} as Product;
this.editing=false;
  }

}
