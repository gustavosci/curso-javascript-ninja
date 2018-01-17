# Desafio da semana #4

```js
/*
Declare uma variável chamada `isTruthy`, e atribua a ela uma função que recebe
um único parâmetro como argumento. Essa função deve retornar `true` se o
equivalente booleano para o valor passado no argumento for `true`, ou `false`
para o contrário.
*/
var isTruthy = function ( a ) {
  if ( a ) {
    return true;
  } else {
    return false;
  }
}

// Invoque a função criada acima, passando todos os tipos de valores `falsy`.
isTruthy(0);
isTruthy(-0);
isTruthy(NaN);

/*
Invoque a função criada acima passando como parâmetro 10 valores `truthy`.
*/
isTruthy(1);
isTruthy('teste');
isTruthy(-278);

/*
Declare uma variável chamada `carro`, atribuindo à ela um objeto com as
seguintes propriedades (os valores devem ser do tipo mostrado abaixo):
- `marca` - String
- `modelo` - String
- `placa` - String
- `ano` - Number
- `cor` - String
- `quantasPortas` - Number
- `assentos` - Number - cinco por padrão
- `quantidadePessoas` - Number - zero por padrão
*/
var carro = { marca: 'VW', modelo: 'Gol', placa: 'IJN1873', ano: 2000, cor: 'Branco', quantasPortas: 2, assntos: 5, quantidadePessoas: 0 };

/*
Crie um método chamado `mudarCor` que mude a cor do carro conforme a cor
passado por parâmetro.
*/
function mudaCor ( cor ) {
  carro.cor = cor;
}

/*
Crie um método chamado `obterCor`, que retorne a cor do carro.
*/
function getCor () {
  return carro.cor;
}

/*
Crie um método chamado `obterModelo` que retorne o modelo do carro.
*/
function getModel () {
  return carro.modelo;
}

/*
Crie um método chamado `obterMarca` que retorne a marca do carro.
*/
function getMarca () {
  return carro.marca;
}

/*
Crie um método chamado `obterMarcaModelo`, que retorne:
"Esse carro é um [MARCA] [MODELO]"
Para retornar os valores de marca e modelo, utilize os métodos criados.
*/
function getMarcaModelo () {
  return 'Esse carro é um ' + getMarca() + ' ' + getModel();
}

/*
Crie um método que irá adicionar pessoas no carro. Esse método terá as
seguintes características:
- Ele deverá receber por parâmetro o número de pessoas entrarão no carro. Esse
número não precisa encher o carro, você poderá acrescentar as pessoas aos
poucos.
- O método deve retornar a frase: "Já temos [X] pessoas no carro!"
- Se o carro já estiver cheio, com todos os assentos já preenchidos, o método
deve retornar a frase: "O carro já está lotado!"
- Se ainda houverem lugares no carro, mas a quantidade de pessoas passadas por
parâmetro for ultrapassar o limite de assentos do carro, então você deve
mostrar quantos assentos ainda podem ser ocupados, com a frase:
"Só cabem mais [QUANTIDADE_DE_PESSOAS_QUE_CABEM] pessoas!"
- Se couber somente mais uma pessoa, mostrar a palavra "pessoa" no retorno
citado acima, no lugar de "pessoas".
*/
function addPeople ( qtdPeople ) {
  if (carro.quantidadePessoas === carro.assentos ) {
    return "O carro já está lotado!";
  }
  if ( (carro.quantidadePessoas + qtdPeople) > carro.assentos ) {
    var qtdRestante = carro.assentos - carro.quantidadePessoas;
    var litPessoa = qtdRestante === 1 ? "pessoa" : "pessoas";
    return "Só cabem mais " + qtdRestante + " " + litPessoa + "!";
  }
  carro.quantidadePessoas = carro.quantidadePessoas + qtdPeople;
  return "Já temos " + carro.quantidadePessoas + " pessoas no carro!";
}

/*
Agora vamos verificar algumas informações do carro. Para as respostas abaixo,
utilize sempre o formato de invocação do método (ou chamada da propriedade),
adicionando comentários _inline_ ao lado com o valor retornado, se o método
retornar algum valor.

Qual a cor atual do carro?
*/
getCor();

// Mude a cor do carro para vermelho.
mudaCor( 'Vermelho' );

// E agora, qual a cor do carro?
getCor();

// Mude a cor do carro para verde musgo.
mudaCor( 'Verde musgo' );

// E agora, qual a cor do carro?
getCor();

// Qual a marca e modelo do carro?
getMarcaModelo();

// Adicione 2 pessoas no carro.
addPeople( 2 );

// Adicione mais 4 pessoas no carro.
addPeople( 4 );

// Faça o carro encher.
addPeople( 3 );

// Tire 4 pessoas do carro.
function removePeople( qtdPessoas ) {
  carro.quantidadePessoas = carro.quantidadePessoas - qtdPessoas;
  if (carro.quantidadePessoas < 0) {
    carro.quantidadePessoas = 0;
  }
}
removePeople( 4 );

// Adicione 10 pessoas no carro.
addPeople(10);

// Quantas pessoas temos no carro?
carro.quantidadePessoas;
