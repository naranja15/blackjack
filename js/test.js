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



function test() { 
    // do {
hitCard(); // Invoco función para draw or stand
    while (hitCard() == true || cartasArrayJugador.length < 6) {

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
    
    };
    // } while (hitCard() == true || cartasArrayJugador.length < 6); // Mido el array para que no supere la cantidad de cartas (6)

}; 

test();


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