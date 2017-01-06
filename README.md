<h1>colorGet简介</h1>

colorGet是基于html5 canvas对图片处理获取颜色值功能的封装插件<br/>
<a href="#colorGet1">canvas从图片中获取四角颜色</a><br/>
<a href="#colorGet2">获取鼠标在图片上点击位置颜色</a>
<hr/>
<h2 id="colorGet1">canvas从图片中获取四角颜色&nbsp;&nbsp;&nbsp;&nbsp;<a href="http://www.shdnfw.com/plugin/colorGet/demo1.html"><small>canvas从图片中获取四角颜色示例</small></a></h2>

<h3>1、开始工作：</h3>

我们需要在页面中引入：
<pre>&lt;script type="text/javascript" src="....../colorGet.js">&lt;/script></pre>
当然如果页面中你使用了jquery则相应的需要最先引入jquery (Bootstrap中文网开源项目免费 CDN 服务)：
<pre>&lt;script type="text/javascript" src="//cdn.bootcss.com/jquery/1.9.1/jquery.min.js">&lt;/script></pre>
<h3>2、通过js调用：</h3>

我们需要将所需获取颜色的图片地址作为第一个参数传入，在返回的回调函数success参数obj中拿到我们所需的颜色值
```javascript
<pre>colorGet.colors('image/test.jpg',{
	point:0,
	success:function(obj){
		$('body').append('&lt;div style="height:100px;width:100px;background-color:'+obj.hex+'">&lt;/div>');
	}
});</pre>
```
<h3>3、参数说明：</h3>

point：指定获取图片颜色的四个角中的位置（可取值0、1、2、3），0为左上角，1为右上角，2为右下角，3为左下角
success：回调函数，参数为返回获取颜色的值
<h3>4、兼容性：</h3>

兼容IE9及以上支持canvas标签功能的浏览器
<hr/>
<h2 id="colorGet2">获取鼠标在图片上点击位置颜色&nbsp;&nbsp;&nbsp;&nbsp;<a href="http://www.shdnfw.com/plugin/colorGet/demo2.html"><small>获取鼠标在图片上点击位置颜色示例</small></a></h2>

<h3>1、开始工作：</h3>

我们需要在页面中引入：
<pre>&lt;script type="text/javascript" src="....../colorGetActive.js">&lt;/script></pre>
当然如果页面中你使用了jquery则相应的需要最先引入jquery (Bootstrap中文网开源项目免费 CDN 服务)：
<pre>&lt;script type="text/javascript" src="//cdn.bootcss.com/jquery/1.9.1/jquery.min.js">&lt;/script></pre>
<h3>2、通过js调用：</h3>

我们需要将所需获取颜色的图片地址作为第一个参数传入，在返回的回调函数success参数obj中拿到我们所需的颜色值
<pre>var draw = function(img) {
	var canvas = document.createElement("canvas");
	canvas.id = 'canvas';
	canvas.width = img.width;
	canvas.height = img.height;
	var context = canvas.getContext("2d");
	context.drawImage(img, 0, 0);

	$('body').append(canvas);
	var _T = $('#canvas');
	_T.click(function (e) {
		var canvasOffset = _T.offset();
		var canvasX = Math.floor(e.pageX - canvasOffset.left);
		var canvasY = Math.floor(e.pageY - canvasOffset.top);

		// 获取该点像素的数据
		var colorData = document.getElementById("canvas").getPixelColor(canvasX, canvasY);

		$('div').remove();
		$("body").append('&lt;div style="height:200px;width:200px;display:inline-block;background-color:'+colorData.hex+'">当前点击位置颜色：&lt;br>'+colorData.hex+'&lt;br>'+colorData.rgba+'&lt;br>'+colorData.rgb+'&lt;/div>');
	});
}
$(document).ready(function () {
	var img = new Image();
	img.src = "image/test.jpg";
	$(img).load(function () {
		draw(img);
	});
});</pre>

<h3>3、说明：</h3>

将图片复制到canvas，再在canvas上点击获取当前位置的颜色
<h3>4、兼容性：</h3>

兼容IE9及以上支持canvas标签功能的浏览器

