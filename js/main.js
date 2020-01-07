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
 
var primerCartaCrupier = [];

var text = "";

var jugada1;
var jugada2;
var jugada5;
var contadorTotal = 0;

var resultCrupier = 0;
var resultJugador = 0;


var draw;

var cartasArrayJugador = [];
var cartasArrayCrupier = [];
var jugadorMano = [];
var crupierMano = [];

var p=0;
var c=0;

function hitCard() {
    switch(true) { // Pregunto si continuar o plantarse
        case (confirm("Continuar?") == true):
        return true;

        case (confirm("Continuar?") == false):
        return false;
    };
};
function getCard() {
    return Math.floor(Math.random() * 10) + 1;
};

function asJugador() {
    switch(true){
        case (cartasArrayJugador[0] == 1):
            var asChoice = confirm("Utilizar As como 1?")
            if (asChoice == true){
                return cartasArrayJugador[0] = 1;
            } else {
                return cartasArrayJugador[0] = 11;
            };
        case (cartasArrayJugador[1] == 1):
            var asChoice = confirm("Utilizar As como 1?")
            if (asChoice == true){
                return cartasArrayJugador[1] = 1;
            } else {
                return cartasArrayJugador[1] = 11;
            }
    };

};
function asCrupier(){
    switch(true){
        case (cartasArrayCrupier[0] == 1):
            var asChoice = confirm("Utilizar As como 1?")
            if (asChoice == true){
                return cartasArrayCrupier[0] = 1;
            } else {
                return cartasArrayCrupier[0] = 11;
            };
        case (cartasArrayCrupier[1] == 1):
            var asChoice = confirm("Utilizar As como 1?")
            if (asChoice == true){
                return cartasArrayCrupier[1] = 1;
            } else {
                return cartasArrayCrupier[1] = 11;
            }
    };

};
 
function normaCrupier(){
    if (resultCrupier< 16) {
        cartasArrayCrupier.push(getCard());
    }
    if (resultCrupier>17) {
        return console.log("Crupier se planta")
    }
};

$("#tirarCartas").on('click', function(e) {
    e.preventDefault();
    // Mano 1
    function manoUno(){
        cartasArrayJugador.push(getCard());
        console.log("J 1era:" + cartasArrayJugador[0]);        // Muestro
        jugada1 = cartasArrayJugador[0];
        p++;
};
    manoUno();

    // Mano 2
    function manoDos(){
        cartasArrayCrupier.push(getCard());            // Pusheo al array
        console.log("C 1era:" + cartasArrayCrupier[0]);        // Muestro
        jugada3 = cartasArrayCrupier[0];
        c++;
};
    manoDos();
    // Mano 3
    function manoTres(){
        cartasArrayJugador.push(getCard());                   // Pusheo el random al array
        console.log("J 2da:" + cartasArrayJugador[1]);        // Muestro
        asJugador();                                          // Invoco función de As (1 || 11)
        for (let j=0; j < cartasArrayJugador.length;j++){     // Sumo todos los index del array
            resultJugador += cartasArrayJugador[j];
        }
        p++;
};
    manoTres();

    // Mano 4 # Carta oculta. Se suma al resultado pero no se valida
    function manoCuatro(){
        primerCartaCrupier.push(getCard());                     // Genero el random pero no lo pusheo
    };
    manoCuatro();

    // Valido si hay Blackjack (As + 10)
    if(resultJugador == 21){
        return console.log("Blackjack!");
    } else {
        // Continúo ejecución
    

    // Mano 5


    
   function test() { 
        // do {
        while (hitCard() == true || cartasArrayJugador.length < 6) {
            hitCard(); // Invoco función para draw or stand
            
            if(hitCard() == true) {
            cartasArrayJugador.push(getCard());

            console.log("J 3era:" + cartasArrayJugador);        // Muestro

            // For para que sume todas las cartas del array ========================================
            for (let j=0; j < cartasArrayJugador.length;j++){
                resultJugador += cartasArrayJugador[j];
            }
            console.log("Suma total de cartas JUGADOR: "+resultJugador);
            // =====================================================================================
            
            validarPartida();
        } else {
            console.log("Jugador se planta")
            // Se pushea 2da carta de Crupier al array y se verifica -------------------------------
            cartasArrayCrupier.push(primerCartaCrupier[0]);       // Pusheo al array
            console.log("C:" + cartasArrayCrupier);               // Muestro

            normaCrupier();                                       // Ejecuto función para obligar a Crupier

            // For para que sume todas las cartas del array ========================================
            for (let c=0; c < cartasArrayCrupier.length;c++){
                resultCrupier += cartasArrayCrupier[c];
            }
            console.log("Suma total de cartas CRUPIER: "+resultCrupier);
            // =====================================================================================

            // -------------------------------------------------------------------------------------
            validarPartida();
            console.log("Cartas jugador: " + cartasArrayJugador[0] + "," + cartasArrayJugador[1])
            console.log("Cartas crupier: " + cartasArrayCrupier[0] + "," + cartasArrayCrupier[1])
        };
        hitCard(); // Invoco función para draw or stand
        };
        // } while (hitCard() == true || cartasArrayJugador.length < 6); // Mido el array para que no supere la cantidad de cartas (6)

    }; 
};



// Ejecuto función
test();

});




function validarPartida() {
switch(true) {
    // validación crupier
    case (resultCrupier > 21):
        text = "Crupier se pasó de 21";
        console.log("Crupier se pasó de 21");
        return hitCard() == false;
        break;
     case (resultCrupier == resultJugador):
         text ="Empate";
         console.log("Empate");
         return hitCard() == false;
         break;
    case (21 > resultCrupier && resultCrupier < resultJugador):
        text ="Pierde Crupier";
        console.log("Pierde Crupier");
        return hitCard() == false;
        break;
    // validación jugador
    case (resultJugador > 21):
        console.log("Jugador se pasó de 21");
        return hitCard() == false;
        break;
    case (21 > resultJugador < resultCrupier):
        console.log("Pierde Jugador");
        return hitCard() == false;
        break;
};

};

// Cuando jugador se planta, el crupier muestra su carta. Pide otra carta si resultCrupier <= 16 o se planta si >= 17