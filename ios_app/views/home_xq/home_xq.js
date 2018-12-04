mui.init();
(function($){
    $(".mui-scroll-wrapper").scroll({
          bounce: true,//滚动条是否有弹力默认是
          indicators: false, //是否显示滚动条,默认是true
    });    
})(mui);
mui.plusReady(function(){
	plus.screen.lockOrientation("portrait-primary");
	
})
//mui.plusReady(function() {        
//	plus.navigator.setStatusBarStyle("UIStatusBarStyleBlackOpaque");
//	plus.navigator.setStatusBarBackground('#705de8'); //设置状态栏的颜色				
//});