package com.tk.db.utils;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.SQLException;

public class DBUtil_sql
{
	public static Connection getConnection() throws SQLException, ClassNotFoundException
	{
		Connection conn = null;
		Class.forName("com.mysql.jdbc.Driver");
		conn = DriverManager.getConnection("jdbc:mysql://localhost:3306/tsp?useUnicode=true&characterEncoding=utf-8",
				"root", "123456");
		return conn;
	}

	public static void main(String[] args) throws SQLException, ClassNotFoundException
	{
		Connection conn = getConnection();
		PreparedStatement prep = conn.prepareStatement("insert into yu_emp(name,salary,age) values('啊哈',121,11)");
		prep.executeUpdate();
		prep.close();
		conn.close();
	}
}
