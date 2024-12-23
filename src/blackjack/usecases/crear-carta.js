/**
 * 
 * @param {string} carta Carta en cuestión
 * @param {HTMLDivElement} divCartasJugadores Div que contiene cartas del jugador en cuestión
 */
export const crearCarta = (carta, divCartasJugador) => {
    const imgCarta = document.createElement('img');
    imgCarta.src = `/assets/cartas/${carta}.png`;
    imgCarta.classList.add('carta');

    divCartasJugador.append(imgCarta);
};