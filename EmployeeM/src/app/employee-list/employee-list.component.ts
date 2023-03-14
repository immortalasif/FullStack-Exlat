import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from '../employee';
import { EmployeesService } from '../services/employees.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  employee?:Employee[];

  constructor(private employeeService:EmployeesService,
    private router:Router){ }
  ngOnInit(): void {


  this.getAllEmployees();
      
  }

  getAllEmployees(){
    this.employeeService.getAllEmployee().subscribe(data=>{
      this.employee=data;
      console.log(data);
    })
  }

  updateEmployeeRecord(id?: number){
    console.log("id=",id);
   this.router.navigate(['Update-Employee']);
    this.employeeService.getId(id);

  }

  deleteEmployeeRecord(id?: number){
    this.employeeService. deleteEmployeeById(id).subscribe();
    this.router.navigate(['employees']);
    // window.location.reload();
  }

}
