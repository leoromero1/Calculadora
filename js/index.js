const botonNumeros = document.getElementsByName('data-numero');
const botonOpera = document.getElementsByName('data-opera');
const botonIgual = document.getElementsByName('data-igual')[0];
const botonDelete = document.getElementsByName('data-delete')[0];
let result = document.getElementById('result');
let operActual = '';
let operAnterior = '';
let operacion = undefined;
// ---------------agregar eventos con un click-----------------
    botonNumeros.forEach(function(boton){
        boton.addEventListener('click', function(){
            agregarNumero(boton.innerText);
        })
    });

    botonOpera.forEach(function(boton){
        boton.addEventListener('click', function(){
            selectOperacion(boton.innerText);
        })
    });
// -----------------calcular y actualizarDisplay-------------------
    botonIgual.addEventListener('click', function(){
        calcular();
        actualizarDisplay();
    });
// ----------------borrar y actualizarDisplay--------------------------
    botonDelete.addEventListener('click', function(){
        clear();
        actualizarDisplay();
    });

    function selectOperacion(op){
        if(operActual === '') return;
        if(operAnterior !== ''){
            calcular()
        }
        operacion = op.toString();
        operAnterior = operActual;
        operActual = '';
    };

    function calcular(){
        let calculo;
        const anterior = parseFloat(operAnterior);
        const actual = parseFloat(operActual);
        if(isNaN(anterior) || isNaN(actual)) return;
        switch(operacion){
            case '+':
                calculo = anterior + actual;
                break;

            case '-':
                calculo = anterior - actual;
                break;

            case '*':
                calculo = anterior * actual;
                break

            case '/':
                calculo = anterior / actual;
                break

            default:
                return;    
        }
        operActual = calculo;
        operacion = undefined;
        operAnterior = '';
    };

    function agregarNumero(num){
        operActual = operActual.toString() + num.toString();
        actualizarDisplay();
    }

    function clear(){
        operActual = '';
        operAnterior = '';
        operacion = undefined;
    }

    function actualizarDisplay(){
        result.value = operActual;
    }

    clear();