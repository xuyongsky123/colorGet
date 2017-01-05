;(function(window){
	"use strict";

	var colorGet = {};

	colorGet.colors = function(img,opts){

		opts = opts || {};

		var imgObj = new Image();

		imgObj.onload = function(){
			var canvas = document.createElement("canvas");
			canvas.width = imgObj.width;
			canvas.height = imgObj.height;

			var context = canvas.getContext("2d");
			context.drawImage(imgObj,0,0);
			var imageData;

			if(!opts.point){
				opts.point = 0;	//默认获取图片左上角颜色
			}
			switch(parseInt(opts.point)){
				case 0: //左上角
					imageData = context.getImageData(0,0,1,1);
					break;
				case 1: //右上角
					imageData = context.getImageData((imgObj.width-1),0,1,1);
					break;
				case 2: //右下角
					imageData = context.getImageData((imgObj.width-1),(imgObj.height-1),1,1);
					break;
				case 3: //左下角
					imageData = context.getImageData(0,(imgObj.height-1),1,1);
					break;
				default: //左上角-无参数指定则默认获取图片左上角颜色
					imageData = context.getImageData(0,0,1,1);
					break;
			}
			
			var pixel = imageData.data;
			var r = pixel[0];
			var g = pixel[1];
			var b = pixel[2];
			var a = pixel[3] / 255
			a = Math.round(a * 100) / 100;
			var rHex = r.toString(16);
			r < 16 && (rHex = "0" + rHex);
			var gHex = g.toString(16);
			g < 16 && (gHex = "0" + gHex);
			var bHex = b.toString(16);
			b < 16 && (bHex = "0" + bHex);
			var rgbaColor = "rgba(" + r + "," + g + "," + b + "," + a + ")";
			var rgbColor = "rgb(" + r + "," + g + "," + b + ")";
			var hexColor = "#" + rHex + gHex + bHex;

			var obj = {
				rgba : rgbaColor,
				rgb : rgbColor,
				hex : hexColor,
				r : r,
				g : g,
				b : b,
				a : a
			}

			if(opts.success){
				opts.success(obj);
			}

		}

		imgObj.src = img;

		return this;

	}

	window.colorGet = window.colorGet || colorGet;

})(window);