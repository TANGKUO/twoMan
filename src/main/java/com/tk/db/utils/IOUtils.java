package com.tk.db.utils;

import java.io.File;

//IO工具类:
public class IOUtils
{
	// 递归删除子目录: 先列出全部目录内容 ,迭代全部内容,如果是文件,删除之,
	// 如果是目录就 递归删除这个子目录 ,迭代以后,当前目录是空的,删除当前目录!
	public static boolean deletePath(File dir)
	{
		File[] files = dir.listFiles();
		for (File file : files)
		{
			if (file.isFile())
			{
				if (file.delete())
				{
					System.out.println("删除了:" + file);
				} else
				{
					System.out.println("没有删除:" + file);
				}

			} else
			{
				deletePath(file);
			}
		}
		if (dir.delete())
		{
			System.out.println(" 删除目录:" + dir);
			return true;
		} else
		{
			System.out.println("没删除:" + dir);
			return false;
		}
		// return dir.delete();

	}

}
