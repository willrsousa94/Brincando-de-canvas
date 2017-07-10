/* Created by William R. Sousa on 29/06/2017. */

var tela = document.querySelector('canvas');
var pincel = tela.getContext('2d');


 function recebeTinta(corfundo) {
     var tinta = document.querySelector('input[id="colorPickerBackground"]');
     var cor = tinta.value;
      pincel.fillStyle = cor;
      pincel.fillRect(0, 0, 600,400);
}


function corPincel(cor) {
    var tinta = document.querySelector('input[id="colorPickerCircle"]');
    var cor = tinta.value;

    pincel.fillStyle = cor;
}


function desenhaCirculo(evento) {
    var x = evento.pageX - tela.offsetLeft;
    var y = evento.pageY - tela.offsetTop;

    corPincel();
    pincel.beginPath();
    pincel.arc(x, y, 10, 0, 2*3.14);
    pincel.fill();
}

tela.onclick = desenhaCirculo;
pintarFundo.onclick = recebeTinta;

