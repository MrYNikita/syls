//#region YI

import { condIsNumber } from '../../cond/-module/module.mjs';
import { configArg as config } from './config.mjs';

//#endregion
//#region YT

/** ### argT
 * - Тип `T`
 * - Версия `0.0.0`
 * 
 * Основной параметр модуля `arg`.
 * 
 * @typedef argT
 * @prop {any} _
 * 
*/

//#endregion
//#region YV



//#endregion

//#region classify 1.0.0

/** ### argTFClassify
 * - Тип `TF`
 * ***
 * 
 * Результирующие параметры функции `classify`.
 * 
 * @typedef {argTFUClassify&argT} argTFClassify
 * 
*/
/** ### argTFUClassify
 * - Тип `TFU`
 * 
 * Уникальные параметры функции `classify`.
 * 
 * @typedef argTFUClassify
 * @prop {any[]} args
*/

/** @arg {argTFClassify} t */
function classifyDeceit(t) {

    try {

        return classifyVerify(t);

    } catch (e) {

        if (config?.strictMode) {

            throw e;

        };

        return undefined;

    } finally {



    };

};
/** @arg {argTFClassify} t */
function classifyVerify(t) {

    const {



    } = t;

    return classifyHandle(t);

};
/** @arg {argTFClassify} t */
function classifyHandle(t) {

    const {



    } = t;

    return classifyComply(t);

};
/** @arg {argTFClassify} t */
function classifyComply(t) {

    const {

        args,

    } = t;

    const result = {

        date: [],
        ject: [],
        bool: [],
        null: [],
        array: [],
        number: [],
        string: [],
        regexp: [],
        bigint: [],
        function: [],
        undefined: [],
        arrayDate: [],
        arrayBool: [],
        arrayJect: [],
        arrayNull: [],
        arrayNumber: [],
        arrayString: [],
        arrayRegexp: [],
        arrayBigint: [],
        arrayFunction: [],
        arrayUndefined: [],

    };

    for (const arg of args) {
        
        for (const index in arg) {

            let segment = null;

            const value = arg[index];

            switch (typeof value) {

                case 'object': {

                    switch (value.constructor.name) {

                        case 'Date': segment = result.date; break;
                        case 'Array': {

                            if (value.every(element => typeof element === 'number')) segment = result.arrayNumber;
                            else if (value.every(element => typeof element === 'bigint')) segment = result.arrayBigint;
                            else if (value.every(element => typeof element === 'boolean')) segment = result.arrayBool;
                            else if (value.every(element => typeof element === 'string')) segment = result.arrayString;
                            else if (value.every(element => typeof element === 'function')) segment = result.arrayFunction;
                            else if (value.every(element => typeof element === 'undefined')) segment = result.arrayUndefined;
                            else if (value.every(element => element instanceof RegExp)) segment = result.arrayRegexp;
                            else if (value.every(element => element instanceof Date)) segment = result.arrayDate;
                            else segment = result.array;

                        } break;
                        case 'RegExp':
                        case 'YRegExp': segment = result.regexp; break;
                        default: segment = result.ject; break;

                    };

                }; break;
                case 'string': segment = result.string; break;
                case 'number': segment = result.number; break;
                case 'bigint': segment = result.bigint; break;
                case 'boolean': segment = result.bool; break;
                case 'function': segment = result.function; break;
                case 'undefined': segment = result.undefined; break;

            };

            if (segment) {

                segment.push([condIsNumber(+index) ? null : index, value]);

            };

        };

    };

    return result;

};

/**
 * ### argClassify
 * 
 * ***
 * 
 * Функция классификации аргументов.
 * 
 * ***
 * @function
*/
export function argClassify(...args) {

    return classifyDeceit({ args });

};

//#endregion

/**
 * @file arg/module.mjs
 * @author Yakhin Nikita Artemovich <mr.y.nikita@gmail.com>
 * @license Apache-2.0
 * @copyright SYLS (Software Y Lib Solutions) 2023
*/