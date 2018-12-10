
mui.init({
	pullRefresh: {
		container: '#pullrefresh',
		down: {
			style: 'circle',
			height:'100px',//可选,默认50px.下拉刷新控件的高度,
		    range:'100px', //可选 默认100px,控件可下拉拖拽的范围
		    offset:'0px',
			callback: pulldownRefresh,
			auto: true,
		},
		up: {
			
//			auto: true,
			contentrefresh: '正在加载...',
			callback: pullupRefresh
		}
	}
});
mui.plusReady(function() {
	plus.webview.currentWebview().setStyle({
		scrollIndicator: 'none'
	});
});

var count = 0;
var page = 1;
function pullupRefresh() {

	setTimeout(function() {
		mui('#pullrefresh').pullRefresh().endPullup((++count > 2)); //参数为true代表没有更多数据了。
		//		var page = 1;

		mui.ajax('http://9.988lhkj.com/life_content', {
			data: {
				page: page,
				pageSize: 15,
				class_id: 1,
			},
			dataType: 'json',
			type: 'post', //HTTP请求类型
			timeout: 10000,
			headers: {
				'Content-Type': 'application/json'
			},
			success: function(data) {
				//var data = JSON.parse(data);;
				//获得服务器响应
				//->判断
				//console.debug(JSON.stringify(data));
				console.info(JSON.stringify(data))
				var table = document.body.querySelector('.ul_sh');
				var cells = document.body.querySelectorAll('.mui-table-view-cell');
				var newCount = cells.length > 0 ? 5 : 20; //首次加载20条，满屏
				//var j = 0;
				for(var i = cells.length, len = i + newCount; i < len; i++) {
					if(!data.data[i]) {
//						mui.toast('没有信息了');
						return
					}
					var li = document.createElement('li');
					li.className = 'mui-table-view-cell';
					li.dataset.id = data.data[i].id;
					//j = j + 1;
					if(data.data[i].images.length < 7) {
						li.innerHTML = '<div class="nr2">' +
							'<div class="nr2_bt">' +
							'<h4 class="">' + data.data[i].title + '</h4>' +
							'<div class="nr_wei">' +
							'<span id="">' + data.data[i].author + '</span>' +
							'<span id="">' + data.data[i].time + '</span>' +
							'</div>' +
							'</div>' +
							'<div class="nr_img">' +
							'<img  style="height: 100px !important;" src="' + data.data[i].images[0] + '" />' +
							'</div>' +
							'</div>';
					} else {
						li.innerHTML = '<div class="nr">' +
							'<h4 class="">' +
							'' + data.data[i].title + '' +
							'	</h4>' +
							'<div class="nr_img">' +
							'<img  style="height: 70px !important;" src="' + data.data[i].images[2] + '" />' +
							'<img  style="height: 70px !important;" src="' + data.data[i].images[3] + '" />' +
							'<img  style="height: 70px !important;" src="' + data.data[i].images[4] + '" />' +
							'</div>' +
							'<div class="nr_wei">' +
							'<span id="">' +
							'' + data.data[i].author + '' +
							'</span>' +
							'<span id="">' +
							'' + data.data[i].time + '' +
							'	</span>' +
							'	</div>' +
							'</div>';
					}
					table.appendChild(li);
				}
				page = page + 1;
			},

		}, 1500);

		//				22222222222222
		//		var page = 1;
		mui.ajax('http://9.988lhkj.com/life_content', {
			data: {
				page: page,
				pageSize: 15,
				class_id: 2,
			},
			dataType: 'json',
			type: 'post', //HTTP请求类型
			timeout: 10000,
			headers: {
				'Content-Type': 'application/json'
			},
			success: function(data) {
				//			var data = JSON.parse(data);;
				//获得服务器响应
				//->判断
				//							console.debug(JSON.stringify(data));
				console.info(JSON.stringify(data))

				var table = document.body.querySelector('.ul_yl');
				var cells = document.body.querySelectorAll('.mui-table-view-cell');
				var newCount = cells.length > 0 ? 5 : 20; //首次加载20条，满屏
				//							var j = 0;
				for(var i = cells.length, len = i + newCount; i < len; i++) {
					if(!data.data[i]) {
//						mui.toast('没有信息了');
						return
					}
					var li = document.createElement('li');
					li.className = 'mui-table-view-cell';
					li.dataset.id = data.data[i].id;

					//								j = j + 1;
					if(data.data[i].images.length < 7) {
						li.innerHTML = '<div class="nr2">' +
							'<div class="nr2_bt">' +
							'<h4 class="">' + data.data[i].title + '</h4>' +
							'<div class="nr_wei">' +
							'<span id="">' + data.data[i].author + '</span>' +
							'<span id="">' + data.data[i].time + '</span>' +
							'</div>' +
							'</div>' +
							'<div class="nr_img">' +
							'<img  style="height: 100px !important;" src="' + data.data[i].images[0] + '" />' +
							'</div>' +
							'</div>';
					} else {
						li.innerHTML = '<div class="nr">' +
							'<h4 class="">' +
							'' + data.data[i].title + '' +
							'	</h4>' +
							'<div class="nr_img">' +
							'<img  style="height: 70px !important;" src="' + data.data[i].images[2] + '" />' +
							'<img  style="height: 70px !important;" src="' + data.data[i].images[3] + '" />' +
							'<img  style="height: 70px !important;" src="' + data.data[i].images[4] + '" />' +
							'</div>' +
							'<div class="nr_wei">' +
							'<span id="">' +
							'' + data.data[i].author + '' +
							'</span>' +
							'<span id="">' +
							'' + data.data[i].time + '' +
							'	</span>' +
							'	</div>' +
							'</div>';
					}
					table.appendChild(li);
				}
				page = page + 1;
			},

		}, 1500);

		//				333333333
		//		var page = 1;

		mui.ajax('http://9.988lhkj.com/life_content', {
			data: {
				page: page,
				pageSize: 15,
				class_id: 3,
			},
			dataType: 'json',
			type: 'post', //HTTP请求类型
			timeout: 10000,
			headers: {
				'Content-Type': 'application/json'
			},
			success: function(data) {
				//			var data = JSON.parse(data);;
				//获得服务器响应
				//->判断
				//							console.debug(JSON.stringify(data));
				console.info(JSON.stringify(data))

				var table = document.body.querySelector('.ul_keji');
				var cells = document.body.querySelectorAll('.mui-table-view-cell');
				var newCount = cells.length > 0 ? 5 : 20; //首次加载20条，满屏
				//							var j = 0;
				for(var i = cells.length, len = i + newCount; i < len; i++) {
					if(!data.data[i]) {
//						mui.toast('没有信息了');
						return
					}
					var li = document.createElement('li');
					li.className = 'mui-table-view-cell';
					li.dataset.id = data.data[i].id;

					//								j = j + 1;
					if(data.data[i].images.length < 7) {
						li.innerHTML = '<div class="nr2">' +
							'<div class="nr2_bt">' +
							'<h4 class="">' + data.data[i].title + '</h4>' +
							'<div class="nr_wei">' +
							'<span id="">' + data.data[i].author + '</span>' +
							'<span id="">' + data.data[i].time + '</span>' +
							'</div>' +
							'</div>' +
							'<div class="nr_img">' +
							'<img  style="height: 100px !important;" src="' + data.data[i].images[0] + '" />' +
							'</div>' +
							'</div>';
					} else {
						li.innerHTML = '<div class="nr">' +
							'<h4 class="">' +
							'' + data.data[i].title + '' +
							'	</h4>' +
							'<div class="nr_img">' +
							'<img  style="height: 70px !important;" src="' + data.data[i].images[2] + '" />' +
							'<img  style="height: 70px !important;" src="' + data.data[i].images[3] + '" />' +
							'<img  style="height: 70px !important;" src="' + data.data[i].images[4] + '" />' +
							'</div>' +
							'<div class="nr_wei">' +
							'<span id="">' +
							'' + data.data[i].author + '' +
							'</span>' +
							'<span id="">' +
							'' + data.data[i].time + '' +
							'	</span>' +
							'	</div>' +
							'</div>';
					}
					table.appendChild(li);
				}
				page = page + 1;
			},

		}, 1500);

		//				44444444
		//		var page = 1

		mui.ajax('http://9.988lhkj.com/life_content', {
			data: {
				page: page,
				pageSize: 15,
				class_id: 4,
			},
			dataType: 'json',
			type: 'post', //HTTP请求类型
			timeout: 10000,
			headers: {
				'Content-Type': 'application/json'
			},
			success: function(data) {
				//			var data = JSON.parse(data);;
				//获得服务器响应
				//->判断
				//							console.debug(JSON.stringify(data));
				console.info(JSON.stringify(data))

				var table = document.body.querySelector('.ul_ss');
				var cells = document.body.querySelectorAll('.mui-table-view-cell');
				var newCount = cells.length > 0 ? 5 : 20; //首次加载20条，满屏
				//							var j = 0;
				for(var i = cells.length, len = i + newCount; i < len; i++) {
					if(!data.data[i]) {
//						mui.toast('没有信息了');
						return
					}
					var li = document.createElement('li');
					li.className = 'mui-table-view-cell';
					li.dataset.id = data.data[i].id;

					//								j = j + 1;
					if(data.data[i].images.length < 7) {
						li.innerHTML = '<div class="nr2">' +
							'<div class="nr2_bt">' +
							'<h4 class="">' + data.data[i].title + '</h4>' +
							'<div class="nr_wei">' +
							'<span id="">' + data.data[i].author + '</span>' +
							'<span id="">' + data.data[i].time + '</span>' +
							'</div>' +
							'</div>' +
							'<div class="nr_img">' +
							'<img  style="height: 100px !important;" src="' + data.data[i].images[0] + '" />' +
							'</div>' +
							'</div>';
					} else {
						li.innerHTML = '<div class="nr">' +
							'<h4 class="">' +
							'' + data.data[i].title + '' +
							'	</h4>' +
							'<div class="nr_img">' +
							'<img  style="height: 70px !important;" src="' + data.data[i].images[2] + '" />' +
							'<img  style="height: 70px !important;" src="' + data.data[i].images[3] + '" />' +
							'<img  style="height: 70px !important;" src="' + data.data[i].images[4] + '" />' +
							'</div>' +
							'<div class="nr_wei">' +
							'<span id="">' +
							'' + data.data[i].author + '' +
							'</span>' +
							'<span id="">' +
							'' + data.data[i].time + '' +
							'	</span>' +
							'	</div>' +
							'</div>';
					}
					table.appendChild(li);
				}
				page = page + 1;
			},

		}, 1500);

		//				5555555555
		//			var page = 1

		mui.ajax('http://9.988lhkj.com/life_content', {
			data: {
				page: page,
				pageSize: 15,
				class_id: 5,
			},
			dataType: 'json',
			type: 'post', //HTTP请求类型
			timeout: 10000,
			headers: {
				'Content-Type': 'application/json'
			},
			success: function(data) {
				//			var data = JSON.parse(data);;
				//获得服务器响应
				//->判断
				//							console.debug(JSON.stringify(data));
				console.info(JSON.stringify(data))

				var table = document.body.querySelector('.ul_ly');
				var cells = document.body.querySelectorAll('.mui-table-view-cell');
				var newCount = cells.length > 0 ? 5 : 20; //首次加载20条，满屏
				//							var j = 0;
				for(var i = cells.length, len = i + newCount; i < len; i++) {
					if(!data.data[i]) {
//						mui.toast('没有信息了');
						return
					}
					var li = document.createElement('li');
					li.className = 'mui-table-view-cell';
					li.dataset.id = data.data[i].id;

					//								j = j + 1;
					if(data.data[i].images.length < 7) {
						li.innerHTML = '<div class="nr2">' +
							'<div class="nr2_bt">' +
							'<h4 class="">' + data.data[i].title + '</h4>' +
							'<div class="nr_wei">' +
							'<span id="">' + data.data[i].author + '</span>' +
							'<span id="">' + data.data[i].time + '</span>' +
							'</div>' +
							'</div>' +
							'<div class="nr_img">' +
							'<img  style="height: 100px !important;" src="' + data.data[i].images[0] + '" />' +
							'</div>' +
							'</div>';
					} else {
						li.innerHTML = '<div class="nr">' +
							'<h4 class="">' +
							'' + data.data[i].title + '' +
							'	</h4>' +
							'<div class="nr_img">' +
							'<img  style="height: 70px !important;" src="' + data.data[i].images[2] + '" />' +
							'<img  style="height: 70px !important;" src="' + data.data[i].images[3] + '" />' +
							'<img  style="height: 70px !important;" src="' + data.data[i].images[4] + '" />' +
							'</div>' +
							'<div class="nr_wei">' +
							'<span id="">' +
							'' + data.data[i].author + '' +
							'</span>' +
							'<span id="">' +
							'' + data.data[i].time + '' +
							'	</span>' +
							'	</div>' +
							'</div>';
					}
					table.appendChild(li);
				}
				page = page + 1;
			},

		}, 1500);

		//			6666
		//			var page = 1
		mui.ajax('http://9.988lhkj.com/life_content', {
			data: {
				page: page,
				pageSize: 15,
				class_id: 6,
			},
			dataType: 'json',
			type: 'post', //HTTP请求类型
			timeout: 10000,
			headers: {
				'Content-Type': 'application/json'
			},
			success: function(data) {
				//			var data = JSON.parse(data);;
				//获得服务器响应
				//->判断
				//							console.debug(JSON.stringify(data));
				console.info(JSON.stringify(data))

				var table = document.body.querySelector('.ul_qc');
				var cells = document.body.querySelectorAll('.mui-table-view-cell');
				var newCount = cells.length > 0 ? 5 : 20; //首次加载20条，满屏
				//							var j = 0;
				for(var i = cells.length, len = i + newCount; i < len; i++) {
					if(!data.data[i]) {
//						mui.toast('没有信息了');
						return
					}
					var li = document.createElement('li');
					li.className = 'mui-table-view-cell';
					li.dataset.id = data.data[i].id;

					//								j = j + 1;
					if(data.data[i].images.length < 7) {
						li.innerHTML = '<div class="nr2">' +
							'<div class="nr2_bt">' +
							'<h4 class="">' + data.data[i].title + '</h4>' +
							'<div class="nr_wei">' +
							'<span id="">' + data.data[i].author + '</span>' +
							'<span id="">' + data.data[i].time + '</span>' +
							'</div>' +
							'</div>' +
							'<div class="nr_img">' +
							'<img  style="height: 100px !important;" src="' + data.data[i].images[0] + '" />' +
							'</div>' +
							'</div>';
					} else {
						li.innerHTML = '<div class="nr">' +
							'<h4 class="">' +
							'' + data.data[i].title + '' +
							'	</h4>' +
							'<div class="nr_img">' +
							'<img  style="height: 70px !important;" src="' + data.data[i].images[2] + '" />' +
							'<img  style="height: 70px !important;" src="' + data.data[i].images[3] + '" />' +
							'<img  style="height: 70px !important;" src="' + data.data[i].images[4] + '" />' +
							'</div>' +
							'<div class="nr_wei">' +
							'<span id="">' +
							'' + data.data[i].author + '' +
							'</span>' +
							'<span id="">' +
							'' + data.data[i].time + '' +
							'	</span>' +
							'	</div>' +
							'</div>';
					}
					table.appendChild(li);
				}
				page = page + 1;
			},

		}, 1500);

	});
}
page = page + 1;
var page = 1

