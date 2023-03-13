package com.springP.AdminService;

import com.springP.model.Admin;
import com.springP.model.Employee;

public interface AdminServices {

	Employee saveEmployee(Employee employee) throws AdminServiceException;

//	Admin saveAdmin(Admin admin) throws AdminServiceException;

}
