//#region YI

import { YArg } from '@syls/y/arg';
import { YCond, condIsArray, condIsNumberSig } from '@syls/y/cond';
import { configFunc as config } from './config.mjs';

//#endregion
//#region YT

/** ### funcT
 * 
 * Типы модуля `func`.
 * 
 * @typedef funcT
 * @prop {((...args: any[])=>any)|[(...args: any[])=>any, ...args: any[]]} funcExec
 * @prop {funcT['funcExec'][]} funcsExec
 * @prop {any} value
 * @prop {any[]} array
 * @prop {number} count
 * @prop {number} indexEnd
 * @prop {number} indexStart
 * @prop {boolean} initially
 * @prop {(doContinue: () => void, doBreak: () => void)=>void} func
 * @prop {funcT['func'][]} funcs
 * @prop {[()=>void, apply: boolean, ...args: any ]} elementBypass
 * @prop {funcT['elementBypass'][]} arrayBypass
 * @prop {(index: number, doContinue: () => void, doBreak: () => void)=>void} funcRange
 * @prop {(index: number, element: any, array: any[], doContinue: () => void, doBreak: () => void)=>{ index: number?, }} funcRangeIn
 * @prop {funcT['funcRangeIn'][]} funcsRangeIn
 * @prop {funcT['funcRange'][]} funcsRange
 * @prop {()=>boolean|boolean} cond
*/

//#endregion
//#region YV



//#endregion

//#region exec

