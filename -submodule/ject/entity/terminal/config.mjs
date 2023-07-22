/** ### configTerminal
 * 
 * Конфигуратор модуля `terminal`.
 * 
*/
export const configTerminal = {

    /**
     * ### sizesDefault
     * 
     * Дефолт размерность.
     * 
     * *** 
     * @type {[number, number]} 
     * @public
    */
    sizesDefault: [process.stdout.rows - 6, process.stdout.columns - 2],
    /**
     * ### coordsDefault
     * 
     * Дефолт координаты.
     * 
     * *** 
     * @type {[number, number]} 
     * @public
    */
    coordsDefault: [0, 0],

};

export default configTerminal;

/**
 * @file config.mjs
 * @author Yakhin Nikita Artemovich <mr.y.nikita@gmail.com>
 * @copyright Yakhin Nikita Artemovich 2023
*/