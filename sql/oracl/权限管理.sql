--Create table
--UM_USER  用户表
----主键：	User_Id
create table UM_USER
(
USER_ID      varchar2(20) NOT NULL,
USER_TYPE    Number(1) NOT NULL default 1,
ACCOUNT      varchar2(40),
PASSWORD     varchar2(256),
TRUE_NAME   varchar2(64),
GENDER       char(1)，
DUTY         varchar2(40)，
ID_CARD      varchar2(40)，
EMP_CARD     varchar2(40)，
STATUS       Number(1) default 0，
PHONE        varchar2(40)，
MOBILE       varchar2(40)
)


--UM_RES  菜单表
--主键：	Res_Id
create table UM_RES
(
Res_Id      varchar2(20) NOT NULL,
Parent_Id    number(10),
Res_Name      varchar2(64),
Res_Prio     number(10),
Res_Type   varchar2(40),
Res_Url    varchar2(256),
Res_Opt    varchar2(50)
)

--UM_ROLE  角色表
--主键：	Role_Id
create table UM_ROLE
(
Role_Id     varchar2(20) NOT NULL,
Role_Name   varchar2(64),
Role_Desc    varchar2(512),
Role_Prio    number(10),
Role_Type    char(1),
Status       char(1) default '0'
)

--UM_USER_IN_ROLE  用户角色关联表
create table UM_USER_IN_ROLE
(
User_Id     varchar2(20) NOT NULL,
Role_Id   varchar2(20) NOT NULL
)

--UM_ROLE_USE_RES  角色权限关联表
create table UM_USER_IN_ROLE
(
Role_Id     varchar2(20) NOT NULL,
Res_Id   varchar2(20) NOT NULL
)

--商城会员角色管理用表

--MEMBER_RE_ORANGE  商城会员与橙E会员角色对应关系表
--主键：	无
create table MEMBER_RE_ORANGE
{
   F_MALL    VARCHAR2(100)    NO NULL,
   ORANGE    VARCHAR2(100)    NO NULL  default 0
}

--MEMBER_RES 会员功能资源表
--主键：	RES_ID
create table MEMBER_RES
{
   RES_Id      VARCHAR2(20)     NO NULL,
   RES_KEY    VARCHAR2(64)     NO NULL ,
   PARENT_ID  VARCHAR2(20)     NO NULL ,
   RES_NAME  VARCHAR2(64)     NO NULL ,
   RES_PRIO    NUMBER(10)      NO NULL , default 0,
   RES_TYPE   VARCHAR2(40)     NO NULL , default ‘0’,
   RES_URL    VARCHAR2(256) 
}

--MEMBER_ROLE_USE_RES   会员角色权限表
--主键：	无
create table MEMBER_ROLE_USE_RES
{
   F_MALL    VARCHAR2(100)    NO NULL,
   RES_Id   VARCHAR2(20)    NO NULL  ;
}






      
