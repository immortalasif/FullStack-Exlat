import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AdminloginService } from '../services/adminlogin.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  // email: string ="";
  // password: string ="";
  registerForm!: FormGroup;

  // service: any;
  // adminDetails: any;
  submitted: boolean=false ;
 
 
  constructor(private router: Router,private service:AdminloginService,private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      email: ['', [Validators.required,Validators.email]],
      password: ['', Validators.required],
     
      
    });
  }
 
 
  login(){
    this.service.adminlogin(this.registerForm.value).subscribe({
     next: (val) => { 
       console.log(val);
       this.router.navigate(['/employees'])
     /*  this.adminDetails = val 
       if(this.registerForm.value.email == this.adminDetails.email &&
         this.registerForm.value.password ==
        this.adminDetails.password){
          
          alert("logged in successfully!! ");
          this.router.navigate(['/employees'])
          this.submitted=true;
         //  var obj = { "message": taskMessage, "name": taskName }
         //   var val = localStorage.setItem("task", obj);
         //sessionStorage.setItem('userId',val.id);
         sessionStorage.setItem('loggedemail',val.email );
        } */
     },
      error: (val) => { 
       alert("invalid details!! ");
      //  this.router.navigate(['login']);
      //  this.registerForm = this.formBuilder.group({
      //    email: ['', [Validators.required,Validators.email]],
      //    password: ['', Validators.required],
         
      //  });
     
     },
      
     },
   )
   
     }
    }