function addData() {

	mui.ajax('http://9.988lhkj.com/life_content', {
		data: {
			page: page,
			pageSize: 15,
			class_id: 1,
		},
		dataType: 'json',
		type: 'post', //HTTP请求类型
		timeout: 10000,
		headers: {
			'Content-Type': 'application/json'
		},

		success: function(data) {
			//			//			var data = JSON.parse(data);;
			//获得服务器响应
			//->判断
			var table = document.body.querySelector('.ul_sh');
			var cells = document.body.querySelectorAll('.mui-table-view-cell');
			var o = 0;
			for(var i = cells.length, len = i + 5; i < len; i++) {
				console.info(i);
				var li = document.createElement('li');
				//							alert(len)
				li.className = 'mui-table-view-cell';

				li.dataset.id = data.data[o].id;
				if(data.data[o].thumb=='') {	
					li.innerHTML = '<div class="nr2">' +
						'<div class="nr2_bt">' +
						'<h4 class="">' + data.data[o].title + '</h4>' +
						'<div class="nr_wei">' +
						'<span id="">' + data.data[o].author + '</span>' +
						'<span id="">' + data.data[o].time + '</span>' +
						'</div>' +
						'</div>' +
						'<div class="nr_img">' +
						'<img  style="height: 100px !important;" src="../../public/img/01.jpg" />' +
						'</div>' +
						'</div>';	
				
				} else if(data.data[o].images.length < 7){
						li.innerHTML = '<div class="nr2">' +
						'<div class="nr2_bt">' +
						'<h4 class="">' + data.data[o].title + '</h4>' +
						'<div class="nr_wei">' +
						'<span id="">' + data.data[o].author + '</span>' +
						'<span id="">' + data.data[o].time + '</span>' +
						'</div>' +
						'</div>' +
						'<div class="nr_img">' +
						'<img  style="height: 100px !important;" src="' + data.data[o].images[0] + '" />' +
						'</div>' +
						'</div>';
				}else{
					li.innerHTML = '<div class="nr">' +
						'<h4 class="">' +
						'' + data.data[o].title + '' +
						'	</h4>' +
						'<div class="nr_img">' +
						'<img  style="height: 70px !important;" src="' + data.data[o].images[2] + '" />' +
						'<img  style="height: 70px !important;" src="' + data.data[o].images[3] + '" />' +
						'<img  style="height: 70px !important;" src="' + data.data[o].images[4] + '" />' +
						'</div>' +
						'<div class="nr_wei">' +
						'<span id="">' +
						'' + data.data[o].author + '' +
						'</span>' +
						'<span id="">' +
						'' + data.data[o].time + '' +
						'	</span>' +
						'	</div>' +
						'</div>';
				}
				//下拉刷新，新纪录插到最前面；
				table.insertBefore(li, table.firstChild);
				o = o + 1;
			}
			page = page + 1;

		},

	});

	//			222222222222

	mui.ajax('http://9.988lhkj.com/life_content', {
		data: {
			page: page,
			pageSize: 15,
			class_id: 2,
		},
		dataType: 'json',
		type: 'post', //HTTP请求类型
		timeout: 10000,
		headers: {
			'Content-Type': 'application/json'
		},

		success: function(data) {
			//			//			var data = JSON.parse(data);;;
			//获得服务器响应
			//->判断
			var table = document.body.querySelector('.ul_yl');
			var cells = document.body.querySelectorAll('.mui-table-view-cell');
			var o = 0;
			for(var i = cells.length, len = i + 5; i < len; i++) {
				console.info(i);
				var li = document.createElement('li');
				//							alert(len)
				li.className = 'mui-table-view-cell';

				li.dataset.id = data.data[o].id;
				if(data.data[o].thumb=='') {	
					li.innerHTML = '<div class="nr2">' +
						'<div class="nr2_bt">' +
						'<h4 class="">' + data.data[o].title + '</h4>' +
						'<div class="nr_wei">' +
						'<span id="">' + data.data[o].author + '</span>' +
						'<span id="">' + data.data[o].time + '</span>' +
						'</div>' +
						'</div>' +
						'<div class="nr_img">' +
						'<img  style="height: 100px !important;" src="../../public/img/01.jpg" />' +
						'</div>' +
						'</div>';	
				
				} else if(data.data[o].images.length < 7){
						li.innerHTML = '<div class="nr2">' +
						'<div class="nr2_bt">' +
						'<h4 class="">' + data.data[o].title + '</h4>' +
						'<div class="nr_wei">' +
						'<span id="">' + data.data[o].author + '</span>' +
						'<span id="">' + data.data[o].time + '</span>' +
						'</div>' +
						'</div>' +
						'<div class="nr_img">' +
						'<img  style="height: 100px !important;" src="' + data.data[o].images[0] + '" />' +
						'</div>' +
						'</div>';
				}else{
					li.innerHTML = '<div class="nr">' +
						'<h4 class="">' +
						'' + data.data[o].title + '' +
						'	</h4>' +
						'<div class="nr_img">' +
						'<img  style="height: 70px !important;" src="' + data.data[o].images[2] + '" />' +
						'<img  style="height: 70px !important;" src="' + data.data[o].images[3] + '" />' +
						'<img  style="height: 70px !important;" src="' + data.data[o].images[4] + '" />' +
						'</div>' +
						'<div class="nr_wei">' +
						'<span id="">' +
						'' + data.data[o].author + '' +
						'</span>' +
						'<span id="">' +
						'' + data.data[o].time + '' +
						'	</span>' +
						'	</div>' +
						'</div>';
				}
				//下拉刷新，新纪录插到最前面；
				table.insertBefore(li, table.firstChild);
				o = o + 1;
			}

		},

	});

	//			3333333333
	mui.ajax('http://9.988lhkj.com/life_content', {
		data: {
			page: page,
			pageSize: 15,
			class_id: 3,
		},
		dataType: 'json',
		type: 'post', //HTTP请求类型
		timeout: 10000,
		headers: {
			'Content-Type': 'application/json'
		},

		success: function(data) {
			//			//			var data = JSON.parse(data);;;
			//获得服务器响应
			//->判断
			var table = document.body.querySelector('.ul_keji');
			var cells = document.body.querySelectorAll('.mui-table-view-cell');
			var o = 0;
			for(var i = cells.length, len = i + 5; i < len; i++) {
				console.info(i);
				var li = document.createElement('li');
				//							alert(len)
				li.className = 'mui-table-view-cell';

				li.dataset.id = data.data[o].id;
				if(data.data[o].thumb=='') {	
					li.innerHTML = '<div class="nr2">' +
						'<div class="nr2_bt">' +
						'<h4 class="">' + data.data[o].title + '</h4>' +
						'<div class="nr_wei">' +
						'<span id="">' + data.data[o].author + '</span>' +
						'<span id="">' + data.data[o].time + '</span>' +
						'</div>' +
						'</div>' +
						'<div class="nr_img">' +
						'<img  style="height: 100px !important;" src="../../public/img/01.jpg" />' +
						'</div>' +
						'</div>';	
				
				} else if(data.data[o].images.length < 7){
						li.innerHTML = '<div class="nr2">' +
						'<div class="nr2_bt">' +
						'<h4 class="">' + data.data[o].title + '</h4>' +
						'<div class="nr_wei">' +
						'<span id="">' + data.data[o].author + '</span>' +
						'<span id="">' + data.data[o].time + '</span>' +
						'</div>' +
						'</div>' +
						'<div class="nr_img">' +
						'<img  style="height: 100px !important;" src="' + data.data[o].images[0] + '" />' +
						'</div>' +
						'</div>';
				}else{
					li.innerHTML = '<div class="nr">' +
						'<h4 class="">' +
						'' + data.data[o].title + '' +
						'	</h4>' +
						'<div class="nr_img">' +
						'<img  style="height: 70px !important;" src="' + data.data[o].images[2] + '" />' +
						'<img  style="height: 70px !important;" src="' + data.data[o].images[3] + '" />' +
						'<img  style="height: 70px !important;" src="' + data.data[o].images[4] + '" />' +
						'</div>' +
						'<div class="nr_wei">' +
						'<span id="">' +
						'' + data.data[o].author + '' +
						'</span>' +
						'<span id="">' +
						'' + data.data[o].time + '' +
						'	</span>' +
						'	</div>' +
						'</div>';
				}
				//下拉刷新，新纪录插到最前面；
				table.insertBefore(li, table.firstChild);
				o = o + 1;
			}

		},

	});
	//			44444444444444
	mui.ajax('http://9.988lhkj.com/life_content', {
		data: {
			page: page,
			pageSize: 15,
			class_id: 4,
		},
		dataType: 'json',
		type: 'post', //HTTP请求类型
		timeout: 10000,
		headers: {
			'Content-Type': 'application/json'
		},

		success: function(data) {
			//			var data = JSON.parse(data);
			//获得服务器响应
			//->判断
			var table = document.body.querySelector('.ul_ss');
			var cells = document.body.querySelectorAll('.mui-table-view-cell');
			var o = 0;
			for(var i = cells.length, len = i + 5; i < len; i++) {
				console.info(i);
				var li = document.createElement('li');
				//							alert(len)
				li.className = 'mui-table-view-cell';

				li.dataset.id = data.data[o].id;
				if(data.data[o].thumb=='') {	
					li.innerHTML = '<div class="nr2">' +
						'<div class="nr2_bt">' +
						'<h4 class="">' + data.data[o].title + '</h4>' +
						'<div class="nr_wei">' +
						'<span id="">' + data.data[o].author + '</span>' +
						'<span id="">' + data.data[o].time + '</span>' +
						'</div>' +
						'</div>' +
						'<div class="nr_img">' +
						'<img  style="height: 100px !important;" src="../../public/img/01.jpg" />' +
						'</div>' +
						'</div>';	
				
				} else if(data.data[o].images.length < 7){
						li.innerHTML = '<div class="nr2">' +
						'<div class="nr2_bt">' +
						'<h4 class="">' + data.data[o].title + '</h4>' +
						'<div class="nr_wei">' +
						'<span id="">' + data.data[o].author + '</span>' +
						'<span id="">' + data.data[o].time + '</span>' +
						'</div>' +
						'</div>' +
						'<div class="nr_img">' +
						'<img  style="height: 100px !important;" src="' + data.data[o].images[0] + '" />' +
						'</div>' +
						'</div>';
				}else{
					li.innerHTML = '<div class="nr">' +
						'<h4 class="">' +
						'' + data.data[o].title + '' +
						'	</h4>' +
						'<div class="nr_img">' +
						'<img  style="height: 70px !important;" src="' + data.data[o].images[2] + '" />' +
						'<img  style="height: 70px !important;" src="' + data.data[o].images[3] + '" />' +
						'<img  style="height: 70px !important;" src="' + data.data[o].images[4] + '" />' +
						'</div>' +
						'<div class="nr_wei">' +
						'<span id="">' +
						'' + data.data[o].author + '' +
						'</span>' +
						'<span id="">' +
						'' + data.data[o].time + '' +
						'	</span>' +
						'	</div>' +
						'</div>';
				}
				//下拉刷新，新纪录插到最前面；
				table.insertBefore(li, table.firstChild);
				o = o + 1;
			}

		},

	});
	//			5555555555
	mui.ajax('http://9.988lhkj.com/life_content', {
		data: {
			page: page,
			pageSize: 15,
			class_id: 5,
		},
		dataType: 'json',
		type: 'post', //HTTP请求类型
		timeout: 10000,
		headers: {
			'Content-Type': 'application/json'
		},

		success: function(data) {
			//			var data = JSON.parse(data);
			//获得服务器响应
			//->判断
			var table = document.body.querySelector('.ul_ly');
			var cells = document.body.querySelectorAll('.mui-table-view-cell');
			var o = 0;
			for(var i = cells.length, len = i + 5; i < len; i++) {
				console.info(i);
				var li = document.createElement('li');
				//							alert(len)
				li.className = 'mui-table-view-cell';
				alert(data.data[o].thumb)
				li.dataset.id = data.data[o].id;
				if(data.data[o].thumb=='') {	
					li.innerHTML = '<div class="nr2">' +
						'<div class="nr2_bt">' +
						'<h4 class="">' + data.data[o].title + '</h4>' +
						'<div class="nr_wei">' +
						'<span id="">' + data.data[o].author + '</span>' +
						'<span id="">' + data.data[o].time + '</span>' +
						'</div>' +
						'</div>' +
						'<div class="nr_img">' +
						'<img  style="height: 100px !important;" src="../../public/img/01.jpg" />' +
						'</div>' +
						'</div>';	
				
				} else if(data.data[o].images.length < 7){
						li.innerHTML = '<div class="nr2">' +
						'<div class="nr2_bt">' +
						'<h4 class="">' + data.data[o].title + '</h4>' +
						'<div class="nr_wei">' +
						'<span id="">' + data.data[o].author + '</span>' +
						'<span id="">' + data.data[o].time + '</span>' +
						'</div>' +
						'</div>' +
						'<div class="nr_img">' +
						'<img  style="height: 100px !important;" src="' + data.data[o].images[0] + '" />' +
						'</div>' +
						'</div>';
				}else{
					li.innerHTML = '<div class="nr">' +
						'<h4 class="">' +
						'' + data.data[o].title + '' +
						'	</h4>' +
						'<div class="nr_img">' +
						'<img  style="height: 70px !important;" src="' + data.data[o].images[2] + '" />' +
						'<img  style="height: 70px !important;" src="' + data.data[o].images[3] + '" />' +
						'<img  style="height: 70px !important;" src="' + data.data[o].images[4] + '" />' +
						'</div>' +
						'<div class="nr_wei">' +
						'<span id="">' +
						'' + data.data[o].author + '' +
						'</span>' +
						'<span id="">' +
						'' + data.data[o].time + '' +
						'	</span>' +
						'	</div>' +
						'</div>';
				}
				//下拉刷新，新纪录插到最前面；
				table.insertBefore(li, table.firstChild);
				o = o + 1;
			}

		},

	});

	//6666666666
//var page=1
	mui.ajax('http://9.988lhkj.com/life_content', {
		
		
		data: {
			page: page,
			pageSize: 15,
			class_id: 6,
		},
		dataType: 'json',
		type: 'post', //HTTP请求类型
		timeout: 10000,
		headers: {
			'Content-Type': 'application/json'
		},

		success: function(data) {
			//var data = JSON.parse(data);;
			//获得服务器响应
			//->判断
			var table = document.body.querySelector('.ul_qc');
			var cells = document.body.querySelectorAll('.mui-table-view-cell');
			var o = 0;
			for(var i = cells.length, len = i + 5; i < len; i++) {
				console.info(i);
				var li = document.createElement('li');
				//							alert(len)
				li.className = 'mui-table-view-cell';

				li.dataset.id = data.data[o].id;
				if(data.data[o].thumb=='') {	
					li.innerHTML = '<div class="nr2">' +
						'<div class="nr2_bt">' +
						'<h4 class="">' + data.data[o].title + '</h4>' +
						'<div class="nr_wei">' +
						'<span id="">' + data.data[o].author + '</span>' +
						'<span id="">' + data.data[o].time + '</span>' +
						'</div>' +
						'</div>' +
						'<div class="nr_img">' +
						'<img  style="height: 100px !important;" src="../../public/img/01.jpg" />' +
						'</div>' +
						'</div>';	
				
				} else if(data.data[o].images.length < 7){
						li.innerHTML = '<div class="nr2">' +
						'<div class="nr2_bt">' +
						'<h4 class="">' + data.data[o].title + '</h4>' +
						'<div class="nr_wei">' +
						'<span id="">' + data.data[o].author + '</span>' +
						'<span id="">' + data.data[o].time + '</span>' +
						'</div>' +
						'</div>' +
						'<div class="nr_img">' +
						'<img  style="height: 100px !important;" src="' + data.data[o].images[0] + '" />' +
						'</div>' +
						'</div>';
				}else{
					li.innerHTML = '<div class="nr">' +
						'<h4 class="">' +
						'' + data.data[o].title + '' +
						'	</h4>' +
						'<div class="nr_img">' +
						'<img  style="height: 70px !important;" src="' + data.data[o].images[2] + '" />' +
						'<img  style="height: 70px !important;" src="' + data.data[o].images[3] + '" />' +
						'<img  style="height: 70px !important;" src="' + data.data[o].images[4] + '" />' +
						'</div>' +
						'<div class="nr_wei">' +
						'<span id="">' +
						'' + data.data[o].author + '' +
						'</span>' +
						'<span id="">' +
						'' + data.data[o].time + '' +
						'	</span>' +
						'	</div>' +
						'</div>';
				}
				//下拉刷新，新纪录插到最前面；
				table.insertBefore(li, table.firstChild);
				o = o + 1;
			}
		}				
	});
}
page = page + 1;
/**
 * 下拉刷新具体业务实现
 */
function pulldownRefresh() {
	setTimeout(function() {
		addData();
		mui('#pullrefresh').pullRefresh().endPulldown();
		mui.toast("为你推荐了5篇文章");
	}, 1500);
}

mui('.mui-table-view').on('tap', '.mui-table-view-cell', function(e) {
	var id = this.dataset.id;
//					alert(id)
	mui.openWindow('../home_xq/home_xq.html', id, {
		extras: {
			id: id
		}
	});
});
mui.init();

//再加入这段代码
(function($) {
	$(".mui-scroll-wrapper").scroll({
		//bounce: false,//滚动条是否有弹力默认是true
		//indicators: false, //是否显示滚动条,默认是true

	});
})(mui);
//再加入这段代码
(function($) {
	$("#sliderSegmentedControl").scroll({
		bounce: false,//滚动条是否有弹力默认是true
		indicators: false, //是否显示滚动条,默认是true
		scrollX: true,
	});
})(mui);



