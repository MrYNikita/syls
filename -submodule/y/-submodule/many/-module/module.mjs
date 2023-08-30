//#region YI

import { YDimension } from '../-submodule/dimension/-module/class.mjs';

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

/** ### manyT
 * - Тип `T`
 * - Версия `0.0.0`
 * - Модуль `ject\many`
 *
 * Основной параметр модуля `many`.
 *
 * @typedef manyT
 * @prop {any[]} many
 *
*/
/** ### manyTIndex
 * - Тип `T`
 * - Версия `0.0.0`
 * - Модуль `ject\many`
 *
 *
 *
 * @typedef manyTIndex
 * @prop {number} index
 *
*/
/** ### manyTLimit
 * - Тип `T`
 * - Версия `0.0.0`
 * - Модуль `ject\many`
 *
 *
 *
 * @typedef manyTLimit
 * @prop {number} limit
 *
*/
/** ### manyTLength
 * - Тип `T`
 * - Версия `0.0.0`
 * - Модуль `ject\many`
 *
 *
 *
 * @typedef manyTLength
 * @prop {number} length
 *
*/

//#endregion
//#region YV



//#endregion

//#region get 

/** ### manyTFGet
 * - Тип `TF`
 * - Версия `0.0.0`
 * ***
 * 
 * Результирующие параметры функции `get`.
 * 
 * @typedef {manyTFUGet&manyT} manyTFGet
 * 
*/
/** ### manyTFUGet
 * - Тип `TFU`
 * - Версия `0.0.0`
 * 
 * Уникальные параметры функции `get`.
 * 
 * @typedef manyTFUGet
 * @prop {number[]} indexs
*/

/** @arg {manyTFGet} t */
function getDeceit(t) {

    try {

        return getVerify(t);

    } catch (e) {

        if (config?.strictMode) {

            throw e;

        };

        return undefined;

    } finally {



    };

};
/** @arg {manyTFGet} t */
function getVerify(t) {

    const {



    } = t;

    return getHandle(t);

};
/** @arg {manyTFGet} t */
function getHandle(t) {

    const {



    } = t;

    return getComply(t);

};
/** @arg {manyTFGet} t */
function getComply(t) {

    const {

        many,
        indexs,

    } = t;

    let result = many;

    if (indexs.length) {

        for (const index of indexs) {

            result = result[index];

        };

    };

    return result;

};

/**
 * ### manyGet
 * - Версия `0.0.0`
 * - Цепочка `DVHCa`
 * - Модуль `array`
 * ***
 *
 * Функция получения значения из множества по указанным индексам.
 *
 * ***
 * @arg {G[]} many `Множество`
 * @arg {...number} indexs `Индексы`
 * @template {Array} G
*/
export function manyGet(many, ...indexs) {

    return getDeceit({ many, indexs, });

};

//#endregion

/**
 * @file module.mjs
 * @author Yakhin Nikita Artemovich <mr.y.nikita@gmail.com>
 * @copyright Yakhin Nikita Artemovich 2023
*/