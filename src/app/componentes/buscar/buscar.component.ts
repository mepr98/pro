import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Subject, observable } from 'rxjs';
import {Observable} from 'rxjs';
import { timer, combineLatest } from 'rxjs';
import { Product } from 'src/app/Models/productos';
import {AuthService}from '../../shared/auth.service';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styleUrls: ['./buscar.component.css']
})
export class BuscarComponent implements OnInit {

  usuarios=[];
  prod= {} as Product;
  productos = [];
  searchterm: string;
  products;
  comienza= new Subject();
  termina= new Subject();
  comienzo= this.comienza.asObservable();
  final=this.termina.asObservable();
   constructor(public servicio: AngularFirestore) { }
 
   ngOnInit() {
     combineLatest(this.comienzo,this.final).subscribe((value)=>{
       this.firequery(value[0],value[1]).subscribe((products) =>{
         this.products=products
       })
 
     })
   }
   search($event){
     let q = $event.target.value;
     this.comienza.next(q);
     this.termina.next(q+"\uf8ff");
   }
   firequery(start,end){
 
     return this.servicio.collection('products',ref => ref.limit(3).orderBy('Name').startAt(start).endAt(end)).valueChanges();
 
   }
 

}
