import { Component, OnInit } from '@angular/core';
import {AuthService}from '../../shared/auth.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  productos = [];
  constructor(public servicio: AuthService) { }

  ngOnInit() {
    this.servicio.getproductos().subscribe(products =>{
      this.productos=products;
      });
  }

  deletep(event,product){
    this.servicio.deleteproductos(product);
  }

}
