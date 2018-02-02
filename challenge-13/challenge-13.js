(function(){

	/*
	Envolva todo o código desse desafio em uma IIFE.
	*/

	/*
	Crie um array e mostre no console a representação em String desse array,
	usando o método visto na aula 13.
	*/
	var arr = [ 1, 2, 5, 19];
	console.log( 'O array em formato de string é:' );
	console.log( arr.toString());

	/*
	Crie 2 arrays `sul` e `sudeste`, que serão as regiões do Brasil.
	Cada array deve conter os estados dessa região.
	*/
	var sul = [ "RS", "SC", "PR" ];
	var sudeste = [ "SP", "RJ", "MG", "ES" ];

	/*
	Crie uma variável chamada `brasil`, que irá receber as duas regiões
	concatenadas. Mostre o `brasil` no console.
	*/
	var brasil = [];
	brasil = brasil.concat(sul, sudeste);
	console.log( '\nAlguns Estados do Brasil:' );
	console.log( brasil.toString() );

	/*
	Adicione 3 novos estados da região Norte no início do array e mostre no console.
	*/
	brasil.unshift("AM", "PA", "TO")
	console.log( '\nMais estados adicionados:' );
	console.log( brasil.toString() );

	/*
	Remova o primeiro estado do array `brasil` e mostre-o no console.
	*/
	console.log( '\nEstado removido:' );
	console.log( brasil.shift() );

	/*
	Crie um novo array chamado `newSul`, que receba somente os estados do sul,
	pegando do array `brasil`. Não remova esses itens de `brasil`.
	*/
	var newSul = brasil.filter( function(estado){
		return estado === "RS" || estado === "SC" || estado === "PR";
	} );

	/*
	Mostre no console os estados que estão em `newSul`.
	*/
	console.log( '\nEstados do Sul do Brasil:' );
	console.log( newSul.join( ", "));

	/*
	Mostre no console todos os estados que estão em `brasil`.
	*/
	console.log( '\nAlguns Estados do Brasil:' );
	console.log( brasil.join( ", "));

	/*
	Crie um novo array chamado `nordeste`, que tenha os estados do nordeste.
	*/
	var nordeste = [ "PE", "PI", "MA", "AL"];

	/*
	Mostre no console os estados do nordeste.
	*/
	console.log( '\nEstados do Nordeste:' );
	console.log( nordeste.join( ", "));

	/*
	Remova de `brasil` os estados do `sudeste`, colocando-os em uma variável
	chamada `newSudeste`.
	*/
	var newSudeste = [];
	for( var i = 0; i < brasil.length; i++ ){
		if (brasil[i] === "SP" || brasil[i] === "MG" || brasil[i] === "RJ" || brasil[i] === "ES"){
			newSudeste.push(brasil.splice(i, 1)[0]);
			i--;
		}
	};

	console.log( newSudeste, brasil );

	/*
	Adicione os estados do `nordeste` ao array `brasil`. Esses estados devem
	ficar no mesmo nível que os estados já existentes, não em um array separado.
	*/
	nordeste.forEach( function(estado, i){
		brasil.push(estado);		
	} );
	

	/*
	Mostre no console os estados em `newSudeste`.
	*/
	console.log( '\nEstados em newSudeste:' );
	console.log( newSudeste.join(", ") );

	/*
	Mostre no console os estados do `brasil`.
	*/
	console.log( '\nAlguns estados do Brasil:' );
	console.log(brasil.join( ", "));

	/*
	usando forEach, percorra o array `brasil` e gere um novo array chamado
	`newBrasil`. Esse array deve ter cada item como um objeto, com as
	propriedades:
	- `id`: que será o índice do array `brasil`,
	- `estado`: que será o estado do array `brasil`.
	*/
	var newBrasil = [];
	brasil.forEach( function(estado, i){
		newBrasil.push( { id: i, estado: estado} );
	} );

	/*
	Mostre o array `newBrasil` no console
	*/
	console.log( '\nnewBrasil:' );
	console.log( newBrasil );

	/*
	Percorra o array `brasil` e verifique se os estados tem mais de 7 letras cada,
	atribuindo o resultado à uma variável. Se tiver, mostre no console a frase:
	- "Sim, todos os estados tem mais de 7 letras!"
	Senão, mostre no console:
	- "Nem todos os estados tem mais de 7 letras!"
	*/
	console.log( '\nTodos os estados de `brasil` tem mais de 7 letras?' );
	if(brasil.every( function(estado, i){ return estado.length > 7; } )){
		console.log("Sim, todos os estados tem mais de 7 letras!");
	} else {
		console.log("Nem todos os estados tem mais de 7 letras!");	
	}

	/*
	Percorra o array `brasil` e verifique se o Ceará está incluído, atribuindo o
	resultado à uma variável. Se esse estado existir no array, mostrar a frase no
	console:
	- "Ceará está incluído!"
	Senão, mostrar a frase:
	- "Ceará não foi incluído :("
	*/
	console.log( '\nCeará está incluído em `brasil`?' );
	var CEInc = brasil.some( function(estado){
		return estado === "CE";
	});
	if(CEInc){
		console.log("Ceará está incluído!");
	} else {
		console.log("Ceará não está incluído!");
	}

	/*
	Percorra o array `newBrasil` e crie um novo array que some 1 no ID de cada
	objeto desse array, e adicione a frase abaixo na propriedade `estado`:
	- "[ESTADO] pertence ao Brasil."
	Atribua o novo array a uma variável chamada `map`.
	*/

	var map = newBrasil.map( function(estado, i){
		estado.id++;
		estado.estado = estado.estado + " pertence ao Brasil.";
		return estado; 
	} );

	/*
	Mostre no console o array criado acima:
	*/
	console.log( '\nnewBrasil agora com mais informações:' );
	console.log( map );

	/*
	Filtre o array criado acima, retornando somente os estados que tiverem
	ID par. Atribua o valor à uma variável chamada `filter`.
	*/
	var filter = newBrasil.filter( function(estado, i){
		return estado.id % 2 === 0;
	} );

	/*
	Mostre o array filtrado acima no console.
	*/
	console.log( '\nEstados com ID par:' );
	console.log( filter );

}());
