
import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../../services/user.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, CommonModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  userForm: FormGroup  = new FormGroup({
    email:new FormControl(""),
    pass: new FormControl("")
  })

  loginObj: any = {
    "EmailId": "",
    "Password": ""
  };
  router = inject(Router)
  constructor(private userSrv: UserService) {
   

  }
  Login() {
    debugger;
    this.userSrv.onLogin(this.loginObj).subscribe((res: any) => {
      if (res.result) {
        localStorage.setItem('angular18Login', this.loginObj.user);
        this.router.navigateByUrl('dashboard');
      }
      else{
        alert(res.message)
      }
    },error=>{
      alert('wrong credentials')
    })
  }

}
