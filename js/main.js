/* Blackjack */
 
// Todas las cartas valen su valor | AS vale 1 ú 11 | Figuras valen 10
// al ser presionado tirarCartas, se reparten 2 cartas al jugador y 2 cartas al crupier.
//      -- Si sale As + carta de valor (que vale 10), sale Blackjack, a no ser que el crupier también sume 21.

// !!!!!!!!! Utilizar un math random para que en case 1 se plante y case 0, no.
//          # Edit: utilizar if statement para que si es <16, siga. Else, se planta.
 
/* 
    1) Crupier reparte una carta al jugador
    2) Crupier se reparte carta a sí mismo (se muestra)
    3) Crupier reparte otra carta al jugador
             **** PRIMERA RONDA ****
           # - Si primera carta == figura (vale 10) || As (1 ú 11) && segunda carta == figura (vale 10) || As (1 ú 11) { return blackjack }
           # - } else { continuar con ejecución, pero ya no es blackjack.
             **** ============= ****
    4) Crupier reparte carta a sí mismo (no se muestra)
    5) Jugadores elijen plantarse o no (ver aclaración para AI). Case 0, continúa: while hasta case 1 || sumaJugador == 21
*/ 
 
 
let As = 1 || 11;
 
var jugadorCarta1 = 0;
var crupierCarta1 = 0;
var jugadorCarta2 = 0;
var crupierCarta2 = 0;
var jugadorCarta3 = 0;
var crupierCarta3 = 0;
var jugadorCarta4 = 0;
var crupierCarta4 = 0;

var jugada1;
var jugada2;
var jugada5;
var contadorTotal = 0;

var resultCrupier;
var resultJugador;

var draw;

var cartasArrayJugador = [];
var cartasArrayCrupier = [];
var jugadorCarta = [];
var crupierCarta = [];

function drawOrStand() {
    switch(true) { // Pregunto si continuar o plantarse
        case (confirm("Continuar?") == true):
        return true;
        break;

        case (confirm("Continuar?") == false):
        return false;
        break;
    };
};
function getCard() {
    return Math.floor(Math.random() * 10) + 1;
};
 
function winGame() {
 
};

$("#tirarCartas").on('click', function(e) {
    e.preventDefault();
    // Mano 1
    jugadorCarta.push(Math.floor(Math.random() * 10) + 1);
    // jugadorCarta[0] += Math.floor(Math.random() * 10) + 1;
    cartasArrayJugador.push(jugadorCarta[0]); // Pusheo al array
    console.log("J:" + cartasArrayJugador);        // Muestro
    jugada1 = jugadorCarta1;
    
    // Mano 2
    crupierCarta.push(Math.floor(Math.random() * 10) + 1);
    // crupierCarta[0] += Math.floor(Math.random() * 10) + 1;
    cartasArrayCrupier.push(crupierCarta[0]); // Pusheo al array
    console.log("C:" + cartasArrayCrupier);        // Muestro
    jugada3 = crupierCarta1;

    // Mano 3
    jugadorCarta.push(Math.floor(Math.random() * 10) + 1);
    // jugadorCarta[1] += Math.floor(Math.random() * 10) + 1;
    cartasArrayJugador.push(jugadorCarta[1]); // Pusheo al array
    console.log("J:" + cartasArrayJugador);        // Muestro
    resultJugador = parseInt(cartasArrayJugador[0] + cartasArrayJugador[1]); // Sumo cartas

    // Mano 4 # Carta oculta. Se suma al resultado pero no se valida
    crupierCarta.push(Math.floor(Math.random() * 10) + 1);
    // crupierCarta[1] += Math.floor(Math.random() * 10) + 1;
    // Ver línea 110


    // Valido si hay Blackjack (As + 10)
    if(resultJugador == 21){
        return console.log("Blackjack!");
    } else {
    // Continúo ejecución
    // Mano 5
    
   function test() { 
       
        do {
            
            drawOrStand(); // Invoco función para draw or stand
            let i = 2;
            if(drawOrStand() == true) {
            jugadorCarta.push(getCard());
            // jugadorCarta[i] += Math.floor(Math.random() * 10) + 1;
            cartasArrayJugador.push(jugadorCarta[i]); // Pusheo al array
            console.log("J:" + cartasArrayJugador);        // Muestro
            resultJugador = parseInt(cartasArrayJugador[0] + cartasArrayJugador[1] + cartasArrayJugador[2]); // Sumo cartas
            i++;
            validarPartida();
        } else {
            console.log("Jugador se planta")
            // Se pushea 2da carta de Crupier al array y se verifica -------------------------------
            cartasArrayCrupier.push(crupierCarta[1]);      // Pusheo al array
            console.log("C:" + cartasArrayCrupier);        // Muestro
            resultCrupier = parseInt(cartasArrayCrupier[0] + cartasArrayCrupier[1]); // Sumo cartas
            // -------------------------------------------------------------------------------------
            validarPartida();
            console.log("Cartas jugador: " + jugadorCarta[0] + "," + jugadorCarta[1])
            console.log("Cartas crupier: " + crupierCarta[0] + "," + crupierCarta[1])
        };
        
        } while (drawOrStand() == false || jugadorCarta.length < 6);
        

    }; 
};
test();

});

 
function blackjackP() {
    // var resultJugador = jugada1 + jugada2;
    if (resultJugador == 21) {
        return true
    } else {
        return false
        // Se incrementa sumando el valor en cartas obtenido + una nueva ejecución
    }
    
};
function blackjackC() {
    // var resultCrupier = jugada3 + jugada4;
    if (resultCrupier == 21) {
        return true
    } else {
        return false
        // Se incrementa sumando el valor en cartas obtenido + una nueva ejecución
    }
    
};

// != 21
// != oponente
// < oponente
// > oponente

//Losing conditions
/*
    x > 21
    x == oponente
    21 > x < oponente

*/
var text = "";

function validarPartida() {
switch(true) {
    // validación crupier
    case (resultCrupier > 21):
        text = "Crupier se pasó de 21";
        console.log("Crupier se pasó de 21");
        break;
     case (resultCrupier == resultJugador):
         text ="Empate";
         console.log("Empate");
         break;
    case (21 > resultCrupier && resultCrupier < resultJugador):
        text ="Pierde Crupier";
        console.log("Pierde Crupier");
        break;
    // validación jugador
    case (resultJugador > 21):
        console.log("Jugador se pasó de 21");
        break;
    case (21 > resultJugador < resultCrupier):
        console.log("Pierde Jugador");
        break;
};
};

// Cuando jugador se planta, el crupier muestra su carta. Pide otra carta si resultCrupier <= 16 o se planta si >= 17