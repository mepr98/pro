import { Component, OnInit } from '@angular/core';
import {AuthService}from '../../shared/auth.service';
import { Product } from 'src/app/Models/productos';
import { TemplateRef } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  prod= {} as Product;
  productos = [];
  modalRef: BsModalRef;
  p= {} as Product;
  constructor(public servicio: AuthService, private modalService: BsModalService) { }

  openModal(template: TemplateRef<any>, producto: Product) {
    this.modalRef = this.modalService.show(template);
    this.p = producto;
  }


  ngOnInit() {
    this.servicio.getproductos().subscribe(products =>{console.log(products);
    this.productos=products;
    });
   
  }

  addp(event,product){
    this.servicio.addcompra(product);
  }


}
