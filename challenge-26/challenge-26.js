(function(doc){

	"use strict";

	/*
	O desafio dessa semana é criar uma mini library (biblioteca) para
	reutilizarmos nossos códigos quando fizermos manipulação de DOM!

	Requisitos:
	- O nome da lib deve ser "DOM".
	- Ela deve ser uma função construtora, que receberá uma string por parâmetro.
	Essa string será o nó do DOM a ser selecionado;
	- No construtor, você deve atribuir à `this.element` todos os elementos
	do DOM selecionados;
	- Extenda a lib para ter os métodos `on`, `off` e `get`.
	- O método `on` irá adicionar um listener de evento a todos os elementos
	selecionados.
	- O método `off` irá remover o listener de evento de todos os elementos
	selecionados.
	- O método `get` deve retornar os elementos.
	- O código abaixo deve funcionar corretamente após a lib criada.

	Dica: olhe os erros que acontecem no console, e vá resolvendo um a um.
	Só passe para o próximo problema quando tiver resolvido o anterior :)
	*/
	function DOM(node){
		this.element = doc.querySelectorAll(node);
		this.on = function on(eve, action){
			Array.prototype.forEach.call(this.element, function(nodeActual){
				nodeActual.addEventListener(eve, action, false);
			})
		}
		this.off = function off(eve, action){
			Array.prototype.forEach.call(this.element, function(nodeActual){
				nodeActual.removeEventListener(eve, action, false);
			})
		}
		this.get = function get(){
			return Array.prototype.map.call(this.element, function(nodeActual){
				return nodeActual;
			})
		} 

	}

	var $a = new DOM('[data-js="link"]');
	var $body = new DOM('[data-js="body"');
	var $script = new DOM('[data-js="aula26-js"');

	$a.on('click', function(e) {
	  e.preventDefault();
	  console.log('clicou');
	});

	var $elementsA = $a.get();
	console.log('Elementos selecionados:', $elementsA);
	console.log('$a é filho de body?', $elementsA[0].parentNode === document.body);
	
	$elementsA.forEach(function(elementActual, idx){
		console.log("Item", idx, "Valor:", elementActual.getAttribute("value"));	
	})
	
	// Insere um elemento com um texto no fim do body
	var $firstText = doc.createTextNode("Texto teste 1");
	var $elementP = doc.createElement("p");
	$elementP.appendChild($firstText);
	
	$body.get()[0].appendChild($elementP);

	// Clona o elemento P criado acima e o inclui antes de Script
	var $elementP2 = $elementP.cloneNode(true);
	$body.get()[0].insertBefore($elementP2, $script.get()[0]);

	// Altera o valor do P2
	$elementP2.firstChild.nodeValue = "Novo texto P 2"

}(document));
