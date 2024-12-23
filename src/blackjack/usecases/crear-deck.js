import _ from 'underscore';

/**
 * 
 * @param {Array<string>} tipos Ejemplo: ['C', 'D', 'H', 'S']
 * @param {Array<string>} especiales Ejemplo: ['A', 'J', 'Q', 'K']
 * @returns {Array<string>} 
 */
export const crearDeck = (tipos, especiales) => {

    let deck = [];

    // Cartas del 2 al 10
    for(let i = 2; i <= 10; i++) {
        for(let tipo of tipos) {
            deck.push(i + tipo);
        }
    }

    // Cartas Especiales
    for(let esp of especiales) {
        for(let tipo of tipos) {
            deck.push(esp + tipo);
        }
    }

    return _.shuffle(deck);
};