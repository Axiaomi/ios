mui.init();
(function($) {
	$(".mui-scroll-wrapper").scroll({
		bounce: true, //滚动条是否有弹力默认是
		indicators: false, //是否显示滚动条,默认是true
	});
})(mui);
mui.plusReady(function() {
	plus.screen.lockOrientation("portrait-primary");

})

mui.plusReady(function() {
	var appid = localStorage.getItem('appid');
	var user_id = localStorage.getItem('user_id');
	plus.webview.currentWebview().setStyle({
		scrollIndicator: 'none'
	});
	//				var id = plus.webview.currentWebview();
	var self = plus.webview.currentWebview();
	var class_id = self.id;
//					alert(user_id)
		
	









	mui.ajax('http://9.988lhkj.com/life_row', {
		data: {
			class_id: class_id,
			appid: appid,
			userid:user_id
		},
		dataType: 'json',
		type: 'post',
		timeout: 10000,
		headers: {
			'Content-Type': 'application/json'
		},
		success: function(data) {
//			alert(data)
//			var data = JSON.parse(data);
			console.info(JSON.stringify(data));
			//获得服务器响应
			localStorage.setItem('create_id', data.data.id);
			console.info(data.data.coin)
			console.info(data.data.click)
			if(data.data.coin == "1") {
				var ion = document.getElementById('icon');
				ion.style.color = 'red';
			}else if(data.data.coin == "0"){
				var ion = document.getElementById('icon');
				ion.style.color = 'gainsboro';
			}
			
			
			if(data.data.click == "1") {
				var dianzan = document.getElementById('dianzan');
				dianzan.style.color = 'red';
			}else if(data.data.click == "0"){
				var dianzan = document.getElementById('dianzan');
				ion.style.color = 'gainsboro';
			}
			
			
			if(data.code == 200) {
				var mui_ul = document.getElementById('mui_ul');
				//							console.info(data.data.title);
				html = '<li  class="mui-table-view-cell mui-media">' +
					'<div class="mui-media-body">' + data.data.title + '</div>' +
					'<div class="mui-media-body">' + data.data.time + '</div>' +
					'<div class="mui-media-body">' + data.data.content + '</div>' +
					'</li>';
				mui_ul.innerHTML += html;
			}
		}
	});

	var appid = localStorage.getItem('appid');
	var user_id = localStorage.getItem('user_id');

	//->点击收藏
	document.getElementById('icon').addEventListener('tap', function() {
		if(!user_id) {
			alert('对不起你还没登录');
			mui.openWindow("../mee/mee.html", "mee")
			//				mui.toast('对不起你还没登录');
			return;
		}
		console.info(appid);
		console.info(user_id);
		console.info(class_id);
		//->post请求
		mui.ajax('http://9.988lhkj.com/life_comment_chang', {
			data: {
				appid: appid,
				userid: user_id,
				create_id: class_id
			},

			dataType: 'json', //服务器返回json格式数据
			type: 'post', //HTTP请求类型
			timeout: 10000, //超时时间设置为10秒；
			headers: {
				'Content-Type': 'application/json'
			},
			success: function(data) {
//											alert(data)
				//服务器返回响应，根据响应结果，分析是否登录成功；
				console.info(JSON.stringify(data));
				localStorage.setItem('create_id', data.data.id);
				var ion = document.getElementById('icon');
				if(data.message == "收藏成功!") {
					ion.style.color = 'red';
					mui.toast(data.message);
				} else {
					ion.style.color = 'gainsboro';
					mui.toast(data.message);
				}
			},

			error: function(xhr, type, errorThrown) {
				//异常处理；
				console.log(type);
			},
		});

	});
	
	
	document.getElementById('dianzan').addEventListener('tap', function() {
		if(!user_id) {
			alert('对不起你还没登录');
			mui.openWindow("../mee/mee.html", "mee")
			//				mui.toast('对不起你还没登录');
			return;
		}
		console.info(appid);
		console.info(user_id);
		console.info(class_id);
		//->post请求
		mui.ajax('http://9.988lhkj.com/life_comment_zan', {
			data: {
				type:1,
				appid: appid,
				userid: user_id,
				create_id: class_id
			},

			dataType: 'json', //服务器返回json格式数据
			type: 'post', //HTTP请求类型
			timeout: 10000, //超时时间设置为10秒；
			headers: {
				'Content-Type': 'application/json'
			},
			success: function(data) {
//				alert(data)
				//服务器返回响应，根据响应结果，分析是否登录成功；
				console.info(JSON.stringify(data));
				localStorage.setItem('create_id',data.data.id);
				var dianzan = document.getElementById('dianzan');
				if(data.message == "取消赞成功!") {
					dianzan.style.color = 'gainsboro';
					mui.toast(data.message);
				} else {
//					alert(dianzan);
					dianzan.style.color = 'red';
					mui.toast(data.message);
				}
				
			},

			error: function(xhr, type, errorThrown) {
				//异常处理；
				console.log(type);
			},
		});

	});


	var pinglun = document.getElementById('pinglun')
	document.getElementById('fabiao').addEventListener('tap', function() {
		
		
		if(!user_id) {
			alert('对不起你还没登录');
			mui.openWindow("../mee/mee.html", "mee")
			//				mui.toast('对不起你还没登录');
			return;
		}
		var content = pinglun.value
		console.info(appid);
		console.info(user_id);
		console.info(class_id);
		//->post请求
		mui.ajax('http://9.988lhkj.com/life_comment', {
			data: {
				create_id:class_id,
				appid: appid,
				userid: user_id,
				content:content
			},

			dataType: 'json', //服务器返回json格式数据
			type: 'post', //HTTP请求类型
			timeout: 10000, //超时时间设置为10秒；
			headers: {
				'Content-Type': 'application/json'
			},
			success: function(data) {
//				alert(data)
				console.info(JSON.stringify(data));
					var username = localStorage.getItem('username');
					var user_id = localStorage.getItem('user_id');
					var img = localStorage.getItem('img');
					var nickname = localStorage.getItem('nickname');
					var imgdata = localStorage.getItem("imgdata");
					var pinglll =document.getElementById('pinglll')
					var abc =document.getElementById('abc')

						html='<div class="pinglun_03">'+
								'<img src="../../public/img/timg1.jpg" />'+
								'<span class="pinglun_03_span">'+
								''+nickname+''+
							'</span>'+
								'<span class="mui-icon mui-icon-email">'+
								'0'+
							'</span>'+
								'<span class="iconfont icon-dianzan-copy">'+
								'0'+
							'</span>'+
								'<span class="mui-icon mui-icon-trash"></span>'+
							'</div>'+
							'<div class="pinglun_022">'+
							''+data.data.content+''+
							'</div>';
				
				pinglll.innerHTML+=html

//				abc.insertBefore(pinglll,abc.lastChild);
//				pinglll.insertBefore(abc,pinglll.lastChild);

				pinglun.value='';
				
//				 abc.innerHTML+= abc.append(pinglll.innerHTML);
				
//				pinglll.innerHTML.before(pinglll)
				
			},

			error: function(xhr, type, errorThrown) {
				//异常处理；
				console.log(type);
			},
		});

	});



	



});