import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
// || remove this files as all iclude in app.routes.ts  ||
// import { HomeComponent } from './home/home.component';
// import { ContactusComponent } from './contactus/contactus.component';
// import { AboutComponent } from './about/about.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,NavbarComponent, RouterOutlet,FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'three-static-page';
}
