import { Injectable } from '@angular/core';
import {AngularFireAuth} from '@angular/fire/auth';
import {AngularFirestore} from '@angular/fire/firestore';
import * as firebase from 'firebase/app';
import { Observable } from 'rxjs';
import {Product} from '../Models/productos';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  ColeccionProductos;
  productos: Observable<Product[]>;
  producDoc;

  constructor(public db:AngularFirestore) {
    this.productos=this.db.collection("products").valueChanges();
   }
  getproductos(){
    return this.productos;
  }
  }
