package com.tk.db.utils;

import java.io.File;

//IO������:
public class IOUtils
{
	// �ݹ�ɾ����Ŀ¼: ���г�ȫ��Ŀ¼���� ,����ȫ������,������ļ�,ɾ��֮,
	// �����Ŀ¼�� �ݹ�ɾ�������Ŀ¼ ,�����Ժ�,��ǰĿ¼�ǿյ�,ɾ����ǰĿ¼!
	public static boolean deletePath(File dir)
	{
		File[] files = dir.listFiles();
		for (File file : files)
		{
			if (file.isFile())
			{
				if (file.delete())
				{
					System.out.println("ɾ����:" + file);
				} else
				{
					System.out.println("û��ɾ��:" + file);
				}

			} else
			{
				deletePath(file);
			}
		}
		if (dir.delete())
		{
			System.out.println(" ɾ��Ŀ¼:" + dir);
			return true;
		} else
		{
			System.out.println("ûɾ��:" + dir);
			return false;
		}
		// return dir.delete();

	}

}
