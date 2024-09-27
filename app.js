let edtNumero = document.getElementById('edtNumero');
let edtResultado = document.getElementById('edtResultado');
let edtCalculo = document.getElementById('edtCalculo');

textoInicial();

function calculaFator(){
    let index = 1;
    let resultado = 1;
    let texto = '';
    while (index <= edtNumero.value) {
        resultado = resultado * index;
        if (index == 1){
            texto = index;
        } else{
            texto = texto + `x${index}`;
        }
        index++
    }
    let textoCalculo = `${edtNumero.value}! = ${texto} = ${resultado}`;
    edtResultado.value = resultado;
    edtCalculo.value = textoCalculo;
    document.getElementById('reiniciar').removeAttribute('disabled');
}

function limparCampos(){
    edtNumero.value = '';
    edtResultado.value = '';
    edtCalculo.value = '';
    document.getElementById('reiniciar').setAttribute('disabled', true);
}


function textoInicial(){
    digitarTexto('h1', 'Calculadora Fatorial');
    digitarTexto('p', 'Insira o número inteiro não negativo e pressione o botão calcular')
}

function digitarTexto(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}