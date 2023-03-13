package com.springP.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.springP.model.Employee;
import com.springP.repository.EmployeeRepository;

@RestController
@RequestMapping("/api/v1")
@CrossOrigin(origins = "http://localhost:4200/")
public class EmployeeController {
	@Autowired
	EmployeeRepository employeeRepository;
	
//	Get all Employee
//	http://localhost:8080/api/v1/employees/6
	
	@GetMapping("/employees")
	public List<Employee> displayMessage() {
		return employeeRepository.findAll();	
	}
	
//	Save a Employee
//	http://localhost:8080/api/v1/employees
	@PostMapping("/employees")
	public Employee addEmployee(@RequestBody Employee emp) {
		Employee getEmp=employeeRepository.save(emp);
		return getEmp;
		
	}
	
	//Get Employee by id
	@GetMapping("/employees/{id}")
	public ResponseEntity<Employee> getEmployeeById(@PathVariable Long id){
		Employee getEmp=employeeRepository.findById(id).get();
		return ResponseEntity.ok().body(getEmp);
	}
	
//	Update Employee
//	http://localhost:8080/api/v1/employees/6
	@PutMapping("/employees/{id}")
	public ResponseEntity<Employee> updateEmployeeById(@PathVariable Long id,
			@RequestBody Employee employee){
		Employee getEmp=employeeRepository.findById(id).get();
		getEmp.setFirstname(employee.getFirstname());
		getEmp.setLasttname(employee.getLasttname());
		getEmp.setEmail(employee.getEmail());
		
		Employee updateEmp=employeeRepository.save(getEmp);
		return ResponseEntity.ok().body(updateEmp);
	}
	
//	Delete An Employee
	
	@DeleteMapping("/employees/{id}")
	public String deleteEmployeeById(@PathVariable Long id){
		Employee getEmp=employeeRepository.findById(id).get();
		employeeRepository.delete(getEmp);
		return "Record Successfully Deleted!";
	}

}
