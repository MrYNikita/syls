//#region YI

import { YMany } from '@syls/many';

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

/** ### condT
 * - Тип `T`
 * - Версия `0.0.0`
 * - Модуль `bool\cond`
 *
 * Основной параметр модуля `cond`.
 *
 * @typedef condT
 * @prop {} _
 *
*/
/** ### condTValue
 * - Тип `T`
 * - Версия `0.0.0`
 * - Модуль `bool\cond`
 *
 *
 *
 * @typedef condTValue
 * @prop {any} value
 *
*/
/** ### condTValues
 * - Тип `T`
 * 
 * 
 * 
 * @typedef condTValues
 * @prop {any[]} values
 * 
*/

//#endregion
//#region YV



//#endregion

//#region isType 0.0.1

/** ### condTFIsType
 * - Тип `TF`
 * - Версия `0.0.0`
 * - Модуль `bool\cond`
 * ***
 *
 * Результирующие параметры функции `isType`.
 *
 * @typedef {condTFUIsType&condT&condTValue} condTFIsType
 *
*/
/** ### condTFUIsType
 * - Тип `TFU`
 * - Версия `0.0.0`
 * - Модуль `bool\cond`
 *
 * Уникальные параметры функции `isType`.
 *
 * @typedef condTFUIsType
 * @prop {} type
*/

/** @arg {condTFIsType} t */
function isTypeDeceit(t) {

    try {

        return isTypeVerify(t);

    } catch (e) {

        if (config?.strict) {

            throw e;

        };

        return undefined;

    } finally {



    };

};
/** @arg {condTFIsType} t */
function isTypeVerify(t) {

    const {



    } = t;

    return isTypeHandle(t);

};
/** @arg {condTFIsType} t */
function isTypeHandle(t) {

    const {



    } = t;

    return isTypeComply(t);

};
/** @arg {condTFIsType} t */
function isTypeComply(t) {

    const {

        type,
        value,

    } = t;

    if (value?.constructor === type) {

        return true;

    } else {

        return false;

    };

};

/**
 * ### condIsType
 * - Версия `0.0.0`
 * - Цепочка `DVHCa`
 * - Модуль `bool\cond`
 * ***
 *
 * Функция проверки значения на принадлежность к указанному типу.
 *
 * ***
 * @arg value `Значение`
 * @arg {G} type `Тип`
 * @template G
*/
export function condIsType(value, type) {

    return isTypeDeceit({ value, type, });

};

//#endregion
//#region isBool 0.0.1

/** ### condTFIsBool
 * - Тип `TF`
 * - Версия `0.0.0`
 * - Модуль `bool\cond`
 * ***
 *
 * Результирующие параметры функции `isBool`.
 *
 * @typedef {condTFUIsBool&condT&condTValue} condTFIsBool
 *
*/
/** ### condTFUIsBool
 * - Тип `TFU`
 * - Версия `0.0.0`
 * - Модуль `bool\cond`
 *
 * Уникальные параметры функции `isBool`.
 *
 * @typedef condTFUIsBool
 * @prop {} _
*/

/** @arg {condTFIsBool} t */
function isBoolDeceit(t) {

    try {

        return isBoolVerify(t);

    } catch (e) {

        if (config?.strict) {

            throw e;

        };

        return undefined;

    } finally {



    };

};
/** @arg {condTFIsBool} t */
function isBoolVerify(t) {

    const {



    } = t;

    return isBoolHandle(t);

};
/** @arg {condTFIsBool} t */
function isBoolHandle(t) {

    const {



    } = t;

    return isBoolComply(t);

};
/** @arg {condTFIsBool} t */
function isBoolComply(t) {

    const {

        values,

    } = t;

    for (const value of values) {

        if (value?.constructor !== Boolean) {

            return false;

        };

    };

    return true;

};

/**
 * ### condIsBool
 * - Версия `0.0.0`
 * - Цепочка `DVHCa`
 * - Модуль `bool\cond`
 * ***
 *
 * Функция проверки значений на принадлежнсоть к логическим значениям.
 *
 * ***
 * @arg {...any} values
*/
export function condIsBool(...values) {

    return isBoolDeceit({ values });

};

//#endregion
//#region isMany 0.0.1

/** ### condTFIsMany
 * - Тип `TF`
 * - Версия `0.0.0`
 * - Модуль `bool\cond`
 * ***
 *
 * Результирующие параметры функции `isMany`.
 *
 * @typedef {condTFUIsMany&condT&condTValues} condTFIsMany
 *
*/
/** ### condTFUIsMany
 * - Тип `TFU`
 * - Версия `0.0.0`
 * - Модуль `bool\cond`
 *
 * Уникальные параметры функции `isMany`.
 *
 * @typedef condTFUIsMany
 * @prop {any} _
*/

