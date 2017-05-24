package com.tk.db.utils;

import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;

import sun.misc.BASE64Encoder;

public class MD5Util
{
	public static String encrypt(String origStr) throws NoSuchAlgorithmException
	{
		MessageDigest md = MessageDigest.getInstance("md5");
		byte[] buf = md.digest(origStr.getBytes());
		BASE64Encoder encode = new BASE64Encoder();
		String str = encode.encode(buf);
		return str;
	}

	public static void test() throws NoSuchAlgorithmException
	{

		// ���һ��ժҪ���ܹ��ߣ��ù��߻�ʹ��ָ����
		// �㷨������ժҪ���ܡ�
		// ժҪ���ܵ������ص�:
		// �ص�1����������,��֪������(��ժҪ)��
		// ���ܹ����Ƴ����ġ�
		// �ص�2��Ψһ��,��ժҪ��Ψһ�ģ���ͬ�����Ļ�����
		// ��ͬ�����ġ�
		MessageDigest md = MessageDigest.getInstance("md5");
		String info = "I  love you";
		// ����ժҪ
		byte[] buf = md.digest(info.getBytes());
		// Ϊ�˷���ʹ�ã�ת����һ���ַ���
		// BASE64Encoder���Խ������һ���ֽ�����ת��
		// ��һ���ַ�����
		BASE64Encoder encode = new BASE64Encoder();
		String str = encode.encode(buf);
		System.out.println(str);
	}

	/**
	 * @param args
	 * @throws NoSuchAlgorithmException
	 */
	public static void main(String[] args) throws NoSuchAlgorithmException
	{
		test();
	}

}
