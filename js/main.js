/* Blackjack */
 
// minimo: 1 - maximo: 21 para continuar la ronda ## TOTAL = 20 cartas
// Todas las cartas valen su valor | AS vale 1 ú 11 | Figuras valen 10
// while para el ciclo de la ronda
// al ser presionado tirarCartas, se reparten 2 cartas al jugador y 2 cartas al crupier.
//      -- Si sale As + carta de valor (que vale 10), sale Blackjack, a no ser que el crupier también sume 21.

// !!!!!!!!! Utilizar un math random para que en case 1 se plante y case 0, no.
//          # Edit: utilizar if statement para que si es <16, siga. Else, se planta.
// If allPlayers case 1 && =! 21 => results in array and check wich is the closest to 21
 
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


 
function winGame() {
 
 
};


 
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

 
 
    // Se presiona el botón 1
$("#manoUno").on('click', function(e) {
        e.preventDefault();
        jugadorCarta1 += Math.floor(Math.random() * 10) + 1;
        console.log("Carta 1 Jugador: "+jugadorCarta1);
        jugada1 = jugadorCarta1;
        $("#manoUno").attr('disabled', true);
 
});
    // Se presiona el botón 2
    // Carta se MUESTRA
    $("#manoDos").on('click', function(e) {
 
        crupierCarta1 += Math.floor(Math.random() * 10) + 1;
        console.log("Carta 1 Crupier: "+crupierCarta1);
        jugada3 = crupierCarta1;
        $("#manoDos").attr('disabled', true);
});
    // Se presiona el botón 3
    $("#manoTres").on('click', function(e) {
 
        jugadorCarta2 += Math.floor(Math.random() * 10) + 1;
        console.log("Carta 2 Jugador: "+jugadorCarta2);
        $("#manoTres").attr('disabled', true);
        resultJugador = parseInt(jugadorCarta2 + jugadorCarta1);

        if (blackjackP() == true) {
            return console.log("Blackjack!!")
        } else {
 
            console.log("Tus cartas son: "+jugadorCarta1+" y "+jugadorCarta2)
        }
 
});
    // Se presiona el botón 4
    // Carta OCULTA
    $("#manoCuatro").on('click', function(e) {
 
        crupierCarta2 += Math.floor(Math.random() * 10) + 1;
        
        resultCrupier = parseInt(crupierCarta2 + crupierCarta1);
        $("#manoCuatro").attr('disabled', true);

        
    // Pregunta si se planta o continúa

    var continuar = confirm("Continúa?")
    if (continuar == true) {
        jugadorCarta3 += Math.floor(Math.random() * 10) + 1;
        console.log("Carta 3 Jugador: "+jugadorCarta3);
        resultJugador2 = parseInt(resultJugador + jugadorCarta3);
        console.log("RESULTADO: " + resultJugador2)
        console.log("RESULTAD C:" + resultCrupier)

        if (resultJugador2 == 21) {
            return console.log("Blackjack!!")
        } else {
            validarPartida();
            console.log("Tus cartas son: "+jugadorCarta1+", "+jugadorCarta2+", "+jugadorCarta3);
            console.log("Carta 2 Crupier: "+crupierCarta2);
            console.log("Las cartas del crupier son: "+crupierCarta1+" y "+crupierCarta2)
        }
    } else {
        resultJugador2 = parseInt(resultJugador);
        validarPartida();
        console.log("Tus cartas son: "+jugadorCarta1+", "+jugadorCarta2+", "+jugadorCarta3);
        console.log("Carta 2 Crupier: "+crupierCarta2);
        console.log("Las cartas del crupier son: "+crupierCarta1+" y "+crupierCarta2)
        console.log("RESULTADO: " + resultJugador2)
        console.log("RESULTAD C:" + resultCrupier)
        
        if (blackjackC() == true) {
            return console.log("Blackjack!!")
        } else {
            
        }
    };

});

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
     case (resultCrupier == resultJugador2):
         text ="Empate";
         console.log("Empate");
         break;
    case (21 > resultCrupier < resultJugador2):
        text ="Pierde Crupier";
        console.log("Pierde Crupier");
        break;
    // validación jugador
    case (resultJugador2 > 21):
        console.log("Jugador se pasó de 21");
        break;
    case (21 > resultJugador2 < resultCrupier):
        console.log("Pierde Jugador");
        break;
};
};

// Cuando jugador se planta, el crupier muestra su carta. Pide otra carta si resultCrupier <= 16 o se planta si >= 17



    // // Se presiona el botón 5
    // $("#manoCinco").on('click', function(e) {

    //     cartasJugador3 += Math.floor(Math.random() * 10) + 1;
    //     console.log("Carta 3 Jugador: "+cartasJugador3);
    //     $("#manoTres").attr('disabled', true);
    //     jugada5 += resultJugador + cartasJugador3;
    //     if (jugada5 == 21) {
    //         return console.log("Blackjack!!")
    //     } else {

    //         console.log("Tus cartas son: "+cartasJugador1+", "+cartasJugador2+", "+cartasJugador3);
    //     }
    // });
 
 
 
 
        // // Verifico black Jack
        // var checkBlackJack = blackjack(jugada, jugada2);
        // console.log(checkBlackJack);
