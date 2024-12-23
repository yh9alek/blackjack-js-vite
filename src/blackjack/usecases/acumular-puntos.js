import { valorCarta } from "./";

/**
 * 
 * @param {string} carta Carta en cuestión 
 * @param {number} puntosJugador Puntos del jugador en cuestión
 * @param {HTMLSmallElement} puntosHTML Small que contiene los puntos del jugador
 */
export const acumularPuntos = (carta, puntosJugador, puntosHTML) => {
    puntosJugador += valorCarta(carta);
    puntosHTML.innerText = puntosJugador;
    return puntosJugador;
};