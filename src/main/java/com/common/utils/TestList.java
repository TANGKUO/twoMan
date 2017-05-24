package com.common.utils;

import java.util.ArrayList;
import java.util.List;

import org.apache.commons.collections.CollectionUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

/**
 * 
 * @author Administrator
 * 
 */
public class TestList
{
	private static final Logger LOG = LoggerFactory.getLogger(TestList.class);

	public static void main(String[] args)
	{
		List<String> list = new ArrayList<>();
		if (CollectionUtils.isNotEmpty(list))
		{
			LOG.info("" + list);
		}

	}
}
