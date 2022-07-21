(function () {
    'use strict';
    document.addEventListener('DOMContentLoaded', function () {
        /*
        document.querySelector(".boton-empezar").onClick(() => {
            document.getElementsByClassName(".contenedorPreguntas").removeClass();
        })*/
        const contenedorPreguntas = document.querySelector(".contenedorPreguntas");

        function numeroAleatorio() {
            const min = 1
            const max = 3
            var numeroRepetido = 0
            numerosSalidos=[]
            for (let i = 0; i < 4; i++) {

                var aleatorio = Math.floor((Math.random() * (max - min + 1)) + min);  

                if (aleatorio == numeroRepetido) {

                }
                
                numerosSalidos.push(aleatorio)
            }
            
            
            return aleatorio
        }

        let cont = 0
        function cargarPreguntas() {
            fetch('preg.json')
                .then(respuesta => respuesta.json()) //Se indica el formato en que vamos a querer la info
                .then(preguntas => {   //Mostramos la info
                    console.log(preguntas);
                    preguntas.sort(() => { return Math.random() - 0.5 }).forEach(p => {

                        cont++;
                        
                        const pregs = document.createElement('div');

                        pregs.innerHTML += ` <div class= "preguntas">
                                                <h3>${p.pregunta}</h3>
                                                <div class= "contenedor-inputs">
                                                    <label class="labels" style="order:${numeroAleatorio()};"> <input type= "radio" name="${cont}" value="correcta"> ${p.respuestas.respuesta}</label>
                                                    <label class="labels" style="order:${numeroAleatorio()};"> <input type= "radio" name="${cont}" value="incorrecta"> ${p.respuestas.incorrecta1}</label>
                                                    <label class="labels" style="order:${numeroAleatorio()};"> <input type= "radio" name="${cont}" value="incorrecta"> ${p.respuestas.incorrecta2}</label>
                                                </div>
                                            </div>`;

                        /*    p.respuestas.sort(() => { return Math.ceil(Math.random()*4)});  */

                        contenedorPreguntas.appendChild(pregs)

                    });


                })


        }

        cargarPreguntas();





















    })

})();