//#region YI

import { YArg } from '@syls/y/arg';
import { YCond } from '@syls/y/cond';
import { condIsArray, condIsBigInt, condIsBool, condIsInstance, condIsJect, condIsNumber, condIsSigSoft, condIsSimilar, condIsString } from "../../cond/-module/module.mjs";
import { configArg as config } from './config.mjs';

//#endregion
//#region YT

/** ### argT
 * 
 * Типы модуля `arg`.
 * 
 * @typedef argT
 * @prop {any} arg
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
 * arrayJect: {}[][],
 * arrayBool: Boolean[][],
 * arrayDate: Date[][],
 * arrayFunc: function[][],
 * arrayNumber: number[][],
 * arrayString: string[][],
 * arrayRegExp: RegExp[][],
 * }} free
 * 
*/

//#endregion
//#region YV



//#endregion

//#region define

/**
 * ### define
 * 
 * 
 * 
 * ***
 * @typedef defineT
 * @prop {} _
 * ***
 * @arg {argT&defineT} args `Аргументы`
 * *** 
 * @since `1.0.0`
 * @version `1.0.0`
 * @function
*/
function define(args) {

    let result;

    try {

        let {

            arg,

        } = args;

        //#region verify



        //#endregion
        //#region handle



        //#endregion
        //#region comply

        let type = '', flagArray = condIsArray(arg);

        if (arg === null || arg === undefined) {

        

        } else if (flagArray && !condIsSimilar(...arg)) {

            type = 'array';

            flagArray = false;

        } else if (condIsBool(arg) || (flagArray && condIsBool(...arg))) {

            type = 'bool';

        } else if (condIsNumber(arg) || (flagArray && condIsNumber(...arg))) {

            type = 'number';

        } else if (condIsString(arg) || (flagArray && condIsString(...arg))) {

            type = 'string';

        } else if (condIsBigInt(arg) || (flagArray && condIsBigInt(...arg))) {

            type = 'bigint';

        } else if (condIsInstance(Function, arg) || (flagArray && condIsInstance(Function, ...arg))) {

            type = 'func';

        } else if (condIsInstance(Date, arg) || (flagArray && condIsInstance(Date, ...arg))) {

            type = 'date';

        } else if (condIsInstance(RegExp, arg) || (flagArray && condIsInstance(RegExp, ...arg))) {

            type = 'regexp';

        } else if (condIsInstance(Map, arg) || (flagArray && condIsInstance(Map, ...arg))) {

            type = 'map';

        } else if (condIsInstance(Set, arg) || (flagArray && condIsInstance(Set, ...arg))) {

            type = 'set';

        } else if (condIsJect(arg) || (flagArray && condIsJect(...arg))) {

            type = 'ject';

        };

        if (flagArray) type = 'array' + type[0].toUpperCase() + type.slice(1);

        result = type;

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
 * ### argDefine
 * 
 * Функция определения типа по переданному аргументу.
 * 
 * ***
 * 
 * 
 * 
 * ***
 * @since `1.0.0`
 * @version `1.0.0`
 * @returns {keyof argT['free']}
 * @function
*/
export function argDefine(arg) {

    return define({ arg, });

};

//#endregion

/**
 * @file arg/module.mjs
 * @author Yakhin Nikita Artemovich <mr.y.nikita@gmail.com>
 * @license Apache-2.0
 * @copyright SYLS (Software Y Lib Solutions) 2023
*/