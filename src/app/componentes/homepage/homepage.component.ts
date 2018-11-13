import { Component, OnInit } from '@angular/core';
import {AuthService}from '../../shared/auth.service';
import { Product } from 'src/app/Models/productos';
import { TemplateRef } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { Router,ActivatedRoute } from '@angular/router';

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
  constructor(public servicio: AuthService, private modalService: BsModalService, private router: Router) { }

  openModal(template: TemplateRef<any>, producto: Product) {
    this.modalRef = this.modalService.show(template);
    this.p = producto;
  }


  ngOnInit() {
    this.servicio.getproductos().subscribe(products =>{console.log(products);
    this.productos=products;
    });
   
  }

  addp(event,product,queso = false, tocineta = false, glutenf = false){
    product.queso = queso;
    product.tocineta = tocineta;
    product.glutenf = glutenf;
    this.servicio.addcompra(product);
    this.modalRef.hide()
    this.router.navigate(['orden']);
  }


}
