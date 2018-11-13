import { Component, OnInit } from '@angular/core';
import {AuthService}from '../../shared/auth.service';
import { Product } from 'src/app/Models/productos';
import { AfterViewChecked } from '@angular/core';

declare let paypal: any;

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




addScript: boolean = false;
  paypalLoad: boolean = true;
  

 
  paypalConfig = {
    env: 'sandbox',
    client: {
      sandbox: 'AZDxjDScFpQtjWTOUtWKbyN_bDt4OgqaF4eYXlewfBP4-8aqX3PiV8e1GWU6liB2CUXlkA59kJXE7M6R',
      production: '<your-production-key here>'
    },
    commit: true,
    payment: (data, actions) => {
      return actions.payment.create({
        payment: {
          transactions: [
            { amount: { total: this.getTotal(), currency: 'USD' } }
          ]
        }
      });
    },
    onAuthorize: (data, actions) => {
      return actions.payment.execute().then((payment) => {
        //Do something when payment is successful.
      })
    }
  };
 
  ngAfterViewChecked(): void {
    if (!this.addScript) {
      this.addPaypalScript().then(() => {
        paypal.Button.render(this.paypalConfig, '#paypal-checkout-btn');
        this.paypalLoad = false;
      })
    }
  }
  
  addPaypalScript() {
    this.addScript = true;
    return new Promise((resolve, reject) => {
      let scripttagElement = document.createElement('script');    
      scripttagElement.src = 'https://www.paypalobjects.com/api/checkout.js';
      scripttagElement.onload = resolve;
      document.body.appendChild(scripttagElement);
    })
  }



}



