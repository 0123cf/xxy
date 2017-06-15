<html>
<body>

<h2>演示地址</h2>
Dome webSite: https://0123cf.github.io/www/
<br />
<p>
 xxy.js在线连接：<br />
 https://0123cf.github.io/www/xxy.js
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

<h3>xxy.alert:</h3>	xxy.alert('22',backcall);
<br />
<h3>xxy.toast:</h3>&nbsp;xxy.toast('内容','消失时间[ms]');
<HR />
<div>
 History record：<br />
 <ol> 
   <li>兼容了iframe在苹果的出现fiexd问题。</li>
   <li>增加移动端的支持（包括ie8）[ie8里面的回调依然可用]</li>
   <li>设置内容最高值，阻止冒泡，超出可滑动滚动。</li>
   <li>添加alert函数</li>
   <li>添加支持多指触控，上拉加载，下拉刷新。</li>
   <li>添加上下拉回调</li>
 </ol>
</body>
</html>