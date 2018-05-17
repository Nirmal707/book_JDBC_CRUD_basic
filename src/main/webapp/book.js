$(document).ready(function() {
           $.get('book',function(responseJson) {    
            if(responseJson!=null){
                $("#countrytable").find("tr:gt(0)").remove();
                var table1 = $("#countrytable");
                $.each(responseJson, function(key,value) { 
                     var rowNew = $("<tr><td></td><td></td><td></td><td></td><td></td><td></td></tr>");
                        rowNew.children().eq(0).text(value['id']); 
                        rowNew.children().eq(1).text(value['title']); 
                        rowNew.children().eq(2).text(value['author']); 
                        rowNew.children().eq(3).text(value['price']); 
                     //var value=
                        rowNew.children().eq(4).append("<button onclick='update("+value['id']+")'>edit</button>");
                       // rowNew.children().eq(5).append('<button id="edit" aedit="'+value['id']+'" >edit</button>');
                        rowNew.children().eq(5).append("<button onclick='delete1("+value['id']+")'>delete</button>");
                        rowNew.appendTo(table1);
                    
});


            $("#tablediv").show(); 
// edit
    }         
    });
$('#update1').click(function(evt) {
    
        var id=$("#idid").val();
        var title=$("#idtitle").val();
        var author=$("#idauthor").val();        
        var price=$("#idprice").val();

        $.get('/book/update',{id:id,title:title,author:author,price:price},function(responseJson) {

         });
 
});  
$('#insert').click(function(evt) {
    
        var title=$("#idtitle").val();
        var author=$("#idauthor").val();        
        var price=$("#idprice").val();

        $.get('/book/new',{title:title,author:author,price:price},function(responseJson) {

         });
 
});                
});    
function update(data)
{
        $.get('/book/edit',{value:data},function(responseJson) {
        
                //alert(responseJson);
                $.each(responseJson, function(idx, obj) {	
                    $('#idid').val(obj.id);         
                  $('#idtitle').val(obj.title);
                  $('#idauthor').val(obj.author);
                 $('#idprice').val(obj.price);
         });
 
});                
}
function delete1(data)
{
    
    $.get('/book/delete',{id:data},function(responseJson) {
    });
}