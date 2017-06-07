!function(){
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
						console.error('参数错误！--xxy');
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
					document.documentElement.style.overflow='initial';
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
					document.documentElement.style.overflow='initial';
					document.body.style.overflow='initial';
					if(e.id==done){
							callback(cs,0);			
						}
						if(e.id==cancal){
							callback(cs,1)	
						}
					}
			};
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
		touch: function xxyDown(){
			var global= {};
			xxyDown.bind(global);
			var	start=  "touchstart",
				move=  "touchmove",
				end=  "touchend";
			function core(box,config){
				var view = box.querySelector('.view'),
					inner = box.querySelector('.inner'),
					innerHeight = parseInt(window.getComputedStyle(box).height);
				inner.addEventListener(start,function(e){
					if(config.body){
						var body_= box,
							play_= false;
						!function qipao(box){
							if(box.className.indexOf('xxy-down-viewbox')!=-1){
								if(box!=body_){
									play_= true;
								}
							} else{
								if(!box||box.tagName=='BODY'){
									return false;
								}else{
									var boxParendNode=box.parentNode;
									qipao(boxParendNode);
								}
							}
						}(e.target);
						if(play_){
							return false;
						}
					}
					this.style.transitionDuration = '0ms';
					var touch = e.touche||e.touches[0],
						top = view.scrollTop,
						height = window.getComputedStyle(this).height,
						domHeight = window.parseInt(height);
					this.startTop = top;
					this.startSite = {
						y: touch.pageY
					};
					this.domHeight = domHeight;
				},false);
				inner.addEventListener(move,function(e){
					if(config.body){
						var body_= box,
							play_= false;
						!function qipao(box){
							if(box.className.indexOf('xxy-down-viewbox')!=-1){
								if(box!=body_){
									play_= true;
								}
							} else{
								if(!box||box.tagName=='BODY'){
									return false;
								}else{
									var boxParendNode=box.parentNode;
									qipao(boxParendNode);
								}
							}
						}(e.target);
						if(play_){
							return false;
						}
					}
					var touch= e.touche||e.touches[0],
						top= box.scrollTop,
						startY= this.startSite.y,
						moveY= touch.clientY;//获取当前的y轴
					if(moveY>startY){
						// 下拉到顶部执行(如下拉未松手上拉，阻止继续执行有精确度问题)
						if(top<=0){
							e.preventDefault();
							if(config.move){
								this.direction= 'down';
								var startTop= this.startTop,
									gap= moveY-startY,
									topGap= gap- this.startTop;
								this.style.transform= 'translate3d(0, '+topGap+'px, 0)';
							}
						}else{
							return false;
						}
					}else{
						var boxHeight = config.body ? window.innerHeight : innerHeight;
						// 上拉到底部执行 (滚动的距离加auto的高度等于ul总高度)
						if(top+boxHeight+1>=this.domHeight){
							e.preventDefault();
							if(config.move){
								this.direction = 'up';
								var gap = moveY-startY;
								this.style.transform = 'translate3d(0, '+gap+'px, 0)';
							}
						}else{
							return false;
						}
					}
				},false);
				inner.addEventListener(end,function(e){
					e.stopPropagation();
	//				this.parentNode.style.overflow= 'auto'
					if(this.direction){
						this.style.transitionDuration = '500ms';
						var direction = this.direction;
						if(direction=='down'){
							
						}else if(direction=='up'){
							// DOTO 上拉加载
							
						}
						this.style.transform = 'translate3d(0, 0px, 0)';
						this.direction = undefined;
					}
				},false);
			}
			return {
				bind: function(dom,obj){
					core(dom,obj);
				}
			};
		}
	}
}();

//	xxy.popup('xx')
//	xxy.popup('xx','oo');
//	xxy.popup('xx','oo','1','2');
//	xxy.popup('oo000',function(e){
//		console.log(e)
//	});
