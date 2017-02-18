
最轻量的移动端弹窗插件。<br />
Dome site: https://0123cf.github.io/www/
<br />
<p>
 用法：1,引入xxy.css
 &nbsp;2，引入xxy.js
 在线连接：<br />
 <xmp>
  <link rel="stylesheet" href="https://0123cf.github.io/www/xxy.css">
  <script src="https://0123cf.github.io/www/xxy.js"></script>
  </xmp>
</p>
<br />
<h3>xxy.popup:</h3>xxy.popup('标题'，'内容,支持插入标签','左按钮文字','右按钮文字',function(e){
<br /> &nbsp; //点击后回调：
 <br />&nbsp;  //e==0 点击了左按钮，e==1 点击右按钮
<br /> &nbsp;  //回调了可以继续调用自身。
<br /> });
<br />
<br /> &nbsp; <span style="color:rgb(200,30,0)">tips:</span>
<p>支持不添加回调不添加标题文字，但是左按钮与右按钮必须成对出现</p>
<h3>xxy.toast:</h3>&nbsp;xxy.toast('内容','消失时间[ms]');


<HR />
<div>
 History record：<br />
 <ol> 
   <li>兼容了iframe在苹果的出现fiexd问题。</li>
   <li>..</li>
 </ol>
 <br />
 <p>Tips:</p>
 <br />有时候我们自己封装，或者别的弹窗插件，在使用后发现有后遗症，当弹窗消失的时候，除了委托事件等特殊事件，onclick都不能用了。
 <br />xxy.js完美解决了这个问题。
</div>
