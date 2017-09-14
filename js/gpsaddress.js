function getLocation(){ 
    if (navigator.geolocation){ 
        navigator.geolocation.getCurrentPosition(showPosition,showError); 
    }else{ 
        console.log("浏览器不支持地理定位。"); 
    } 
}
function showError(error){ 
    switch(error.code) { 
        case error.PERMISSION_DENIED: 
            console.log("定位失败,用户拒绝请求地理定位"); 
            break; 
        case error.POSITION_UNAVAILABLE: 
            console.log("定位失败,位置信息是不可用"); 
            break; 
        case error.TIMEOUT: 
            console.log("定位失败,请求获取用户位置超时"); 
            break; 
        case error.UNKNOWN_ERROR: 
            console.log("定位失败,定位系统失效"); 
            break; 
    } 
}
function showPosition(position){ 
    var latlon = position.coords.latitude+','+position.coords.longitude; 
    var url = "http://api.map.baidu.com/geocoder/v2/?ak=C93b5178d7a8ebdb830b9b557abce78b&callback=renderReverse&location="+latlon+"&output=json&pois=0"; 
    $.ajax({  
        type: "GET",  
        dataType: "jsonp",  
        url: url, 
//      beforeSend: function(){ 
//        $("#baidu_geo").html('正在定位...'); 
        
        success: function (json1) {  
        	

      
            if(json1.status==0){ 
               $(".gps" ).val(json1.result.formatted_address); 
              } 
        }, 
//      error: function (XMLHttpRequest, textStatus, errorThrown) {  
//          $("#baidu_geo").html(latlon+"地址位置获取失败");  
//      } ,
    }); 
}; 