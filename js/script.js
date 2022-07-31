(function () {
'use strict';
document.addEventListener('DOMContentLoaded', function () {

//SELECCIONANDO ELEMENTOS DE HTML
const contenedorPreguntas = document.querySelector(".contenedorPreguntas");
const botonEmpezar = document.querySelector(".boton-empezar");
const main = document.querySelector(".main");
const botonSiguiente = document.querySelector(".activo");

//CREANDO CONTADORES
let cont = 0

//CREANDO ELEMENTOS
const botonesAvance = document.createElement('div');
botonesAvance.innerHTML += `
    <div class="botonesAvance">
        <input type="button" class="btn-link" value="Salir">
        <input type="submit" class="btn-link activo" value="Siguiente">
    </div> `

//EVENTO AL BOTON COMENZAR 
botonEmpezar.addEventListener('click', function () {
    contenedorPreguntas.removeChild(botonEmpezar);
    main.appendChild(botonesAvance)
    cargarPreguntas();
})
//EVENTO AL BOTON SIGUIENTE
/*var isClicked = undefined;
botonSiguiente.addEventListener('click', function () {
    isClicked=true;
})
*/
//FUNCION PARA CARGAR TODAS LAS PREGUNTAS EN EL DOM
function cargarPreguntas() {
    fetch('preguntas.json')
    //Se indica el formato en que vamos a querer los datos
        .then(respuesta => respuesta.json()) 
        //Mostramos los datos recorriendo las preguntas y mezclando entre si las preguntas y respuestas
        .then(preguntas => {   
            preguntas.sort(() => { return Math.random() - 0.5 }).forEach(p => {
                p.respuestas.sort(() => { return Math.random() - 0.5 })

                cont++;
                
            
                const pregs = document.createElement('div');
                pregs.innerHTML +=
                    `<div class= "preguntas">
                        <div class="preguntaYcantidad">
                            <h3>${p.pregunta}</h3>
                            <p>${cont}/10</p>   
                        </div>
                        <div class= "contenedor-inputs">
                            <label class="labels" style=""> <input required type= "radio" name="${cont}" value="${p.respuestas[0]}"> ${p.respuestas[0]}</label>
                            <label class="labels" style=""> <input required type= "radio" name="${cont}" value="${p.respuestas[1]}"> ${p.respuestas[1]}</label>
                            <label class="labels" style=""> <input required type= "radio" name="${cont}" value="${p.respuestas[2]}"> ${p.respuestas[2]}</label>
                        </div>
                    </div>`;
                contenedorPreguntas.appendChild(pregs)
               /* isClicked == false;*/
            
            
            });
        })
}











    })

})();













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


