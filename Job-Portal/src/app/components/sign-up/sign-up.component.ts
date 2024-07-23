import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, NgForm, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [ReactiveFormsModule, FormsModule,CommonModule],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css'
})
export class SignUpComponent {

  //dependancy injection for route to login page and auth firebase
  constructor(private authService:AuthService ,private router:Router){ }

  passwordError: string | null = null;

  signup(form: NgForm) {
    const passwordControl = form.controls['password'];
    this.validatePassword(passwordControl.value);
    if (form.valid && !this.passwordError) {
      console.log('Form Submitted!', form.value);
    } else {
      console.log('Form not valid');
    }
    // route to login page 
    
    this.authService.registerUser(form.value.email, form.value.password)
    this.router.navigate(['/login/userlogin'])
  }

  //loginpage route through login here button
  OnLogin(){
    this.router.navigate(['/login/userlogin'])
  }

  reset(form: NgForm) {
    form.resetForm();
    this.passwordError = null;
  }

  validatePassword(password: string) {
    if (!/[A-Z]/.test(password)) {
      this.passwordError = 'Give at least one uppercase letter';
    } else if (!/[a-z]/.test(password)) {
      this.passwordError = 'Give at least one lowercase letter';
    } else if (!/[0-9]/.test(password)) {
      this.passwordError = 'Give at least one digit';
    } else if (!/[!@#$%^&*()\-+.]/.test(password)) {
      this.passwordError = 'Give at least one special character';
    } else if (password.length < 8 || password.length > 20) {
      this.passwordError = 'Atleast 8 characters';
    } else {
      this.passwordError = null;
    }
  }
}