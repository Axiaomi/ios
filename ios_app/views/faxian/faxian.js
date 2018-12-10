mui.init();
		mui.ready(function() {
			var slider = document.getElementById('Gallery');
			var group = slider.querySelector('.mui-slider-group');
			var items = mui('.mui-slider-item', group);
			//克隆第一个节点
			var first = items[0].cloneNode(true);
			first.classList.add('mui-slider-item-duplicate');
			//克隆最后一个节点
			var last = items[items.length - 1].cloneNode(true);
			last.classList.add('mui-slider-item-duplicate');
			//处理是否循环逻辑，若支持循环，需支持两点：
			//1、在.mui-slider-group节点上增加.mui-slider-loop类
			//2、重复增加2个循环节点，图片顺序变为：N、1、2...N、1
			var sliderApi = mui(slider).slider();

			function toggleLoop(loop) {
					if (loop) {
						group.classList.add('mui-slider-loop');
						group.insertBefore(last, group.firstChild);
						group.appendChild(first);
						sliderApi.refresh();
						sliderApi.gotoItem(0);
					} else {
						group.classList.remove('mui-slider-loop');
						group.removeChild(first);
						group.removeChild(last);
						sliderApi.refresh();
						sliderApi.gotoItem(0);
					}
				}
			
		});



