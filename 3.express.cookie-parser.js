var express = require('express');
var cookieParser = require('cookie-parser');
var app = express();
app.listen(3002)
// cookie-parser  方式判断是，来过 还是没有来过
	app.use(cookieParser()) // 这时候就多了两个 属性

	app.get('/',function(req,res){
		
		console.log(req.cookies)
		if(req.cookies.bbb){
			res.send('欢迎老朋友{-x-}')
		}else{
			// 并且设置过期时间 20 秒后过期
			res.cookie('bbb',1,{maxAge:20000})
			res.send('欢迎新朋友')
		}
	})
