<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<html>
<head>
    <title>Books Store Application</title>
    <script src="http://code.jquery.com/jquery-latest.min.js"></script>
<script src="book.js"></script>
</head>
<body>
    <center>
        <h1>Books Management</h1>        
    </center>
    <div align="center">
          <form action="#">  
        <table border="1" cellpadding="5">  
        <tr>
                <th>ID: </th>
                <td>
                    <input type="text" id="idid" name="title" size="45"/>
                </td>
            </tr>      
            <tr>
                <th>Title: </th>
                <td>
                    <input type="text" id="idtitle" name="title" size="45"/>
                </td>
            </tr>
            <tr>
                <th>Author: </th>
                <td>
                    <input type="text" id="idauthor"  name="author" size="45" />
                </td>
            </tr>
            <tr>
                <th>Price: </th>
                <td>
                    <input type="text" id="idprice"  name="price" size="5"/>
                </td>
            </tr>
            <tr>
                <td colspan="2" align="center">
                    <input type="submit" id="insert" value="insert" />
                </td>
            </tr>
            <tr>
                <td colspan="2" align="center">
                    <input type="submit" id="update1" value="Update" />
                </td>
            </tr>
            
        </table>
        </form>
    </div>

    <div id="tablediv">
<table cellspacing="0" id="countrytable"> 
    <tr> 
        <th scope="col">id</th> 
        <th scope="col">title</th> 
        <th scope="col">author</th>          
        <th scope="col">price</th>          
    </tr> 
</table>
</div>   
</body>
</html>