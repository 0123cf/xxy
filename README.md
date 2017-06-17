
![image](https://0123cf.github.io/xxy/images/logo2.jpg)
# Demo
## [Live demo](https://0123cf.github.io/xxy/)

# Install

#### NPM
```
npm install xxy
```

#### SRC
```
https://0123cf.github.io/xxy/xxy.js
```
# Usage
## popup:
```js
xxy.popup('标题'，'内容,支持插入标签','左按钮文字','右按钮文字',function(e){ 
  //点击后回调： 
  //e==0 点击了左按钮，e==1 点击右按钮 
   //回调了可以继续调用自身。 
}); 
 // 支持不添加回调不添加标题文字，但是左按钮与右按钮必须成对出现
```

## alert:
```js
xxy.alert('内容',function(){
    // 回调
}); 
```
## toast:
```js
 xxy.toast('内容','消失时间[ms]');
```
## 上拉刷新，下拉加载

> * 创建Div容器 最外层的ID自定义 
> * Js实例化And配置

### DIV
```
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
```javascript
	var test= new xxy.touch()
	test.bind(Dom节点,config)
```
###### config	
```javascript
{
	//滑动 默认false 设置true开启
	move: true,
	//上拉回调
	up: backcall
	//下拉回调
	down: backcall
}
```	

###### backcall

```javascript
function(){
  ajax.get(url)
   .then(()={
      // 表示加载完成
      this.done();
  })
}
```
#### Javascript测试代码

```javascript
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


  [1]: https://0123cf.github.io/www/
  
# History record：

- 兼容了iframe在苹果的出现fiexd问题。
- 增加移动端的支持（包括ie8）[ie8里面的回调依然可用]
- 设置内容最高值，阻止冒泡，超出可滑动滚动。
- 添加alert函数
- 添加支持多指触控，上拉加载，下拉刷新。
- 添加上下拉回调

### LICENSE

MIT
