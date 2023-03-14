import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from '../employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {
 
  id?:number;
  baseURL="http://localhost:8080/api/v1/employees";

  constructor(private httpClient:HttpClient) { }

  // Getting All the Employee....
  
  // http://localhost:8080/api/v1/employees
  getAllEmployee(): Observable<Employee[]>{
    return this.httpClient.get<Employee[]>(`${this.baseURL}`);
  }

  // add Employee
  // http://localhost:8080/api/v1/employees

  addEmployee(employee?:Employee):Observable<object>{
    return this.httpClient.post<object>(`${this.baseURL}`,employee);
  }


  getId(getId?: number){
    this.id=getId;
   }
  // update Employee by id
  // http://localhost:8080/api/v1/employees/id

  getEmployeeById(employee?:Employee):Observable<object>{
    return this.httpClient.get(`http://localhost:8080/api/v1/employees/${this.id}` + employee);

  }

  updateEmployeeById(employee?:Employee):Observable<object>{
    return this.httpClient.put<Employee[]>(`${this.baseURL}/${this.id}`,employee);

  }

  // Delete Employee by id
  // http://localhost:8080/api/v1/employees/id
  employeeLogin(user1:any):Observable<any>{
    const options = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.httpClient.post('http://localhost:8080/api/v1/employeeLogin', user1);
  }

  deleteEmployeeById(id?:number):Observable<object>{
    return this.httpClient.delete<object>(`${this.baseURL}/${id}`);
}
}
