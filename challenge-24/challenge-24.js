(function(doc){

/*
Vamos desenvolver mais um projeto. A ideia é fazer uma mini-calculadora.
As regras são:

- Deve ter somente 1 input, mas não deve ser possível entrar dados nesse input
diretamente;
- O input deve iniciar com valor zero;
- Deve haver 10 botões para os números de 0 a 9. Cada botão deve ser um número;
- Deve haver 4 botões para as operações principais: soma (+), subtração(-),
multiplicação(x) e divisão(÷);
- Deve haver um botão de "igual" (=) que irá calcular os valores e um botão "CE"
que irá limpar o input, deixando-o com valor 0;

- A cada número pressionado, o input deve atualizar concatenando cada valor
digitado, como em uma calculadora real;
- Ao pressionar um botão com uma das 4 operações, deve aparecer o símbolo da
operação no input. Se o último caractere no input já for um símbolo de alguma
operação, esse caractere deve ser substituído pelo último pressionado.
Exemplo:
- Se o input tem os valores: "1+2+", e for pressionado o botão de
multiplicação (x), então no input deve aparecer "1+2x".
- Ao pressionar o botão de igual, o resultado do cálculo deve ser mostrado no
input;
- Ao pressionar o botão "CE", o input deve ficar zerado.
*/

	"use strict";

	// Busca elementos da interface
	var $iptCalculo = doc.querySelector( '[data-js="iptCalculo"]');
	var $btnNumbers = doc.querySelectorAll( '[data-js="btnNumber"]');
	var $btnOperations = doc.querySelectorAll( '[data-js="btnOperation"]');			
	var $btnCE = doc.querySelector( '[data-js="btnCE"]');
	var $btnEqual =  doc.querySelector( '[data-js="btnEqual"]');

	// Desabilita e inicializa campo de cálculo
	$iptCalculo.disabled = true;


	// Clique nos botões de números
	Array.prototype.forEach.call($btnNumbers, function(btn){
		btn.addEventListener("click", actionClickNumber, false);
	});

	// Clique nos botões de operação
	Array.prototype.forEach.call($btnOperations, function(btn){
		btn.addEventListener("click", actionClickOperation, false);
	});

	// Clique no botão CE
	$btnCE.addEventListener("click", function(eve){
		eve.preventDefault();
		$iptCalculo.value = "";
	}, false);

	// Clique no botão =
	$btnEqual.addEventListener("click", actionClickEqual, false);


	// Ações de clique em botões
	function actionClickNumber(btn){
		btn.preventDefault();
		$iptCalculo.value += btn.value;		
	}

	function actionClickOperation(btn){
		btn.preventDefault();		
		addOperation(btn.value);
	}

	function actionClickEqual(btn){
		btn.preventDefault();
		removeLastItemIfOperation();

		//Continuar aqui
		var result = 0;
		var ope = "";
		var numOpe = null;
		var regexCalc = /(\d+)|[\/*\+-]/g;
		var calculo = $iptCalculo.value.match(regexCalc);
		calculo.forEach(function (valorAtual, index){
			if(! isOperation(valorAtual)){
				if(index === 0){
					result = +valorAtual;
				} else {
					 numOpe = +valorAtual;
				}
			} else {
				ope = valorAtual;
			}
			
			if(ope !== "" && numOpe !== null){
				switch(ope){
					case "/":
						result = result / numOpe;
						break;
					case "*":
						result = result * numOpe;
						break;
					case "+":
						result = result + numOpe;
						break;
					case "-":
						result = result - numOpe;
						break;
				}						
				ope = "";
				numOpe = null;
			}
		})
		$iptCalculo.value = result;

	}


	// Subrotinas
	function addOperation(ope){
		removeLastItemIfOperation();

		// Centralizar split e join
		var strCalculo = $iptCalculo.value.split("");
		strCalculo.push(ope);
		$iptCalculo.value = strCalculo.join("");
	}

	function removeLastItemIfOperation(){
		if(isLastItemOperation($iptCalculo.value)){
			var strCalculo = $iptCalculo.value.split("");
			strCalculo.pop();			
			$iptCalculo.value = strCalculo.join("");
		}
	}

	function isLastItemOperation(strVerify){
		return isOperation(strVerify[strVerify.length - 1]);
	}

	function isOperation(ope){
		var operation = ["/", "*", "+", "-"];
		return operation.some(function(operator){
			return operator === ope;
		})
	}


})(document);
