/**
 * У����ͨ�绰��������룺���ԡ�+����ͷ���������⣬�ɺ��С�-�� 
 */
function isTel(s){
	var patrn=/^[+]?(\d){1,3}[ ]?([-]?((\d)|[ ]){1,12})+$/; 
	if (!patrn.exec(s)) return false ;
	return true ;
}
/**
 * У���ֻ����룺���������ֿ�ͷ���������⣬�ɺ��С�-�� 
 * @param s
 * @returns {Boolean}
 */
function isMobil(s) 
{  
var patrn=/^[+]{0,1}1\d{2}(([ ]|[-])?\d{4}){2}$/;
if (!patrn.exec(s)) return false ;
return true ;
} 
/**
 * У���������� 
 * @param s
 * @returns {Boolean}
 */
function isPostalCode(s) 
{ 
//var patrn=/^[a-zA-Z0-9]{3,12}$/; 
var patrn=/^[a-zA-Z0-9 ]{3,12}$/; 
if (!patrn.exec(s)) return false ;
return true ;
}
/**
 * У��email
 * @param s
 * @returns {Boolean}
 */
function isEmail(s) 
{ 
//var patrn=/^[a-zA-Z0-9]{3,12}$/; 
var patrn=/^\w +[@]\w +[.][\w.] +$/; 
if (!patrn.exec(s)) return false ;
return true ;
} 
/**
 * У������
 * @param s
 * @returns {Boolean}
 */
function isDig(s) 
{ 
//var patrn=/^[a-zA-Z0-9]{3,12}$/; 
var patrn=/^-?\\d+$/; 
if (!patrn.exec(s)) return false ;
return true ;
} 
/**
 * У�����룺ֻ������6-20����ĸ�����֡��»��� 
 * @param s
 * @returns {Boolean}
 */
function isPasswd(s) 
{ 
var patrn=/^(\w){6,20}$/; 
if (!patrn.exec(s)) return false ;
return true ;
} 

