import { Component, OnInit } from '@angular/core';
import {AuthService}from '../../shared/auth.service';
import { Product } from 'src/app/Models/productos';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  prod= {} as Product;
  productos = [];

  constructor(public servicio: AuthService) { }

  ngOnInit() {
    this.servicio.getproductos().subscribe(products =>{console.log(products);
    this.productos=products;
    });
   
  }
  addp(){
    console.log(this.prod);
    this.servicio.addcompra(this.prod);
  }


}
