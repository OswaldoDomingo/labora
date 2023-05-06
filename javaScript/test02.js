//Hacer un test de javaScript y sacar la nota

var inicio = window.confirm("¿Quieres hacer un test de javaScript?")

testJs();

function testJs() {
    let pregunta1, pregunta2, pregunta3, pregunta4, pregunta5, suma = 0, error = 0;

    if (inicio) {

        //Preguntaas
        pregunta1 = window.prompt("Cómo no es la forma de llamar a una variable en javScript: \nA -> Bar \nB -> var");
        pregunta2 = window.prompt("window.prompt hace que se lance una ventana para confirmar verdadero o falso \nA -> Si \nB -> No");
        pregunta3 = window.prompt("El símbolo == es de: \nA -> comparación \nB -> igualdad");
        pregunta4 = window.prompt("Las funciones 'function nombreDeVariable, llevan paréntesis despues del nombre?' \nA -> Si \nB -> No, llevan llaves {}");
        pregunta5 = window.prompt("Las variables String van sin comillas \nA -> Si \nB -> No");

        //Convertimos las respuestas en minúsculas
        pregunta1 = pregunta1.toLowerCase();
        pregunta2 = pregunta2.toLowerCase();
        pregunta3 = pregunta3.toLowerCase();
        pregunta4 = pregunta4.toLowerCase();
        pregunta5 = pregunta5.toLowerCase();

        //Comparamos las preguntas, si son ciertas sumamos 2 y si son falsas 0        
        if (pregunta1 == "a") {
            suma += 2;
        } else {
            error += 1;
        }
        if (pregunta2 == "b") {
            suma += 2;
        } else {
            error += 1;
        }
        if (pregunta3 == "a") {
            suma += 2;
        } else {
            error += 1;
        }
        if (pregunta4 == "a") {
            suma += 2;
        } else {
            error += 1;
        }
        if (pregunta5 == "b") {
            suma += 2;
        } else {
            error += 1;
        }
    
        //Para saber cuantas hemos sabido se divide por 2 el resultado, quería sacar una media pero en esta versión solo he sumado los resultados
        media = suma / 5;
        document.write(`Has sabido ${suma / 2} preguntas y has fallado ${error} preguntas.<br>`);

        //Espera 1 segundo a preguntar si quieres repetir el test
        setTimeout(repite,1000);

    } else {
        document.write("Gracias por participar");
    }

    //Se crea la función para repetir el test
    function repite() {
        let repetir;

        repetir = window.confirm("¿ Deseas repetir el test ? ");

        repetir ? testJs() : document.write("Gracias por participar");
        
    }
}




