
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { EmployeesService} from '../services/employees.service';

@Component({
  selector: 'app-employee-login',
  templateUrl: './employee-login.component.html',
  styleUrls: ['./employee-login.component.css']
})
export class EmployeeLoginComponent {
  registerForm!: FormGroup;

  // service: any;
  // adminDetails: any;
  submitted: boolean=false ;
  constructor(private router: Router,private service:EmployeesService,private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      email: ['', [Validators.required,Validators.email]],
      password: ['', Validators.required],
     
      
    })
  }
 
 
  login(){
    this.service.employeeLogin(this.registerForm.value).subscribe({
     next: (val) => { 
       console.log(val);
       alert("logged in successfully!! ");
       sessionStorage.setItem('loggedid',val.id );
       this.router.navigate(['/empView']);
   
     },
      error: (val) => { 
       alert("invalid details!! ");
     },
      
     },
   )
   //sessionStorage.clear();

}
}