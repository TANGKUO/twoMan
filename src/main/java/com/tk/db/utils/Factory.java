package com.tk.db.utils;


public class Factory
{
	public static Object getInstance(String type)
	{
		Object obj = null;
		if ("EmployeeDAO".equals(type))
		{
			obj = null;
			// obj = new EmployeeDAOHibernateImpl();
		}
		return obj;
	}
}
