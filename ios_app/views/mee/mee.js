mui.init({});
mui.plusReady(function() {        
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
	document.getElementById('geren').addEventListener('tap', function(e) {
		mui.openWindow('mee_xq.html', {});
	});
	document.getElementById('shezhi').addEventListener('tap', function(e) {
		mui.openWindow('mee_shezhi.html', {});
	});
	document.getElementById('tiezi').addEventListener('tap', function(e) {
		mui.openWindow('mee_tiezi.html', {});
	});
	document.getElementById('quanzi').addEventListener('tap', function(e) {
		mui.alert('暂无服务,我们会不断完善功能');
	});
	document.getElementById('shoucang').addEventListener('tap', function(e) {
		mui.openWindow('mee_shoucang.html', {});

	});

});