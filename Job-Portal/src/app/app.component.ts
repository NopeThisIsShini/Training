import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SignUpComponent } from "./components/sign-up/sign-up.component";
import { LoginComponent } from "./components/login/login.component";
import { NavbarComponent } from "./components/navbar/navbar.component";
import { FooterComponent } from './components/footer/footer.component';
import { initializeApp } from "firebase/app";
import { firebaseConfig } from '../../firebaseConfig';
import { JobFormComponent } from "./components/job-form/job-form.component";
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, FooterComponent, JobFormComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  constructor(){
    
    //firebase initialize
    initializeApp(firebaseConfig);
  }
}
