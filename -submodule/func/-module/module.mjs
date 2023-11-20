//#region YI

import { YArg } from '@syls/y/arg';
import { YCond, condIsNumberSig } from '@syls/y/cond';
import { configFunc as config } from './config.mjs';

//#endregion
//#region YT

/** ### funcT
 * 
 * Типы модуля `func`.
 * 
 * @typedef funcT
 * @prop {any} value
 * @prop {any[]} array
 * @prop {number} count
 * @prop {number} indexEnd
 * @prop {number} indexStart
 * @prop {boolean} initially
 * @prop {function} func
 * @prop {function[]} funcs
 * @prop {[()=>void, apply: boolean, ...args: any ]} elementBypass
 * @prop {funcT['elementBypass'][]} arrayBypass
 * @prop {(index: number)=>void} funcRange
 * @prop {(index: number, element: any, array: any[])=>{ index: number?, }} funcRangeIn
 * @prop {funcT['funcRangeIn'][]} funcsRangeIn
 * @prop {funcT['funcRange']} funcsRange
 * @prop {()=>boolean|boolean} cond
*/

//#endregion
//#region YV



//#endregion

//#region repeat

/**
 * ### repeat
 * 
 * 
 * 
 * ***
 * @typedef repeatT
 * @prop {} _
 * ***
 * @arg {funcT&repeatT} args `Аргументы`
 * *** 
 * @since `1.0.0`
 * @version `1.0.0`
 * @function
*/
function repeat(args) {
    
    let result;
    
    try {
        
        let {
            
            count,
            funcs,
            
        } = args;
        
        //#region verify
        
        
        
        //#endregion
        //#region handle
        
        
        
        //#endregion
        //#region comply
        
        result = funcExecRange(0, --count, ...funcs);
        
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
 * ### funcRepeat
 * 
 * Выполняет функции указанное количество раз.
 * 
 * ***
 * @arg {funcT['count']} count `Счётчик`
 * @arg {...funcT['func']} funcs `Функции`
 * 
 * ***
 * @since `1.0.0`
 * @version `1.0.0`
 * @function
*/
export function funcRepeat(count, ...funcs) {

    return repeat({ count, funcs, });

};

//#endregion
//#region bypass

/**
 * ### bypass
 * 
 * 
 * 
 * ***
 * @typedef bypassT
 * @prop {} _
 * ***
 * @arg {funcT&bypassT} args `Аргументы`
 * *** 
 * @since `1.0.0`
 * @version `1.0.0`
 * @function
*/
function bypass(args) {
    
    let result;
    
    try {
        
        let {
            
            value, 
            arrayBypass,
            
        } = args;
        
        //#region verify
        
        
        
        //#endregion
        //#region handle
        
        
        
        //#endregion
        //#region comply
        
        value = arrayBypass[0][1] ? arrayBypass[0][0].apply(value, arrayBypass[0].slice(2)) : arrayBypass[0][0](value, ...arrayBypass[0].slice(2));
        
        funcExecRangeIn(arrayBypass.splice(1), (i, e, a) => value = e[1] ? e[0].apply(value, e.slice(2)) : e[0](value, ...e.slice(2)));

        result = value;

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
 * ### bypass
 * 
 * Функция последовательного выполнения функций с передачей результата каждой как первого аргумента для следующей функции.
 * 
 * Первый аргумент выступает изначальным значением.
 * Первая функция в перечне выполнится с данным значением.
 * Результат первой функции передастся следующей функции и т.д.
 * В результате выполнения последней функции получится итоговое значение.
 * 
 * Каждая функция указывается массивом параметров:
 * 1. `func`  - Сама функция;
 * 2. `apply` - Позволяет вызвать функцию через метод `apply`;
 * 3. `args`  - Перечень арргументов для данной функции;
 * 
 * ***
 * @arg {any} value `Значение`
 * @arg {...funcT['elementBypass']} arrayBypass `Функции`
 * ***
 * @since `1.0.0`
 * @version `1.0.0`
 * @function
*/
export function funcBypass(value, ...arrayBypass) {

    return bypass({ value, arrayBypass, });

};

//#endregion
//#region execWhile

/**
 * ### execWhile
 * 
 * 
 * 
 * ***
 * @typedef execWhileT
 * @prop {} _
 * ***
 * @arg {funcT&execWhileT} args `Аргументы`
 * *** 
 * @since `1.0.0`
 * @version `1.0.0`
 * @function
*/
function execWhile(args) {
    
    let result;
    
    try {
        
        let {
            
            cond,
            funcs,
            initially,
            
        } = args;
        
        //#region verify
        
        
        
        //#endregion
        //#region handle
        
        
        
        //#endregion
        //#region comply
        
        let index = 0;

        if (initially) for (const func of funcs) func(index++);

        if (typeof cond === 'boolean') while (cond) for (const func of funcs) func(index++); else while (cond()) for (const func of funcs) func(index++);

        result = true;
        
        //#endregion
        
    } catch (err) {
        
        if (config.params.strictMode) {
            
            throw err;
            
        };
        
        result = false;
        
    } finally {
        
        
        
    };
    
    return result;
    
};

/**
 * ### execWhile
 * 
 * Функция исполнения указанных функций в цикле до тех пор, пока не будет выполнено указанное условие.
 * 
 * ***
 * @arg {funcT['cond']} cond `условие`
 * @arg {...funcT['func']} funcs `Функции`
 * @arg {funcT['initially']} initially `Первичность`
 * 
 * При указании `true` приведет к выполнению цикла, аналогично `do ... while`.
 * 
 * ***
 * @since `1.0.0`
 * @version `1.0.0`
 * @function
*/
export function funcExecWhile(cond, initially, ...funcs) {

    return execWhile({ cond, initially, funcs, });

};

//#endregion
//#region execRange

/**
 * ### execRange
 * 
 * 
 * 
 * ***
 * @typedef execRangeT
 * @prop {} _
 * ***
 * @arg {funcT&execRangeT} args `Аргументы`
 * *** 
 * @since `1.0.0`
 * @version `1.0.0`
 * @function
*/
function execRange(args) {
    
    let result;
    
    try {
        
        let {
            
            funcs,
            indexEnd,
            indexStart,
            
        } = args;
        
        //#region verify
        
        
        
        //#endregion
        //#region handle
        
        
        
        //#endregion
        //#region comply
        
        for (let index = indexStart; index < indexEnd + 1; index++) {

            for (const func of funcs) func(index);

        };

        result = true;
        
        //#endregion
        
    } catch (err) {
        
        if (config.params.strictMode) {
            
            throw err;
            
        };
        
        result = false;
        
    } finally {
        
        
        
    };
    
    return result;
    
};

/**
 * ### execRange
 * 
 * Функция исполнения указанных функций `n` раз, где `n` значения от `indexStart` до `indexEnd`. 
 * 
 * ***
 * @arg {...funcT['func']} funcs `Функции`
 * @arg {funcT['indexEnd']} indexEnd `Конец`
 * @arg {funcT['indexStart']} indexStart `Начало`
 * ***
 * @since `1.0.0`
 * @version `1.0.0`
 * @function
*/
export function funcExecRange(indexStart, indexEnd, ...funcs) {

    return execRange({ funcs, indexEnd, indexStart, });

};

//#endregion
//#region execRangeIn

/**
 * ### execRangeIn
 * 
 * 
 * 
 * ***
 * @typedef execRangeInT
 * @prop {} _
 * ***
 * @arg {funcT&execRangeInT} args `Аргументы`
 * *** 
 * @since `1.0.0`
 * @version `1.0.0`
 * @function
*/
function execRangeIn(args) {
    
    let result;
    
    try {
        
        let {
            
            array,
            funcsRangeIn,
            
        } = args;
        
        //#region verify
        
        
        
        //#endregion
        //#region handle
        
        
        
        //#endregion
        //#region comply
        
        for (let index = 0; index < array.length; index++) {

            for (const func of funcsRangeIn) {

                const value = func(index, array[index], array);

                if (condIsNumberSig(value?.index)) index = value.index;

            };

        };

        result = array;
        
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
 * ### execRangeIn
 * 
 * Функция перебора элементов указанного массива и применением к ним указанных функций.
 * 
 * ***
 * @arg {Y1} array `Массив`
 * @arg {...(index: number, element: Y1[0], array: Y1)=>void} funcsRangeIn `Функции`
 * @returns {Y1}
 * @template {any[]} Y1
 * ***
 * @since `1.0.0`
 * @version `1.0.0`
 * @function
*/
export function funcExecRangeIn(array, ...funcsRangeIn) {

    return execRangeIn({ array, funcsRangeIn, });

};

//#endregion

/**
 * @file func/module.mjs
 * @author Yakhin Nikita Artemovich <mr.y.nikita@gmail.com>
 * @license Apache-2.0
 * @copyright SYLS (Software Y Lib Solutions) 2023
*/

// //#region bypass 0.0.0

// /** ### funcTFbypass
//  * - Тип `TF`
//  * - Версия `0.0.0`
//  * - Модуль `func`
//  *
//  * Результирующие параметры функции `bypass`.
//  *
//  * @typedef {funcTFUbypass} funcTFbypass
//  *
// */
// /** ### funcTFUbypass
//  * - Тип `TFU`
//  * - Версия `0.0.0`
//  * - Модуль `func`
//  *
//  * Уникальные параметры функции `bypass`.
//  *
//  * @typedef funcTFUbypass
//  * @prop {any} value
//  * @prop {[function, ...any]} functions
// */

// /** @arg {funcTFbypass} t */
// function bypassDeceit(t) {

//     try {

//         return bypassVerify(t);

//     } catch (e) {

//         if (config?.strictMode) {

//             throw e;

//         };

//         return undefined;

//     };

// };
// /** @arg {funcTFbypass} t */
// function bypassVerify(t) {



//     return bypassHandle(t);

// };
// /** @arg {funcTFbypass} t */
// function bypassHandle(t) {



//     return bypassComply(t);

// };
// /** @arg {funcTFbypass} t */
// function bypassComply(t) {

//     const {

//         value,
//         functions,

//     } = t;

//     let result = value;

//     for (const func of functions) {

//         result = func[0](result, ...func.slice(1));

//     };

//     return result;

// };

// /**
//  * ### funcBypass
//  * - Версия `0.0.0`
//  * - Цепочка `DVHCa`
//  * - Модуль `func`
//  *
//  * Функция обхода указанных функций.
//  *
//  * Для исходного набора функций создается копия.
//  * Каждая функция последовательно извлекается из копии.
//  * Для первой функции в качестве аргументов будут переданы `value` (значение) и все указанные к ней аргументы.
//  * В отличии от первой, остальные функции будут получать в качестве первого аргумента результат вызова предыдущей функции.
//  * ***
//  * @arg {any} value `Значение`
//  * @arg {...[function, ...any]} functions `Функциональная последовательность`
//  *
//  * Представлена массивом, где первый элемент всегда является функцией, которая будет вызываться последовательностью.
//  * Все прочие элементы будут переданы ей как аргументы.
// */
// export function funcBypass(value, ...functions) {

//     return bypassDeceit({ value, functions, });

// };

// //#endregion