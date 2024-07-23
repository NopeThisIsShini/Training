import { Component } from '@angular/core';
import { Details } from '../../../models/details';
import { DatabaseService } from '../../services/database.service';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Route, Router } from '@angular/router';

@Component({
  selector: 'app-job-form',
  standalone: true,
  imports: [FormsModule,ReactiveFormsModule],
  templateUrl: './job-form.component.html',
  styleUrl: './job-form.component.css'
})
export class JobFormComponent {
 
  //.................................................
  name = new FormControl("",[Validators.required])
  email = new FormControl("", [Validators.required])
  phnumber = new FormControl("",[Validators.required])
  // position = new FormControl("",[Validators.required])
  // cv = new FormControl("",[Validators.required])

  UserForm = new FormGroup({
    name:this.name,
    email:this.email,
    phnumber:this.phnumber
    // position:this.position,
    // cv:this.cv

  })

  constructor(private databaseService:DatabaseService, private router:Router, private route:ActivatedRoute){}
  async submit(){
  await  this.databaseService.CreateForm(this.UserForm.value  as Details)
 
  }
}
