!function(){
	function id(a){return window.parent.document.getElementById(a);}
	if(!Boolean(id('xxy-addDom'))){
		try{
			var div = window.parent.document.createElement('div');
			div.id = 'xxy-addDom';
			window.parent.document.body.appendChild(div);
		}catch(e){
			console.error('请把脚本放到body标签下面(不是底部!)--xxy');
		}
	}
	if(typeof window.parent.xxy == 'object'){
		console.error('请关闭xxy的全局对象--xxy');
		return false;
	}
	window.parent.document.head.innerHTML +=  '<style>#xxy-addDom .xxy-popup-box{z-index:99;width:100%;height:100%;position:fixed;top:0;left:0;z-index:99999999;font-size:14px;overflow:hidden;background:rgba(0,0,0,.5)}#xxy-addDom .xxy-popup-box .inner{width:80%;height:0;max-width:280px;background:#fff;position:absolute;top:0;left:0;right:0;bottom:0;margin:auto;color:#646464}#xxy-addDom .xxy-popup-box .inner .inner_box{background:#fff;border:.01px solid #adadad;-webkit-transform:translateY(-50%);-moz-transform:translateY(-50%);-ms-transform:translateY(-50%);transform:translateY(-50%)}#xxy-addDom .xxy-popup-box .xxy-popup-title{width:100%;border-bottom:1px solid #E8E8E8;text-align:left;line-height:2.1em;font-size:13px;color:#646464;text-indent:.7em;background-color:#eee}#xxy-addDom .xxy-popup-box .print{padding:15px 20px 0 20px;max-height:250px;overflow:auto}#xxy-addDom .xxy-popup-box .or{width:90%;margin:0 auto}#xxy-addDom .xxy-popup-box button{border-width:0;color:#fff;width:48%;margin:1em 0;padding:.6em 0;border-radius:.4em}#xxy-addDom .xxy-popup-box .xxy-popup-done{background:#FEBB2C}#xxy-addDom .xxy-popup-box .xxy-popup-cancal{background:#eb4b27;margin-left:4%}#xxy-addDom .xxy-popup-box .off{font-size:1.3em;float:right;margin-right:.4em}#xxy-addDom .print_inner p span:nth-child(1){text-align:right}#xxy-addDom .print_inner p span:nth-child(2){text-align:center}#xxy-addDom .print_inner span{display:inline-block;width:48%}#xxy-addDom .print_inner p .important{color:#febb2c}#xxy-addDom .xxy-toast{font-size:15px;color:#fff;position:fixed;bottom:2em;background:rgba(0,0,0,.4);line-height:1.7em;padding:0 1em;border-radius:1em;left:50%;-webkit-transform:translateX(-50%) translateY(-50%);-moz-transform:translateX(-50%) translateY(-50%);-o-transform:translateX(-50%) translateY(-50%);-ms-transform:translateX(-50%) translateY(-50%);transform:translateX(-50%) translateY(-50%);-webkit-transition-property:color;-webkit-transition-duration:2s;-webkit-transition-timing-function:ease}.xxy-down-viewbox{overflow:hidden;position:relative;min-height:200px;min-width:200px;margin:auto;box-shadow:2px 2px 10px 1px rgba(0,0,0,.2);-webkit-transform:translate3d(0,0,0);-moz-transform:translate3d(0,0,0);-ms-transform:translate3d(0,0,0);transform:translate3d(0,0,0);-webkit-backface-visibility:hidden;-moz-backface-visibility:hidden;-ms-backface-visibility:hidden;backface-visibility:hidden;-webkit-perspective:1000;-moz-perspective:1000;-ms-perspective:1000;perspective:1000}.xxy-down-viewbox>div{height:100%;width:100%;overflow:auto;border:0 solid transparent;background:#eee}.xxy-down-viewbox>div:before{content:attr(data-befor);position:absolute;top:0;color:#646464;width:100%;text-align:center}.xxy-down-viewbox>div>*{background:#fff;position:relative;z-index:1}</style>';
	window.xxy = {
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
			document.documentElement.style.overflow = 'hidden';
			document.body.style.overflow = 'hidden';
			var cs = arguments,
				title = '提示',
				inner = '',
				deon_text = '确认',
				cancal_text = '取消',
				fun = false;
			function callback(a,b){
				for(var i = 0;i<a.length;i++){
					if(typeof a[i] == 'function'){
						a[i](b);
						break;
					}
				}
			}
			for(var i = 0;i<arguments.length;i++){
				if(typeof arguments[i] == 'function'){
					fun = true;
				}
			}
			if(!fun){
				if(cs.length == 1){
					inner = cs[0];
				}else{
					if(cs.length == 2){
						title = cs[0];
						inner = cs[1];
					}
					if(cs.length == 3){
						console.error('参数错误！--xxy');
					}
					if(cs.length == 4){
						title = cs[0];
						inner = cs[1];
						deon_text = cs[2];
						cancal_text = cs[3];
					}
				}
			}else{
				if(cs.length == 2){
					inner = cs[0];
				}else{
					if(cs.length == 3){
						title = cs[0];
						inner = cs[1];
					}
					if(cs.length == 4){
						inner = cs[0];
						deon_text = cs[1];
						cancal_text = cs[2];
					}
					if(cs.length == 5){
						title = cs[0];
						inner = cs[1];
						deon_text = cs[2];
						cancal_text = cs[3];
					}
				}
			}
			var c = [
					'<div class = "xxy-popup-box" id = "xxy-popup-box">',
						'<div class = "inner">',
							'<div class = "inner_box">',
								'<div class = "xxy-popup-inner">',
									'<div class = "xxy-popup-title"> <i class = "iconfont icon-tishi"></i> ',title,
										'<i id = "xxy-popup-off" class = "off icon iconfont icon-cha" id = "cash-off"></i>',
									'</div>',
									'<div id = "xxy_popup_inner_print" class = "print">',inner,'</div>',
								'</div>',
								'<div class = "or">',
									'<button class = "xxy-popup-done" id = "xxy-popup-done">',deon_text,'</button>',
									'<button class = "xxy-popup-cancal" id = "xxy-popup-cancal">',cancal_text,'</button>',
								'</div>',
							'</div>',
						'</div>',
					'</div>'
				].join('');
			id('xxy-addDom').innerHTML +=  c;			
			id('xxy_popup_inner_print').ontouchmove = function(e){
				e.stopPropagation();
			};
			try{
				window.parent.document.body.addEventListener('touchmove',xxy.s,false);	
			}catch(e){
				function iexx(){
					var child = id('xxy-popup-box');
					child.parentNode.removeChild(child);
					try{
						window.parent.document.body.removeEventListener('touchmove',xxy.s,false);
					}catch(e){
						//手机没有ie所以不用处理
					}
					document.documentElement.style.overflow = 'initial';
				}
				/*兼容ie*/
				id('xxy-popup-done').onclick = function(){
					callback(cs,0);	
					iexx();
				}
				id('xxy-popup-cancal').onclick = function(){
					callback(cs,1);	
					iexx();
				}
				return false;
			}
			id('xxy-popup-box').onclick = function(e){
				var e = e.target,
					done = 'xxy-popup-done',
					cancal = 'xxy-popup-cancal';
				if(e.id == done||e.id == cancal||e.id == 'xxy-popup-off'){
					var child = id('xxy-popup-box');
					child.parentNode.removeChild(child);
					window.parent.document.body.removeEventListener('touchmove',xxy.s,false);
					document.documentElement.style.overflow = 'initial';
					document.body.style.overflow = 'initial';
					if(e.id == done){
							callback(cs,0);			
						}
						if(e.id == cancal){
							callback(cs,1)	
						}
					}
			};
		},
		alert: function(a,b,f){
			var callBack = false;
			for(var i = 0;i<arguments.length;i++){
				if(typeof a[i] == 'function'){
					callBack = true;
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
			var button_  =  window.parent.document.querySelector('#xxy-addDom #xxy-popup-cancal'),
				button_child2 = window.parent.document.querySelector('#xxy-addDom .xxy-popup-box button:nth-child(1)');
				off_ = id('xxy-popup-off').style.display = 'none';
				button_.style.width = '100%';
				button_.innerHTML = '确认';
				button_.style.marginLeft = 'auto';
				button_.style.marginRight = 'auto';
				button_.style.display = 'block';
				button_child2.style.display = 'none';
		},
		toast: function(a,b){
			if(id('xxy-toast')){
				var removeToast = id('xxy-toast');
				removeToast.parentNode.removeChild(removeToast);
				this.toastRemveTime&&window.clearTimeout(this.toastRemveTime);
			}
			var time = (arguments[1]?b:2500)+1000,
				toast_div = document.createElement('div'),
				toast_node =document.createTextNode(a);
			toast_div.appendChild(toast_node);
			toast_div.id = "xxy-toast";
			toast_div.className = "xxy-toast";
			id('xxy-addDom').appendChild(toast_div);
			this.toastRemveTime = window.setTimeout(function(){
				var child = id('xxy-toast');
				child.parentNode.removeChild(child);
			},time);
		},
		touch: function xxyDown(){
			var global =  {};
			xxyDown.bind(global);
			var	start =   "touchstart",
				move =   "touchmove",
				end =   "touchend";
			function core(box,config){
				var view  =  box.querySelector('.view'),
					inner  =  box.querySelector('.inner'),
					innerHeight  =  parseInt(window.getComputedStyle(box).height);
				inner.addEventListener(start,function(e){
					if(config.body){
						var body_ =  box,
							play_ =  false;
						!function qipao(box){
							if(box.className.indexOf('xxy-down-viewbox') != -1){
								if(box != body_){
									play_ =  true;
								}
							} else{
								if(!box||box.tagName == 'BODY'){
									return false;
								}else{
									var boxParendNode = box.parentNode;
									qipao(boxParendNode);
								}
							}
						}(e.target);
						if(play_){
							return false;
						}
					}
					this.style.transitionDuration  =  '0ms';
					var touch  =  e.touche||e.touches[0],
						top  =  view.scrollTop,
						height  =  window.getComputedStyle(this).height,
						domHeight  =  window.parseInt(height);
					this.startTop  =  top;
					this.startSite  =  {
						y: touch.pageY
					};
					this.domHeight  =  domHeight;
				},false);
				inner.addEventListener(move,function(e){
					if(config.body){
						var body_ =  box,
							play_ =  false;
						!function qipao(box){
							if(box.className.indexOf('xxy-down-viewbox') != -1){
								if(box != body_){
									play_ =  true;
								}
							} else{
								if(!box||box.tagName == 'BODY'){
									return false;
								}else{
									var boxParendNode = box.parentNode;
									qipao(boxParendNode);
								}
							}
						}(e.target);
						if(play_){
							return false;
						}
					}
					var touch =  e.touche||e.touches[0],
						top =  box.scrollTop,
						startY =  this.startSite.y,
						moveY =  touch.clientY;//获取当前的y轴
					if(moveY>startY){
						// 下拉到顶部执行(如下拉未松手上拉，阻止继续执行有精确度问题)
						if(top <= 0){
							e.preventDefault();
							if(config.move){
								this.direction =  'down';
								var startTop =  this.startTop,
									gap =  moveY-startY,
									topGap =  gap- this.startTop;
								this.style.transform =  'translate3d(0, '+topGap+'px, 0)';
							}
						}else{
							return false;
						}
					}else{
						var boxHeight  =  config.body ? window.innerHeight : innerHeight;
						// 上拉到底部执行 (滚动的距离加auto的高度等于ul总高度)
						if(top+boxHeight+1 >= this.domHeight){
							e.preventDefault();
							if(config.move){
								this.direction  =  'up';
								var gap  =  moveY-startY;
								this.style.transform  =  'translate3d(0, '+gap+'px, 0)';
							}
						}else{
							return false;
						}
					}
				},false);
				inner.addEventListener(end,function(e){
					e.stopPropagation();
	//				this.parentNode.style.overflow =  'auto'
					if(this.direction){
						this.style.transitionDuration  =  '500ms';
						var direction  =  this.direction;
						if(direction == 'down'){
							
						}else if(direction == 'up'){
							// DOTO 上拉加载
							
						}
						this.style.transform  =  'translate3d(0, 0px, 0)';
						this.direction  =  undefined;
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
