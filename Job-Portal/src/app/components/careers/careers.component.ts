import { Component, ViewChild, viewChild } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-careers',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './careers.component.html',
  styleUrl: './careers.component.css'
})
export class CareersComponent {
  constructor(private router:Router, public authService:AuthService){}
  //if login or not

  checkLogin(){
    if(this.authService.isAuthenticated()){
      this.router.navigate(['/jobform'])
    }else{
      this.router.navigate(['/login/joblogin']);
    }

  }



}
