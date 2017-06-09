
最轻量的移动端弹窗插件。<br />
Dome site: https://0123cf.github.io/www/
<br />
<p>
 用法：1,引入xxy.css
 &nbsp;2，引入xxy.js
 在线连接：<br />
 <xmp>
  <link rel="stylesheet" href="https://0123cf.github.io/www/xxy.css">
  </xmp>
  <br />
  <xmp><script src="https://0123cf.github.io/www/xxy.js"></script>
  </xmp>
</p>
<br />
<h3>xxy.popup:</h3>xxy.popup('标题'，'内容,支持插入标签','左按钮文字','右按钮文字',function(e){
<br /> &nbsp; //点击后回调：
 <br />&nbsp;  //e==0 点击了左按钮，e==1 点击右按钮
<br /> &nbsp;  //回调了可以继续调用自身。
<br /> });
<br /> &nbsp; <span style="color:rgb(200,30,0)">tips:</span>
<p>支持不添加回调不添加标题文字，但是左按钮与右按钮必须成对出现</p>
<br />

<h3>xxy.alert:</h3>	xxy.alert('22',function(){
<br /> &nbsp;		 回调	
<br />});
<br />
<h3>xxy.toast:</h3>&nbsp;xxy.toast('内容','消失时间[ms]');
<h3>new xxy.XxyDown()</h3>
<p>test.cc([</p>
  <p>{</p>
   dom: Dom,
   befor: 回调
  <p>}</p>
<p>]);</p>

<HR />
<div>
 History record：<br />
 <ol> 
   <li>兼容了iframe在苹果的出现fiexd问题。</li>
   <li>增加移动端的支持（包括ie8）[ie8里面的回调依然可用]</li>
   <li>设置内容最高值，接触冒泡，超出可滑动滚动。</li>
   <li>添加alert函数</li>
   <li>添加下拉刷新，用法看dome</li>
 </ol>
 <br />
 <p>Tips:</p>
 <br />1:有时候我们自己封装，或者别的弹窗插件，在使用后发现有后遗症，当弹窗消失的时候，除了委托事件等特殊事件，onclick都不能用了。
 <br />xxy.js完美解决了这个问题。
 <br /> 2:关于获取弹窗的值问题：
 <p>由于点确认后就关闭了整个dom层，所以这时候无法通过dom去获取值。</p>
 <p>然后这时候很多人喜欢修改dom关闭的时间，这样的话虽然可以实现，但是需要验证的时候就非常麻烦，代码变得很复杂。</p>
 <p>我推荐一个写法：给input或者textbox等标签添加change，例子请移动到dom site</p>
</div>
