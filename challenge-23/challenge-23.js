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
	var $btn9 = doc.querySelector( '[data-js="btn9"]');
	var $btn8 = doc.querySelector( '[data-js="btn8"]');
	var $btn7 = doc.querySelector( '[data-js="btn7"]');
	var $btn6 = doc.querySelector( '[data-js="btn6"]');
	var $btn5 = doc.querySelector( '[data-js="btn5"]');
	var $btn4 = doc.querySelector( '[data-js="btn4"]');
	var $btn3 = doc.querySelector( '[data-js="btn3"]');	
	var $btn2 = doc.querySelector( '[data-js="btn2"]');	
	var $btn1 = doc.querySelector( '[data-js="btn1"]');	
	var $btn0 = doc.querySelector( '[data-js="btn0"]');			
	var $btnDivide = doc.querySelector( '[data-js="btnDivide"]');			
	var $btnMultiplication = doc.querySelector( '[data-js="btnMultiplication"]');			
	var $btnAdd = doc.querySelector( '[data-js="btnAdd"]');			
	var $btnSubtraction = doc.querySelector( '[data-js="btnSubtraction"]');			
	var $btnCE = doc.querySelector( '[data-js="btnCE"]');
	var $btnResult =  doc.querySelector( '[data-js="btnResult"]');

	// Desabilita e inicializa campo de cálculo
	$iptCalculo.disabled = true;


	// Eventos de clique nos botões
	$btn9.addEventListener("click", function(eve){
		eve.preventDefault();
		$iptCalculo.value = $iptCalculo.value + "9";		
	}, false);

	$btn8.addEventListener("click", function(eve){
		eve.preventDefault();
		$iptCalculo.value = $iptCalculo.value + "8";		
	}, false);
	$btn7.addEventListener("click", function(eve){
		eve.preventDefault();
		$iptCalculo.value = $iptCalculo.value + "7";		
	}, false);
	$btn6.addEventListener("click", function(eve){
		eve.preventDefault();
		$iptCalculo.value = $iptCalculo.value + "6";		
	}, false);
	$btn5.addEventListener("click", function(eve){
		eve.preventDefault();
		$iptCalculo.value = $iptCalculo.value + "5";		
	}, false);
	$btn4.addEventListener("click", function(eve){
		eve.preventDefault();
		$iptCalculo.value = $iptCalculo.value + "4";		
	}, false);
	$btn3.addEventListener("click", function(eve){
		eve.preventDefault();
		$iptCalculo.value = $iptCalculo.value + "3";		
	}, false);
	$btn2.addEventListener("click", function(eve){
		eve.preventDefault();
		$iptCalculo.value = $iptCalculo.value + "2";		
	}, false);
	$btn1.addEventListener("click", function(eve){
		eve.preventDefault();
		$iptCalculo.value = $iptCalculo.value + "1";		
	}, false);
	$btn0.addEventListener("click", function(eve){
		eve.preventDefault();
		$iptCalculo.value = $iptCalculo.value + "0";		
	}, false);
	$btnDivide.addEventListener("click", function(eve){
		eve.preventDefault();
		addOperacao("/");
	}, false);
	$btnMultiplication.addEventListener("click", function(eve){
		eve.preventDefault();
		addOperacao("*");
	}, false);
	$btnAdd.addEventListener("click", function(eve){
		eve.preventDefault();
		addOperacao("+");
	}, false);
	$btnSubtraction.addEventListener("click", function(eve){
		eve.preventDefault();	
		addOperacao("-");
	}, false);
	$btnCE.addEventListener("click", function(eve){
		eve.preventDefault();
		$iptCalculo.value = "";
	}, false);
	$btnResult.addEventListener("click", function(eve){
		eve.preventDefault();
		exeCalc();
	}, false);


	// Subrotinas
	function addOperacao(ope){
		var strCalculo = $iptCalculo.value;
		strCalculo = strCalculo.split("");
		if(! isOperation(strCalculo[strCalculo.length - 1])){
			strCalculo.push(ope);
		} else {
			strCalculo[strCalculo.length - 1] = ope;
		}
		$iptCalculo.value = strCalculo.join("");
	}

	function exeCalc(){
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

	function isOperation(ope){
		if(ope === "/" || ope === "*" || ope === "+" || ope === "-"){
			return true;
		}
		return false;
	}

})(document);
