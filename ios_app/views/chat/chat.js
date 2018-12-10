mui.init({
});
mui.plusReady(function(e) {
			window.addEventListener('refresh', function(e) { //执行刷新
				location.reload();
			});

	//获取聊天信息
	var me = document.getElementById('me');
	var username = localStorage.getItem('username');
	var user_id = localStorage.getItem('user_id');
	var img = localStorage.getItem('img');
	var nickname = localStorage.getItem('nickname');
	var id = localStorage.getItem('user_id');
	//->获取消息

	plus.webview.currentWebview().setStyle({
		scrollIndicator: 'none'
	});

	var char_id = localStorage.getItem('char_id');

	if(char_id == null) {
		char_id = 0;
	}

	function set_msg() {

		if(id == null) {
			return false;
		}
		//		var _back = mui.back; //获取mui原生页面回退方法
		//		mui.back = function() { //重写回退方法
		//		var wobj = plus.webview.getWebviewById("htmlId"); //根据页面ID获取到页面对象
		//		wobj.reload(true); //设置页面重新加载项(默认为false，改为true)
		//		_back(); //调用回退方法
		//		}

		mui.ajax('http://9.988lhkj.com/chat_get', {
			data: {
				char_id: char_id,
			},
			dataType: 'json', //服务器返回json格式数据
			type: 'post', //HTTP请求类型
			timeout: 10000, //超时时间设置为10秒;
			headers: {
				'Content-Type': 'application/json'
			},
			success: function(data) {
				if(data.code == 200) {
					//                  console.info(JSON.stringify(data));
					var count = document.getElementById('messageList');
					for(var i = 0, j = data.data.length; i < j; i++) {
						if(char_id === data.data[i].char_id) {
							return;
						} else {
							if(data.data[i].user_id == id) {
								char_id = data.data[i].char_id;
								count.innerHTML += '<a name="first' + data.data[i].char_id + '"><div  class="message me">' +
//									'<img class="avatar" src="' + img + '" />' +
									'<img class="avatar" src="../../public/img/timg1.jpg"/>'+
									'<div class="content"><div class="nickname">' +
									'<span class="time">' + data.data[i].add_time + '</span>' +
									'</div>' +
									'<div class="bubble bubble_primary right">' +
									'<div class="bubble_cont">' +
									'<div class="plain">\<' +
									'pre>' + data.data[i].content + '</pre>' +
									' </div></div></div></div></div></a>';
								location.href = "#first" + data.data[i].char_id;
								window.location.hash = "#first" + data.data[i].char_id;
							} else {
								char_id = data.data[i].char_id;
								count.innerHTML += '<a name="first' + data.data[i].char_id + '"><div class="message">' +
									'<img class="avatar" src="../../img_loc/10.png" />' +
									'<div class="content">' +
									'<div class="nickname">' + data.data[i].nickname + '<span class="time">' + data.data[i].add_time + '</span>' +
									'</div>' +
									'<div class="bubble bubble_default left">' +
									'<div class="bubble_cont">' +
									'<div class="plain"><pre>' + data.data[i].content + '</pre>' +
									'</div></div></div></div></div></a>';
								location.href = "#first" + data.data[i].char_id;
								window.location.hash = "#first" + data.data[i].char_id;
							}
						}
					}
				} else {
					mui.toast(data.message);
				}

			},
			error: function(xhr, type, errorThrown) {
				//异常处理；
				//              mui.toast('处理失败!');
			}
		});

	}

	//	alert(set_msg)

	set_msg();

	window.setInterval(set_msg, 1800);

	document.getElementById('meg').addEventListener('tap', function(e) {
		var id = localStorage.getItem('user_id');

		if(id == null) {
			mui.openWindow('../login/login.html', 'login');
			window.addEventListener('refresh', function(e) { //执行刷新
				location.reload();
			});
		}
		var input = document.getElementById('input');
		var text = input.value;
		if(text === '') {
			return;
		}

		//                  var count = document.getElementById('messageList');
		//                  count.innerHTML += '<a name="first"><div class="message">' +
		//                                  '<img class="avatar" src="../../img_loc/10.png" />' +
		//                                  '<div class="content">' +
		//                                  '<div class="nickname">sd<span class="time">sdsad</span>' +
		//                                  '</div>' +
		//                                  '<div class="bubble bubble_default left">' +
		//                                  '<div class="bubble_cont">' +
		//                                  '<div class="plain"><pre>'+text+'</pre>' +
		//                                  '</div></div></div></div></div></a>';
		//                              location.href = "#first";
		//                              window.location.hash = "#first";
		input.value = null;
		//                  location.href = "#first";
		//                  window.location.hash = "#first";

		mui.ajax('http://9.988lhkj.com/chat_send', {
			data: {
				user_id: id,
				to_user_id: 0,
				content: text,
			},
			dataType: 'json', //服务器返回json格式数据
			type: 'post', //HTTP请求类型
			timeout: 10000, //超时时间设置为10秒；
			headers: {
				'Content-Type': 'application/json'
			},
			success: function(data) {
				if(data.code == 200) {

				} else {
					mui.toast(data.message);
				}
			},
			error: function(xhr, type, errorThrown) {
				//异常处理；
				mui.toast('未登录!');
			}
		});
	})
})