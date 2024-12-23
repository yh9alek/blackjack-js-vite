/**
 * 
 * @param {string} carta Valor de la carta en string 
 * @returns {number} Valor de la carta convertido a number
 */
export const valorCarta = (carta) => {
    const valor = carta.substring(0, carta.length - 1);
    return isNaN(valor) ? valor === 'A' ? 11
                                        : 10
                        : valor * 1;
};