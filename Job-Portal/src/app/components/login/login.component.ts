import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  //dependancy injection for route to signup page and auth firebase
  constructor(private authService:AuthService ,private router:Router){ }


  // reactive form method , where 90% work is done in ts file
  email = new FormControl("", [
    Validators.required,
    Validators.email
  ])
  // validation ts 
  password = new FormControl("", [
    Validators.required,
    Validators.minLength(8)
  ])
  // loginForm = new FormGroup({ ... }): This initializes a new instance of FormGroup named loginForm 
  // Inside the FormGroup constructor, { ... } represents an object where keys are control names (e.g., email, password) and values are instances of FormControl.
  // this.email and this.password are assumed to be instances of FormControl that have been defined elsewhere in your Angular component.
  loginForm = new FormGroup({
    // email: this.email: This assigns the FormControl named this.email (presumably holding validation logic and current value for the email input) to the email key within the loginForm FormGroup.
    email: this.email,
    password: this.password
  })

  login() {
    // this.loginForm: This refers to an instance of FormGroup that was likely defined in the component's class. It represents the form group containing the form controls (e.g., email and password).
    // console.log(this.loginForm.value) //to view in console
    // ! mark for definitely this variable will exist 
    this.authService.loginUser(this.loginForm.value.email!,this.loginForm.value.password!)
    const currentUrl = this.router.url;
    if (currentUrl.includes('/login/joblogin')){
      this.router.navigateByUrl('/jobform')
    }
    if(currentUrl.includes('/login/userlogin')){
      this.router.navigateByUrl('/Home')
    }

  
   
  }
  reset() {
    this.loginForm.reset()
  }
  SignUp(){
    this.router.navigate(['/SignUp'])

  }

  
  
}
