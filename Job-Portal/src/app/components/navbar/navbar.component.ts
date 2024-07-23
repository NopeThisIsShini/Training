import { Component } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  // auth service inject and change it as public to use it directly in navbar.html component
  constructor(public authService:AuthService, private route: Router){}
  // function for show navbar 
  showSidebar(): void {
    const sidebar = document.querySelector('.sidebar') as HTMLElement;
    if (sidebar) {
      sidebar.style.display = 'flex';
    }
  }
  // function for hide nav bar 
  hideSidebar():void {
    const sidebar = document.querySelector('.sidebar') as HTMLElement;
    if(sidebar){
      sidebar.style.display = 'none';
    }
  }
  goTologin(){
    this.route.navigate(['/login/userlogin'])
  }
  LogOut(){
    this.route.navigate(['/Home'])
  }
}
