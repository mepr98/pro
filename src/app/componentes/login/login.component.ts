import { Component} from '@angular/core';
import { AuthService } from '../../core/auth.service';
import { AuthGuard } from '../../core/auth.guard';

@Component({
 selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent{


  constructor(public auth: AuthService) { 
  	


  }

  

}