console.log('Olá, mundo! (cruel)');

const http = require('http');

const servidor = http.createServer(function(req, res) {

	res.writeHead(200, {'Content-Type': 'text/html'});

	res.write('Oi, mundo!');
	res.end();

});

servidor.listen(88);
console.log('Servidor está rodando em http://localhost:88');