Eclipse中常用的操作单词

Existing Project into Workspace	现有的工程引入工作空间(加载工程)
File  			文件
New  			新建
Project 		工程
Folder 			文件夹
Import			引入(加载&导入)
Run As			运行
Application		应用程序
copy			复制
paste			粘贴
Delete			删除
properties		属性
Java Build Path		建立java路径
Libraries		库
Add Library		添加库
User Library		用户库
Next			下一步
User Libraries		用户库
New			新建
JDBC-ODBC		桥



需掌握的单词

overload	重载
override	重写(覆盖)



程序编写时常用的单词

package 	指定文件夹
class		类
static 		静态类型
true		真
false		假
String		字符串对象(也是一种数据类型)
extends		继承
this		当前对象引用	
super		父类对象引用
Math.random()	随机数
interface	接口
implements	继承接口
throw		抛出
throws		抛出
try 		尝试
catch		捕获
Exception	异常
Separator	分割线

基本数据类型(返回值类型中的一部分)
	
英文		类型	        默认值	        封装类
byte		字节型		0b 		Byte
char		字符型		'\u0000'	Character
short		短整型		0		Short
int 		整型		0		Integer	
long		长整型		0		Long
float		单精度浮点型	0.0f		Float
double		双精度浮点型	0.0		Double	
boolean		布尔型		flase		Boolean	
String		字符串		null		String
	


访问控制修饰符

public 		公有的
protected	公共的(保护的)
private		私有的



类修饰符

final		最终
new		新的
abstract	抽象
finally		最终的



逻辑关键字

if		如果
else		否则
switch		开关
case		事件
default		默认
for		(循环)
while		(循环)
do-while	(循环)
continue	继续
break		打破


类

ArrayList				数组集合
add(Object);				添加数据
get(int);				获得数据
Thread					线程
Runnable				可捕获的
					

控制数据库常用

Class.forName						加载数据库驱动程序
Connection						数据库连接对象
Statement						数据库操纵对象
ResultSet						数据库结果集对象
close							关闭
DriverManager						驱动管理器
localhost						本地主机
executeQuery						执行命令
executeUpdate						执行更新
SQLException						SQL数据库异常
ClassNotFoundException					类没有被找到异常
view							视图
trigger							触发器
proc							存储过程
removeAll						移除所有
rs.first()						游标移动到第一条记录
rs.last()						游标移动到最后一条记录
rs.getRow()						获得当前的行号
rs.absolute(i)						定位游标
top							最前
JavaBean						存放数据




窗体
（知道即可）

show							展示
this.setTitle						设置标题
this.setSize(500,400);					窗体大小
this.setLocation(260,150);				窗体初始位置
this.show();						显示窗体
this.setLocationRelativeTo(null);			居中
this.setDefaultCloseOperation(3);			关闭按扭起作用
this.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);	关闭按扭起作用
JLabel lbl = new JLabel(new ImageIcon("1.gif"));	图片标签
getContentPane 						获得窗体的内部窗格
setBackground(Color.BLUE)				设置背景颜色
setResizable()						设置是否能最大化()内								填true或false
setAlwaysOnTop()					窗口在最顶端()内								填true或false
Font							字体
showMessageDialog					弹出对话框
append							追加
valueChanged						改变数值
requestFocus						获得焦点
selectAll						全选
setText							设置文本域内容
getText							获得文本域内容
setEnabled()						设置控件是否可用()内								填true或false
setAccelerator						设置加速器
KeyStroke						敲击键盘
getKeyStroke						获得所敲击的键盘
InputEvent						输入事件
getDocument						获得文件
addUndoableEditListener					添加撤销监听器	
SimpleDateFormat					简易日期格式
setLineWrap						设置行距
addEdit							添加编辑
getEdit							获得编辑
setBorder						设置边框
Factory							工厂
createTitledBorder					创建标题边框
setVisible()						设置视窗是否隐藏()内								填true或false
setCursor						设置指针
isPopupTrigger						确定点鼠标击右键
getSelectedValue					获得选中的值
toString						返回字符串
insertIcon						插入图标
getActionCommand					获得动作命令
getKeyCode						获得键盘码
KeyEvent.VK_RIGHT					键盘事件.右箭头
getIcon							获得标签
setIcon							设置标签
getSource						获得所选
charAt()						查找指定下标所对应的字符
indexOf()						查找某一字符串，首次出现的位置(从前向后)
lastIndexOf()						查找某一字符串，首次出现的位置(从后向前)
length()						返回字符串长度
equals()						比较两个字符串
toUpperCase()						转为大写
toLowerCase()						转为小写
split()							分割字符串
replace()						替换
.addRow(Object[])					添加一条记录
setRowCount(0)						清空表模型
repaint							重绘
ComboBox.getSelectedItem				获得下拉框所选择的内容
ComboBox.addItem(rs.getString(1))			重新添加下拉框内容
g.setColor(Color.RED)					设置画笔颜色
g.setFont(new Font("隶书",Font.BOLD,30))		设置画笔字体
g.drawString("早晨好",100,200)     			画字符串
g.drawLine(100,100,500,500)				画线
g.drawOval(200,200,300,150)				画椭圆
g.fillOval(200,200,300,150)				填充椭圆
g.drawRect(200,200,300,150)				画矩形
this.setUndecorated(true)				去除窗体边框
Thread.currentThread()					获得当前正在运行的线程
Graphics						画笔
t.suspend()						线程挂起
t.resume()						恢复线程



布局

FlowLayout						流式布局
LEFT 							左
RIGHT							右
BorderLayout						边界布局
EAST							东
SOUTH							南
WEST							西
NORTH							北
CENTER							中
GridLayout						网格部局




(选择记忆)
Container				容器
JPanel					面板
JFrame					窗体
JButton					按扭
JLabel					标签
JTextField				文本域(单行的文本框)
JTextArea				文本区
JPasswordField				密码域
ButtonGroup				按扭组(单选)
JRadioButton				单选按扭
JCheckBox				多选按扭
JComboBox				下拉框
JList					下拉列表
ImageIcon				图片
JMenuBar				菜单工具栏
JMenu					菜单项			
JMenuItem				子菜单项
JCheckBoxMenuItem			多选按钮菜单工具栏
JRadioButtonMenuItem			单选按钮菜单工具栏
JScrollPane				滚动面板
JTextPane				文本面板
JPopupMenu				弹出菜单
JProgressBar				进度条
DefaultTableModel			默认的表模型			
JTable					表格
ActionListener				监听器
ActionEvent				动作事件
actionPerformed				动作演示
KeyListener				键盘监听器
KeyEvent 				键盘事件
keyPressed				按下键盘
keyReleased				释放键盘
keyTyped				点击键盘
MouseListener				鼠标监听器
MouseEvent				鼠标事件
mouseClicked				鼠标单击事件
mouseEntered				鼠标移入事件
mouseExited				鼠标离开事件
mousePressed				按下鼠标事件
mouseReleased				释放鼠标事件
MouseMotionListener			鼠标监听器
mouseDragged				拖拽鼠标
mouseMoved				移动鼠标
ListSelectionListener			下拉列表监听器
ListSelectionEvent			下拉列表选择事件
JOptionPane				有选项的面板
UndoableEditListener			撤消监听器
UndoableEditEvent			撤消事件
undoableEditHappened			撤消




包

java.awt.*;
java.lang.*;
java.util.*;
java.text.*;
javax.swing.*;
java.awt.event.*;
import java.sql.*;
javax.swing.undo.*;
java.swing.table.*;
javax.swing.event.*;


