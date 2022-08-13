const http = require('http');
//Com a lib 'http' do node, nos podemos subir servidores 'caseiros'

const server = http.createServer((req, res) => { 
    console.log(req.method);
    console.log(req.url);
    res.statusCode = 200;
    res.end('<h1>Hello world</h1>');
})

/*
Primeiro temos o param 'req' para o verbo, eo 'res' para resposta ao nosso usuário 
o 'req' é uma variável que guarda alguns valores por padrão, o 'method' e o 'url' é o nosso verbo e sua url que estao sendo chamados.
em 'res' podemos retornar algum codigo das famílias já vistas com 'statusCode = code; e retornar algum DOM ou valor que seja com nosso .end('conteudo')
*/

server.listen(65535, () => {
    console.log('Servidor Ativo!');
});
//Aqui com o .listen podemo manda-lo 'ouvir' alguma porta específica e retornar algo quando acessada.