// JScript 文件
//根据错误控件的id，添加对应的错误提示；
function addErrorMsg(msg,item)
{
    var span = document.createElement("div");
    var offset = item.offset();
    var left = offset.left + item.outerWidth();
    $(span).css({"position":"absolute","color":"red","height":"24px","line-height":"24px","top":offset.top ,"left":left}).attr("class","error").text(msg);
    $("body").append(span);
}
//用于检查登录用户名、密码；
function checkUser()
{
        $("#btnsubmit").attr("src","images/login/dl_disable.gif").attr("disabled","disabled");
        var loginState = $.ajax({    
        url: "Resource/UserHandler.ashx?loginName=" + $("#login_name").val() + "&loginPas=" + $("#login_pas").val(),
        success: function(state){ 
            switch (state) 
               { 
               case '1': 
                $("#loginInfo").attr("action","platform.aspx").attr("method","post");
                 $("#loginInfo").submit(); 
                 break 
               case '2': //用户名错误；
                $(".error").remove();
                 addErrorMsg("★用户名错误★",$("#login_name"));
                $("#btnsubmit").attr("src","images/login/dl.gif").attr("disabled",""); 
                 break 
               case '3': //密码错误；
              $(".error").remove(); 
                addErrorMsg("★密码错误★",$("#login_pas"));
                $("#btnsubmit").attr("src","images/login/dl.gif").attr("disabled",""); 
                 break 
               default: 
               $(".error").remove(); 
              addErrorMsg("无法连接数据服务器！",$("#btnsubmit")); 
              $("#btnsubmit").attr("src","images/login/dl.gif").attr("disabled",""); ; 
                 }    
          },
          async: true
        });
}

