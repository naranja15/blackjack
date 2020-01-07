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
 
var primerCartaCrupier = [];

var text = "";

var jugada1;

var resultCrupier = 0;
var resultJugador = 0;

var cartasArrayJugador = [];
var cartasArrayCrupier = [];

var blackjack;

function blackJack(){
if (cartasArrayJugador[0] == 10 && 
    cartasArrayJugador[1] == 1 ||
    cartasArrayJugador[0] == 1 &&
    cartasArrayJugador[1] == 10){
    return true;
} else {
    return false;
};
};

// function hitCard() {
//     switch(true) { // Pregunto si continuar o plantarse
//         case (confirm("Continuar?") == true):
//         return true;

//         case (confirm("Continuar?") == false):
//         return false;
//     };
// };

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
    if (resultCrupier<= 16) {
        cartasArrayCrupier.push(getCard());
    }
    if (resultCrupier>=17) {
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
        $("#tirarCartas").attr('disabled', true);
};
    manoUno();

    // Mano 2
    function manoDos(){
        cartasArrayCrupier.push(getCard());                    // Pusheo al array
        console.log("C 1era:" + cartasArrayCrupier[0]);        // Muestro
        jugada3 = cartasArrayCrupier[0];
};
    manoDos();
    // Mano 3
    function manoTres(){
        cartasArrayJugador.push(getCard());                   // Pusheo el random al array
        console.log("J 2da:" + cartasArrayJugador[1]);        // Muestro
        // asJugador();                                          // Invoco función de As (1 || 11)
        // for (let j=0; j < cartasArrayJugador.length;j++){     // Sumo todos los index del array
        //     resultJugador += cartasArrayJugador[j];
        // }
        blackJack();
        if (blackJack()==true) {
            return console.log("Blackjack!");
        } else {
            return console.log("nada");
        };
};
    manoTres();

    // Mano 4 # Carta oculta. Se suma al resultado pero no se valida
    function manoCuatro(){
        primerCartaCrupier.push(getCard());                     // Genero el random pero no lo pusheo
    };
    manoCuatro();

});
    

    // Mano 5

$("#pedir").on('click', function(e){
    cartasArrayJugador.push(getCard());                 // Genero y pusheo random al array
    console.log("J 3era:" + cartasArrayJugador);        // Muestro
    // For para que sume todas las cartas del array ========================================
    for (let j=0; j < cartasArrayJugador.length;j++){
        resultJugador += cartasArrayJugador[j];
    }
    console.log("Suma total de cartas JUGADOR: "+resultJugador);
    // =====================================================================================
        if (resultJugador>21){
            console.log("Jugador pierde")
        }
});

$("#plantar").on('click', function(e){
    console.log("Jugador se planta")
    $("#plantar").attr('disabled', true);
    // Se pushea 2da carta de Crupier al array y se verifica -------------------------------
    cartasArrayCrupier.push(primerCartaCrupier[0]);       // Pusheo al array
    console.log("C:" + cartasArrayCrupier);               // Muestro

    // For para que sume todas las cartas del array ========================================
    for (let c=0; c < cartasArrayCrupier.length;c++){
        resultCrupier += cartasArrayCrupier[c];
    }
    normaCrupier();                                       // Ejecuto función para obligar a Crupier
    console.log("Suma total de cartas CRUPIER: "+resultCrupier);
    // =====================================================================================

    // -------------------------------------------------------------------------------------
    validarPartida2();
    console.log("Cartas jugador: " + cartasArrayJugador[0] + "," + cartasArrayJugador[1])
    console.log("Cartas crupier: " + cartasArrayCrupier[0] + "," + cartasArrayCrupier[1])

});




// Ejecuto función







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

function validarPartida2(){
    if(resultCrupier>21){
        console.log("Crupier se pasó de 21")
    } else if(resultCrupier == resultJugador) {
        console.log("Empate") 
    } else if(21>resultCrupier && resultCrupier<resultJugador) {
        console.log("Pierde Crupier")
    } else if(resultJugador>21) {
        console.log("Jugador se pasó de 21")
    } else if(21>resultJugador<resultCrupier){
        console.log("Pierde jugador")
    };
    
};

// Cuando jugador se planta, el crupier muestra su carta. Pide otra carta si resultCrupier <= 16 o se planta si >= 17