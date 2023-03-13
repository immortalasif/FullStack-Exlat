package com.springP.model;


import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotNull;


@Entity
@Table(name="Admin")
public class Admin {
//	    @Id
//	    @Column(name="Admin_id", length = 45)
//	    @GeneratedValue(strategy = GenerationType.AUTO)
//	    private int Adminid;
	    @Id
		@Email(message = "{Please provide valid email address}")
		@NotNull(message = "{Please provide valid email address}")
		private String email;
		
		@NotNull(message="{Please provide valid first Name}")
		private String firstName;
		
		
		private String lastName;
		private String password;
		public Admin() {
			
		}
		public Admin(String email, String firstName, String lastName, String password) {
			super();
			this.email = email;
			this.firstName = firstName;
			this.lastName = lastName;
			this.password = password;
		}
		@Override
		public String toString() {
			return "Admin [email=" + email + ", firstName=" + firstName + ", lastName=" + lastName + ", password="
					+ password + "]";
		}
		public String getEmail() {
			return email;
		}
		public void setEmail(String email) {
			this.email = email;
		}
		public String getFirstName() {
			return firstName;
		}
		public void setFirstName(String firstName) {
			this.firstName = firstName;
		}
		public String getLastName() {
			return lastName;
		}
		public void setLastName(String lastName) {
			this.lastName = lastName;
		}
		public String getPassword() {
			return password;
		}
		public void setPassword(String password) {
			this.password = password;
		}
		


		
		
	    

}
