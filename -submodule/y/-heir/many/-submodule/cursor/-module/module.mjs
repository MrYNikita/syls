//#region YI

/** @type {import('./config.mjs')['default']['value']?} */
let config = null;

await import('./config.mjs')

    .then(c => config = c.default?.value ? c.default.value : c.default)
    .catch(e => e);

/** @type {import('./error.mjs')['default']?} */
let error = null;

await import('./error.mjs')

    .then(e => error = e.default)
    .catch(e => e);

//#endregion
//#region YT

/** ### cursorT
 * - Тип `T`
 * - Версия `0.0.0`
 * 
 * Основной параметр модуля `cursor`.
 * 
 * @typedef cursorT
 * @prop {any[]} many
 * 
*/

//#endregion
//#region YV


//#endregion



/**
 * @file cursor/module.mjs
 * @author Yakhin Nikita Artemovich <mr.y.nikita@gmail.com>
 * @license Apache-2.0
 * @copyright SYLS (Software Y Lib Solutions) 2023
*/