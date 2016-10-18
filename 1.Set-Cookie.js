var http = require('http');
var url = require('url');
var querystring = require('querystring');
// 这样 cookie 就设置成功了
	http.createServer(function(req,res){
		var urlObj = url.parse(req.url,true)
		var pathname = urlObj.pathname;
		if(pathname == '/write-cookie'){  // 写 cookie 
			// 设置cookie 过期时间，这里 过期时间是 20 秒
			var tm = new Date(Date.now()+20*1000).toGMTString() 
			res.setHeader('Set-Cookie','name=zhang;Expires='+tm) 
			res.end('over')
		}else if(pathname == '/read-cookie'){ // 读 cookie
			// 先访问 ：http://localhost:3001/write-cookie
			// 在访问，访问上面的20秒超过了，拿不到数据：http://localhost:3001/read-cookie
			var cookie = req.headers.cookie
			var json = querystring.parse(cookie)
			console.log(json) // 没有超过20秒 ，得到 。 name=zhang
			res.end('read over')
		}

	}).listen(3001)