//#region YI

import { configCond as config } from './config.mjs';

//#endregion
//#region YT

/** ### condT
 * 
 * Типы модуля `cond`.
 * 
 * @typedef condT
 * @prop {boolean} bool
 * @prop {any} ject
 * @prop {number} number
 * @prop {string} string
 * @prop {function} func
 * @prop {any[]} jects
 * @prop {number[]} numbers
 * @prop {string[]} strings
 * @prop {boolean[]} bools
 * @prop {function[]} funcs
 * 
*/

//#endregion
//#region YV



//#endregion

//#region isBool

/**
 * ### isBool
 * 
 * 
 * 
 * ***
 * @typedef isBoolT
 * @prop {} _
 * ***
 * @arg {condT&isBoolT} args `Аргументы`
 * *** 
 * @since `1.0.0`
 * @version `1.0.0`
 * @function
*/
function isBool(args) {
    
    let result;
    
    try {
        
        let {
            
            bools,
            
        } = args;
        
        //#region verify
        
        
        
        //#endregion
        //#region handle
        
        result = true;
        
        //#endregion
        //#region comply
        
        for (const bool of bools) {

            if (typeof bool === 'boolean') continue;

            result = false;

            break;

        };
        
        //#endregion
        
    } catch (err) {
        
        if (config.params.strictMode) {
            
            throw err;
            
        };
        
        
        
    } finally {
        
        
        
    };
    
    return result;
    
};

/**
 * ### condIsBool
 * 
 * Функция проверки указанных значений на принадлежность к логическим значениям.
 * 
 * ***
 * @arg {...condT['bool']} bools `Логические значения`
 * 
 * 
 * ***
 * @since `1.0.0`
 * @version `1.0.0`
 * @function
*/
export function condIsBool(...bools) {

    return isBool({ bools, });

};

//#endregion
//#region isFunc

/**
 * ### isFunc
 * 
 * 
 * 
 * ***
 * @typedef isFuncT
 * @prop {} _
 * ***
 * @arg {condT&isFuncT} args `Аргументы`
 * *** 
 * @since `1.0.0`
 * @version `1.0.0`
 * @function
*/
function isFunc(args) {
    
    let result;
    
    try {
        
        let {
            
            funcs,
            
        } = args;
        
        //#region verify
        
        
        
        //#endregion
        //#region handle
        
        result = true;
        
        //#endregion
        //#region comply
        
        for (const func of funcs) {

            if (typeof func === 'function') continue;

            result = false;

            break;

        };
        
        //#endregion
        
    } catch (err) {
        
        if (config.params.strictMode) {
            
            throw err;
            
        };
        
        
        
    } finally {
        
        
        
    };
    
    return result;
    
};

/**
 * ### condIsFunc
 * 
 * Функция проверки указанных значений на принадлежность к функциям.
 * 
 * ***
 * @arg {...condT['func']} funcs `Функции`
 * 
 * 
 * ***
 * @since `1.0.0`
 * @version `1.0.0`
 * @function
*/
export function condIsFunc(...funcs) {

    return isFunc({ funcs, });

};

//#endregion
//#region isJect

/**
 * ### isJect
 * 
 * 
 * 
 * ***
 * @typedef isJectT
 * @prop {} _
 * ***
 * @arg {condT&isJectT} args `Аргументы`
 * *** 
 * @since `1.0.0`
 * @version `1.0.0`
 * @function
*/
function isJect(args) {
    
    let result;
    
    try {
        
        let {
            
           jects, 
            
        } = args;
        
        //#region verify
        
        
        
        //#endregion
        //#region handle
        
        result = true;
        
        //#endregion
        //#region comply
        
        for (const ject of jects) {

            if (typeof ject === 'object') continue;

            result = false;

            break;

        };
        
        //#endregion
        
    } catch (err) {
        
        if (config.params.strictMode) {
            
            throw err;
            
        };
        
        
        
    } finally {
        
        
        
    };
    
    return result;
    
};

/**
 * ### condIsJect
 * 
 * Функция проверки указанных значений на принадлежность к объектам.
 * 
 * ***
 * @arg {...condT['ject']} jects `Объекты`
 * 
 * 
 * ***
 * @since `1.0.0`
 * @version `1.0.0`
 * @function
*/
export function condIsJect(...jects) {

    return isJect({ jects, });

};

