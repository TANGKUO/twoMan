package com.tk.config.center.controller;

import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import com.tk.config.center.service.OpsConfigService;

@Controller
public class OpsConfigController {

	@Autowired
	private OpsConfigService configService;
	
	@RequestMapping(value="getOpsConfig",method=RequestMethod.GET)
	public String findOpsConfigByKey(String key) {
		JSONObject jsonObject=configService.findByKey(key);	
		jsonObject.put("test", "成功");
		return jsonObject.toString();
	}
	
}
