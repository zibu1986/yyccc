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
	function getRootPath(){
	return "http://192.168.0.127:8080/bgt_manage/";
}
  window.onload=function(){
  	$.ajax({
    url:getRootPath()+"api/outer/common/getPicturecode",
    type:'POST', //GET
    success:function(data){
        console.log(data)
        console.log(textStatus)
        console.log(jqXHR)
    },
    error:function(xhr,textStatus){
        console.log('错误')
        console.log(xhr)
        console.log(textStatus)
    }
})
  }