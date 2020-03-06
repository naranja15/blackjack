const app = new Vue({
    el: "#app",
    data: {
        nombreJugador: prompt("Ingresa tu nombre"),
        results: {resultCrupier: 0, resultJugador: 0, resultJugador2: 0, resultJugador3: 0, resultJugador4: 0},
        // Arrays
        cards: {cartasArrayJugador: [], cartasArrayCrupier: [], primerCartaCrupier: []},
        
    }

})