/** @arg {condTFIsMany} t */
function isManyDeceit(t) {

    try {

        return isManyVerify(t);

    } catch (e) {

        if (config?.strict) {

            throw e;

        };

        return undefined;

    } finally {



    };

};
/** @arg {condTFIsMany} t */
function isManyVerify(t) {

    const {



    } = t;

    return isManyHandle(t);

};
/** @arg {condTFIsMany} t */
function isManyHandle(t) {

    const {



    } = t;

    return isManyComply(t);

};
/** @arg {condTFIsMany} t */
function isManyComply(t) {

    const {

        values,

    } = t;

    for (const value of values) {

        if (![Set, Map, YMany, Array, String].some(type => value?.constructor === type || value instanceof type)) {

            return false;

        };

    };

    return true;

};

/**
 * ### condIsMany
 * - Версия `0.0.0`
 * - Цепочка `DVHCa`
 * - Модуль `bool\cond`
 * ***
 *
 * Функция проверки значений на принадлежность ко множествам.
 *
 * Ко множествам относятся:
 * - Set;
 * - Map;
 * - YMany;
 * - Array;
 * - String;
 * - Наследуемые от них элементы;
 *
 * ***
 * @arg values `Значения`
*/
export function condIsMany(...values) {

    return isManyDeceit({ values });

};

//#endregion

//#region isString 0.0.1

/** ### condTFIsString
 * - Тип `TF`
 * - Версия `0.0.0`
 * - Модуль `bool\cond`
 * ***
 *
 * Результирующие параметры функции `isString`.
 *
 * @typedef {condTFUIsString&condT&condTValues} condTFIsString
 *
*/
/** ### condTFUIsString
 * - Тип `TFU`
 * - Версия `0.0.0`
 * - Модуль `bool\cond`
 *
 * Уникальные параметры функции `isString`.
 *
 * @typedef condTFUIsString
 * @prop {} _
*/

/** @arg {condTFIsString} t */
function isStringDeceit(t) {

    try {

        return isStringVerify(t);

    } catch (e) {

        if (config?.strict) {

            throw e;

        };

        return undefined;

    } finally {



    };

};
/** @arg {condTFIsString} t */
function isStringVerify(t) {

    const {



    } = t;

    return isStringHandle(t);

};
/** @arg {condTFIsString} t */
function isStringHandle(t) {

    const {



    } = t;

    return isStringComply(t);

};
/** @arg {condTFIsString} t */
function isStringComply(t) {

    const {

        values,

    } = t;

    for (const value of values) {

        if (!condIsType(value, String)) {

            return false;

        };

    };

    return true;

};

/**
 * ### condIsString
 * - Версия `0.0.0`
 * - Цепочка `DVHCa`
 * - Модуль `bool\cond`
 * ***
 *
 * Функция проверки значений на принадлежность к строке.
 *
 * ***
 * @arg {...any} values `Значения`
*/
export function condIsString(...values) {

    return isStringDeceit({ values, });

};

//#endregion
//#region isStringValid 0.0.1

/** ### condTFIsStringValid
 * - Тип `TF`
 * - Версия `0.0.0`
 * - Модуль `bool\cond`
 * ***
 *
 * Результирующие параметры функции `isStringValid`.
 *
 * @typedef {condTFUIsStringValid&condT&condTValues} condTFIsStringValid
 *
*/
/** ### condTFUIsStringValid
 * - Тип `TFU`
 * - Версия `0.0.0`
 * - Модуль `bool\cond`
 *
 * Уникальные параметры функции `isStringValid`.
 *
 * @typedef condTFUIsStringValid
 * @prop {} _
*/

/** @arg {condTFIsStringValid} t */
function isStringValidDeceit(t) {

    try {

        return isStringValidVerify(t);

    } catch (e) {

        if (config?.strict) {

            throw e;

        };

        return undefined;

    } finally {



    };

};
/** @arg {condTFIsStringValid} t */
function isStringValidVerify(t) {

    const {



    } = t;

    return isStringValidHandle(t);

};
/** @arg {condTFIsStringValid} t */
function isStringValidHandle(t) {

    const {



    } = t;

    return isStringValidComply(t);

};
/** @arg {condTFIsStringValid} t */
function isStringValidComply(t) {

    const {

        values,

    } = t;

    for (const value of values) {

        if (!(condIsString(value) && value !== '')) {

            return false;

        };

    };

    return true;

};

/**
 * ### condIsStringValid
 * - Версия `0.0.0`
 * - Цепочка `DVHCa`
 * - Модуль `bool\cond`
 * ***
 *
 * Функция проверки значений на принадлежнсоть к валидным строкам.
 *
 * ***
 * @arg {...any} values `Значения`
*/
export function condIsStringValid(...values) {

    return isStringValidDeceit({ values });

};

//#endregion

//#region isFloat 0.0.1

/** ### condTFIsFloat
 * - Тип `TF`
 * - Версия `0.0.0`
 * - Модуль `bool\cond`
 * ***
 *
 * Результирующие параметры функции `isFloat`.
 *
 * @typedef {condTFUIsFloat&condT&condTValues} condTFIsFloat
 *
*/
/** ### condTFUIsFloat
 * - Тип `TFU`
 * - Версия `0.0.0`
 * - Модуль `bool\cond`
 *
 * Уникальные параметры функции `isFloat`.
 *
 * @typedef condTFUIsFloat
 * @prop {} _
*/

