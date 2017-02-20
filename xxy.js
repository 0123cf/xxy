/**
*添加了rem，与微信简单处理，重点代码在下面匿名函数中，与上面的可完全分离
*可关闭
**/
//初始化rem
function initRem() {
	var innerWidth = window.innerWidth;
	rem = innerWidth / 7.5 + 'px';
	document.documentElement.style.fontSize = rem;
}
initRem();
//监听页面变化
window.onresize = function() {
		initRem();
}
/**
 * 禁止微信露底
 * author:谢秀岳
 */
!function(){
	document.documentElement.ontouchmove = function (e) {
	e.preventDefault();
	};
	var startX = 0, startY = 0,startTop=0;
	var initTop=document.body.getBoundingClientRect().top;
	var initHeight=document.body.getBoundingClientRect().height;
	//touchstart事件  
	function touchSatrtFunc(evt) {
	try{
	var touch = evt.touches[0]; //获取第一个触点  
	var x = Number(touch.pageX); //页面触点X坐标  
	var y = Number(touch.pageY); //页面触点Y坐标  
	var top=document.body.getBoundingClientRect().top;//原来的值
	//记录触点初始位置  
	startX = x;
	startY = y;
		startTop=top;
	} catch (e) {
	console.log('touchSatrtFunc：' + e.message);
	}
	}
	document.body.addEventListener('touchstart', touchSatrtFunc, false);
	document.body.style.position='fixed';
	document.body.addEventListener('touchmove',function(e){
	var y=e.targetTouches[0].clientY,//获取的y轴
		gap=y>startY?y-startY:startY-y;
	var addNumber;
	var getTop=document.body.getBoundingClientRect().top;
	if(y>startY){//下
		addNumber=startTop+gap;
		if(addNumber>=initTop)return false;
	}else{
		addNumber=startTop-gap;
		if(~getTop>=initHeight-(window.screen.availHeight-100))return false;
	}
	this.style.top=addNumber+'px';
	});
}();


		!function(){
			var div=window.parent.document.createElement('div');
			div.id='xxy-addDom';
			window.parent.document.body.appendChild(div);
			function id(a){return window.parent.document.getElementById(a);}
			if(typeof window.parent.xxy=='object'){
				console.error('请关闭xxy的全局对象--xxy');
				return false;
			}
			window.xxy={
				s:function(e){
					e.preventDefault();
				},
				/**
				 * 
				 * @param {Object} a 提示文字
				 * @param {Object} b 内容
				 * @param {Object} d 回调函数
				 */
				popup:function(a,b,d){
					var cs=arguments,
						title='提示',
						inner='',
						deon_text='确认',
						cancal_text='取消',
						fun=false;
					function callback(a,b){
						for(var i=0;i<a.length;i++){
							if(typeof a[i]=='function'){
								a[i](b);
								break;
							}
						}
					}
					for(var i=0;i<arguments.length;i++){
						if(typeof arguments[i]=='function'){
							fun=true;
						}
					}
					if(!fun){
						if(cs.length==1){
							inner=cs[0];
						}else{
							if(cs.length==2){
								title=cs[0];
								inner=cs[1];
							}
							if(cs.length==3){
								colole.error('参数错误！--xxy');
							}
							if(cs.length==4){
								title=cs[0];
								inner=cs[1];
								deon_text=cs[2];
								cancal_text=cs[3];
							}
						}
					}else{
						if(cs.length==2){
							inner=cs[0];
						}else{
							if(cs.length==3){
								title=cs[0];
								inner=cs[1];
							}
							if(cs.length==4){
								inner=cs[0];
								deon_text=cs[1];
								cancal_text=cs[2];
							}
							if(cs.length==5){
								title=cs[0];
								inner=cs[1];
								deon_text=cs[2];
								cancal_text=cs[3];
							}
						}
					}
					var c=[
							'<div class="xxy-popup-box" id="xxy-popup-box">',
								'<div class="inner">',
									'<div class="xxy-popup-inner">',
										'<div class="xxy-popup-title"> <i class="iconfont icon-tishi"></i> ',title,
											'<i id="xxy-popup-off" class="off icon iconfont icon-cha" id="cash-off"></i>',
										'</div>',
										'<div class="print">',inner,'</div>',
									'</div>',
									'<div class="or">',
										'<button class="xxy-popup-done" id="xxy-popup-done">',deon_text,'</button>',
										'<button class="xxy-popup-cancal" id="xxy-popup-cancal">',cancal_text,'</button>',
									'</div>',
								'</div>',
							'</div>'
						].join('');
					//document.body.innerHTML+=c; 直接插入body会导致body dom重新生成，虽然是那个div，但是dom对象已经变了，会导致body下所有的dom事件消失
					id('xxy-addDom').innerHTML+=c;
					window.parent.document.body.addEventListener('touchmove',xxy.s,false);
					id('xxy-popup-box').onclick=function(e){
						var e=e.target,
							done='xxy-popup-done',
							cancal='xxy-popup-cancal';
						if(e.id==done||e.id==cancal||e.id=='xxy-popup-off'){
							var child=id('xxy-popup-box');
							child.parentNode.removeChild(child);
							window.parent.document.body.removeEventListener('touchmove',xxy.s,false);
							if(e.id==done){
								callback(cs,0);			
							}
							if(e.id==cancal){
								callback(cs,1)	
							}
						}
					};
					//if(window.navigator.userAgent.indexOf('iPhone')!=-1){
					//	//('，，，蛋疼的苹果会给fiexd的高度设置为父级窗口。');
					//}
				},
				toast:function(a,b){
					var time=(arguments[1]?b:2500)+1000;
					var c=[
						'<div id="xxy-toast" class="xxy-toast">',a,'</div>'
					].join('');
					id('xxy-addDom').innerHTML+=c;
					window.setTimeout(function(){
						var child=id('xxy-toast');
						child.style.background='rgba(0,0,0,0)';
						child.style.color='rgba(0,0,0,0)';
					},time-2000);
					window.setTimeout(function(){
						var child=id('xxy-toast');
						child.parentNode.removeChild(child);
					},time);
				}
			};
			
		}();
		
	
//	xxy.popup('xx')
//	xxy.popup('xx','oo');
//	xxy.popup('xx','oo','1','2');
//	xxy.popup('oo000',function(e){
//		console.log(e)
//	});
