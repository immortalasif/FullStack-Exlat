package com.springP.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.stereotype.Repository;

import com.springP.model.Admin;

import jakarta.validation.Valid;

//@EnableJpaRepositories
@Repository
public interface AdminRepository extends JpaRepository<Admin, String> {

	Admin findByEmailAndPassword(String email, String password);

//	Admin saveAdmin(@Valid Admin admin);

//	Admin findByEmailAndPassword(String email, String password);
//	 Optional<Admin> findOneByEmailAndPassword(String email, String password);
//	 
//	    Admin findByEmail(String email);

}
