//#region YI

import { YCond } from '@syls/y/cond';
import { configArray as config } from './config.mjs';
import { numberGetRandomReal } from '@syls/number';

//#endregion
//#region YT

/** ### arrayT
 * - Тип `T`
 * - Версия `0.0.0`
 * 
 * Основной параметр модуля `array`.
 * 
 * @typedef arrayT
 * @prop {any[]} array
 * @prop {number} count
*/

//#endregion
//#region YV



//#endregion

//#region to

/**
 * ### to
 * - Тип `S`
 * - Версия `1.0.0`
 * ***
 * 
 * 
 * 
 * ***
 * @typedef toT
 * @prop {any[]} array
 * @prop {'string'|'number'|'null'|'boolean'} type
 * ***
 * @arg {toT} args `Аргументы`
 * @since `1.0.0`
 * @version `1.0.0`
 * @function
*/
function to(args) {
    
    let result;
    
    try {
        
        let {
            
            type,
            array,
            
        } = args;
        
        //#region verify
        
        
        
        //#endregion
        //#region handle
        
        result = array;
        
        //#endregion
        //#region comply
        
        for (const index in array) {

            switch (type) {

                case 'null': array[index] = null; break;
                case 'number': array[index] = array[index] - 0; break;
                case 'string': array[index] = array[index] + ''; break;
                case 'boolean': array[index] = !!array[index]; break;

            }; 

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
 * ### arrayTo
 * - Тип `S`
 * - Версия `1.0.0`
 * ***
 * 
 * Функция приведения всех элементов массива к указанному типу.
 * 
 * ***
 * @arg {Y1} array `Массив`
 * @arg {Y2|Y3} type `Тип`
 * @returns {type extends toT['type'] ? type extends 'string' ? string[] : type extends 'number' ? number[] : type extends 'boolean' ? boolean[] : null[] : undefined[]}
 * @function
 * @template Y3
 * @template {any[]} Y1
 * @template {toT['type']} Y2
*/
export function arrayTo(array, type) {

    return to({ array, type, });

};
/**
 * ### arrayToNew
 * - Тип `S`
 * - Версия `1.0.0`
 * ***
 * 
 * Функция {@link arrayTo|приведения всех элементов массива к указанному типу}.
 * Работает с копией указанного массива.
 * 
 * ***
 * @arg {Y1} array `Массив`
 * @arg {Y2|Y3} type `Тип`
 * @returns {type extends toT['type'] ? type extends 'string' ? string[] : type extends 'number' ? number[] : type extends 'boolean' ? boolean[] : null[] : undefined[]}
 * @function
 * @template Y3
 * @template {any[]} Y1
 * @template {toT['type']} Y2
*/
export function arrayToNew(array, type) {

    return to({ array: array?.slice?.(), type, });

};

//#endregion
//#region toClass

/**
 * ### toClass
 * - Тип `S`
 * - Версия `1.0.0`
 * ***
 * 
 * 
 * 
 * ***
 * @typedef toClassT
 * @prop {any} cl
 * @prop {any[]} array
 * ***
 * @arg {toClassT} args `Аргументы`
 * @since `1.0.0`
 * @version `1.0.0`
 * @function
*/
function toClass(args) {
    
    let result;
    
    try {
        
        let {
            
            cl,
            array,
            
        } = args;
        
        //#region verify
        
        
        
        //#endregion
        //#region handle
        
        result = array;
        
        //#endregion
        //#region comply
        
        for (const index in array) {

            array[index] = new cl(array[index]);

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
 * ### arrayToClass
 * - Тип `S`
 * - Версия `1.0.0`
 * ***
 * 
 * Функция приведения всех элементов массива к указанному классу.
 * 
 * ***
 * @arg {Y2} cl `Класс`
 * @arg {Y1} array `Массив`
 * @returns {Y2['prototype'][]}
 * @function
 * @template Y2
 * @template {any[]} Y1
*/
export function arrayToClass(array, cl) {

    return toClass({ array, cl, });

};
/**
 * ### arrayToClassNew
 * - Тип `S`
 * - Версия `1.0.0`
 * ***
 * 
 * Функция {@link arrayToClass|приведения всех элементов массива к указанному классу}.
 * Работает с копией указанного массива.
 * 
 * ***
 * @arg {Y2} cl `Класс`
 * @arg {Y1} array `Массив`
 * @returns {Y2['prototype'][]}
 * @function
 * @template Y2
 * @template {any[]} Y1
*/
export function arrayToClassNew(array, cl) {

    return toClass({ array: array?.slice?.(), cl, });

};

//#endregion
//#region get

/**
 * ### get
 * - Тип `S`
 * - Версия `1.0.0`
 * ***
 * 
 * 
 * 
 * ***
 * @typedef getT
 * @prop {any[]} array
 * @prop {number} index
 * ***
 * @arg {getT} args `Аргументы`
 * @since `1.0.0`
 * @version `1.0.0`
 * @function
*/
function get(args) {

    let result;

    try {

        let {

            index,
            array,

        } = args;

        //#region verify



        //#endregion
        //#region handle



        //#endregion
        //#region comply

        result = index >= 0 ? array[index] : array[array.length + index];

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
 * ### arrayGet
 * - Тип `S`
 * - Версия `1.0.0`
 * ***
 * 
 * Функция получения элемента указанного массива по индексу.
 * 
 * ***
 * @arg {Y1} array `Массив`
 * @arg {Y2} index `Индекс`
 * @returns {Y1[index]}
 * @template {any[]} Y1
 * @template {number} Y2
 * @function
*/
export function arrayGet(array, index) {

    return get({ array, index, });

};

//#endregion
//#region getOut

/**
 * ### getOut
 * - Тип `S`
 * - Версия `1.0.0`
 * ***
 * 
 * 
 * 
 * ***
 * @typedef getOutT
 * @prop {any} value
 * @prop {any[]} array
 * @prop {number} index
 * ***
 * @arg {getOutT} args `Аргументы`
 * @since `1.0.0`
 * @version `1.0.0`
 * @function
*/
function getOut(args) {
    
    let result;
    
    try {
        
        let {
            
            array,
            index,
            value,
            
        } = args;
        
        //#region verify
        
        
        
        //#endregion
        //#region handle
        
        if (value === undefined) value = null;
        
        //#endregion
        //#region comply
        
        result = array.splice(index, 1, value)[0];
        
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
 * ### arrayGetOut
 * - Тип `S`
 * - Версия `1.0.0`
 * ***
 * 
 * Функция извлечения из массива с подстановкой.
 * 
 * ***
 * @arg {Y1} array `Массив`
 * @arg {any} value `Подстановка`
 * @arg {number} index `Индекс`
 * @function
 * @template {any[]} Y1
*/
export function arrayGetOut(array, index, value) {

    return getOut({ array, index, value, });

};
/**
 * ### arrayGetOutNew
 * - Тип `S`
 * - Версия `1.0.0`
 * ***
 * 
 * Функция {@link arrayGetOut|извлечения из массива с подстановкой}.
 * 
 * ***
 * @arg {Y1} array `Массив`
 * @arg {any} value `Подстановка`
 * @arg {number} index `Индекс`
 * @function
 * @template {any[]} Y1
*/
export function arrayGetOutNew(array, index, value) {

    return getOut({ array: array?.slice?.(), index, value, });

};

//#endregion
//#region set

/**
 * ### set
 * - Тип `S`
 * - Версия `1.0.0`
 * ***
 * 
 * 
 * 
 * ***
 * @typedef setT
 * @prop {any[]} array
 * @prop {[number, any]} sets 
 * ***
 * @arg {setT} args `Аргументы`
 * @since `1.0.0`
 * @version `1.0.0`
 * @function
*/
function set(args) {

    let result;

    try {

        let {

            sets,
            array,

        } = args;

        //#region verify



        //#endregion
        //#region handle

        result = array;

        //#endregion
        //#region comply

        for (const [index, value] of sets) {

            if (YCond.isNumber(index) && index >= 0) array[index] = value;

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
 * ### arraySet
 * - Тип `S`
 * - Версия `1.0.0`
 * ***
 * 
 * Функция установки значений нна заданные индексы указанного массива.
 * 
 * ***
 * @arg {Y1} array `Массив`
 * @arg {...[number, any]} sets `Сеты`
 * @returns {Y1}
 * @function
 * @template {any[]} Y1
*/
export function arraySet(array, ...sets) {

    return set({ array, sets, });

};
/**
 * ### arraySetNew
 * - Тип `S`
 * - Версия `1.0.0`
 * ***
 * 
 * Функция {@link arraySet|установки значений нна заданные индексы} указанного массива.
 * Работает с копией указанного массива.
 * 
 * ***
 * @arg {Y1} array `Массив`
 * @arg {...[number, any]} sets `Сеты`
 * @returns {Y1}
 * @function
 * @template {any[]} Y1
*/
export function arraySetNew(array, ...sets) {

    return setNew({ array: array.slice(), sets, });

};

//#endregion
//#region mix

/**
 * ### mix
 * - Тип `S`
 * - Версия `1.0.0`
 * ***
 * 
 * 
 * 
 * ***
 * @typedef mixT
 * @prop {any[]} array
 * @prop {number} iter
 * ***
 * @arg {mixT} args `Аргументы`
 * @since `1.0.0`
 * @version `1.0.0`
 * @function
*/
function mix(args) {

    let result;

    try {

        let {

            iter,
            array,

        } = args;

        //#region verify



        //#endregion
        //#region handle

        result = array;

        if (!iter) iter = 1;

        //#endregion
        //#region comply
        
        for (; iter > 0; iter--) {

            for (let count = 0; count < result.length; count++) {

                const index1 = numberGetRandomReal(0, result.length - 1);
                const index2 = numberGetRandomReal(0, result.length - 1);

                [result[index1], result[index2]] = [result[index2], result[index1]];

            };

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
 * ### arrayMix
 * - Тип `S`
 * - Версия `1.0.0`
 * ***
 * 
 * Функция перемешивания элементов массива в произвольном порядке.
 * 
 * ***
 * @arg {Y1} array `Массив`
 * @arg {number} iter `Итерации`
 * @returns {Y1}
 * @function
 * @template {any[]} Y1
*/
export function arrayMix(array, iter) {

    return mix({ array, iter, });

};
/**
 * ### arrayMixNew
 * - Тип `S`
 * - Версия `1.0.0`
 * ***
 * 
 * Функция {@link arrayMix|перемешивания} элементов массива в произвольном порядке.
 * Работает с копией указанного массива.
 * 
 * ***
 * @arg {Y1} array `Массив`
 * @arg {number} iter `Итерации`
 * @returns {Y1}
 * @function
 * @template {any[]} Y1
*/
export function arrayMixNew(array, iter) {

    return mix({ array: array.slice(), iter, });

};

//#endregion
//#region pad

/**
 * ### pad
 * - Тип `S`
 * - Версия `1.0.0`
 * ***
 * 
 * 
 * 
 * ***
 * @typedef padT
 * @prop {any} value
 * @prop {any[]} array
 * @prop {number} length
 * @prop {'center'|'left'|'right'} mode
 * ***
 * @arg {padT} args `Аргументы`
 * @since `1.0.0`
 * @version `1.0.0`
 * @function
*/
function pad(args) {
    
    let result;
    
    try {
        
        let {
            
            mode,
            value,
            array,
            length,
            
        } = args;
        
        //#region verify
        

        
        //#endregion
        //#region handle
        
        result = array;

        if (value === undefined) value = null;
        if (!mode || !['center', 'left', 'right'].includes(mode)) mode = 'right';
        if (YCond.isNumber(length) && length > array.length) length -= array.length;

        //#endregion
        //#region comply
        
        const pads = new Array(length).fill(value);

        switch (mode) {

            case 'right': {

                array.push(...pads);

            }; break;
            case 'left': {

                array.unshift(...pads);

            }; break;
            case 'center': {

                for (const index in pads) (index - 0) % 2 == 0 ? array.push(pads[index]) : array.unshift(pads[index]);

            }; break;

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
 * ### arrayPad
 * - Тип `S`
 * - Версия `1.0.0`
 * ***
 * 
 * Функция доведения массива до указанной длины.
 * 
 * ***
 * @arg {Y1} array `Массив`
 * @arg {any} value `Дополнитель`
 * @arg {number} length `Длина`
 * @arg {padT['mode']} mode `Режим`
 * @function
 * @template {any[]} Y1
*/
export function arrayPad(array, length, value, mode) {

    return pad({ array, length, value, mode, });

};
/**
 * ### arrayPadNew
 * - Тип `S`
 * - Версия `1.0.0`
 * ***
 * 
 * Функция {@link arrayPad|доведения массива до указанной длины}.
 * Работает с копией указанного массива.
 * 
 * ***
 * @arg {Y1} array `Массив`
 * @arg {any} value `Дополнитель`
 * @arg {number} length `Длина`
 * @arg {padT['mode']} mode `Режим`
 * @function
 * @template {any[]} Y1
*/
export function arrayPadNew(array, length, value, mode) {

    return pad({ array: array?.slice?.(), length, value, mode, });

};

//#endregion
//#region move

/**
 * ### move
 * - Тип `S`
 * - Версия `1.0.0`
 * ***
 * 
 * 
 * 
 * ***
 * @typedef moveT
 * @prop {any[]} array
 * @prop {number} bias
 * @prop {number} index
 * ***
 * @arg {moveT} args `Аргументы`
 * @since `1.0.0`
 * @version `1.0.0`
 * @function
*/
function move(args) {

    let result;

    try {

        let {

            bias,
            array,
            index,

        } = args;

        //#region verify



        //#endregion
        //#region handle

        let indexS = 0, indexE = 0;

        if (bias < 0) {

            indexS = index + bias;
            indexE = index;

        } else {

            indexS = index;
            indexE = index + bias;

        };

        result = array;

        //#endregion
        //#region comply

        array.splice(indexS, 0, ...array.splice(indexE))

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
 * ### arrayMove
 * - Тип `S`
 * - Версия `1.0.0`
 * ***
 * 
 * Функция смещения части массива начиная с указанного индекса и на указанное количество шагов.
 * При перемещении высвобождает ячейки массива в случае, если выходит за пределы.
 * Если же сдвиг осуществляется в сторону со свободным пространством, то массив его заполнит смещаемыми элементами.
 * 
 * Нельзя осуществить смещение в отрицательную область, то есть за пределы нуля.
 * 
 * ***
 * @arg {Y1} array `Массив`
 * @arg {number} bias `Смещение`
 * @arg {number} index `Индекс`
 * @returns {Y1}
 * @function
 * @template {any[]} Y1
*/
export function arrayMove(array, index, bias) {

    return move({ array, index, bias, direct, });

};
/**
 * ### arrayMoveNew
 * - Тип `S`
 * - Версия `1.0.0`
 * ***
 * 
 * Функция {@link arrayMove|смещения части массива начиная с указанного индекса и на указанное количество шагов}.
 * Работает с копией указанного массива.
 * 
 * ***
 * @arg {Y1} array `Массив`
 * @arg {number} bias `Смещение`
 * @arg {number} index `Индекс`
 * @returns {Y1}
 * @function
 * @template {any[]} Y1
*/
export function arrayMoveNew(array, index, bias) {

    return move({ array: array?.slice?.(), index, bias, direct, });

};

//#endregion
//#region swap

/**
 * ### swap
 * - Тип `S`
 * - Версия `1.0.0`
 * ***
 * 
 * 
 * 
 * ***
 * @typedef swapT
 * @prop {any[]} array
 * @prop {[number, number][]} pairs
 * ***
 * @arg {swapT} args `Аргументы`
 * @since `1.0.0`
 * @version `1.0.0`
 * @function
*/
function swap(args) {

    let result;

    try {

        let {

            pairs,
            array,

        } = args;

        //#region verify



        //#endregion
        //#region handle

        result = array;

        //#endregion
        //#region comply

        for (const [index1, index2] of pairs) {

            if (array[index1] === undefined && array[index2] === undefined) continue;

            [array[index1], array[index2]] = [array[index2], array[index1]];

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
 * ### arraySwap
 * - Тип `S`
 * - Версия `1.0.0`
 * ***
 * 
 * Функция смены позиции элементов указанного массива по их индексам.
 * 
 * ***
 * @arg {Y1} array `Массив`
 * @arg {...[number, number]} pairs `Пары`
 * @function
 * @template {any[]} Y1
*/
export function arraySwap(array, ...pairs) {

    return swap({ array, pairs, });

};
/**
 * ### arraySwapNew
 * - Тип `S`
 * - Версия `1.0.0`
 * ***
 * 
 * Функция смены позиции элементов указанного массива по их индексам.
 * Работает с копией указанного массива.
 * 
 * ***
 * @arg {Y1} array `Массив`
 * @arg {...[number, number]} pairs `Пары`
 * @function
 * @template {any[]} Y1
 * @function
*/
export function arraySwapNew(array, ...pairs) {

    return swap({ array: array?.slice?.(), pairs, });

};

//#endregion
//#region swapByElem

/**
 * ### swapByElem
 * - Тип `S`
 * - Версия `1.0.0`
 * ***
 * 
 * 
 * 
 * ***
 * @typedef swapByElemT
 * @prop {any[]} array
 * @prop {[any, any][]} pairs
 * ***
 * @arg {swapByElemT} args `Аргументы`
 * @since `1.0.0`
 * @version `1.0.0`
 * @function
*/
function swapByElem(args) {

    let result;

    try {

        let {

            pairs,
            array,

        } = args;

        //#region verify



        //#endregion
        //#region handle

        result = array;

        //#endregion
        //#region comply

        const indexs = [];

        for (const [elem1, elem2] of pairs) {

            if (elem1 === undefined || elem2 === undefined) continue;

            const [index1, index2] = [elem1, elem2].map(elem => array.indexOf(elem));

            if (index1 === -1 || index2 === -1) continue;

            indexs.push([index1, index2]);

        };

        result = arraySwap(array, ...indexs);

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
 * ### arraySwapByElem
 * - Тип `S`
 * - Версия `1.0.0`
 * ***
 * 
 * Функция смены позиции элементов указанного массива по его элементам.
 * 
 * ***
 * @arg {Y1} array `Массив`
 * @arg {...[any, any]} pairs `Пары`
 * @function
 * @template {any[]} Y1
*/
export function arraySwapByElem(array, pairs) {

    return swapByElem({ array, pairs, });

};
/**
 * ### arraySwapByElemNew
 * - Тип `S`
 * - Версия `1.0.0`
 * ***
 * 
 * Функция {@link arraySwapByElem|смены позиции элементов указанного массива по его элементам}.
 * Работает с копией указанного массива.
 * 
 * ***
 * @arg {Y1} array `Массив`
 * @arg {...[any, any]} pairs `Пары`
 * @function
 * @template {any[]} Y1
*/
export function arraySwapByElemNew(array, pairs) {

    return swapByElem({ array: array?.slice?.(), pairs, });

};

//#endregion
//#region paste

/**
 * ### paste
 * - Тип `S`
 * - Версия `1.0.0`
 * ***
 * 
 * 
 * 
 * ***
 * @typedef pasteT
 * @prop {any[]} array
 * @prop {any[]} elems
 * @prop {number} index
 * @prop {number} length
 * ***
 * @arg {pasteT} args `Аргументы`
 * @since `1.0.0`
 * @version `1.0.0`
 * @function
*/
function paste(args) {

    let result;

    try {

        let {

            array,
            elems,
            index,
            length,

        } = args;

        //#region verify



        //#endregion
        //#region handle

        result = array;

        //#endregion
        //#region comply

        result = arrayAppend(arrayRemove(result, index, length), index, ...elems);

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
 * ### arrayPaste
 * - Тип `S`
 * - Версия `1.0.0`
 * ***
 * 
 * Функция вставки элементов в массив.
 * 
 * ***
 * @arg {Y1} array `Массив`
 * @arg {...any} elems `Элементы`
 * @arg {number} index `Индекс`
 * @arg {number} length `Длина`
 * @function
 * @template {any[]} Y1
*/
export function arrayPaste(array, index, length, ...elems) {

    return paste({ array, index, length, elems, });

};
/**
 * ### arrayPasteNew
 * - Тип `S`
 * - Версия `1.0.0`
 * ***
 * 
 * Функция {@link arrayPaste|вставки элементов в массив}.
 * Работает с копией указанного массива.
 * 
 * ***
 * @arg {Y1} array `Массив`
 * @arg {...any} elems `Элементы`
 * @arg {number} index `Индекс`
 * @arg {number} length `Длина`
 * @function
 * @template {any[]} Y1
*/
export function arrayPasteNew(array, index, length, ...elems) {

    return paste({ array: array?.slice?.(), index, length, elems, });

};

//#endregion
//#region clear

/**
 * ### clear
 * - Тип `S`
 * - Версия `1.0.0`
 * ***
 * 
 * 
 * 
 * ***
 * @typedef clearT
 * @prop {any[]} array
 * ***
 * @arg {clearT} args `Аргументы`
 * @since `1.0.0`
 * @version `1.0.0`
 * @function
*/
function clear(args) {
    
    let result;
    
    try {
        
        let {
            
            array,
            
        } = args;
        
        //#region verify
        
        
        
        //#endregion
        //#region handle
        
        result = array;
        
        //#endregion
        //#region comply
        
        arrayRemove(result, 0, result.length);
        
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
 * ### arrayClear
 * - Тип `S`
 * - Версия `1.0.0`
 * ***
 * 
 * Функция очистки массива.
 * 
 * ***
 * @arg {Y1} array `Массив`
 * @returns {Y1}
 * @function
 * @template {any[]} Y1
*/
export function arrayClear(array) {

    return clear({ array, });

};
/**
 * ### arrayClearNew
 * - Тип `S`
 * - Версия `1.0.0`
 * ***
 * 
 * Функция {@link arrayClear|очистки массива}.
 * Работает с копией указанного массива.
 * 
 * ***
 * @arg {Y1} array `Массив`
 * @returns {Y1}
 * @function
 * @template {any[]} Y1
*/
export function arrayClearNew(array) {

    return clear({ array: array?.slice?.(), });

};

//#endregion
//#region devideByCount

/**
 * ### devideByCount
 * - Тип `S`
 * - Версия `1.0.0`
 * ***
 * 
 * 
 * 
 * ***
 * @typedef devideByCountT
 * @prop {} _
 * ***
 * @arg {arrayT&devideByCountT} args `Аргументы`
 * *** 
 * @since `1.0.0`
 * @version `1.0.0`
 * @function
*/
function devideByCount(args) {
    
    let result;
    
    try {
        
        let {
            
            array,
            count,
            
        } = args;
        
        //#region verify
        
        
        
        //#endregion
        //#region handle
        
        
        
        //#endregion
        //#region comply
        
        result = new Array(Math.ceil(array.length / count)).fill(0);

        for (const index in result) result[+index] = [];

        for (let index = 0; index < array.length; index++) result[Math.floor(index / count)].push(array[index]); 
        
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
 * ### arrayDevideByCount
 * - Тип `S`
 * - Версия `1.0.0`
 * ***
 * 
 * Функция разделения массива на подмассивы по указанному количеству элементов.
 * 
 * ***
 * @arg {Y1} array `Массив`
 * @arg {arrayT['count']} count `Счётчик`
 * @returns {Y1}
 * @template {any[]} Y1
 * ***
 * @since `1.0.0`
 * @version `1.0.0`
 * @function
*/
export function arrayDevideByCount(array, count) {

    return devideByCount({ array, count, });

};

//#endregion
//#region create

/**
 * ### create
 * - Тип `S`
 * - Версия `1.0.0`
 * ***
 * 
 * 
 * 
 * ***
 * @typedef createT
 * @prop {number} length
 * ***
 * @arg {createT} args `Аргументы`
 * @since `1.0.0`
 * @version `1.0.0`
 * @function
*/
function create(args) {
    
    let result;
    
    try {
        
        let {
            
            length,
            
        } = args;
        
        //#region verify
        
        
        
        //#endregion
        //#region handle
        
        result = [];
        
        //#endregion
        //#region comply
        
        arrayPad(result, length);
        
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
 * ### arrayCreate
 * - Тип `S`
 * - Версия `1.0.0`
 * ***
 * 
 * Функция создания массива указанной длины.
 * 
 * ***
 * @arg {number} length `Длина`
 * @function
*/
export function arrayCreate(length) {

    return create({ length, });

};

//#endregion
//#region select

/**
 * ### select
 * - Тип `S`
 * - Версия `1.0.0`
 * ***
 * 
 * 
 * 
 * ***
 * @typedef selectT
 * @prop {any[]} array
 * @prop {((elem: Y1[0], index: number, array: Y1) => boolean)[]} conds
 * ***
 * @arg {selectT} args `Аргументы`
 * @since `1.0.0`
 * @version `1.0.0`
 * @function
*/
function select(args) {
    
    let result;
    
    try {
        
        let {
            
            conds,
            array,
            
        } = args;
        
        //#region verify
        
        
        
        //#endregion
        //#region handle
        
        result = [];
        
        //#endregion
        //#region comply
        
        for (const index in array) {

            let flag = false;

            const elem = array[index];

            for (const cond of conds) {

                if (!cond(elem, index, array)) {

                    flag = true;
                    break;

                };

            };

            if (flag) continue;

            result.push(elem);

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
 * ### arraySelect
 * - Тип `S`
 * - Версия `1.0.0`
 * ***
 * 
 * Функция отбора значений по условиям.
 * 
 * ***
 * @arg {Y1} array `Массив`
 * @arg {...((elem: Y1[0], index: number, array: Y1) => boolean)} conds `Условия`
 * @returns {Y1}
 * @function
 * @template {any[]} Y1
*/
export function arraySelect(array, ...conds) {

    return select({ array, conds, });

};

//#endregion
//#region append

/**
 * ### append
 * - Тип `S`
 * - Версия `1.0.0`
 * ***
 * 
 * 
 * 
 * ***
 * @typedef appendT
 * @prop {any[]} array
 * @prop {any[]} elems
 * @prop {number} index
 * ***
 * @arg {appendT} args `Аргументы`
 * @since `1.0.0`
 * @version `1.0.0`
 * @function
*/
function append(args) {

    let result;

    try {

        let {

            index,
            array,
            elems,

        } = args;

        //#region verify



        //#endregion
        //#region handle

        result = array;

        //#endregion
        //#region comply

        if (result.length <= index) {

            result[index] = elems[0];

            result.push(...elems.slice(1));

        } else {

            result.splice(index, 0, ...elems);

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
 * ### arrayAppend
 * - Тип `S`
 * - Версия `1.0.0`
 * ***
 * 
 * Функция добавления элементов в массив.
 * 
 * ***
 * @arg {Y1} array `Массив`
 * @arg {number} index `Индекс`
 * @arg {...any} elems `Значения`
 * @function
 * @template {any[]} Y1
*/
export function arrayAppend(array, index, ...elems) {

    return append({ array, index, elems, });

};
/**
 * ### arrayAppendNew
 * - Тип `S`
 * - Версия `1.0.0`
 * ***
 * 
 * Функция {@link arrayAppend|добавления элементов в массив}.
 * Работает с копией указанного массива.
 * 
 * ***
 * @arg {Y1} array `Массив`
 * @arg {number} index `Индекс`
 * @arg {...any} elems `Значения`
 * @function
 * @template {any[]} Y1
*/
export function arrayAppendNew(array, index, ...elems) {

    return append({ array: array?.slice?.(), index, elems, });

};

//#endregion
//#region remove

/**
 * ### remove
 * - Тип `S`
 * - Версия `1.0.0`
 * ***
 * 
 * 
 * 
 * ***
 * @typedef removeT
 * @prop {any[]} array
 * @prop {number} count 
 * @prop {number} index
 * ***
 * @arg {removeT} args `Аргументы`
 * @since `1.0.0`
 * @version `1.0.0`
 * @function
*/
function remove(args) {

    let result;

    try {

        let {

            count,
            index,
            array,

        } = args;

        //#region verify



        //#endregion
        //#region handle

        result = array;

        //#endregion
        //#region comply

        array.splice(index, count)

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
 * ### arrayRemove
 * - Тип `S`
 * - Версия `1.0.0`
 * ***
 * 
 * Функция удаления элементов из массива в указанном диапазоне.
 * 
 * ***
 * @arg {Y1} array `Массив`
 * @arg {number} count `Конечный индекс`
 * @arg {number} index `Начальный индекс`
 * @function
 * @template {any[]} Y1
*/
export function arrayRemove(array, index, count) {

    return remove({ array, index, count, });

};
/**
 * ### arrayRemoveNew
 * - Тип `S`
 * - Версия `1.0.0`
 * ***
 * 
 * Функция {@link arrayRemove|удаления элементов из массива в указанном диапазоне}.
 * Работает с копией указанного массива.
 * 
 * ***
 * @arg {Y1} array `Массив`
 * @arg {number} count `Конечный индекс`
 * @arg {number} index `Начальный индекс`
 * @function
 * @template {any[]} Y1
*/
export function arrayRemoveNew(array, index, count) {

    return remove({ array: array?.slice?.(), index, count, });

};

//#endregion
//#region unique

/**
 * ### unique
 * - Тип `S`
 * - Версия `1.0.0`
 * ***
 * 
 * 
 * 
 * ***
 * @typedef uniqueT
 * @prop {any[]} array
 * ***
 * @arg {uniqueT} args `Аргументы`
 * @since `1.0.0`
 * @version `1.0.0`
 * @function
*/
function unique(args) {

    let result;

    try {

        let {

            array,

        } = args;

        //#region verify



        //#endregion
        //#region handle

        result = array;

        //#endregion
        //#region comply

        const elems = [];

        for (let index = 0; index < array.length; index++) {

            const elem = array[index];

            if (!elems.includes(elem)) elems.push(elem);
            else array.splice(index--, 1);

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
 * ### arrayUnique
 * - Тип `S`
 * - Версия `1.0.0`
 * ***
 * 
 * Функция получения уникальных элементов массива.
 * 
 * ***
 * @arg {Y1} array `Массив`
 * @function
 * @template {any[]} Y1
*/
export function arrayUnique(array) {

    return unique({ array, });

};
/**
 * ### arrayUniqueNew
 * - Тип `S`
 * - Версия `1.0.0`
 * ***
 * 
 * Функция {@link arrayUnique|получения уникальных элементов} массива.
 * Работает с копией указанного массива.
 * 
 * ***
 * @arg {Y1} array `Массив`
 * @function
 * @template {any[]} Y1
*/
export function arrayUniqueNew(array) {

    return unique({ array: array.slice(), });

};

//#endregion
//#region convey

/**
 * ### convey
 * - Тип `S`
 * - Версия `1.0.0`
 * ***
 * 
 * 
 * 
 * ***
 * @typedef conveyT
 * @prop {ant[]} array
 * @prop {number} step
 * @prop {boolean} direct
 * ***
 * @arg {conveyT} args `Аргументы`
 * @since `1.0.0`
 * @version `1.0.0`
 * @function
*/
function convey(args) {

    let result;

    try {

        let {

            step,
            array,
            direct,

        } = args;

        //#region verify



        //#endregion
        //#region handle

        if (!step) step = 1;

        if (direct === undefined) direct = true;

        result = array;
        step %= result.length;

        console.log(step);

        //#endregion
        //#region comply

        for (let count = 0; count < step; count++) {

            for (let index = 0; index < result.length - 1; index++) {

                if (direct) {

                    result.push(result.shift());

                } else {

                    result.unshift(result.pop());

                };

            };

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
 * ### arrayConvey
 * - Тип `S`
 * - Версия `1.0.0`
 * ***
 * 
 * Функция сдвига элементов массива на указанное количество шагов влево/вправо.
 * Конечный элемент сдвига меняется местами с первым элементом при шаге вправо и наоборот.
 * 
 * ***
 * @arg {Y1} array `Массив`
 * @arg {number} step `Шаг`
 * @arg {boolean} direct `Направление`
 * Шаг сдвига.
 * 
 * - Дефолт `1`
 * ***
 * @returns {Y1}
 * @function
 * @template {any[]} Y1
*/
export function arrayConvey(array, step, direct) {

    return convey({ array, step, direct, });

};
/**
 * ### arrayConveyNew
 * - Тип `S`
 * - Версия `1.0.0`
 * ***
 * 
 * Функция {@link arrayConvey|сдвига элементов массива на указанное количество шагов влево/вправо}.
 * Конечный элемент сдвига меняется местами с первым элементом при шаге вправо и наоборот.
 * 
 * ***
 * @arg {Y1} array `Массив`
 * @arg {number} step `Шаг`
 * @arg {boolean} direct `Направление`
 * Шаг сдвига.
 * 
 * - Дефолт `1`
 * ***
 * @returns {Y1}
 * @function
 * @template {any[]} Y1
*/
export function arrayConveyNew(array, step, direct) {

    return convey({ array: array?.slice?.(), step, direct, });

};

//#endregion
//#region repeat

/**
 * ### repeat
 * - Тип `S`
 * - Версия `1.0.0`
 * ***
 * 
 * 
 * 
 * ***
 * @typedef repeatT
 * @prop {any[]} array
 * @prop {number} count
 * ***
 * @arg {repeatT} args `Аргументы`
 * @since `1.0.0`
 * @version `1.0.0`
 * @function
*/
function repeat(args) {
    
    let result;
    
    try {
        
        let {
            
            array,
            count,
            
        } = args;
        
        //#region verify
        
        
        
        //#endregion
        //#region handle
        
        result = array;
        
        //#endregion
        //#region comply
        
        const slice = array.slice();

        while (count > 0) {

            array.push(...slice);

            count--;

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
 * ### arrayRepeat
 * - Тип `S`
 * - Версия `1.0.0`
 * ***
 * 
 * Функция дополнения массива его повторениями.
 * 
 * ***
 * @arg {Y1} array `Массив`
 * @arg {number} count `Количество`
 * @function
 * @template {any[]} Y1
*/
export function arrayRepeat(array, count) {

    return repeat({ array, count, });

};
/**
 * ### arrayRepeatNew
 * - Тип `S`
 * - Версия `1.0.0`
 * ***
 * 
 * Функция {@link arrayRepeat|дополнения массива его повторениями}.
 * Работает с копией указанного массива.
 * 
 * ***
 * @arg {Y1} array `Массив`
 * @arg {number} count `Количество`
 * @function
 * @template {any[]} Y1
*/
export function arrayRepeatNew(array, count) {

    return repeat({ array: array?.slice?.(), count, });

};

//#endregion
//#region extract

/**
 * ### extract
 * - Тип `S`
 * - Версия `1.0.0`
 * ***
 * 
 * 
 * 
 * ***
 * @typedef extractT
 * @prop {any[]} array
 * @prop {number} index
 * ***
 * @arg {extractT} args `Аргументы`
 * @since `1.0.0`
 * @version `1.0.0`
 * @function
*/
function extract(args) {
    
    let result;
    
    try {
        
        let {
            
            array,
            index,
            
        } = args;
        
        //#region verify
        
        
        
        //#endregion
        //#region handle
        

        
        //#endregion
        //#region comply
        
        result = array.splice(index, 1);
        
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
 * ### arrayExtract
 * - Тип `S`
 * - Версия `1.0.0`
 * ***
 * 
 * Функция извлечения элемента из массива.
 * 
 * ***
 * @arg {Y1} array `Массив`
 * @arg {number} index `Индекс`
 * @function
 * @template {any[]} Y1
*/
export function arrayExtract(array, index) {

    return extract({ array, index, });

};

//#endregion
//#region foreach

/**
 * ### foreach
 * - Тип `S`
 * - Версия `1.0.0`
 * ***
 * 
 * 
 * 
 * ***
 * @typedef foreachT
 * @prop {any[]} array
 * @prop {(elem: any, array: any[], index: number) => any} act
 * @prop {((elem: any, array: any[], index: number) => boolean)[]} condsBreak
 * @prop {((elem: any, array: any[], index: number) => boolean)[]} condsContinue
 * ***
 * @arg {foreachT} args `Аргументы`
 * @since `1.0.0`
 * @version `1.0.0`
 * @function
*/
function foreach(args) {

    let result;

    try {

        let {

            act,
            array,
            condsBreak,
            condsContinue,

        } = args;

        //#region verify



        //#endregion
        //#region handle

        result = array;

        //#endregion
        //#region comply

        for (const index in result) {

            const elem = result[index];

            if (condsBreak?.length) {

                let flagB = false;

                for (const cond of condsBreak) {

                    if (cond(elem, result, index)) {

                        flagB = true;

                        break;

                    };

                };

                if (flagB) break;

            };
            if (condsContinue?.length) {

                let flagS = false;

                for (const cond of condsContinue) {

                    if (cond(elem, result, index)) {

                        flagS = true;

                        break;

                    };

                };

                if (flagS) continue;

            };

            result[index] = act(elem, result, index);

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
 * ### arrayForeach
 * - Тип `S`
 * - Версия `1.0.0`
 * ***
 * 
 * Функция выполнения действий над элементами массива с возможностью пропуска или прерывания.
 * В отличии от foreach и map методов массивов, `foreach` от `YArray` унифицирован, обладает логикой для прерывания или пропуска. 
 * 
 * ***
 * @arg {Y1} array `Массив`
 * @arg {Y3} act `Действие`
 * @arg {Y2[]} condsBreak `Условия прерывания`
 * @arg {Y2[]} condsContinue `Условия пропуска`
 * @function
 * @template {any[]} Y1
 * @template {(elem: Y1[index], array, index: number) => boolean} Y2
 * @template {(elem: Y1[index], array: Y1, index: number) => any} Y3
*/
export function arrayForeach(array, act, condsBreak, condsContinue) {

    return foreach({ array, act, condsBreak, condsContinue, });

};
/**
 * ### arrayForeachNew
 * - Тип `S`
 * - Версия `1.0.0`
 * ***
 * 
 * Функция {@link arrayForeach|выполнения действий над элементами массива с возможностью пропуска или прерывания}.
 * В отличии от `foreach` и `map` методов массивов, `foreach` от `YArray` унифицирован, обладает логикой для прерывания или пропуска. 
 * 
 * ***
 * @arg {Y1} array `Массив`
 * @arg {Y3} act `Действие`
 * @arg {Y2[]} condsBreak `Условия прерывания`
 * @arg {Y2[]} condsContinue `Условия пропуска`
 * @function
 * @template {any[]} Y1
 * @template {(elem: Y1[index], array, index: number) => boolean} Y2
 * @template {(elem: Y1[index], array: Y1, index: number) => any} Y3
*/
export function arrayForeachNew(array, act, condsBreak, condsContinue) {

    return foreach({ array, act, condsBreak, condsContinue, });

};

//#endregion
//#region compress

/**
 * ### compress
 * - Тип `S`
 * - Версия `1.0.0`
 * ***
 * 
 * 
 * 
 * ***
 * @typedef compressT
 * @prop {any[]} array
 * ***
 * @arg {compressT} args `Аргументы`
 * @since `1.0.0`
 * @version `1.0.0`
 * @function
*/
function compress(args) {
    
    let result;
    
    try {
        
        let {
            
            array,
            
        } = args;
        
        //#region verify
        
        
        
        //#endregion
        //#region handle
        
        result = array;
        
        //#endregion
        //#region comply
        
        for (let index = 0; index < array.length; index++) {

            if (!array[index] && array[index] !== 0) array.splice(index--, 1);

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
 * ### arrayCompress
 * - Тип `S`
 * - Версия `1.0.0`
 * ***
 * 
 * Функция сжатия массива.
 * 
 * ***
 * @arg {Y1} array `Массив`
 * @returns {Y1}
 * @function
 * @template {any[]} Y1
*/
export function arrayCompress(array) {

    return compress({ array, });

};
/**
 * ### arrayCompressNew
 * - Тип `S`
 * - Версия `1.0.0`
 * ***
 * 
 * Функция {@link arrayCompress|сжатия массива}.
 * 
 * ***
 * @arg {Y1} array `Массив`
 * @returns {Y1}
 * @function
 * @template {any[]} Y1
*/
export function arrayCompressNew(array) {

    return compress({ array: array?.slice?.(), });

};

//#endregion
//#region rearrange

/**
 * ### rearrange
 * - Тип `S`
 * - Версия `1.0.0`
 * ***
 * 
 * 
 * 
 * ***
 * @typedef {swapT} rearrangeT
 * @prop {boolean} directRight
 * ***
 * @arg {rearrangeT} args `Аргументы`
 * @since `1.0.0`
 * @version `1.0.0`
 * @function
*/
function rearrange(args) {

    let result;

    try {

        let {

            pairs,
            array,

        } = args;

        //#region verify



        //#endregion
        //#region handle

        result = array;

        //#endregion
        //#region comply

        for (const [indexNow, indexNew] of pairs) {

            result.splice(indexNew, 0, result.splice(indexNow, 1)[0]);

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
 * ### arrayRearrange
 * - Тип `S`
 * - Версия `1.0.0`
 * ***
 * 
 * Функция перестановки элементов массива из заданной позиции в указанную.
 * 
 * ***
 * @arg {Y1} array `Массив`
 * @arg {boolean} directRight `Сдвиг вправо`
 * @arg {...[number, number]} pairs `Перестановки` 
 * @function
 * @template {any[]} Y1
*/
export function arrayRearrange(array, directRight, ...pairs) {

    return rearrange({ array, pairs, directRight, });

};
/**
 * ### arrayRearragneNew
 * - Тип `S`
 * - Версия `1.0.0`
 * ***
 * 
 * Функция {@link arrayRearrange|перестановки элементов массива из заданной позиции в указанную}.
 * Работает с копией указанного массива.
 * 
 * ***
 * @arg {Y1} array `Массив`
 * @arg {boolean} directRight `Сдвиг вправо`
 * @arg {...[number, number]} pairs `Перестановки` 
 * @function
 * @template {any[]} Y1
*/
export function arrayRearragneNew(array, ...pairs) {

    return rearragneNew({ array: array?.slice?.(), pairs, });

};

//#endregion

/**
 * @file array/module.mjs
 * @author Yakhin Nikita Artemovich <mr.y.nikita@gmail.com>
 * @license Apache-2.0
 * @copyright SYLS (Software Y Lib Solutions) 2023
*/