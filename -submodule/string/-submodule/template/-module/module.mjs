//#region YI

import { arrayUnique } from '@syls/array';
import { stringPaste, configString } from '../../../-module/export.mjs';

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

/** ### templateT
 * - Тип `T`
 * - Версия `0.0.0`
 * 
 * Основной параметр модуля `template`.
 * 
 * @typedef templateT
 * @prop {any} _
 * 
*/

//#endregion
//#region YV



//#endregion

//#region mark

/** ### templateTFMark
 * - Тип `TF`
 * ***
 * 
 * Результирующие параметры функции `mark`.
 * 
 * @typedef {templateTFUMark&templateT} templateTFMark
 * 
*/
/** ### templateTFUMark
 * - Тип `TFU`
 * 
 * Уникальные параметры функции `mark`.
 * 
 * @typedef templateTFUMark
 * @prop {string} value
*/

/** @arg {templateTFMark} t */
function markDeceit(t) {
    
    try {
        
        return markVerify(t);
        
    } catch (e) {
        
        if (config?.strict) {
            
            throw e;
            
        };
        
        return undefined;
        
    } finally {
        
        
        
    };
    
};
/** @arg {templateTFMark} t */
function markVerify(t) {
    
    const {
    
    
    
    } = t;
    
    return markHandle(t);
   
};
/** @arg {templateTFMark} t */
function markHandle(t) {
   
    const {
    
    
    
    } = t;
   
    return markComply(t);
   
};
/** @arg {templateTFMark} t */
function markComply(t) {
   
    const {
    
        value,
        
    } = t;
    
    let result = value;
    let matches = arrayUnique(Array.from(value.matchAll(/\[(\p{L}|\p{N})+\]|\/./gu)).map(match => match[0]));

    for (const match of matches) {

        switch (match) {

            case '/.': {

                let count = 0;

                for (let index = 0; index < result.length;) {


                    const symbol = result[index];

                    if (symbol === '.' && result[index - 1] === '/') {

                        const paste = `${configString.insertBegin}.${count++}${configString.insertEnd}`;
                        
                        result = stringPaste(result, paste, index - 1, 2);

                        index += paste.length;

                    } else {

                        index++;

                    };

                };

            }; break;
            default: {

                result = result.replaceAll(match, `${configString.insertBegin}${match.slice(1, -1)}${configString.insertEnd}`);

            }; break;

        };

    };

    return result;
    
};

/**
 * ### templateMark
 * 
 * ***
 * 
 * Функция для разметки значения шаблона.
 * 
 * ***
 * @arg {string} value `Значение`
*/
export function templateMark(value) {

    return markDeceit({ value });

};

//#endregion

/**
 * @file module.mjs
 * @author Yakhin Nikita Artemovich <mr.y.nikita@gmail.com>
 * @copyright Yakhin Nikita Artemovich 2023
*/