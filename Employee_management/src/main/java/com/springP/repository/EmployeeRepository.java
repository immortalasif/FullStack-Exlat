package com.springP.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.springP.model.Admin;
import com.springP.model.Employee;

public interface EmployeeRepository extends JpaRepository<Employee, Long>{

	Optional<Employee> findByEmail(String email);

	Employee findByEmailAndPassword(String email, String password);

}
