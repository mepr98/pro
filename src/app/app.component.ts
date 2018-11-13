import { Component,OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import * as firebase from 'firebase/app';
import {AuthService} from './shared/auth.service';
import { Subject } from 'rxjs';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'proyect';
  searchterm: string;
 
  constructor(private auth: AuthService, public db: AngularFireDatabase){}

  ngOnInit()  {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    
    
  }
  search($event){
    let q = $event.target.value;
  }
  
}