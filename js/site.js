/* Created by William R. Sousa on 29/06/2017. */

var tela = document.querySelector('canvas');
var pincel = tela.getContext('2d');

//Função que recebe a cor da tinta para pintar o fundo do Canvas
 function recebeTinta(corfundo) {
     var tinta = document.querySelector('input[id="colorPickerBackground"]');
     var cor = tinta.value;
      pincel.fillStyle = cor;
      pincel.fillRect(0, 0, 1045,450);
}

//Função que recebe a cor da tinta para pintar o pincel e pintar o círculo no Canvas
function corPincel(cor) {
    var tinta = document.querySelector('input[id="colorPickerCircle"]');
    var cor = tinta.value;

    pincel.fillStyle = cor;
}

// Função que permite pintar o Círculo no Canvas
function desenhaCirculo(evento,tamanho) {
    
    var x = evento.pageX - tela.offsetLeft;
    var y = evento.pageY - tela.offsetTop;
    var tamanho = document.querySelector('input[id="tamFonte"]');
    var tam = tamanho.value;

    corPincel();
    pincel.beginPath();
    pincel.arc(x, y, tam, 0, 2*3.14);
    pincel.fill();
}

tela.onclick = desenhaCirculo; //Funcionalidade que permite desenhar o círculo ao clicar no canvas.
pintarFundo.onclick = recebeTinta; //Funcionalidade que permite alterar a cor do fundo do canvas, ao clicar no botão de Pintar Fundo
