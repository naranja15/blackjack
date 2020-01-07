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