/**
 * ### exec
 * 
 * 
 * 
 * ***
 * @typedef execT
 * @prop {} _
 * ***
 * @arg {funcT&execT} args `Аргументы`
 * *** 
 * @since `1.0.0`
 * @version `1.0.0`
 * @function
*/
function exec(args) {
    
    let result;
    
    try {
        
        let {
            
            funcsExec,
            
        } = args;
        
        //#region verify
        
        
        
        //#endregion
        //#region handle
        
        
        
        //#endregion
        //#region comply
        
        funcLoopRangeIn(funcsExec, func => condIsArray(func) ? func[0](...func.slice(1)) : func());
        
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
 * ### funcExec
 * 
 * Функция выполнения указанных функций.
 * 
 * ***
 * @arg {...funcT['funcExec']} funcsExec `Функции`
 * 
 * 
 * ***
 * @since `1.0.0`
 * @version `1.0.0`
 * @function
*/
export function funcExec(...funcsExec) {

    return exec({ funcsExec, });

};
/**
 * ### funcExecAsync
 * 
 * Функция асинхронного выполнения указанных функций.
 * 
 * ***
 * @arg {...funcT['funcExec']} funcsExec `Функции`
 * 
 * 
 * ***
 * @async
 * @since `1.0.0`
 * @version `1.0.0`
 * @function
*/
export async function funcExecAsync(...funcsExec) {

    return new Promise(resolve => resolve(exec({ funcsExec, })));

};

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

        result = funcLoopRange(0, --count, ...funcs);

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

        funcLoopRangeIn(arrayBypass.splice(1), (e, i, a) => value = e[1] ? e[0].apply(value, e.slice(2)) : e[0](value, ...e.slice(2)));

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
//#region loopWhile

/**
 * ### loopWhile
 * 
 * 
 * 
 * ***
 * @typedef loopWhileT
 * @prop {} _
 * ***
 * @arg {funcT&loopWhileT} args `Аргументы`
 * *** 
 * @since `1.0.0`
 * @version `1.0.0`
 * @function
*/
function loopWhile(args) {

    let result;

    try {

        let {

            cond,
            initially,
            funcsRange,

        } = args;

        //#region verify



        //#endregion
        //#region handle



        //#endregion
        //#region comply

        let index = 0;
        let flagBreak = false;
        let flagContinue = false;

        const changeFlagBreak = () => flagBreak = true;
        const changeFlagContinue = () => flagContinue = true;

        if (initially) for (const func of funcsRange) {

            func(index, changeFlagContinue, changeFlagBreak);
            
            if (flagBreak || flagContinue) break;

            index++;

        };

        while (cond()) for (const func of funcsRange) {
            
            flagContinue = false;

            func(index);

            if (flagContinue) {

                continue;

            } else if (flagBreak) {

                break;

            };

            index++;

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
 * ### loopWhile
 * 
 * Функция исполнения указанных функций в цикле до тех пор, пока не будет выполнено указанное условие.
 * 
 * ***
 * @arg {funcT['cond']} cond `условие`
 * @arg {...funcT['funcRange']} funcsRange `Функции`
 * @arg {funcT['initially']} initially `Первичность`
 * 
 * При указании `true` приведет к выполнению цикла, аналогично `do ... while`.
 * 
 * ***
 * @since `1.0.0`
 * @version `1.0.0`
 * @function
*/
export function funcLoopWhile(cond, initially, ...funcsRange) {

    return loopWhile({ cond, initially, funcsRange, });

};

//#endregion
//#region loopRange

/**
 * ### loopRange
 * 
 * 
 * 
 * ***
 * @typedef loopRangeT
 * @prop {} _
 * ***
 * @arg {funcT&loopRangeT} args `Аргументы`
 * *** 
 * @since `1.0.0`
 * @version `1.0.0`
 * @function
*/
function loopRange(args) {

    let result;

    try {

        let {

            indexEnd,
            indexStart,
            funcsRange,

        } = args;

        //#region verify



        //#endregion
        //#region handle



        //#endregion
        //#region comply

        let flagBreak = false;
        let flagContinue = false;

        const changeFlagBreak = () => flagBreak = true;
        const changeFlagContinue = () => flagContinue = true;

        for (let index = indexStart; index < indexEnd + 1; index++) {

            flagContinue = false;

            for (const func of funcsRange) {

                func(index, changeFlagContinue, changeFlagBreak);

                if (flagBreak || flagContinue) break;

            };

            if (flagBreak) break;

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
 * ### loopRange
 * 
 * Функция исполнения указанных функций `n` раз, где `n` значения от `indexStart` до `indexEnd`. 
 * 
 * ***
 * @arg {...funcT['funcRange']} funcsRange `Функции`
 * @arg {funcT['indexEnd']} indexEnd `Конец`
 * @arg {funcT['indexStart']} indexStart `Начало`
 * ***
 * @since `1.0.0`
 * @version `1.0.0`
 * @function
*/
export function funcLoopRange(indexStart, indexEnd, ...funcsRange) {

    return loopRange({ funcsRange, indexEnd, indexStart, });

};
/**
 * ### funcLoopRangeTo
 * 
 * Функция исполнения указанных функций `n` раз, где `n` значения от `0` до `indexEnd`. 
 * 
 * ***
 * @arg {funcT['indexEnd']} indexEnd `Конец`
 * @arg {...funcT['funcRange']} funcsRange `Функции`
 * ***
 * @since `1.0.0`
 * @version `1.0.0`
 * @function
*/
export function funcLoopRangeTo(indexEnd, ...funcsRange) {

    return loopRange({ indexStart: 0, indexEnd, funcsRange, });

};

//#endregion
//#region loopRangeIn

/**
 * ### loopRangeIn
 * 
 * 
 * 
 * ***
 * @typedef loopRangeInT
 * @prop {} _
 * ***
 * @arg {funcT&loopRangeInT} args `Аргументы`
 * *** 
 * @since `1.0.0`
 * @version `1.0.0`
 * @function
*/
function loopRangeIn(args) {

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

        let flagBreak = false;
        let flagContinue = false;

        const changeFlagBreak = () => flagBreak = true;
        const changeFlagContinue = () => flagContinue = true;

        if (array?.length) for (let index = 0; index < array.length; index++) {

            flagContinue = false;

            for (const func of funcsRangeIn) {

                const value = func(array[index], index, array, changeFlagContinue, changeFlagBreak);

                if (condIsNumberSig(value?.index)) index = value.index;

                if (flagContinue || flagBreak) break;

            };

            if (flagBreak) break;

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
 * ### loopRangeIn
 * 
 * Функция перебора элементов указанного массива и применением к ним указанных функций.
 * 
 * ***
 * @arg {Y1} array `Массив`
 * @arg {...(element: Y1[0], index: number, array: Y1, doContinue: () => void, doBreak: () => void)=>void} funcsRangeIn `Функции`
 * @returns {Y1}
 * @template Y1
 * ***
 * @since `1.0.0`
 * @version `1.0.0`
 * @function
*/
export function funcLoopRangeIn(array, ...funcsRangeIn) {

    return loopRangeIn({ array, funcsRangeIn, });

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