import { Injectable } from '@angular/core';
import {AngularFireAuth} from '@angular/fire/auth';
import {AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument} from '@angular/fire/firestore';
import * as firebase from 'firebase/app';
import { Observable } from 'rxjs';
import {Product} from '../Models/productos';
import{map} from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  ColeccionProductos:AngularFirestoreCollection<Product>;
  productos: Observable<Product[]>;
  producDoc:AngularFirestoreDocument<Product>;

  constructor(public db:AngularFirestore) {
    this.productos=this.db.collection("products").valueChanges();
    this.ColeccionProductos=this.db.collection("products");
    this.productos=this.ColeccionProductos.snapshotChanges().pipe(map(actions =>{
      return actions.map(a =>{
       const data = a.payload.doc.data() as Product;
       data.id=a.payload.doc.id;
       return data;
      })
    }))                              

   }
  getproductos(){
    return this.productos;
  }
  deleteproductos(producto:Product){
    this.producDoc= this.db.doc(`products/${producto.id}`);
    this.producDoc.delete();
  }
  addproductos(producto:Product){
    this.ColeccionProductos.add(producto)
  }
  uppro(producto:Product){
    this.producDoc = this.db.doc(`products/${producto.id}`);
    this.producDoc.update(producto);
  }
  }
