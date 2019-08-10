var inputQtd = document.querySelector('input#qtd');
var outputTotal = document.querySelector('output#total');
var preco = document.querySelector('#preco').textContent; //pegar só o texto, não a tag inteira
preco = preco.replace("R$ ", "").replace(",", "."); //substituir elementos de texto

inputQtd.oninput = function(){
    var total = inputQtd.value * preco;
    outputTotal.value = `R$ ${total.toFixed(2).replace(".", ",")}`;
}