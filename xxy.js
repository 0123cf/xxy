
!function(){
	console.log('s')
	function id(a){return window.parent.document.getElementById(a);}
	if(!Boolean(id('xxy-addDom'))){
		try{
			var div=window.parent.document.createElement('div');
			div.id='xxy-addDom';
			window.parent.document.body.appendChild(div);
		}catch(e){
			console.error('请把脚本放到body标签下面(不是底部!)--xxy');
		}
	}
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
			document.documentElement.style.overflow='hidden';
			document.body.style.overflow='hidden';
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
							'<div class="inner_box">',
								'<div class="xxy-popup-inner">',
									'<div class="xxy-popup-title"> <i class="iconfont icon-tishi"></i> ',title,
										'<i id="xxy-popup-off" class="off icon iconfont icon-cha" id="cash-off"></i>',
									'</div>',
									'<div id="xxy_popup_inner_print" class="print">',inner,'</div>',
								'</div>',
								'<div class="or">',
									'<button class="xxy-popup-done" id="xxy-popup-done">',deon_text,'</button>',
									'<button class="xxy-popup-cancal" id="xxy-popup-cancal">',cancal_text,'</button>',
								'</div>',
							'</div>',
						'</div>',
					'</div>'
				].join('');
			//document.body.innerHTML+=c; 直接插入body会导致body dom重新生成，虽然是那个div，但是dom对象已经变了，会导致body下所有的dom事件消失
			id('xxy-addDom').innerHTML+=c;			
			document.getElementById('xxy_popup_inner_print').ontouchmove=function(e){
				e.stopPropagation();
			};
			try{
				window.parent.document.body.addEventListener('touchmove',xxy.s,false);	
			}catch(e){
				function iexx(){
					var child=id('xxy-popup-box');
					child.parentNode.removeChild(child);
					try{
						window.parent.document.body.removeEventListener('touchmove',xxy.s,false);
					}catch(e){
						//手机没有ie所以不用处理
					}
					document.documentElement.style.overflow='auto';
				}
				/*兼容ie*/
				id('xxy-popup-done').onclick=function(){
					callback(cs,0);	
					iexx();
				}
				id('xxy-popup-cancal').onclick=function(){
					callback(cs,1);	
					iexx();
				}
				return false;
			}
			id('xxy-popup-box').onclick=function(e){
				var e=e.target,
					done='xxy-popup-done',
					cancal='xxy-popup-cancal';
				if(e.id==done||e.id==cancal||e.id=='xxy-popup-off'){
					var child=id('xxy-popup-box');
					child.parentNode.removeChild(child);
					window.parent.document.body.removeEventListener('touchmove',xxy.s,false);
					document.documentElement.style.overflow='auto';
					document.body.style.overflow='auto';
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
		alert: function(a,b,f){
			var callBack=false;
			for(var i=0;i<arguments.length;i++){
				if(typeof a[i]=='function'){
					callBack=true;
				}
			}
			try{
				console.log(b.length)
				if(callBack){
					xxy.popup(a,b,f);
				}else{
					xxy.popup(a,b);
				}
			}catch(e){
				if(callBack){
					xxy.popup(a,f);
				}else{
					xxy.popup(a);
				}
			}
			var button_=window.parent.document.querySelector('#xxy-addDom #xxy-popup-cancal'),
				button_child2=window.parent.document.querySelector('#xxy-addDom .xxy-popup-box button:nth-child(1)');
				off_=id('xxy-popup-off').style.display='none';
				button_.style.width='100%';
				button_.innerHTML='确认';
				button_.style.marginLeft='auto';
				button_.style.marginRight='auto';
				button_.style.display='block';
				button_child2.style.display='none';
			//tips:不用当心下次影响popup  当元素Dom关闭后，对应的属性自然会删除。只有css才是永远的渲染。
		},
		toast: function(a,b){
			var time=(arguments[1]?b:2500)+1000;
			var c=[
				'<div id="xxy-toast" class="xxy-toast">',a,'</div>'
			].join('');
			id('xxy-addDom').innerHTML+=c;
			window.setTimeout(function(){
				var child=id('xxy-toast');
				try{
					child.style.background='rgba(0,0,0,0)';
					child.style.color='rgba(0,0,0,0)';
				}catch(e){
					child.style.display='none';
				}
			},time-2000);
			window.setTimeout(function(){
				var child=id('xxy-toast');
				child.parentNode.removeChild(child);
			},time);
		},
		XxyDown: function(){
			var	start= "touchstart",
				move= "touchmove",
				end= "touchend";
			function c(toData){
				var view= toData.dom.children[0],
				inner= view.children[0];
				view.setAttribute('data-befor','下拉刷新');
				inner.addEventListener(start,function(e){
					var touch= e.touche||e.touches[0],
						top= view.scrollTop;
					this.startTop= top;
					this.startSite={
						y: touch.pageY
					}
					view.style.transitionDuration= '0ms';
				});
				inner.addEventListener(move,function(e){
					var touch= e.touche||e.touches[0],
						top= view.scrollTop,
						moveY= touch.clientY,//获取当前的y轴
						startY= this.startSite.y;
					//下拉
					if(moveY>startY){
						if(top==0){
							var startTop= this.startTop,
								gap= moveY>startY? moveY-startY: startY-moveY,
								topGap= gap- this.startTop;
							view.style.borderTopWidth= topGap+'px';
							this.direction= 'down';
						}else{
							this.direction= 'up';
						}
					}
				});
				inner.addEventListener(end,function(e){
					if(this.direction){
						var direction= this.direction;
						view.style.transitionDuration= '500ms';
						if(direction=='down'){
							view.style.borderTopWidth= '2em';
							view.setAttribute('data-befor','正在刷新...');
							toData.befor();
						}else if(direction=='up'){
							// DOTO 上拉加载
						}
					}
				});
			}
			return {
				cc: function(dom){
					dom.forEach(c);
				},
				downLoad: function(e){
					var box= e.dom.children[0];
					box.style.borderTopWidth= '0px';
					box.setAttribute('data-befor','下拉刷新');
				}
			};
		}
	};
}();

//	xxy.popup('xx')
//	xxy.popup('xx','oo');
//	xxy.popup('xx','oo','1','2');
//	xxy.popup('oo000',function(e){
//		console.log(e)
//	});
//	var test= new xxy.XxyDown();
//	 test.cc([
//		{
//			dom: document.querySelector('#down-viewbox'),
//			befor: function(){
//				window.setTimeout(function(){
//					xx.downLoad(this);
//				}.bind(this),1000);
//			}
//		}
//	]);

