//#region YI

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

/** ### requestT
 * - Тип `T`
 * - Версия `0.0.0`
 * 
 * Основной параметр модуля `request`.
 * 
 * @typedef requestT
 * @prop {any} _
 * 
*/

/** ### requestTTMethod
 * - Тип `TT`
 * 
 * Тип метода `HTTP` запросов.
 * 
 * @typedef {'GET'|'POST'|'UPDATE'|'DELETE'} requestTTMethod
 * 
*/
/** ### requestTTContentType
 * - Тип `TT`
 * 
 * Тип контента запросов.
 * 
 * @typedef {'text/plain'|'application/json'} requestTTContentType
 * 
*/

//#endregion
//#region YV



//#endregion

/**
 * @file module.mjs
 * @author Yakhin Nikita Artemovich <mr.y.nikita@gmail.com>
 * @copyright Yakhin Nikita Artemovich 2023
*/