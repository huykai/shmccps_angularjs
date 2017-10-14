'use strict';

function getChecked(){
			var nodes = $('#tt').tree('getChecked');
			var s = '';
			for(var i=0; i<nodes.length; i++){
				if (s != '') s += ',';
				s += nodes[i].text;
			}
			alert(s);
}

function adjust(obj){  
   var div = document.getElementByIdx_x_x("pad");  
   var txt = document.getElementByIdx_x_x("txt");  
   var w  = document.body.clientWidth;  
   var h  = document.body.clientHeight;  
   div.style.width = w/3;  
   div.style.height = h/3;  
   txt.style.width = w/6;  
   txt.style.height = h/6;  
}  
//window.onload=function(){  
//  window.onresize = adjust;  
//  adjust();  
//}  
/*
var updateGrid = function(filename, columninfo) {
     
    if ($('#easyui-dg').children().length > 0) {
        //$('#easyui-dg').empty();
        $('#easyui-dg').datagrid({
            url:filename,
            method: 'get',
            columns:[
                columninfo
            ]
        });
    } else {
        //$('#easyui-dg').empty();
        $('#easyui-dg').datagrid({
            url:filename,
            method: 'get',
            columns:[
                columninfo
                //[
                //{field:'itemid',title:'Item ID',width:100},
                //{field:'productid',title:'List Price',width:100},
                //{field:'unitcost',title:'Unit Cost',width:100,align:'right'}
                //]
            ]
        });

    }
}
*/

var updateGrid = function(filename, columninfo) {
    //console.log('updateGrid: MME_TRAFFICA = ', filename['MME_TRAFFICA']);
    //console.log('updateGrid: SGSN_TRAFFICA = ', filename['SGSN_TRAFFICA']);
    //console.log('updateGrid: #easyui-mme length = ', $('#easyui-mme').length);
    //console.log('updateGrid: #easyui-sgsn length = ', $('#easyui-sgsn').length);
    
    //if ($('#easyui-mme').children().length > 0) {
    if ($('#easyui-mme').length > 0 ) {
        //$('#easyui-dg').empty();
        $('#easyui-mme').empty();

        if (filename['MME_TRAFFICA'] != undefined) {
            //console.log('begin $.datagrid');
            $('#easyui-mme').datagrid({
                url:filename['MME_TRAFFICA'],
                method: 'get',
                columns:[
                    columninfo['MME_TRAFFICA']
                ]
            });
        }
        
    }

    if ($('#easyui-sgsn').length > 0 ) {
        //$('#easyui-dg').empty();
        $('#easyui-sgsn').empty();

        if (filename['SGSN_TRAFFICA'] != undefined) {
            //console.log('begin $.datagrid');
            $('#easyui-sgsn').datagrid({
                url:filename['SGSN_TRAFFICA'],
                method: 'get',
                columns:[
                    columninfo['SGSN_TRAFFICA']
                ]
            });
        }
    }
        //console.log('end $.datagrid');
    //} else if ($('#easyui-sgsn').children().length > 0){
    //    } else if ($('#easyui-sgsn').length > 0){

        //$('#easyui-dg').empty();
    //    $('#easyui-sgsn').datagrid({
    //        url:filename['SGSN_TRAFFICA'],
    //        method: 'get',
    //        columns:[
    //            columninfo['SGSN_TRAFFICA']
    //        ]
    //    });

    
}


$("#signin").click(function(){
//var signin = function(){
    console.log('signIn begin2!');
    var data = {
            username : $("#inputUsername").val(),
            password : $("#inputPassword").val(),
        };
    var headers = {
    //"x-csrf-Token":$.cookie('XSRF-TOKEN'),
    "x-xsrf-token":$.cookie('XSRF-TOKEN')
    };
    console.log('data:',data);
    $.ajax({url:"http://127.0.0.1:3000/user/signin",type:"post",async:true,data:data,headers:headers,
    success:function(result,status,xhr){
    //$.post("http://127.0.0.1:3000/user/signin",data,function(data,status){
        //alert("Data: " + data + "nStatus: " + status);
    //});
        console.log("return status=",status);
        //$("#div_loginresult").html("<div>"+"</div>");
        console.log("result=",result);
        console.log("result xhr=",xhr);
        $("#div_loginresult").text("Welcome, " + data.username + ".");
        $("#login").hide();
        $("#root").show();
        //$("#page").html('<div id="root"  class="col-lg-10 col-lg-offset-1" style="display:block;">');
    },
    error: function(jqXHR, textStatus, errorThrown) {
        console.log("error in signin: ",textStatus);
        $("#login_errorinfo").text("User '" + data.username + "' login failed, please check the username or password.");
    },
    complete: function(xhr,status){
        console.log('completed');
        
    }
    });
    console.log('ajax complete!');
});

var functions = {
	updateGrid: updateGrid
};

//module.exports = functions;




