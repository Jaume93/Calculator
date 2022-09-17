
// //Funciones de operación
// function sumar() {
//     var x = parseInt(document.getElementById("valor1").value);
//     var y = parseInt(document.getElementById("valor2").value);
//     document.getElementById("resultado").value = x + y;
// }
// function restar() {
//     var x = parseInt(document.getElementById("valor1").value);
//     var y = parseInt(document.getElementById("valor2").value);
//     document.getElementById("resultado").value = x - y;
// }
// function multiplicar() {
//     var x = parseInt(document.getElementById("valor1").value);
//     var y = parseInt(document.getElementById("valor2").value);
//     document.getElementById("resultado").value = x * y;
// }
// function dividir() {
//     var x = parseInt(document.getElementById("valor1").value);
//     var y = parseInt(document.getElementById("valor2").value);
//     document.getElementById("resultado").value = x / y;
// }

//Segunda calculadora
// //variables
// var resultado = document.getElementById('resultado');
// const suma = document.getElementById('suma');
// const resta = document.getElementById('resta');
// const multiplicacion = document.getElementById('multiplicacion');
// const division = document.getElementById('division');
// const igual = document.getElementById('igual');
// const clear = document.getElementById('clear');

// const cero = document.getElementById('cero');
// const uno = document.getElementById('uno');
// const dos = document.getElementById('dos');
// const tres = document.getElementById('tres');
// const cuatro = document.getElementById('cuatro');
// const cinco = document.getElementById('cinco');
// const seis = document.getElementById('seis');
// const siete = document.getElementById('siete');
// const ocho = document.getElementById('ocho');
// const nueve = document.getElementById('nueve');

// var datouno = [];
// var datodos = [];
// var operacion = [];

// uno.onclick = function () {
//     resultado.value = resultado.value + 1;
// }
// dos.onclick = function () {
//     resultado.value = resultado.value + 2;
// }
// tres.onclick = function () {
//     resultado.value = resultado.value + 3;
// }
// cuatro.onclick = function () {
//     resultado.value = resultado.value + 4;
// }
// cinco.onclick = function () {
//     resultado.value = resultado.value + 5;
// }
// seis.onclick = function () {
//     resultado.value = resultado.value + 6;
// }
// siete.onclick = function () {
//     resultado.value = resultado.value + 7;
// }
// ocho.onclick = function () {
//     resultado.value = resultado.value + 8;
// }
// nueve.onclick = function () {
//     resultado.value = resultado.value + 9;
// }
// cero.addEventListener('click', function () {
//     resultado.value = resultado.value + 0;
// })


// suma.onclick = function () {
//     datouno = resultado.value;
//     operacion = "+";
//     clearValue();
// }

// resta.onclick = function () {
//     datouno = resultado.value;
//     operacion = "-";
//     datodos = resultado.value
//     clearValue();
// }

// multiplicacion.onclick = function () {
//     datouno = resultado.value;
//     operacion = "*";
//     clearValue();
// }

// division.onclick = function () {
//     datouno = resultado.value;
//     operacion = "/";
//     clearValue();
// }

// igual.onclick = function () {
//     datodos = resultado.value;
//     resolver();
// }

// clear.onclick = function () {
//     clearValue()
// }

// function clearValue() {
//     resultado.value = "";
// }

// function resolver() {
//     if (operacion == "+") {
//         resultado.value = parseFloat(datouno) + parseFloat(datodos);
//     }
//     else if (operacion == "-") {
//         resultado.value = parseFloat(datouno) - parseFloat(datodos);
//     }
//     else if (operacion == "*") {
//         resultado.value = parseFloat(datouno) * parseFloat(datodos);
//     }
//     else if (operacion == "/") {
//         resultado.value = parseFloat(datouno) / parseFloat(datodos);
//     }
// }


const sumar = () => {
    document.calculator.screen.value += '+'
}
const restar = () => {
    document.calculator.screen.value += '-'
}
const multiplicar = () => {
    document.calculator.screen.value += '*'
}
const dividir = () => {
    document.calculator.screen.value += '/'
}
const clearValues = () => {
    document.calculator.screen.value = ''
}
const resolver = () => {
    document.calculator.screen.value = eval(document.calculator.screen.value)
}
const positiveToNegative = () => {
    if (document.getElementById('positiveNegative')) {
        document.calculator.screen.value *= -1
    }
}
const perCent = () => {
    document.calculator.screen.value = (document.calculator.screen.value / 100)
}



