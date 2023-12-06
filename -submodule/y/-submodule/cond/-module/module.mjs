//#region YI

import { configCond as config } from './config.mjs';

//#endregion
//#region YT

/** ### condT
 * 
 * Типы модуля `cond`.
 * 
 * @typedef condT
 * @prop {any} type
 * @prop {any} ject
 * @prop {any} value
 * @prop {any[]} jects
 * @prop {any[]} values
 * @prop {any[]|{}[]} collection
 * @prop {condT['collection'][]} collections
 * @prop {number} number
 * @prop {number[]} numbers
 * @prop {string} string
 * @prop {string[]} strings
 * @prop {boolean} bool
 * @prop {boolean[]} bools
 * @prop {function} func
 * @prop {function[]} funcs
 * 
*/

//#endregion
//#region YV



//#endregion

//#region isIn

/**
 * ### isIn
 * 
 * 
 * 
 * ***
 * @typedef isInT
 * @prop {} _
 * ***
 * @arg {condT&isInT} args `Аргументы`
 * *** 
 * @since `1.0.0`
 * @version `1.0.0`
 * @function
*/
function isIn(args) {
    
    let result;
    
    try {
        
        let {
            
            values,
            collection,
            
        } = args;
        
        //#region verify
        
        
        
        //#endregion
        //#region handle
        
        
        
        //#endregion
        //#region comply

        if ((!condIsArray(collection) && condIsJect(collection))) collection = Object.keys(collection);

        for (const value of values) if (!collection.includes(value)) return false;

        return true;
        
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
 * ### condIsIn
 * 
 * Функция проверки вхождения элемента в структуру.
 * 
 * ***
 * @arg {...condT['value']} values `Значения`
 * @arg {condT['collection']} collection `Коллекция`
 * ***
 * @since `1.0.0`
 * @version `1.0.0`
 * @function
*/
export function condIsIn(collection, ...values) {

    return isIn({ collection, values, });

};

//#endregion
//#region isInAll

/**
 * ### isInAll
 * 
 * 
 * 
 * ***
 * @typedef isInAllT
 * @prop {} _
 * ***
 * @arg {condT&isInAllT} args `Аргументы`
 * *** 
 * @since `1.0.0`
 * @version `1.0.0`
 * @function
*/
function isInAll(args) {
    
    let result;
    
    try {
        
        let {
            
            values,
            collections,
            
        } = args;
        
        //#region verify
        
        
        
        //#endregion
        //#region handle
        
        
        
        //#endregion
        //#region comply
        
        for (const collection of collections) if (!condIsIn(collection, ...values)) return false; 

        return true;
        
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
 * ### condIsInAll
 * 
 * Функция проверки вхождения элементов во все указанные структуры.
 * 
 * ***
 * @arg {...condT['value']} values `Значения`
 * @arg {condT['collections']} collections `Коллекции`
 * ***
 * @since `1.0.0`
 * @version `1.0.0`
 * @function
*/
export function condIsInAll(collections, ...values) {

    return isInAll({ collections, values, });

};

//#endregion
//#region isInOnce

/**
 * ### isInOnce
 * 
 * 
 * 
 * ***
 * @typedef isInOnceT
 * @prop {} _
 * ***
 * @arg {condT&isInOnceT} args `Аргументы`
 * *** 
 * @since `1.0.0`
 * @version `1.0.0`
 * @function
*/
function isInOnce(args) {
    
    let result;
    
    try {
        
        let {
            
            values,
            collections,
            
        } = args;
        
        //#region verify
        
        
        
        //#endregion
        //#region handle
        
        
        
        //#endregion
        //#region comply
        
        for (const collection of collections) if (condIsIn(collection, ...values)) return true;

        return false;
        
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
 * ### condIsInOnce
 * 
 * Функция проверки вхождения элементов хотя бы в одну из указанных структур.
 * 
 * ***
 * @arg {...condT['value']} values `Значения`
 * @arg {condT['collections']} collections `Коллекции`
 * ***
 * @since `1.0.0`
 * @version `1.0.0`
 * @function
*/
export function condIsInOnce(collections, ...values) {

    return isInOnce({ collections, values, });

};

//#endregion
//#region isSig

/**
 * ### isSig
 * 
 * 
 * 
 * ***
 * @typedef isSigT
 * @prop {} _
 * ***
 * @arg {condT&isSigT} args `Аргументы`
 * *** 
 * @since `1.0.0`
 * @version `1.0.0`
 * @function
*/
function isSig(args) {
    
    let result;
    
    try {
        
        let {
            
            values,
            
        } = args;
        
        //#region verify
        
        
        
        //#endregion
        //#region handle
        
        
        
        //#endregion
        //#region comply
        
        for (const value of values) if (!value || (condIsArray(value) && !value.length) || (condIsJect(value) && !Object.keys(value).length)) return false;

        return true;
        
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
 * ### condIsSig
 * 
 * Функция проверки указанных значений на действительность.
 * недействительными считаются значения:
 * - `null`
 * - `undefined`
 * - `0` - нуль 
 * - `''` - пустая строка
 * - `[]` - пустой массив
 * - `{}` - пустой объект
 * 
 * ***
 * @arg {...condT['value']} values `Значения`
 * 
 * 
 * ***
 * @since `1.0.0`
 * @version `1.0.0`
 * @function
*/
export function condIsSig(...values) {

    return isSig({ values, });

};

//#endregion
//#region isSigSoft

/**
 * ### isSigSoft
 * 
 * 
 * 
 * ***
 * @typedef isSigSoftT
 * @prop {} _
 * ***
 * @arg {condT&isSigSoftT} args `Аргументы`
 * *** 
 * @since `1.0.0`
 * @version `1.0.0`
 * @function
*/
function isSigSoft(args) {
    
    let result;
    
    try {
        
        let {
            
            values,
            
        } = args;
        
        //#region verify
        
        
        
        //#endregion
        //#region handle
        
        
        
        //#endregion
        //#region comply
        
        for (const value of values) if (!value && value !== 0 && value !== '') return false;

        return true;
        
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
 * ### condIsSigSoft
 * 
 * Функция проверки указанных значений на действительность.
 * Мягкая проверка считает значения, такие как пустая строка 
 * - `0 - нуль`
 * - `'' - пустая строка`
 * - `[] - пустой массив`
 * - `{} - пустой объект`
 * 
 * ***
 * @arg {...condT['value']} values `Значения`
 * 
 * 
 * ***
 * @since `1.0.0`
 * @version `1.0.0`
 * @function
*/
export function condIsSigSoft(...values) {

    return isSigSoft({ values, });

};

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
        
        
        
        //#endregion
        //#region comply
        
        for (const ject of jects) if (!(ject instanceof Object)) return false;

        result = true;
        
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
//#region isArray

/**
 * ### isArray
 * 
 * 
 * 
 * ***
 * @typedef isArrayT
 * @prop {} _
 * ***
 * @arg {condT&isArrayT} args `Аргументы`
 * *** 
 * @since `1.0.0`
 * @version `1.0.0`
 * @function
*/
function isArray(args) {
    
    let result;
    
    try {
        
        let {
            
            values,
            
        } = args;
        
        //#region verify
        
        
        
        //#endregion
        //#region handle
        
        
        
        //#endregion
        //#region comply
        
        for (const value of values) if (!Array.isArray(value)) return false;

        return true;
        
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
 * ### condIsArray
 * 
 * Функция проверки указанных значений на принадлежность к массивам.
 * 
 * ***
 * @arg {...condT['value']} values `Значения`
 * 
 * 
 * ***
 * @since `1.0.0`
 * @version `1.0.0`
 * @function
*/
export function condIsArray(...values) {

    return isArray({ values, });

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
//#region isBigInt

/**
 * ### isBigInt
 * 
 * 
 * 
 * ***
 * @typedef isBigIntT
 * @prop {} _
 * ***
 * @arg {condT&isBigIntT} args `Аргументы`
 * *** 
 * @since `1.0.0`
 * @version `1.0.0`
 * @function
*/
function isBigInt(args) {
    
    let result;
    
    try {
        
        let {
            
            values,
            
        } = args;
        
        //#region verify
        
        
        
        //#endregion
        //#region handle
        
        
        
        //#endregion
        //#region comply
        
        for (const value of values) if (value?.constructor !== BigInt) return false;
        
        return true;

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
 * ### condIsBigInt
 * 
 * Функция проверки указанных значений на принадлежнсоть к `bigint`.
 * 
 * ***
 * @arg {...condT['value']} values `Значения`
 * 
 * 
 * ***
 * @since `1.0.0`
 * @version `1.0.0`
 * @function
*/
export function condIsBigInt(...values) {

    return isBigInt({ values, });

};

//#endregion
//#region isSimilar

/**
 * ### isSimilar
 * 
 * 
 * 
 * ***
 * @typedef isSimilarT
 * @prop {} _
 * ***
 * @arg {condT&isSimilarT} args `Аргументы`
 * *** 
 * @since `1.0.0`
 * @version `1.0.0`
 * @function
*/
function isSimilar(args) {
    
    let result;
    
    try {
        
        let {
            
            values,
            
        } = args;
        
        //#region verify
        
        
        
        //#endregion
        //#region handle
        
        
        
        //#endregion
        //#region comply
        
        const reference = values.pop();

        for (const value of values) if (reference?.constructor !== value?.constructor) return false;

        return true;
        
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
 * ### condIsSimilar
 * 
 * Функция проверки указанных значений на однородность.
 * 
 * ***
 * @arg {...condT['value']} values `Значения`
 * 
 * 
 * ***
 * @since `1.0.0`
 * @version `1.0.0`
 * @function
*/
export function condIsSimilar(...values) {

    return isSimilar({ values, });

};

//#endregion
//#region isInstance

/**
 * ### isInstance
 * 
 * 
 * 
 * ***
 * @typedef isInstanceT
 * @prop {} _
 * ***
 * @arg {condT&isInstanceT} args `Аргументы`
 * *** 
 * @since `1.0.0`
 * @version `1.0.0`
 * @function
*/
function isInstance(args) {
    
    let result;
    
    try {
        
        let {
            
            type,
            values,
            
        } = args;
        
        //#region verify
        
        
        
        //#endregion
        //#region handle
        
        
        
        //#endregion
        //#region comply
        
        if (Array.isArray(type)) {

            for (const value of values) {

                let flag = false;

                for (const stype of type) if (value instanceof stype) {

                    flag = true;

                    break;

                };

                if (!flag) return false;

            };

        } else for (const value of values) if (!(value instanceof type)) return false;

        result = true;
        
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
 * ### condIsInstance
 * 
 * Функция проверки наследственности указанных значений от указанных классов.
 * 
 * ***
 * @arg {condT['type']} type `Тип`
 * @arg {...condT['value']} values `Значения`
 * ***
 * @since `1.0.0`
 * @version `1.0.0`
 * @function
*/
export function condIsInstance(type, ...values) {

    return isInstance({ type, values, });

};

//#endregion
//#region isInstanceAll

/**
 * ### isInstanceAll
 * 
 * 
 * 
 * ***
 * @typedef isInstanceAllT
 * @prop {} _
 * ***
 * @arg {condT&isInstanceAllT} args `Аргументы`
 * *** 
 * @since `1.0.0`
 * @version `1.0.0`
 * @function
*/
function isInstanceAll(args) {
    
    let result;
    
    try {
        
        let {
            
            type,
            values,
            
        } = args;
        
        //#region verify
        
        
        
        //#endregion
        //#region handle
        
        
        
        //#endregion
        //#region comply
        
        if (Array.isArray(type)) {

            for (const value of values) for (const stype of type) if (!(value instanceof stype)) return false;

        } else for (const value of values) if (!(value instanceof type)) return false;

        result = true;
        
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
 * ### condIsInstanceAll
 * 
 * Функция строгой проверки наследственности.
 * 
 * ***
 * @arg {condT['type']} type `Тип`
 * @arg {...condT['value']} values `Значения`
 * ***
 * @since `1.0.0`
 * @version `1.0.0`
 * @function
*/
export function condIsInstanceAll(type, ...values) {

    return isInstanceAll({ type, values, });

};

//#endregion
//#region isPrimitive

/**
 * ### isPrimitive
 * 
 * 
 * 
 * ***
 * @typedef isPrimitiveT
 * @prop {} _
 * ***
 * @arg {condT&isPrimitiveT} args `Аргументы`
 * *** 
 * @since `1.0.0`
 * @version `1.0.0`
 * @function
*/
function isPrimitive(args) {
    
    let result;
    
    try {
        
        let {
            
            values,
            
        } = args;
        
        //#region verify
        
        
        
        //#endregion
        //#region handle
        
        
        
        //#endregion
        //#region comply

        for (const value of values) if (['function', 'object', 'symbol', 'bigint'].includes(typeof value) && value !== null && value !== undefined) return false;

        result = true;
        
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
 * ### condIsPrimitive
 * 
 * Функция проверки значений на принадлежность к примитивам.
 * 
 * ***
 * @arg {...condT['value']} values `Значения`
 * 
 * 
 * ***
 * @since `1.0.0`
 * @version `1.0.0`
 * @function
*/
export function condIsPrimitive(...values) {

    return isPrimitive({ values, });

};

//#endregion

/**
 * @file cond/module.mjs
 * @author Yakhin Nikita Artemovich <mr.y.nikita@gmail.com>
 * @license Apache-2.0
 * @copyright SYLS (Software Y Lib Solutions) 2023
*/