/** @arg {condTFIsFloat} t */
function isFloatDeceit(t) {

    try {

        return isFloatVerify(t);

    } catch (e) {

        if (config?.strict) {

            throw e;

        };

        return undefined;

    } finally {



    };

};
/** @arg {condTFIsFloat} t */
function isFloatVerify(t) {

    const {



    } = t;

    return isFloatHandle(t);

};
/** @arg {condTFIsFloat} t */
function isFloatHandle(t) {

    const {



    } = t;

    return isFloatComply(t);

};
/** @arg {condTFIsFloat} t */
function isFloatComply(t) {

    const {

        values,

    } = t;

    for (const value of values) {

        if (!(condIsNumber(value) && value % 1 !== 0)) {

            return false;

        };

    };

    return true;

};

/**
 * ### condIsFloat
 * - Версия `0.0.0`
 * - Цепочка `DVHCa`
 * - Модуль `bool\cond`
 * ***
 *
 * Функция для проверки значениий на принадлежность к дробным числам.
 *
 * ***
 * @arg {...any} values `Значения`
*/
export function condIsFloat(values) {

    return isFloatDeceit({ values });

};

//#endregion
//#region isNumber 0.0.1

/** ### condTFIsNumber
 * - Тип `TF`
 * - Версия `0.0.0`
 * - Модуль `bool\cond`
 * ***
 *
 * Результирующие параметры функции `isNumber`.
 *
 * @typedef {condTFUIsNumber&condT&condTValues} condTFIsNumber
 *
*/
/** ### condTFUIsNumber
 * - Тип `TFU`
 * - Версия `0.0.0`
 * - Модуль `bool\cond`
 *
 * Уникальные параметры функции `isNumber`.
 *
 * @typedef condTFUIsNumber
 * @prop {} _
*/

/** @arg {condTFIsNumber} t */
function isNumberDeceit(t) {

    try {

        return isNumberVerify(t);

    } catch (e) {

        if (config?.strict) {

            throw e;

        };

        return undefined;

    } finally {



    };

};
/** @arg {condTFIsNumber} t */
function isNumberVerify(t) {

    const {



    } = t;

    return isNumberHandle(t);

};
/** @arg {condTFIsNumber} t */
function isNumberHandle(t) {

    const {



    } = t;

    return isNumberComply(t);

};
/** @arg {condTFIsNumber} t */
function isNumberComply(t) {

    const {

        values,

    } = t;

    for (const value of values) {

        if (!((value && condIsType(value, Number)) || value === 0)) {

            return false;
    
        };

    };

    return true;

};

/**
 * ### condIsNumber
 * - Версия `0.0.1`
 * - Цепочка `DVHCa`
 * - Модуль `bool\cond`
 * ***
 *
 * Функция проверки указанных значений на принадлежность к числам.
 *
 * ***
 * @arg {...any} values `Значения`
*/
export function condIsNumber(...values) {

    return isNumberDeceit({ values });

};

//#endregion
//#region isNumberLimit 0.0.1

/** ### condTFIsNumberLimit
 * - Тип `TF`
 * - Версия `0.0.0`
 * - Модуль `bool\cond`
 * ***
 *
 * Результирующие параметры функции `isNumberLimit`.
 *
 * @typedef {condTFUIsNumberLimit&condT&condTValues} condTFIsNumberLimit
 *
*/
/** ### condTFUIsNumberLimit
 * - Тип `TFU`
 * - Версия `0.0.0`
 * - Модуль `bool\cond`
 *
 * Уникальные параметры функции `isNumberLimit`.
 *
 * @typedef condTFUIsNumberLimit
 * @prop {} _
*/

/** @arg {condTFIsNumberLimit} t */
function isNumberLimitDeceit(t) {

    try {

        return isNumberLimitVerify(t);

    } catch (e) {

        if (config?.strict) {

            throw e;

        };

        return undefined;

    } finally {



    };

};
/** @arg {condTFIsNumberLimit} t */
function isNumberLimitVerify(t) {

    const {



    } = t;

    return isNumberLimitHandle(t);

};
/** @arg {condTFIsNumberLimit} t */
function isNumberLimitHandle(t) {

    const {



    } = t;

    return isNumberLimitComply(t);

};
/** @arg {condTFIsNumberLimit} t */
function isNumberLimitComply(t) {

    const {

        values,

    } = t;

    for (const value of values) {

        if (!(condIsNumber(value) && Math.abs(value) !== Infinity)) {

            return false;

        };

    };

    return true;

};

/**
 * ### condIsNumberLimit
 * - Версия `0.0.0`
 * - Цепочка `DVHCa`
 * - Модуль `bool\cond`
 * ***
 *
 * Функция проверки значений на принадлежность к конечным числам, отличным от бесконечности.
 *
 * ***
 * @arg {...any} values `Значения`
*/
export function condIsNumberLimit(...values) {

    return isNumberLimitDeceit({ values });

};

//#endregion

/**
 * @file module.mjs
 * @author Yakhin Nikita Artemovich <mr.y.nikita@gmail.com>
 * @copyright Yakhin Nikita Artemovich 2023
*/