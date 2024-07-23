import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { HomeComponent } from './components/home/home.component';
import { ContactComponent } from './components/contact/contact.component';
import { CareersComponent } from './components/careers/careers.component';
import { AboutComponent } from './components/about/about.component';
import { JobFormComponent } from './components/job-form/job-form.component';
import { authGuard } from './guards/auth.guard';

export const routes: Routes = [
  //define route paths
  { path: 'login/:routParam', component: LoginComponent },
  { path: 'SignUp', component: SignUpComponent },
  { path: 'Home', component: HomeComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'careers', component: CareersComponent  },
  { path: 'jobform', component: JobFormComponent},

  // lazy loading 
  {
    path: 'about', loadComponent: () => import('./components/about/about.component').then(m => m.AboutComponent)
  },

];
