//#region YI

import { numberGetRandomReal } from '@syls/number';

/** @type {import('./config.mjs')['default']?} */
let config = null;

await import('./config.mjs')

    .then(c => config = c.default)
    .catch(e => e);

/** @type {import('./error.mjs')['default']?} */
let error = null;

await import('./error.mjs')

    .then(i => error = i.default)
    .catch(e => e);

//#endregion
//#region YT

/** ### cryptoT
 * - Тип `T`
 * - Версия `0.0.0`
 * 
 * Основной параметр модуля `crypto`.
 * 
 * @typedef cryptoT
 * @prop {any} _
 * 
*/

//#endregion
//#region YV



//#endregion

//#region generatePasswordBlock 0.0.0

/** ### cryptoTFGeneratePasswordBlock
 * - Тип `TF`
 * - Версия `0.0.0`
 * ***
 * 
 * Результирующие параметры функции `generatePasswordBlock`.
 * 
 * @typedef {cryptoTFUGeneratePasswordBlock&cryptoT} cryptoTFGeneratePasswordBlock
 * 
*/
/** ### cryptoTFUGeneratePasswordBlock
 * - Тип `TFU`
 * - Версия `0.0.0`
 * 
 * Уникальные параметры функции `generatePasswordBlock`.
 * 
 * @typedef cryptoTFUGeneratePasswordBlock
 * @prop {number} blockCount
 * @prop {number} blockLength
 * @prop {boolean} includeBlockNumbers
 * @prop {string[]} symbols
*/

/** @arg {cryptoTFGeneratePasswordBlock} t */
function generatePasswordBlockDeceit(t) {
    
    try {
        
        return generatePasswordBlockVerify(t);
        
    } catch (e) {
        
        if (config?.strict) {
            
            throw e;
            
        };
        
        return undefined;
        
    } finally {
        
        
        
    };
    
};
/** @arg {cryptoTFGeneratePasswordBlock} t */
function generatePasswordBlockVerify(t) {
    
    const {
    
    
    
    } = t;
    
    return generatePasswordBlockHandle(t);
   
};
/** @arg {cryptoTFGeneratePasswordBlock} t */
function generatePasswordBlockHandle(t) {
   
    const {
    
    
    
    } = t;
   
    return generatePasswordBlockComply(t);
   
};
/** @arg {cryptoTFGeneratePasswordBlock} t */
function generatePasswordBlockComply(t) {
   
    const {
    
        symbols,
        blockCount,
        blockLength,
        includeBlockNumbers,
    
    } = t;
    
    const symbolsIndexLast = symbols.length - 1;
    const result = new Array(blockCount + (includeBlockNumbers ? blockCount - 1 : 0)).fill(0).map((_, blockIndex) => {

        const block = new Array(blockLength).fill(0);

        if (includeBlockNumbers && blockIndex % 2 === 1) {

            block.forEach((_, index) => block[index] = numberGetRandomReal(0, 9));

        } else {

            block.forEach((_, index) => block[index] = symbols[numberGetRandomReal(0, symbolsIndexLast)]);

        };

        return block.join('');

    }).join('_');

    return result;
    
};

/**
 * ### cryptoGeneratePasswordBlock
 * - Версия `0.0.0`
 * ***
 * 
 * Функция генерации паролей блочного типа.
 * 
 * ***
 * @arg {number} blockCount `Количество блоков`
 * @arg {number} blockLength `Длина блока`
 * @arg {boolean} includeBlockNumbers `Включение числовых блоков`
 * @arg {...string} symbols `Символы`
*/
export function cryptoGeneratePasswordBlock(blockCount, blockLength, includeBlockNumbers, ...symbols) {

    return generatePasswordBlockDeceit({ blockCount, blockLength, includeBlockNumbers, symbols });

};

//#endregion

/**
 * @file module.mjs
 * @author Yakhin Nikita Artemovich <mr.y.nikita@gmail.com>
 * @copyright Yakhin Nikita Artemovich 2023
*/