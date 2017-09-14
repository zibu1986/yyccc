//手机号码验证
function upperCase(){
        var phone = document.getElementById('phone').value;
        if(!(/^1[34578]\d{9}$/.test(phone))){ 
         $("#content p").eq(0).text('号码有误，请重新填写！');
            return false; 
        }
       }
//密码验证1
function passCase1(){
        var password1 = $(":password").eq(0).val();
        var password2= $(":password").eq(1).val();
        if(!(/^[a-zA-Z0-9]{6,18}$/.test(password1))){ 
         $("#content p").eq(3).text('请输入6-18位密码');
            return false;  
        }
      }
//密码验证2
function passCase2(){
        var password1 = $(":password").eq(0).val();
        var password2 = $(":password").eq(1).val();
        if(!(password1==password2&&/^[a-zA-Z0-9]{6,18}$/.test(password2))){ 
         $("#content p").eq(3).text('密码输入错误');
            return false;  
        }
      }

function kong(num){
	$("#content p").eq(num).text('');
}
//图形验证码
window.onload=function(){	
  	$.ajax({
    url:getRootPath()+"/api/outer/common/getPicturecode",
 // data:{mobile:userTele,password:passWord},
    type:'get', 
    success:function(data){
    	var msgjson=JSON.parse(data);
        console.log(msgjson);
    	if(msgjson.is==1){
    		console.log(msgjson.data);
    		$(".numimg").attr("src",msgjson.data);
    	}
       // else{
       // 	 $("#content p").eq(0).text('号码有误，请重新填写！');
       // }   
    	alert("注册成功");
        
    },
    error:function(xhr,textStatus){
    	console.log("错误提示： " + xhr.status + " " + xhr.statusText);
    }
 })
}

//获取手机验证码
//1.发送停留60s；
 var countdown=60;
  function settime() { 
	    if (countdown == 0) { 
	        obj.removeAttribute("disabled");    
	        obj.value="获取验证码"; 
	        countdown = 60; 
	        return;
	    } else { 
	        obj.setAttribute("disabled", true); 
	        obj.value="重新发送(" + countdown + ")"; 
	        countdown--; 
	    } 
		setTimeout(function() { 
		    settime(obj) }
		    ,1000) 
	}
//2.短信验证码数据请求
function tin(){
	    var obj=this;
	    var phone= $('#phone').val();
		var pictureCode=$('.pictureCode').val();
		console.log(phone);
		console.log(pictureCode);
	    $.ajax({
		    url:getRootPath()+"/api/outer/sms/sendWhenRegist",
		    data:{mobile:phone,pictureCode:pictureCode},
		    type:'post', 
		    success:function(data){
		    	var msgjson=JSON.parse(data);
		        console.log(msgjson);
		    	if(msgjson.is==1){
		    	//    settime();
		    	}
		        else{
		        	 $("#content p").eq(0).text(msgjson.msg);
		        }  
		    },
		    error:function(xhr,textStatus){
		    	console.log("错误提示： " + xhr.status + " " + xhr.statusText);
		    }
	   	})   	
}
//注册
function zhuce(){
	if(upperCase()&&passCase1()&&passCase2()){
			var phone= $('#phone').val();
			var pictureCode=$('.pictureCode').val();
			var smsCode=$('.smsCode').val();
			var password=md5($('.password').val()).toUpperCase() ;
			  console.log(phone);
			  console.log(pictureCode);
			  console.log(smsCode);
			  console.log(password);
		    $.ajax({
			    url:getRootPath()+"/api/outer/user/regist",
			    data:{mobile:phone,pictureCode:pictureCode,smsCode:smsCode,password:password},
			    type:'post', 
			    success:function(data){
			    	var msgjson=JSON.parse(data);
			        console.log(msgjson);
			    	if(msgjson.is==1){
			    		window.location.href=getRootPath()+"wap/inter/index/index";
			    	}
			       else{
			       	$("#content p").eq(3).text('msgjson.msg');
			        } 
			    },
			    error:function(xhr,textStatus){
			    	console.log("错误提示： " + xhr.status + " " + xhr.statusText);
			    }
		 	})   	
	}else{
		console.log('注册错误')
	}	
}
document.getElementById("designdata");
