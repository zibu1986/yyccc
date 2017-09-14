//$(function(){  
//  var t = $("#quantity");  
//  $("#add").click(function(){  
//      t.val(parseInt(t.val())+1);  
//      $("#min").removeAttr("disabled");                 //当按加1时，解除$("#min")不可读状态  
//      setTotal();  
//  })  
//  $("#min").click(function(){  
//             if (parseInt(t.val())>1) {                     //判断数量值大于1时才可以减少  
//              t.val(parseInt(t.val())-1)  
//              }else{  
//              $("#min").attr("disabled","disabled")        //当$("#min")为1时，$("#min")不可读状态  
//             }  
//      setTotal();  
//  })  
// 
//  }  
//  setTotal();  
//})  
//加减购买数量
function add(obj){
	var t=$(".number>p");
	t.text(parseInt(t.text())+1);
	$(".number button:nth-of-type(2)").removeAttr("disabled");	
	setTotal();
}

function reduce(obj){
	var t=$(".number>p");
	if(parseInt(t.text())>1){
		t.text(parseInt(t.text())-1);
	}else{
		 $(obj).attr("disabled","disabled");
	}
	setTotal();
}
function setTotal(){  
	     var t=$(".number>p");
      $("#bottom span").html(parseInt(t.text())*parseInt($(".listmotion").text())); }
//选择日期

var calendar = new LCalendar();
		calendar.init({
			'trigger': '#riqi1', //标签id
			'type': 'date', //date 调出日期选择 datetime 调出日期时间选择 time 调出时间选择 ym 调出年月选择,
			'minDate': (new Date().getFullYear()-3) + '-' + 1 + '-' + 1, //最小日期
			'maxDate': (new Date().getFullYear()+3) + '-' + 12 + '-' + 31 //最大日期
		});
		var calendar = new LCalendar();
		calendar.init({
			'trigger': '#end_date', //标签id
			'type': 'date', //date 调出日期选择 datetime 调出日期时间选择 time 调出时间选择 ym 调出年月选择,
			'minDate': (new Date().getFullYear()-3) + '-' + 1 + '-' + 1, //最小日期
			'maxDate': (new Date().getFullYear()+3) + '-' + 12 + '-' + 31 //最大日期
		});
		//		$(function() {
		//			$('#start_date').date();
		//			$('#end_date').date();
		//		});
		