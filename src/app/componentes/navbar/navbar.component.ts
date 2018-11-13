import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Subject, observable } from 'rxjs';
import {Observable} from 'rxjs';
import { timer, combineLatest } from 'rxjs';
import { Product } from 'src/app/Models/productos';
import {AuthService}from '../../shared/auth.service';
import { AngularFirestore } from '@angular/fire/firestore';




@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit{
 usuarios=[];
 
  constructor(public servicio: AngularFirestore) { }

  ngOnInit() {}
    
  
  

}
