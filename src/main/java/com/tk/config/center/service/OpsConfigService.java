package com.tk.config.center.service;


import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.tk.config.center.dao.OpsConfigDao;
import com.tk.config.center.entity.OpsConfig;

@Service
public class OpsConfigService {

	@Autowired
	private OpsConfigDao opsConfigDao;
	
	public JSONObject findByKey(String key) {
		OpsConfig opsConfig = new OpsConfig();
		opsConfig.setKey(key);
		opsConfig = opsConfigDao.findByKey(opsConfig);	
		JSONObject json = new JSONObject(opsConfig);
		json.remove("id");
		return json;
	}
}