//#endregion
//#region isString

/**
 * ### isString
 * 
 * 
 * 
 * ***
 * @typedef isStringT
 * @prop {} _
 * ***
 * @arg {condT&isStringT} args `Аргументы`
 * *** 
 * @since `1.0.0`
 * @version `1.0.0`
 * @function
*/
function isString(args) {
    
    let result;
    
    try {
        
        let {
            
            strings,
            
        } = args;
        
        //#region verify
        
        
        
        //#endregion
        //#region handle
        
        result = true;
        
        //#endregion
        //#region comply
        
        for (const string of strings) {

            if (typeof string === 'string') continue;

            result = false;

            break;

        };
        
        //#endregion
        
    } catch (err) {
        
        if (config.params.strictMode) {
            
            throw err;
            
        };
        
        
        
    } finally {
        
        
        
    };
    
    return result;
    
};

/**
 * ### condIsString
 * 
 * Функция проверки указанных значений на принадлежность к строкам.
 * 
 * ***
 * @arg {...condT['string']} strings `Строки`
 * 
 * 
 * ***
 * @since `1.0.0`
 * @version `1.0.0`
 * @function
*/
export function condIsString(...strings) {

    return isString({ strings, });

};

//#endregion
//#region isStringSig

/**
 * ### isStringSig
 * 
 * 
 * 
 * ***
 * @typedef isStringSigT
 * @prop {} _
 * ***
 * @arg {condT&isStringSigT} args `Аргументы`
 * *** 
 * @since `1.0.0`
 * @version `1.0.0`
 * @function
*/
function isStringSig(args) {
    
    let result;
    
    try {
        
        let {
            
            strings,
            
        } = args;
        
        //#region verify
        
        
        
        //#endregion
        //#region handle
        
        result = true;
        
        //#endregion
        //#region comply
        
        for (const string of strings) {

            if (condIsString(string) && string !== '') continue;

            result = false;

            break;

        };
        
        //#endregion
        
    } catch (err) {
        
        if (config.params.strictMode) {
            
            throw err;
            
        };
        
        
        
    } finally {
        
        
        
    };
    
    return result;
    
};

/**
 * ### condIsStringSig
 * 
 * Функция проверки указанных значений на принадлежность к значимым строкам.
 * 
 * Значимыми строками считаются строки отличные от \`\`.
 * 
 * ***
 * @arg {...condT['string']} strings `Строки`
 * 
 * 
 * ***
 * @since `1.0.0`
 * @version `1.0.0`
 * @function
*/
export function condIsStringSig(...strings) {

    return isStringSig({ strings, });

};

//#endregion
//#region isStringSem

/**
 * ### isStringSem
 * 
 * 
 * 
 * ***
 * @typedef isStringSemT
 * @prop {} _
 * ***
 * @arg {condT&isStringSemT} args `Аргументы`
 * *** 
 * @since `1.0.0`
 * @version `1.0.0`
 * @function
*/
function isStringSem(args) {
    
    let result;
    
    try {
        
        let {
            
            strings,
            
        } = args;
        
        //#region verify
        
        
        
        //#endregion
        //#region handle
        
        result = true;
        
        //#endregion
        //#region comply
        
        for (const string of strings) {

            if (condIsStringSig(string) && string.match(/[^ \n]/msi)) continue;

            result = false;

            break;

        };
        
        //#endregion
        
    } catch (err) {
        
        if (config.params.strictMode) {
            
            throw err;
            
        };
        
        
        
    } finally {
        
        
        
    };
    
    return result;
    
};

/**
 * ### condIsStringSem
 * 
 * Функция проверки указанных значений на принадлежность к смысловым строкам.
 * 
 * Смысловой считается строка, которая содержит какую-либо информацию.
 * 
 * ***
 * @arg {...condT['string']} strings `Строки`
 * 
 * 
 * ***
 * @since `1.0.0`
 * @version `1.0.0`
 * @function
*/
export function condIsStringSem(...strings) {

    return isStringSem({ strings, });

};

//#endregion
//#region isNumber

