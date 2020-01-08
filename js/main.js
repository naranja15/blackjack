/* Blackjack */
 
// Todas las cartas valen su valor | AS vale 1 ú 11 | Figuras valen 10
// Al ser presionado tirarCartas, se reparten 2 cartas al jugador y 2 cartas al crupier.
//      -- Si sale As + carta de valor (que vale 10), sale Blackjack, a no ser que el crupier también sume 21.

/* 
    1) Crupier reparte una carta al jugador
    2) Crupier se reparte carta a sí mismo (se muestra)
    3) Crupier reparte otra carta al jugador
             **** PRIMERA RONDA ****
           # - Si primera carta == figura (vale 10) || As (1 ú 11) && segunda carta == figura (vale 10) || As (1 ú 11) { return blackjack }
           # - } else { continuar con ejecución, pero ya no es blackjack.
             **** ============= ****
    4) Crupier reparte carta a sí mismo (no se muestra)
*/ 

$(document).ready(function() {
var nombreJugador = prompt("Ingresa tu nombre");

$("#nombreJugador").text(nombreJugador);

});
var text = "";


// Defino resultados
var resultCrupier = 0;
var resultJugador = 0;
var resultJugador2 = 0;
var resultJugador3 = 0;
var resultJugador4 = 0;

// Defino arrays
var cartasArrayJugador = [];
var cartasArrayCrupier = [];
var primerCartaCrupier = [];

// Defino blackjack (sólo primera ronda)
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



function getCard() {
    return Math.floor(Math.random() * 10) + 1;
};
function normaCrupier(){
    if (resultCrupier<= 16) {
        cartasArrayCrupier.push(getCard());
        console.log("Carta obligada: " + cartasArrayCrupier)
        $("#cartac3").text(cartasArrayCrupier[2]); 
        $("#cartac4").text(cartasArrayCrupier[3]); 
    }else if (resultCrupier>=17) {
        return console.log("Crupier se planta")
    }
};
function rondaCrupier(){
    // Se pushea 2da carta de Crupier al array y se verifica -------------------------------
    cartasArrayCrupier.push(primerCartaCrupier[0]);       // Pusheo al array
    console.log("C:" + cartasArrayCrupier);               // Muestro
    $("#cartac2").text(cartasArrayCrupier[1]);                        
        normaCrupier();                                   // Ejecuto función para obligar a Crupier   
        normaCrupier();                                   // Ejecuto función para obligar a Crupier  
    for (let c=0; c < cartasArrayCrupier.length;c++){
        resultCrupier += cartasArrayCrupier[c];
    }
    console.log("Suma total de cartas CRUPIER: "+resultCrupier);
    $("#resultCrupier").text(resultCrupier);
    validarPartida2();
};

function validarPartida2(){
    if(resultCrupier>21){
        console.log("Crupier se pasó de 21")
        alert(nombreJugador + " ha GANADO!");
        window.location.reload()
    } else if(resultCrupier == resultJugador) {
        console.log("Empate") 
        alert("Empate!")
        window.location.reload()
    } else if(21>resultCrupier && resultCrupier<resultJugador) {
        console.log("Pierde Crupier")
        alert(nombreJugador + " ha GANADO!");
        window.location.reload()
    } else if(21>resultJugador<resultCrupier){
        console.log("Pierde jugador")
        alert(nombreJugador + " ha perdido! :(");
        window.location.reload()
    };
};
function over() {
    if(resultJugador>21) {
    console.log("Jugador se pasó de 21")
    alert(nombreJugador + " se pasó de 21!");
    window.location.reload()
    } else if (resultJugador==21){
    console.log("Jugador ha GANADO!")
    alert(nombreJugador + " ha GANADO!");
    window.location.reload()
    };
};

$("#pedir").attr('disabled', true);                            // Deshabilito boton
$("#plantar").attr('disabled', true);                          // Deshabilito boton

