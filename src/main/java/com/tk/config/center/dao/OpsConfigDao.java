package com.tk.config.center.dao;


import com.tk.config.center.entity.OpsConfig;

public interface OpsConfigDao {
	
	public int update(OpsConfig opsConfig);
	
	public OpsConfig findByKey(OpsConfig opsConfig);
}	
