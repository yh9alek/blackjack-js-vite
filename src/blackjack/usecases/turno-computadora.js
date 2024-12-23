import { pedirCarta, acumularPuntos, crearCarta } from "./";

/**
 * Función para ejecutar la lógica de la Compu 👍
 * @param {number} puntosMinimos Puntos del jugador
 * @param {HTMLSmallElement} puntosHTML Etiqueta <small> que contiene los puntos de la CPU
 */
export const turnoComputadora = (puntosMinimos, puntosHTML, divCartasComputadora, deck) => {

    let puntosComputadora = 0;

      do {
          const carta = pedirCarta(deck);

          puntosComputadora = acumularPuntos(carta, puntosComputadora, puntosHTML);
          crearCarta(carta, divCartasComputadora);

          if(puntosMinimos > 21) break;
      } while(puntosComputadora <= puntosMinimos && puntosMinimos <= 21);
      
      setTimeout(() => {
          if(puntosMinimos > 21) {
              alert('Perdiste');
          } else {
              if(puntosComputadora > 21) {
                  alert('Ganaste');
              } else if(puntosMinimos === puntosComputadora) {
                  alert('Empate');
              } else if(puntosMinimos > puntosComputadora) {
                  alert('Ganaste');
              } else alert('Perdiste');
          }
          btnNuevo.disabled = false;
      }, 100);
  };