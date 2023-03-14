import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RegistrationServiceService } from '../services/registration-service.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class UserRegistrationComponent implements OnInit {

  // employeename: string ="";
  // email: string ="";
  // password: string ="";
  // router: any;
 
 
  registerForm!: FormGroup;
  submitted!: boolean;
  constructor(private formBuilder: FormBuilder,private service:RegistrationServiceService) { }


  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      email: ['', [Validators.required,Validators.email]],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      password: ['', Validators.required],
      
    });
  }

  apply(){
    // console.log(this.registerForm.value);
    this.submitted=true
    this.service.registerStudent(this.registerForm.value).subscribe({
      next(value) {
        console.log(value);
        
      },
    })
  }
  // registerStudent(value: any) {
  //   throw new Error('Method not implemented.');
  // }
 
}
