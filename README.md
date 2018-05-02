
![image](https://0123cf.github.io/xxy/images/logo2.jpg)
# Demo
## [Live demo](https://0123cf.github.io/xxy/)

# Install

#### NPM
```
npm install xxy
```

*Tips: npm的账号密码我忘了，所以，上面的npm安装版本是很早以前的版本，大概去年的，所以大家请用github上的版本



#### SRC
```
https://0123cf.github.io/xxy/xxy.js
```
# Usage
## config:
``` js
// 配置  非必选项
var config = {
    // 蒙版不透明度 默认.5
    mask: .3,
    // 风格 分'ios'和'android' (小写) 
    skin: 'ios',
    // 动画配置项 默认false
    an: true
};
xxy.config(config);

默认一个参数的时候，是popup的配置，toast的配置需要前面加toast
xxy.config('toast', config见下面的toast介绍)
/* 
 * tips:
 * 目前只配置了ios，安卓还未添加（欢迎大家提交pr）
 */
```
##### Div Style
``` html
<style id="{{config}}"></style>
config:
    xxy-style-popup <!-- 弹窗 -->
    xxy-style-toast <!-- toast -->
    xxy-style-touch <!-- 上下拉滑动 --> 
```
## popup:
``` js
xxy.popup('标题'，'内容,支持插入标签','左按钮文字','右按钮文字',function(e){ 
  //点击后回调： 
  //e==0 点击了左按钮，e==1 点击右按钮 
   //回调了可以继续调用自身。 
}); 
 // 支持不添加回调不添加标题文字，但是左按钮与右按钮必须成对出现
 // xxy.popup('正文')
 // xxy.popup('标题', '正文')
 // xxy.popup('标题', '正文'， '左按钮', '右按钮')
 // xxy.popup('正文', 回调函数)
 // 更多规则可以自己测试， 比较弹性
```

## alert:
``` js
xxy.alert('标题','HTML','按钮文字',function(){
	console.log('回调')
})
 // xxy.alert('正文')
 // xxy.alert('标题', '正文')
 // xxy.alert('标题', '正文'， '按钮文字')
 // xxy.alert('正文', 回调函数)
 // xxy.alert('标题', '正文', 回调函数)
```
## template
#### 自定义模板内容
参数介绍
``` js
xxy.template(html内容, callback)   // callback可选， 点击后回调
//xxy.template(`
//	<div>div内容</div>
//	<off>关闭</off>
//`)
xxy.template(querySelectOr)
// xxy.template('#id')
// xxy.template('#id .class')
```
tips：
不用off的话，也可以用xxy.popupClose()关闭弹窗
在vmmv框架里面一般用了off这个标签都会红色不明标签提示，忽略即可

在vue里面的使用的例模板的例子：
``` html
<template>
      <div style="display: none">
        <div class="op-coupon-group">
            <ul>
              <li v-for="item in couponList">{{item.name}}</li>
            </ul>
            <off>关闭</off>
          </div>
        </div>
      </div>
</template>
```
``` js
xxy.template('.op-coupon-group')
```





## popupClose
代码关闭弹窗
```
xxy.popupClose()
```

## toast:

``` js
 xxy.toast('内容','消失时间[ms]');
 // xxy.toast('内容','方向（bottom, top, center）');
```

第二个参数可以是时间也可以是方向，更多复杂的操作，第二个参数是Object


``` js
xxy.toast(000, {
	exp: 500, // 消失时间
	site: 'center',  // 垂直位置
	more: { // 自定义样式
		'width': '100px',
		'border-radius': '5px',
		'background': 'rgba(255,0,0,.4)'
	}
})
```

如果一组都需要配置相同的，这时候应该使用组配置，比如regist模块需要用特定的toast

``` js
xxy.config('toast', {
	exp: 2000,
	site: 'center',
	more: {
		'width': '100px',
		'border-radius': '5px',
		'background': 'rgba(51,51,51,.5)'
	}
})
```


## 上拉刷新，下拉加载

> * 创建Div容器 最外层的ID自定义 
> * Js实例化And配置

### DIV
``` HTML
<div id="comlist" class="xxy-down-viewbox comlist">
	<div class="view" data-befor = "下拉刷新" data-after = "上拉加载" >
		<div class="inner">
			<!-- 自定义内容 -->
			<ul class="list">
				
				
			</ul>
			<!-- 自定义内容 -->
		</div>
	</div>
</div>
```
### Javascript
``` js
	var test= new xxy.touch()
	test.bind(Dom节点,config)
```
###### config	
``` js
{
	//滑动 默认false 设置true开启
	move: true,
	//上拉回调
	up: callback
	//下拉回调
	down: callback
}
```	

###### backcall

``` js
function(){
  ajax.get(url)
   .then(()={
      // 表示加载完成
      this.done();
  })
}
```
#### Javascript测试代码

``` js
var test= new xxy.touch();
	test.bind(document.querySelector('#comlist'),{
		move: true,
		up: function(){
			window.setTimeout(function(){
				this.done();
				xxy.toast('加载成功')
			}.bind(this),3000)
		},
		down: function(){
			window.setTimeout(function(){
				this.done();
				xxy.toast('刷新成功')
			}.bind(this),1000)
		}
	});	
```

## 轮播

> * 创建Div容器 最外层的ID自定义 
> * Js实例化
### DIV
``` html
<div id="banner-wrap">
    <ul>
	<li>
		<div>1</div>
	</li>
	<li>
		<div>2</div>
	</li>
	<li>
		<div>3</div>
	</li>
    </ul>
    <!-- 这里可以配置点击切换，详情看demo -->
</div>

// tip: 在virtual Dom 里面不建议使用（如果是纯图片无所谓）， 不会里面的元素操作会报错， 因为为了达到动画效果， 会复制一份html出来， 这时候虚拟dom没办法同事更新两个， 虽然可以手动添加， 但还是不建议。 请使用相关组件

```
### Javascript
``` js
// 轮播
var baner = xxy.slider()
var bConfig = {
	// 非必须
	time: 10*1000
}
baner.bind(document.querySelector("#banner-wrap"),bConfig)
// 监听gap[非必选项]
baner.on('gap',function(e){
	// 这是手指滑动的距离
	console.log(e)
})
```


  [1]: https://0123cf.github.io/www/
  
# History record：
- 弹窗蒙版兼容阻止（兼容pc和移动端） -
- 兼容了iframe在苹果的出现fiexd问题。
- 弹窗增加PC端的支持（包括ie8）
- 设置内容最高值，阻止冒泡，超出可滑动滚动。
- 添加alert函数
- 修复total width在flex的问题
- 添加支持多指触控，上拉加载，下拉刷新。
- 添加上下拉回调
- 添加弹窗关闭函数
- 添加弹窗自定义模板
- 调整流畅度，添加滑动的硬件加速
- 添加toast的自定义样式配置和全局配置（组配置）

### LICENSE

MIT
