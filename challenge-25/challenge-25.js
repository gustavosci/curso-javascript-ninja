/*
Essa semana você terá dois desafios:
1) Revisar todo o contéudo passado até aqui, e ver se você realmente entendeu
tudo o que foi passado! Se tiver dúvidas, anote, e então abra issues,
ou comente no seu pull request mesmo, que eu irei ajudá-lo a entender
o que não ficou tão claro das aulas anteriores.
É essencial que você entenda todo o conteúdo que foi passado até aqui,
para que possamos prosseguir para a parte mais avançada do curso :D

2) Estudar eventos!
Acesse a página do MDN:
https://developer.mozilla.org/en-US/docs/Web/Events#Categories

Tente aplicar na prática alguns dos eventos que estão ali e coloque nesse
desafio os experimentos legais que você conseguir desenvolver :D
*/

(function(doc){
	"use strict";


	// Eventos de teclado
	var $iptTesteKeyDown = doc.querySelector('[data-js="iptTesteKeyDown"');
	var $iptTesteKeyPress = doc.querySelector('[data-js="iptTesteKeyPress"');
	var $iptTesteKeyUp = doc.querySelector('[data-js="iptTesteKeyUp"');	

	$iptTesteKeyDown.addEventListener("keydown", handleTesteKeyDown, false);
	$iptTesteKeyPress.addEventListener("keypress", handleTesteKeyPress, false);
	$iptTesteKeyUp.addEventListener("keyup", handleTesteKeyUp, false);

	function handleTesteKeyDown(eve){
		$iptTesteKeyDown.value = $iptTesteKeyDown.value.toUpperCase();
	}
	function handleTesteKeyPress(eve){
		$iptTesteKeyPress.value = $iptTesteKeyPress.value.toUpperCase();
	}
	function handleTesteKeyUp(eve){
		$iptTesteKeyUp.value = $iptTesteKeyUp.value.toUpperCase();
	}

	// Clique com o botão direito do mouse
	doc.addEventListener("contextmenu", handleContextMenu, false);
	function handleContextMenu(eve){
		console.log("Clicou com o botão direito do mouse");
	}

	// Selecionou texto de input ou textarea
	doc.addEventListener("select", handleSelect, false);
	function handleSelect(eve){
		console.log("Selecionou algum texto");
	}

	// Copiou algum texto
	doc.addEventListener("copy", handleCopy, false);
	function handleCopy(eve){
		console.log("Copiou algo");
	}

	// Colou algum texto
	doc.addEventListener("paste", handlePaste, false);
	function handlePaste(eve){
		console.log("Colou algo");
	}


	// Copiar texto do primeiro input para clipboard
	var $btnCopyInp = doc.querySelector('[data-js="btnCopyInp"');	
	$btnCopyInp.addEventListener("click", handleCopyInp, false);
	function handleCopyInp(eve){
		$iptTesteKeyDown.select();
		doc.execCommand("copy");
	}

	// Cola texto clipboard para primeiro input 
	var $btnPasteInp = doc.querySelector('[data-js="btnPasteInp"');	
	$btnPasteInp.addEventListener("click", handlePasteInp, false);
	function handlePasteInp(eve){
		alert("Não rolou :(")
	}



})(document);
