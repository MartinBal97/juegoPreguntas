/*(function () {
    'use strict';
    document.addEventListener('DOMContentLoaded', function () {*/


const contenedorPreguntas = document.querySelector(".contenedorPreguntas");
const botonEmpezar = document.querySelector(".boton-empezar");

let cont = 0

botonEmpezar.addEventListener('click', function () {
    contenedorPreguntas.removeChild(botonEmpezar);
    cargarPreguntas();

})



/*var uno = 0;
var dos = 0;
var tres = 0;

function crearNumeroAleatorio() { // FUNCION QUE RETORNA 3 NUMEROS ALEATORIOS SIN REPETIRSE
    var n = 0;
    var numero;

    do {

        do {
            numero = Math.floor((Math.random() * 3) + 1);
        } while (numero == 0)

        if ((numero != uno) && (numero != dos) && (numero != tres)) {
            n++;
            if (n == 1) {
                uno = numero;
            }
            if (n == 2) {
                dos = numero;
            }
            if (n == 3) {
                tres = numero;
            }
        }
    } while (n < 3);
}


crearNumeroAleatorio();
console.log(uno + " " + dos + " " + tres)*/




function cargarPreguntas() {
    
    fetch('preguntas.json')
        .then(respuesta => respuesta.json()) //Se indica el formato en que vamos a querer la info
        .then(preguntas => {   //Mostramos la info
            preguntas.sort(() => { return Math.random() - 0.5 }).forEach(p => {
                p.respuestas.sort(() => { return Math.random() - 0.5 })
                cont++;

                const pregs = document.createElement('div');

                pregs.innerHTML +=
                    `<div class= "preguntas">
                            <h3>${p.pregunta}</h3>
                            <div class= "contenedor-inputs">
                                <label class="labels" style=""> <input type= "radio" name="${cont}" value="correcta">   ${p.respuestas[0]}</label>
                                <label class="labels" style=""> <input type= "radio" name="${cont}" value="incorrecta"> ${p.respuestas[1]}</label>
                                <label class="labels" style=""> <input type= "radio" name="${cont}" value="incorrecta"> ${p.respuestas[2]}</label>
                            </div>
                        </div>`;
                contenedorPreguntas.appendChild(pregs)
            });
        })
}





/*
    })

})();*/