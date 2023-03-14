import { Component } from '@angular/core';
import {  EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from '../employee';
import { EmployeesService } from '../services/employees.service';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent {
  employee:Employee=new Employee();

  constructor(private employeeService:EmployeesService,
    private router:Router){ }

  ngOnInit():void{

  }
  addEmployee(){
    console.log(this.employee)
    this.employeeService.addEmployee(this.employee).subscribe();
    this.router.navigate(['employees']);
  }

}
