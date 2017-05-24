/**
 * 校验普通电话、传真号码：可以“+”开头，除数字外，可含有“-” 
 */
function isTel(s){
	var patrn=/^[+]?(\d){1,3}[ ]?([-]?((\d)|[ ]){1,12})+$/; 
	if (!patrn.exec(s)) return false ;
	return true ;
}
/**
 * 校验手机号码：必须以数字开头，除数字外，可含有“-” 
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
 * 校验邮政编码 
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
 * 校验email
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
 * 校验整数
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
 * 校验密码：只能输入6-20个字母、数字、下划线 
 * @param s
 * @returns {Boolean}
 */
function isPasswd(s) 
{ 
var patrn=/^(\w){6,20}$/; 
if (!patrn.exec(s)) return false ;
return true ;
} 

