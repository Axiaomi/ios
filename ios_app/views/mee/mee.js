mui.init({});
mui.plusReady(function() {      
	window.addEventListener('refresh', function(e) { //执行刷新
		location.reload();
	});  
	plus.navigator.setStatusBarStyle("UIStatusBarStyleBlackOpaque");
	plus.navigator.setStatusBarBackground('#705de8'); //设置状态栏的颜色	
	document.getElementById('tabbar-with-map').addEventListener('tap', function(e) {
		plus.cache.calculate(function(size) {
			console.log(size)
			sizeCache = size;
			mui.confirm("您目前的系统缓存为" + parseFloat(sizeCache / (1024 * 1024)).toFixed(2) + "M？", "清除缓存", ["确认", "取消"], function(e) {
				if(e.index == 1) {} else {
					plus.cache.clear(function() {
						alert("缓存清除完毕")
					});
				}
			});

		});
	})
	plus.cache.calculate(function(size) {
		console.log(size)
		sizeCache = size;
		var mm = document.getElementById('mm')
		mm.innerHTML = parseFloat(sizeCache / (1024 * 1024)).toFixed(2) + 'M'

	});
	document.getElementById('kf_01').addEventListener('tap', function() {
		console.info(kf_01);
		if(plus.os.name == "Android") {
			var main = plus.android.runtimeMainActivity();
			var Intent = plus.android.importClass('android.content.Intent');
			var Uri = plus.android.importClass('android.net.Uri');
			mui.ajax('http://9.988lhkj.com/get_qq', {
				data: {},
				type: 'get',
				timeout: 10000,
				dataType: 'json',
				success: function(data) {
					console.debug(JSON.stringify(data));
					var intent = new Intent(Intent.ACTION_VIEW, Uri.parse('mqqwpa://im/chat?chat_type=crm&uin=' + data.data.qq + ''));

					main.startActivity(intent);
				},
			})
		}
	})

	document.getElementById("gengx").addEventListener('tap', function() {
		var btnArray = ['暂无更新'];

		mui.confirm('已是最新版本', '', btnArray, function(e) {
			if(e.index == 1) {
				//info.innerText = '稍后更新';
			} else {
				//info.innerText = '确认更新'
			}
		}, 'div');
		//重新设置title为图片
		var titlePic = document.getElementsByClassName("mui-popup-title");
		console.log(titlePic);
	});

	document.getElementById('wo').addEventListener('tap', function(e) {
		mui.alert('为用户提供最新最好的质询,app有动态图为用户提供观赏性,每天实时更新,我们会不断完善功能');
	});

	(function($, doc) {
		window.addEventListener('refresh', function(e) {
			//执行刷新
			console.log("刷新父页面")
			location.reload();
		});
	})(mui, document);

	var geren = document.getElementById('geren');
	var username = localStorage.getItem('username');
	var user_id = localStorage.getItem('user_id');
	var img = localStorage.getItem('img');
	var nickname = localStorage.getItem('nickname');
	var imgdata = localStorage.getItem("imgdata"); //获取

	if(username && user_id) {
		//		alert(img)
		geren.innerHTML = '<div class="header_touxiang">' +
//			'<img class="header_img" src="' + img + ' "/>' +
					'<img class="header_img" src="../../public/img/timg1.jpg"/>'+
			'</div>' +
			'<div class="header_mingzi">' +
			'<p>' + nickname + '</p>' +
			'<p>' + username + '</p>' +
			'</div>' +
			'<div class="mui-icon mui-icon-arrowright header_jiao">' +
			'</div>';
	}
	document.getElementById('geren').addEventListener('tap', function(e) {
		if(!username || !user_id) {
			mui.openWindow('../login/login.html', 'login');
			return;
		}
		mui.openWindow('mee_xq.html', 'mee_xq');
		return;
	});

	document.getElementById('shezhi').addEventListener('tap', function(e) {
		mui.openWindow('mee_shezhi.html', {});
	});
	document.getElementById('tiezi').addEventListener('tap', function(e) {

		var id = localStorage.getItem('user_id');
		if(id == null) {
			mui.openWindow('../login/login.html', 'login');
			return
		} else {
			mui.openWindow('mee_tiezi.html', {});

		}

	});
	document.getElementById('quanzi').addEventListener('tap', function(e) {
		var id = localStorage.getItem('user_id');
		if(id == null) {
			mui.openWindow('../login/login.html', 'login');
			return
		} else {
			mui.alert('暂无服务,我们会不断完善功能');

		}

	});
	document.getElementById('shoucang').addEventListener('tap', function(e) {

		var id = localStorage.getItem('user_id');
		if(id == null) {
			mui.openWindow('../login/login.html', 'login');
			return
		} else {
			mui.openWindow('mee_shoucang.html', {});

		}

	});

});