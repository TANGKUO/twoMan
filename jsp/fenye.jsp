<!DOCTYPE HTML>
<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%@page import="com.iec.web.utils.PageUtil"%>
<%@ include file="/pages/share/taglib.jsp" %>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>
 <div class="dev-page cf" id="fenyeId">
 

		<%
			PageUtil pageutil=null;
			if(request.getAttribute("PageUtil")!=null){//分页对象
				pageutil=(PageUtil)request.getAttribute("PageUtil");
			}
		%>	
		
		
		<%if(pageutil.getCurrentpage()==1){%>	
				<span class="prev nobutton">上一页</span>
		<%}else{%>
				<a href="<%=basePath %><%=pageutil.getUrl() %><%=pageutil.getCurrentpage()-1 %>" class="prev">上一页</a>
		<%}%>

        <%for(int i=pageutil.getStartpage();i<=pageutil.getEndpage();i++){
        	if(pageutil.getCurrentpage()==i){%>
        	
        		<%if(pageutil.getCurrentpage()==pageutil.getCountpage()){ %>
        			<strong class="last"><%=i %></strong>
        		<%}else{%>
        			<strong><%=i %></strong>
        		<%}%>
        		
        		
        		
        	<%}else{%>
        		
        		 <%if(pageutil.getCurrentpage()==pageutil.getCountpage()){ %>
        			<a class="last" href="<%=basePath %><%=pageutil.getUrl() %><%=i %>"><%=i %></a>
        		 <%}else{%>
        			<a href="<%=basePath %><%=pageutil.getUrl() %><%=i %>"><%=i %></a>
        		 <%}%>
        		
        		
        	<%}%>
        <%}%>
          
        <%if(pageutil.getCurrentpage()==pageutil.getCountpage() || pageutil.getCountpage()==0){%>	
				<span class="next nobutton">下一页</span>
		<%}else{%>
				<a href="<%=basePath %><%=pageutil.getUrl() %><%=pageutil.getCurrentpage()+1 %>" class="next">下一页</a>
		<%}%>
         

<%--		 <span class="margin5">共<%=pageutil.getCountpage() %>页</span>--%>
<%--         	<div class="skip"><span>到</span><input type="text" class="pageInput"><span>页</span></div>--%>
<%--         <button type="button" class="pageBtn">确定</button>--%>
       
</div>

