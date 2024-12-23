import { crearDeck, pedirCarta, turnoComputadora, acumularPuntos, crearCarta } from "./usecases";

const miModulo = (() => {
  'use strict'
  /**
   * 2C = Two of Clubs
   * 2D = Two of Diamonds
   * 2H = Two of Hearts
   * 2S = Two of Spades
   */

  let deck         = [];
  const tipos      = ['C', 'D', 'H', 'S'],
        especiales = ['A', 'J', 'Q', 'K'];

  let puntosJugadores = [];

  // Referencias del HTML
  const btnPedir   = document.querySelector('#btnPedir'),
        btnNuevo   = document.querySelector('#btnNuevo'),
        btnDetener = document.querySelector('#btnDetener');

  const divCartasJugadores = document.querySelectorAll('.divCartas'),
        puntosHTML         = document.querySelectorAll('small');

  const inicializarJuego = (numJugadores = 1) => {
      deck = crearDeck(tipos, especiales);
      puntosJugadores = [];
  
      for(let i = 0; i < numJugadores; i ++)
          puntosJugadores.push(0);

      // Reiniciar botones
      btnPedir.disabled   = false;
      btnDetener.disabled = false;
      btnNuevo.disabled   = true;

      puntosHTML.forEach(puntos => puntos.innerHTML = 0);

      // Limpiar cartas
      divCartasJugadores.forEach(cartas => cartas.innerHTML = '');
  };

  // Eventos
  btnNuevo.addEventListener('click', () => {
      inicializarJuego(2);
  });

  btnPedir.addEventListener('click', () => {

      const carta = pedirCarta(deck);

      puntosJugadores[0] = acumularPuntos(carta, puntosJugadores[0], puntosHTML[0]);

      crearCarta(carta, divCartasJugadores[0]);

      if(puntosJugadores[0] > 21) {
          btnPedir.disabled   = true;
          btnDetener.disabled = true;
          turnoComputadora(puntosJugadores[0], puntosHTML[puntosHTML.length - 1], divCartasJugadores[divCartasJugadores.length - 1], deck);
      } else if(puntosJugadores[0] === 21) {
          btnPedir.disabled   = true;
          btnDetener.disabled = true;
          turnoComputadora(puntosJugadores[0], puntosHTML[puntosHTML.length - 1], divCartasJugadores[divCartasJugadores.length - 1], deck);
      }

  });

  btnDetener.addEventListener('click', () => {
      btnPedir.disabled   = true;
      btnDetener.disabled = true;
      turnoComputadora(puntosJugadores[0], puntosHTML[puntosHTML.length - 1], divCartasJugadores[divCartasJugadores.length - 1], deck);
  });

  return {
      nuevoJuego: inicializarJuego
  };

})();