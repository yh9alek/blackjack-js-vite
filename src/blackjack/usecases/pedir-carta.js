
/**
 * 
 * @param {Array<string>} deck Array con las cartas del juego
 * @returns {string} El valor aleatorio de una carta
 */
export const pedirCarta = (deck) => {
    if(!deck.length) throw 'No hay cartas en el deck';
    return deck.pop();
};