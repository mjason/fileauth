const http = require('http');

http.createServer((req, res) => {
	res.writeHead(200, {'Content-Type': 'text/plain'});
	res.end("201801151508295xt29nxgpk2afmuviq5dex0cexnbvpmyoeut5eahnnfomgiexc")
}).listen(80)

console.log("Server running at http://127.0.0.1:80/")