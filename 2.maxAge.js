var http = require('http');
// 没有起效
	http.createServer(function(req,res){
		res.setHeader('Set-Cookie','name=aaa;maxAge=20000')
		res.end('over')
	}).listen(3001)