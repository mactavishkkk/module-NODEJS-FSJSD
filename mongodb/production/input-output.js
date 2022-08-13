const process = require('process'); //Ótima biblicoteca nativa de NodeJS que possíbilita brincarmos com parâmetros
console.log(process.argv);

console.log("---\n");
console.log("Digite seu nome: ");

process.stdin.on('data', (keyboard) =>{
    process.stdout.write(`Bom dia ${keyboard}!`);
    process.exit();
});
/*
Com o process, também podemos solicitar e exibir dados do usuário onde na primeira linha 'stdin(put)' estamos dizendo que iremos guardar o valor e o nome da variável
e em seguida, em 'stdout(put)' estamos retornando pro usuário uma saída, podendo usar ou não o valor antes recolhido, e finalizando com o exit.
*/