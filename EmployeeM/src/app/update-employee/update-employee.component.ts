import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from '../employee';
import { EmployeesService } from '../services/employees.service';

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.css']
})
export class UpdateEmployeeComponent {
  employee: Employee=new Employee()

  constructor(private router:Router,private empService:EmployeesService){ }
  ngOnInit(): void {
    this.getEmployeeById();

  }
  
  updateEmployee(id?: number){
    console.log(this.employee);
    this.empService.updateEmployeeById(this.employee).subscribe();
    // this.router.navigate(['Update-Employee']);
    this.router.navigate(['employees']);
    //  window.location.reload();

  }

  getEmployeeById(){
    this.empService.getEmployeeById().subscribe(data=>{
      this.employee=data;

    })
      
    }
  }


