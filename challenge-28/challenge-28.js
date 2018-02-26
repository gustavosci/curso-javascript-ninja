  /*
  No HTML:
  - Crie um formulário com um input de texto que receberá um CEP e um botão
  de submit;
  - Crie uma estrutura HTML para receber informações de endereço:
  "Logradouro, Bairro, Estado, Cidade e CEP." Essas informações serão
  preenchidas com os dados da requisição feita no JS.
  - Crie uma área que receberá mensagens com o status da requisição:
  "Carregando, sucesso ou erro."

  No JS:
  - O CEP pode ser entrado pelo usuário com qualquer tipo de caractere, mas
  deve ser limpo e enviado somente os números para a requisição abaixo;
  - Ao submeter esse formulário, deve ser feito um request Ajax para a URL:
  "https://viacep.com.br/ws/[CEP]/json/", onde [CEP] será o CEP passado
  no input criado no HTML;
  - Essa requisição trará dados de um CEP em JSON. Preencha campos na tela
  com os dados recebidos.
  - Enquanto os dados são buscados, na área de mensagens de status, deve mostrar
  a mensagem: "Buscando informações para o CEP [CEP]..."
  - Se não houver dados para o CEP entrado, mostrar a mensagem:
  "Não encontramos o endereço para o CEP [CEP]."
  - Se houver endereço para o CEP digitado, mostre a mensagem:
  "Endereço referente ao CEP [CEP]:"
  - Utilize a lib DOM criada anteriormente para facilitar a manipulação e
  adicionar as informações em tela.
  */
(function(doc){
  "use strict";

  var $iptCEP = new DOM('[data-js="iptCep"]');
  var $btnSubmit = new DOM('[data-js="submit"]');
  var $divResult = new DOM('[data-js="divResult"]');
  var $status = new DOM('[data-js="status"]');
  var $textStatus = $status.get()[0];
  var ajax = new XMLHttpRequest();

  $btnSubmit.on("click", handleClickSubmit);
  
  function handleClickSubmit(eve){
    eve.preventDefault();
    var cep = clearCEP($iptCEP.get()[0].value);
    doAjaxCEP(cep);
  }

  function clearCEP(cep){
    return cep.replace(/\D/g, "");
  }

  function doAjaxCEP(cep){
    var url = "https://viacep.com.br/ws/" + cep + "/json/";
    modifyTextTag($textStatus, "Buscando informações para o CEP " + cep + "...");
    try{
      ajax.open("GET", url);
      ajax.send();  
      ajax.addEventListener("readystatechange", handleResponseAjax, false);
    }
    catch(e){
      updateDataResultError();
    }
  }

  function handleResponseAjax(){
    if( ajax.readyState !== 4 ){
      return;
    }

    if( ajax.status === 200 ){
      try{
        var dataResponse = JSON.parse(ajax.responseText);        
        if(dataResponse.erro === true){
          updateDataResultError();
        } else {
          updateDataResultOk(dataResponse);
        }
      }
      catch(e){
        updateDataResultError();
      }      
    } else {
      updateDataResultError();
    }
  }


  function updateDataResultOk(dataResponse){
    updateData(dataResponse);
  }

  function updateDataResultError(){
    updateData();
  }

  function updateData(dataResponse){
    var typeUpdateOk = dataResponse !== undefined;
    var elementsResult = $divResult.get()[0].children;
    Array.prototype.forEach.call(elementsResult, function(nodeP){
      var fieldSpam = nodeP.firstElementChild.getAttribute("data-js");
      if( fieldSpam !== undefined){
        if(typeUpdateOk)
          modifyTextTag(nodeP.firstElementChild, dataResponse[fieldSpam]);
        else
          modifyTextTag(nodeP.firstElementChild, "-");
      }
    })
    if(typeUpdateOk)
      modifyTextTag($textStatus, "Consulta realizada com sucesso");
    else
      modifyTextTag($textStatus, "Erro na consulta do CEP. Tenta mais tarde.");   
  }

  function modifyTextTag(node, newText){
    node.firstChild.nodeValue = newText;
  }

}(document));