// Mano 1
$("#tirarCartas").on('click', function(e) {
    e.preventDefault();
    function manoUno(){
        cartasArrayJugador.push(getCard());
        console.log("J 1era:" + cartasArrayJugador[0]);        // Muestro
        $("#cartaj1").text(cartasArrayJugador[0]);
        $("#tirarCartas").attr('disabled', true);              // Deshabilito boton
        $("#pedir").attr('disabled', false);                   // Habilito boton
        $("#plantar").attr('disabled', false);                 // Habilito boton
};
    manoUno();

    // Mano 2
    function manoDos(){
        cartasArrayCrupier.push(getCard());                    // Pusheo al array
        console.log("C 1era:" + cartasArrayCrupier[0]);        // Muestro
        $("#cartac1").text(cartasArrayCrupier[0]);
};
    manoDos();

    // Mano 3
    function manoTres(){
        cartasArrayJugador.push(getCard());                   // Pusheo el random al array
        console.log("J 2da:" + cartasArrayJugador[1]);        // Muestro
        $("#cartaj2").text(cartasArrayJugador[1]);
        $("#resultJugador").text(resultJugador);
        blackJack();                                          // Se verifica blackjack
        if (blackJack()==true) {
            console.log("Blackjack!");
            primerCartaCrupier.push(getCard());               // En caso de blackjack p/ el jugador, se verifica las cartas del Crupier.
            return rondaCrupier();
        } else {
            return console.log("nada");
        };
};
    manoTres();

    // Mano 4                                                   # Carta oculta. Se suma al resultado pero no se valida.
    function manoCuatro(){
        primerCartaCrupier.push(getCard());                     // Genero el random pero no lo pusheo
        $("#cartac2").text("Sin revelar");
    };
    manoCuatro();

});
    
    // Hideo los botones
    $("#pedir2").hide();
    $("#pedir3").hide();
    $("#pedir4").hide();
    $("#pedir5").hide();
    $("#pedir6").hide();

    // Mano 5
    $("#pedir").on('click', function(e){
        e.preventDefault();
        cartasArrayJugador.push(getCard());                 // Genero y pusheo random al array
        console.log("J 3era:" + cartasArrayJugador);        // Muestro
        $("#cartaj3").text(cartasArrayJugador[2]);
        // For para que sume todas las cartas del array ========================================
        for (let j=0; j < cartasArrayJugador.length;j++){
            resultJugador += cartasArrayJugador[j];
        }
        console.log("Suma total de cartas JUGADOR: "+resultJugador);
        $("#resultJugador").text(resultJugador);
        over();
        $("#pedir").hide();
        $("#pedir2").show();
    // =====================================================================================
    });

    // Mano 6
    $("#pedir2").on('click', function(e){
        e.preventDefault();
        cartasArrayJugador.push(getCard());                 // Genero y pusheo random al array
        console.log("J 4ta:" + cartasArrayJugador);         // Muestro
        $("#cartaj4").text(cartasArrayJugador[3]);
        // For para que sume todas las cartas del array ========================================
        resultJugador = 0;
        for (let j=0; j < cartasArrayJugador.length;j++){
            resultJugador += cartasArrayJugador[j];
        }
        console.log("Suma total de cartas JUGADOR: "+resultJugador);
        $("#resultJugador").text(resultJugador);
        over();
        $("#pedir2").hide();
        $("#pedir3").show();
        // =====================================================================================
    });

    // Mano 7
    $("#pedir3").on('click', function(e){
        e.preventDefault();
        cartasArrayJugador.push(getCard());                 // Genero y pusheo random al array
        console.log("J 5ta:" + cartasArrayJugador);         // Muestro
        $("#cartaj5").text(cartasArrayJugador[4]);
        // For para que sume todas las cartas del array ========================================
        resultJugador = 0;
        for (let j=0; j < cartasArrayJugador.length;j++){
            resultJugador += cartasArrayJugador[j];
        }
        console.log("Suma total de cartas JUGADOR: "+resultJugador);
        $("#resultJugador").text(resultJugador);
        over();
        $("#pedir3").hide();
        $("#pedir4").show();
        // =====================================================================================
    });

    // Mano 8
    $("#pedir4").on('click', function(e){
        e.preventDefault();
        cartasArrayJugador.push(getCard());                 // Genero y pusheo random al array
        console.log("J 6ta:" + cartasArrayJugador);        // Muestro
        $("#cartaj6").text(cartasArrayJugador[5]);
        // For para que sume todas las cartas del array ========================================
        resultJugador = 0;
        for (let j=0; j < cartasArrayJugador.length;j++){
            resultJugador += cartasArrayJugador[j];
        }
        console.log("Suma total de cartas JUGADOR: "+resultJugador);
        $("#resultJugador").text(resultJugador);
        over();
        $("#pedir4").attr('disabled', true);
        // =====================================================================================
    });


    $("#plantar").on('click', function(e){
        e.preventDefault();
        console.log("Jugador se planta")
        $("#plantar").attr('disabled', true);
        rondaCrupier();
    });

    $("#resultJugador").text(resultJugador);
    $("#resultCrupier").text(resultCrupier);

// function validarPartida() {
//     switch(true) {
//         // validación crupier
//         case (resultCrupier > 21):
//             text = "Crupier se pasó de 21";
//             console.log("Crupier se pasó de 21");
//             break;
//         case (resultCrupier == resultJugador):
//             text ="Empate";
//             console.log("Empate");
//             break;
//         case (21 > resultCrupier && resultCrupier < resultJugador):
//             text ="Gana Jugador!";
//             console.log("Gana Jugador!");
//             break;
//         // validación jugador
//         case (resultJugador > 21):
//             console.log("Jugador se pasó de 21");
//             break;
//         case (21 > resultJugador < resultCrupier):
//             console.log("Pierde Jugador");
//             break;
//     };
// };



// function validarPartida3(){
//     if(resultCrupier>21){
//         console.log("Crupier se pasó de 21")
//     } else if(resultCrupier == resultJugador2) {
//         console.log("Empate") 
//     } else if(21>resultCrupier && resultCrupier<resultJugador3) {
//         console.log("Pierde Crupier")
//     } else if(resultJugador3>21) {
//         console.log("Jugador se pasó de 21")
//     } else if(21>resultJugador3<resultCrupier){
//         console.log("Pierde jugador")
//     } else if(resultJugador3 == 21) {
//         console.log("Jugador ha GANADO!")
//     };
// };

// function validarPartida4(){
//     if(resultCrupier>21){
//         console.log("Crupier se pasó de 21")
//     } else if(resultCrupier == resultJugador4) {
//         console.log("Empate") 
//     } else if(21>resultCrupier && resultCrupier<resultJugador4) {
//         console.log("Pierde Crupier")
//     } else if(resultJugador4>21) {
//         console.log("Jugador se pasó de 21")
//     } else if(21>resultJugador4<resultCrupier){
//         console.log("Pierde jugador")
//     } else if(resultJugador4 == 21) {
//         console.log("Jugador ha GANADO!")
//     };
// };