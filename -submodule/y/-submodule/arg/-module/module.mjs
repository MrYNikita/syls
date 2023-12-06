//#region YI

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
 * @prop {number} index
 * @prop {keyof argT['free']} prop
 * @prop {{
 * map: Map[],
 * set: Set[],
 * ject: {}[],
 * bool: Boolean[],
 * date: Date[],
 * func: function[],
 * number: number[],
 * string: string[],
 * regexp: RegExp[],
 * array: any[][],
 * arrayMap: Map[][],
 * arraySet: Set[][],
 * arrayBool: Boolean[][],
 * arrayDate: Date[][],
 * arrayFunc: function[][],
 * arrayNumber: number[][],
 * arrayString: string[][],
 * arrayRegExp: RegExp[][],
 * }} free
 * 
*/
/** ### argTArg
 * 
 * @typedef {[string, Y1]} argTArg
 * @template Y1
 * 
*/
/** ### argTArgs
 * 
 * @typedef argTArgs
 * @prop {argTArg<null>[]} null 
 * @prop {argTArg<Date>[]} date 
 * @prop {argTArg<Object>[]} ject 
 * @prop {argTArg<boolean>[]} bool 
 * @prop {argTArg<function>[]} func
 * @prop {argTArg<number>[]} number
 * @prop {argTArg<string>[]} string 
 * @prop {argTArg<RegExp>[]} regexp 
 * @prop {argTArg<bigint>[]} bigint 
 * @prop {argTArg<any[]>[]} array 
 * @prop {argTArg<null[]>[]} arrayNull 
 * @prop {argTArg<Date[]>[]} arrayDate 
 * @prop {argTArg<Object[]>[]} arrayJect 
 * @prop {argTArg<boolean[]>[]} arrayBool 
 * @prop {argTArg<function[]>[][]} arrayFunc 
 * @prop {argTArg<number[]>[][]} arrayNumber 
 * @prop {argTArg<string[]>[][]} arrayString 
 * @prop {argTArg<RegExp[]>[][]} arrayRegexp 
 * @prop {argTArg<bigint[]>[][]} arrayBigint 
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
        func: [],
        array: [],
        number: [],
        string: [],
        regexp: [],
        bigint: [],
        undefined: [],
        arrayDate: [],
        arrayBool: [],
        arrayJect: [],
        arrayNull: [],
        arrayFunc: [],
        arrayNumber: [],
        arrayString: [],
        arrayRegexp: [],
        arrayBigint: [],
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

                            if (value.length) {

                                if (value.every(element => typeof element === 'number')) segment = result.arrayNumber;
                                else if (value.every(element => typeof element === 'bigint')) segment = result.arrayBigint;
                                else if (value.every(element => typeof element === 'boolean')) segment = result.arrayBool;
                                else if (value.every(element => typeof element === 'string')) segment = result.arrayString;
                                else if (value.every(element => typeof element === 'function')) segment = result.arrayFunc;
                                else if (value.every(element => typeof element === 'undefined')) segment = result.arrayUndefined;
                                else if (value.every(element => element instanceof RegExp)) segment = result.arrayRegexp;
                                else if (value.every(element => element instanceof Date)) segment = result.arrayDate;
                                else segment = result.array;

                            } else {

                                segment = result.array;

                            };

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
                case 'function': segment = result.func; break;
                case 'undefined': segment = result.undefined; break;

            };

            if (segment) {

                segment.push([typeof +index === 'number' ? null : index, value]);

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