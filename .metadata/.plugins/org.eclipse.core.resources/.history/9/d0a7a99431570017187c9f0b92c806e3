package com.niit.dao;

import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.niit.model.Users;

@Repository
public class UsersDaoImpl implements UsersDao {

	@Autowired
	private SessionFactory sessionFactory;

	public void registration(Users users) {
		Session session = sessionFactory.openSession();
		session.save(users);
		session.flush();
		session.close();

	}

}
