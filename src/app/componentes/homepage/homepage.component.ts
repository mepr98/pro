import { Component, OnInit } from '@angular/core';
import {AuthService}from '../../shared/auth.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  productos = [];

  constructor(public servicio: AuthService) { }

  ngOnInit() {
    this.servicio.getproductos().subscribe(products =>{console.log(products);
    this.productos=products;
    });
   
  }


}