/**
 * ### isNumber
 * 
 * 
 * 
 * ***
 * @typedef isNumberT
 * @prop {} _
 * ***
 * @arg {condT&isNumberT} args `Аргументы`
 * *** 
 * @since `1.0.0`
 * @version `1.0.0`
 * @function
*/
function isNumber(args) {
    
    let result;
    
    try {
        
        let {
            
            numbers,
            
        } = args;
        
        //#region verify
        
        
        
        //#endregion
        //#region handle
        
        result = true;
        
        //#endregion
        //#region comply
        
        for (const number of numbers) {

            if (typeof number === 'number') continue;

            result = false;

            break;

        };
        
        //#endregion
        
    } catch (err) {
        
        if (config.params.strictMode) {
            
            throw err;
            
        };
        
        
        
    } finally {
        
        
        
    };
    
    return result;
    
};

/**
 * ### condIsNumber
 * 
 * Функция проверки указанных значений на принадлежность к числам.
 * 
 * ***
 * @arg {...condT['number']} numbers `Числа`
 * 
 * 
 * ***
 * @since `1.0.0`
 * @version `1.0.0`
 * @function
*/
export function condIsNumber(...numbers) {

    return isNumber({ numbers, });

};

//#endregion
//#region isNumberSig

/**
 * ### isNumberSig
 * 
 * 
 * 
 * ***
 * @typedef isNumberSigT
 * @prop {} _
 * ***
 * @arg {condT&isNumberSigT} args `Аргументы`
 * *** 
 * @since `1.0.0`
 * @version `1.0.0`
 * @function
*/
function isNumberSig(args) {
    
    let result;
    
    try {
        
        let {
            
            numbers,
            
        } = args;
        
        //#region verify
        
        
        
        //#endregion
        //#region handle
        
        result = true;
        
        //#endregion
        //#region comply
        
        for (const number of numbers) {

            if (condIsNumber(number) && !isNaN(number)) continue;

            result = false;

            break;

        };
        
        //#endregion
        
    } catch (err) {
        
        if (config.params.strictMode) {
            
            throw err;
            
        };
        
        
        
    } finally {
        
        
        
    };
    
    return result;
    
};

/**
 * ### condIsNumberSig
 * 
 * Функция проверки указанных значений на принадлежность к значимым числам.
 * 
 * Значимыми числами считаются числа отличные от `NaN`.
 * 
 * ***
 * @arg {...condT['number']} numbers `Числа`
 * 
 * 
 * ***
 * @since `1.0.0`
 * @version `1.0.0`
 * @function
*/
export function condIsNumberSig(...numbers) {

    return isNumberSig({ numbers, });

};

//#endregion
//#region isNumberInt

/**
 * ### isNumberInt
 * 
 * 
 * 
 * ***
 * @typedef isNumberIntT
 * @prop {} _
 * ***
 * @arg {condT&isNumberIntT} args `Аргументы`
 * *** 
 * @since `1.0.0`
 * @version `1.0.0`
 * @function
*/
function isNumberInt(args) {
    
    let result;
    
    try {
        
        let {
            
            numbers,
            
        } = args;
        
        //#region verify
        
        
        
        //#endregion
        //#region handle
        
        result = true;
        
        //#endregion
        //#region comply
        
        for (const number of numbers) {

            if (condIsNumberSig(number) && number % 1 === 0) continue;

            result = false;

            break;

        };
        
        //#endregion
        
    } catch (err) {
        
        if (config.params.strictMode) {
            
            throw err;
            
        };
        
        
        
    } finally {
        
        
        
    };
    
    return result;
    
};

/**
 * ### condIsNumberInt
 * 
 * Функция проверки указанных значений на принадлежность к целым числам.
 * 
 * ***
 * @arg {...condT['number']} numbers `Числа`
 * 
 * 
 * ***
 * @since `1.0.0`
 * @version `1.0.0`
 * @function
*/
export function condIsNumberInt(...numbers) {

    return isNumberInt({ numbers, });

};

//#endregion

/**
 * @file cond/module.mjs
 * @author Yakhin Nikita Artemovich <mr.y.nikita@gmail.com>
 * @license Apache-2.0
 * @copyright SYLS (Software Y Lib Solutions) 2023
*/