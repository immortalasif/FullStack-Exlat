package com.springP.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.springP.AdminService.AdminServiceException;
import com.springP.AdminService.AdminServiceImpl;
import com.springP.model.Admin;
import com.springP.model.Employee;
import com.springP.repository.AdminRepository;
import com.springP.repository.EmployeeRepository;

import jakarta.validation.Valid;

@RestController
@RequestMapping("/api/v1")
@CrossOrigin(origins = "http://localhost:4200/")
@Validated
public class AdminController {
	@Autowired
	AdminRepository adminRepository ;
	@Autowired
	EmployeeRepository employeeRepository;
	
@Autowired
	
	private AdminServiceImpl adminServiceImpl;


	@GetMapping("/getAdmin")
	public ResponseEntity<?> displayMessage() {
		return new ResponseEntity<>(adminRepository.findAll(),HttpStatus.OK) ;	
	}
	
	@PostMapping("/adminLogin")
	public ResponseEntity<?> updateAdmin(@RequestBody Admin user) {
		System.out.println(user);
		
		Admin userFromDb= adminRepository.findByEmailAndPassword(user.getEmail(),user.getPassword());
		if(userFromDb == null) {
			System.out.println("email id not found");
			return new ResponseEntity<>("please provide correct email id", HttpStatus.BAD_REQUEST);
		}
		return new ResponseEntity<>(userFromDb,HttpStatus.OK);
		
	}
	@PostMapping("/addEmployee")
	public ResponseEntity<Employee> addEmployee(@Valid @RequestBody Employee employee) throws  AdminServiceException {
		return  new ResponseEntity<Employee>(adminServiceImpl.saveEmployee(employee), HttpStatus.CREATED);
		
	}
	
	@PostMapping("/employeeLogin")
	public ResponseEntity<?> employeeLogin(@RequestBody Employee emp) {
		System.out.println(emp);
		
		Employee empFromDb= employeeRepository.findByEmailAndPassword(emp.getEmail(),emp.getPassword());
		if(empFromDb == null) {
			System.out.println("email id not found");
			return new ResponseEntity<>("please provide correct email id", HttpStatus.BAD_REQUEST);
		}
		return new ResponseEntity<>(empFromDb,HttpStatus.OK);
		
	}

	


}
