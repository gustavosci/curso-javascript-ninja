/*
O desafio de hoje será um pequeno projeto: um cronômetro!
As regras para criação do cronômetro são as seguintes:
1. Crie um arquivo index.html e adicione esse script a ele;
2. Crie um campo `input` do tipo `text`, e inicie-o com um valor 0 (zero).
Ele será o nosso cronômetro;
3. Crie 3 botões para as ações do cronômetro: Start, Stop e Reset;
4. Ao clicar em Start, o valor do campo deve ser incrementado de 1 em 1, a
cada segundo;
5. Ao clicar em Stop, o cronômetro deve parar de contar;
6. Ao clicar em Reset, o cronômetro deve zerar e parar de contar.

Utilize o atributo data-js para nomear o campo e os botões. Você pode
usar o nome que achar melhor, desde que ele seja semântico, ou seja, o nome
dado ao elemento HTML deve definir o que o elemento é ou o que ele faz.
*/
(function(doc){

	"use strict";

	// Busca elementos HTML
	var $iptCronometro = doc.querySelector( '[data-js="iptCronometro"]' );
	var $btnStart = doc.querySelector( '[data-js="btnStart"]' );
	var $btnStop = doc.querySelector( '[data-js="btnStop"]' );
	var $btnReset = doc.querySelector( '[data-js="btnReset"]' );

	// Variáveis de controle do cronômetro
	var temporizador;
	var counter = 0;
	var started = false;

	// Defaults tela
	$iptCronometro.value = 0;


	// Eventos de clique nos botões
	$btnStart.addEventListener("click", function(eve){
		eve.preventDefault();
		if(started){
			return alert("O cronômetro já está iniciado!");
		}
		started = true;
		function timer(){
			counter = counter + 1;
			$iptCronometro.value = counter;
			temporizador = setTimeout(timer, 1000);
		}
		timer();

	}, false);

	$btnStop.addEventListener("click", function(eve){
		eve.preventDefault();
		stopCronometro();
	}, false);

	$btnReset.addEventListener("click", function(eve){
		eve.preventDefault();
		stopCronometro();
		counter = 0;
		$iptCronometro.value = counter;
	}, false);

	// Subrotinas
	function stopCronometro(){
		clearTimeout(temporizador);
		started = false;		
	}

}(document));
