package com.springP.AdminService;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.springP.model.Admin;
import com.springP.model.Employee;
import com.springP.repository.AdminRepository;
import com.springP.repository.EmployeeRepository;

@Service
public class AdminServiceImpl implements AdminServices {

	@Autowired
	public AdminRepository adminRepository;
	
	@Autowired
	EmployeeRepository employeeRepository;
	
	@Override
	public Employee saveEmployee(Employee employee) throws AdminServiceException {
		Optional<Employee> getEmployee=employeeRepository.findByEmail(employee.getEmail());
		if(getEmployee.isPresent()) {
		
			throw new AdminServiceException("Employee email-id already exist");
		}
		return employeeRepository.save(employee);
	}

}
