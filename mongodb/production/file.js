const fs = require('fs');
/*
Esta biblioteca nos traz algumas manipuçaões de arquivos, onde nos podemos crialos com 'writeFile('nome', 'conteudo', 'tratamento')
podemos adicionar um conteudo com o 'appendFile' seguindo o mesmo padrão da função anterior, podemos renomea-lo com
'rename' onde temo rename('nomeAntigo', 'nomeNovo', 'tratamento'), também temos como exlcuílo com 'unlink' unlink('nomeArquivo');
*/

console.log(__dirname); //Temos uma variável global que sempre sabe onde o arquivo chamado está localizado.
