(function(doc){

	"use strict"

	/*
	Aproveitando a lib DOM que fizemos na semana anterior, crie agora para ela
	métodos semelhantes aos que existem no array, mas que sirvam para os
	elementos do DOM selecionados.
	Crie os seguintes métodos:
	- forEach, map, filter, reduce, reduceRight, every e some.

	Crie também métodos que verificam o tipo do objeto passado por parâmetro.
	Esses métodos não precisam depender de criar um novo elmento do DOM, podem
	ser métodos estáticos.

	Métodos estáticos não obrigam o uso do `new`, podendo ser usados diretamente
	no objeto, como nos exemplos abaixo:
	DOM.isArray([1, 2, 3]); // true
	DOM.isFunction(function() {}); // true
	DOM.isNumber('numero'); // false

	Crie os seguintes métodos para verificação de tipo:
	- isArray, isObject, isFunction, isNumber, isString, isBoolean, isNull.
	O método isNull deve retornar `true` se o valor for null ou undefined.
	*/

	function DOM(node){
		this.element = doc.querySelectorAll(node);
	}

	DOM.prototype.on = function on(eve, action){
		Array.prototype.forEach.call(this.element, function(nodeActual){
			nodeActual.addEventListener(eve, action, false);
		})
	}
	DOM.prototype.off = function off(eve, action){
		Array.prototype.forEach.call(this.element, function(nodeActual){
			nodeActual.removeEventListener(eve, action, false);
		})
	}
	DOM.prototype.get = function get(){
		return Array.prototype.map.call(this.element, function(nodeActual){
			return nodeActual;
		})
	} 
	DOM.prototype.forEach = function forEach(){
		return Array.prototype.forEach.apply(this.element, arguments);
	}
	DOM.prototype.map = function map(){
		return Array.prototype.map.apply(this.element, arguments);
	}
	DOM.prototype.reduce = function reduce(){
		return Array.prototype.reduce.apply(this.element, arguments);
	}
	DOM.prototype.reduceRight = function reduceRight(){
		return Array.prototype.reduceRight.apply(this.element, arguments);
	}
	DOM.prototype.every = function every(){
		return Array.prototype.every.apply(this.element, arguments);
	}
	DOM.prototype.some = function some(){
		return Array.prototype.some.apply(this.element, arguments);
	}
	DOM.prototype.isArray = function isArray(tst){
		return Object.prototype.toString.call(tst) === "[object Array]";
	}
	DOM.prototype.isObject = function isObject(tst){
		return Object.prototype.toString.call(tst) === "[object Object]";
	}
	DOM.prototype.isFunction = function isFunction(tst){
		return Object.prototype.toString.call(tst) === "[object Function]";
	}
	DOM.prototype.isNumber = function isNumber(tst){
		return typeof tst === "number";
	}
	DOM.prototype.isString = function isString(tst){
		return typeof tst === "string";
	}
	DOM.prototype.isBoolean = function isBoolean(tst){
		return typeof tst === "boolean";
	}
	DOM.prototype.isNull = function isNull(tst){
		return tst === null || tst === undefined;
	}

})(document);
