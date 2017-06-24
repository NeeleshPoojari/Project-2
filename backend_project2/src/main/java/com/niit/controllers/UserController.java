package com.niit.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.niit.dao.UsersDao;
import com.niit.model.Users;
import com.niit.model.Error;


@RestController
public class UserController {

	@Autowired
	private UsersDao usersDao;
	
	@RequestMapping(value="/registration", method=RequestMethod.POST)
	public ResponseEntity<?>  registration(@RequestBody Users user){
		try{
		user.setEnabled(true);
		user.setOnline(false);
		List<Users> users=usersDao.getAllUsers();
		for(Users u:users){
			if(u.getUsername().equals(user.getUsername()))
			{
				Error error=new Error(2,"Username already exists");
				return new ResponseEntity<Error>(error,HttpStatus.INTERNAL_SERVER_ERROR);
			}
		}
		
		usersDao.registration(user);
		return new ResponseEntity<Void>(HttpStatus.CREATED);
		}
		catch(Exception e){
			Error error=new Error( 1,"Cannot insert user details");
			return new ResponseEntity<Error>(error,HttpStatus.INTERNAL_SERVER_ERROR);
			
		}
	}
	

}
