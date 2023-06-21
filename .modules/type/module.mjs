//#region YI

import { YComb, YKey } from '@syls/key';

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

/** typeGetKeys
 * 
 * *** 
 * 
 * Тип, позволяющий получить новый тип, содержащий только свойства объекта.
 * 
 * ***
 * @typedef {keyof T} typeGetKeys
 * @template T
*/
/** typeGetKeysProto
 * 
 * ***
 * 
 * Тип для извлечения ключей прототипа указанного объекта.
 * 
 * ***
 * @typedef {Exclude<keyof T, keyof K>} typeGetKeysProto
 * @template T,K
*/
/** typeGetKeysFunction
 * 
 * ***
 * 
 * Тип, позволяющий извлечь из другого типа все его функциональные ключи.
 * 
 * ***
 * @typedef {{[K in keyof T]: T[K] extends (...args: any[]) => any ? K : never}[keyof T]} typeGetKeysFunction
 * @template T
*/

/** typeUnique
 * 
 * ***
 * 
 * Тип, предназначенный для создания новых типов с извлечением уникальных свойств.
 * 
 * ***
 * @typedef {Pick<T, typeGetKeysProto<T,K>>} typeUnique
 * @template T,K 
*/

//#endregion
//#region YV



//#endregion



/**
 * @file module.mjs
 * @author Yakhin Nikita Artemovich <mr.y.nikita@gmail.com>
 * @copyright Yakhin Nikita Artemovich 2023
*/