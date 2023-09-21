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
 * @prop {any} _
 * 
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
        
        if (config.value.strictMode) {
            
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

        if (config.value.strictMode) {

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

        if (config.value.strictMode) {

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

        if (config.value.strictMode) {

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
 * @prop {boolean} direct
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
            direct,

        } = args;

        //#region verify



        //#endregion
        //#region handle



        //#endregion
        //#region comply

        if (direct) {

            bias

        } else {



        };

        //#endregion

    } catch (err) {

        if (config.value.strictMode) {

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
 * @arg {boolean} direct `Напрвление`
 * @returns {Y1}
 * @function
 * @template {any[]} Y1
*/
export function arrayMove(array, index, bias, direct) {

    return move({ array, index, bias, direct, });

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

        if (config.value.strictMode) {

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

        if (config.value.strictMode) {

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

        if (config.value.strictMode) {

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
        
        if (config.value.strictMode) {
            
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

        if (config.value.strictMode) {

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

        if (config.value.strictMode) {

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

        if (config.value.strictMode) {

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

        if (config.value.strictMode) {

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

        if (config.value.strictMode) {

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

        if (config.value.strictMode) {

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