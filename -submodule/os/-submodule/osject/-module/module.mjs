//#region YI

import { pathExists, pathGet } from '../../path/-module/export.mjs';
import { unlinkSync, statSync, renameSync, } from 'fs';

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

/** ### osjectT
 * - Тип `T`
 * - Версия `0.0.0`
 * - Модуль `osject`
 *
 * Основной параметр модуля `osject`.
 *
 * @typedef osjectT
 * @prop {any} _
 *
*/
/** ### osjectTData
 * - Тип `T`
 * - Версия `0.0.0`
 * - Модуль `osject`
 *
 *
 *
 * @typedef osjectTData
 * @prop {osjectTTData} data
 *
*/
/** ### osjectTExpand
 * - Тип `T`
 * - Версия `0.0.0`
 * - Модуль `osject`
 *
 *
 *
 * @typedef osjectTExpand
 * @prop {osjectTTExpand} expand
 *
*/
/** ### osjectTFragment
 * - Тип `T`
 * - Версия `0.0.0`
 * - Модуль `osject`
 *
 *
 *
 * @typedef osjectTFragment
 * @prop {osjectTTFragment} fragment
 *
*/
/** ### osjectTEncoding
 * - Тип `T`
 * - Версия `0.0.0`
 * - Модуль `os\osject`
 * 
 * 
 * 
 * @typedef osjectTEncoding
 * @prop {osjectTTEncoding} encoding
 * 
*/

/** ### osjectTTData
 * - Тип `TT`
 * - Версия `0.0.0`
 * - Модуль `osject`
 *
 *
 *
 * @typedef {string|[]|[][]|{}} osjectTTData
 *
*/
/** ### osjectTTExpand
 * - Тип `TT`
 * - Версия `0.0.0`
 * - Модуль `osject`
 *
 *
 *
 * @typedef {'csv'|'txt'|'json'} osjectTTExpand
 *
*/
/** ### osjectTTFragment
 * - Тип `TT`
 * - Версия `0.0.0`
 * - Модуль `osject`
 *
 *
 *
 * @typedef {import("../path/module.mjs").pathTTFragment} osjectTTFragment
 *
*/
/** ### osjectTTEncoding
 * - Тип `TT`
 * - Версия `0.0.0`
 * - Модуль `os\osject`
 * 
 * 
 * 
 * @typedef {string} osjectTTEncoding
 * 
*/

//#endregion
//#region YV



//#endregion

//#region getName 0.0.0

/** ### osjectTFGetName
 * - Тип `TF`
 * - Версия `0.0.0`
 * - Модуль `os\osject`
 * ***
 * 
 * Результирующие параметры функции `getName`.
 * 
 * @typedef {osjectTFUGetName&osjectT&osjectTFragment} osjectTFGetName
 * 
*/
/** ### osjectTFUGetName
 * - Тип `TFU`
 * - Версия `0.0.0`
 * - Модуль `os\osject`
 * 
 * Уникальные параметры функции `getName`.
 * 
 * @typedef osjectTFUGetName
 * @prop {any} _
*/

/** @arg {osjectTFGetName} t */
function getNameDeceit(t) {

    try {

        return getNameVerify(t);

    } catch (e) {

        if (config?.strict) {

            throw e;

        };

        return undefined;

    } finally {



    };

};
/** @arg {osjectTFGetName} t */
function getNameVerify(t) {

    const {



    } = t;

    return getNameHandle(t);

};
/** @arg {osjectTFGetName} t */
function getNameHandle(t) {

    const {



    } = t;

    t.fragment = pathGet(t.fragment);

    return getNameComply(t);

};
/** @arg {osjectTFGetName} t */
function getNameComply(t) {

    const {

        fragment,

    } = t;

    return osjectGetNameFull(fragment).split('.')[0];

};

/**
 * ### osjectGetname
 * - Версия `0.0.0`
 * - Цепочка `DVHCa`
 * - Модуль `os\osject`
 * ***
 * 
 * Функция получения имени файла, полученного по указанному фргаменту.
 * 
 * ***
 * @arg {osjectTTFragment} fragment `Фрагмент`
*/
export function osjectGetName(fragment) {

    return getNameDeceit({ fragment, });

};

//#endregion
//#region getNameFull 0.0.0

/** ### osjectTFGetNameFull
 * - Тип `TF`
 * - Версия `0.0.0`
 * - Модуль `os\osject`
 * ***
 * 
 * Результирующие параметры функции `getNameFull`.
 * 
 * @typedef {osjectTFUGetNameFull&osjectT&osjectTFragment} osjectTFGetNameFull
 * 
*/
/** ### osjectTFUGetNameFull
 * - Тип `TFU`
 * - Версия `0.0.0`
 * - Модуль `os\osject`
 * 
 * Уникальные параметры функции `getNameFull`.
 * 
 * @typedef osjectTFUGetNameFull
 * @prop {any} _
*/

/** @arg {osjectTFGetNameFull} t */
function getNameFullDeceit(t) {

    try {

        return getNameFullVerify(t);

    } catch (e) {

        if (config?.strict) {

            throw e;

        };

        return undefined;

    } finally {



    };

};
/** @arg {osjectTFGetNameFull} t */
function getNameFullVerify(t) {

    const {



    } = t;

    return getNameFullHandle(t);

};
/** @arg {osjectTFGetNameFull} t */
function getNameFullHandle(t) {

    const {



    } = t;

    return getNameFullComply(t);

};
/** @arg {osjectTFGetNameFull} t */
function getNameFullComply(t) {

    const {

        fragment,

    } = t;

    return fragment.split('/').at(-1);

};

/**
 * ### osjectGetNameFull
 * - Версия `0.0.0`
 * - Цепочка `DVHCa`
 * - Модуль `os\osject`
 * ***
 * 
 * Функция получения полного имени файла по указанному фрагменту.
 * 
 * ***
 * @arg {osjectTTFragment} fragment `Фрагмент`
*/
export function osjectGetNameFull(fragment) {

    return getNameFullDeceit({ fragment, });

};

//#endregion
//#region getExpand 0.0.0

/** ### osjectTFGetExpand
 * - Тип `TF`
 * - Версия `0.0.0`
 * - Модуль `os\osject`
 * ***
 * 
 * Результирующие параметры функции `getExpand`.
 * 
 * @typedef {osjectTFUGetExpand&osjectT&osjectTFragment} osjectTFGetExpand
 * 
*/
/** ### osjectTFUGetExpand
 * - Тип `TFU`
 * - Версия `0.0.0`
 * - Модуль `os\osject`
 * 
 * Уникальные параметры функции `getExpand`.
 * 
 * @typedef osjectTFUGetExpand
 * @prop {any} _
*/

/** @arg {osjectTFGetExpand} t */
function getExpandDeceit(t) {

    try {

        return getExpandVerify(t);

    } catch (e) {

        if (config?.strict) {

            throw e;

        };

        return undefined;

    } finally {



    };

};
/** @arg {osjectTFGetExpand} t */
function getExpandVerify(t) {

    const {



    } = t;

    return getExpandHandle(t);

};
/** @arg {osjectTFGetExpand} t */
function getExpandHandle(t) {

    const {



    } = t;

    t.fragment = pathGet(t.fragment);

    return getExpandComply(t);

};
/** @arg {osjectTFGetExpand} t */
function getExpandComply(t) {

    const {

        fragment,

    } = t;


    const name = fragment.split('/').at(-1);
    const countDot = name.match(/\./g)?.length;

    if (!countDot) {

        const isDir = statSync(fragment).isDirectory();

        return isDir ? 'dir' : '';

    } else {

        return name.split('.').at(-1);

    };

};

/**
 * ### osjectGetExpand
 * - Версия `0.0.0`
 * - Цепочка `DVHCa`
 * - Модуль `os\osject`
 * ***
 * 
 * Метод получения расширения файла, полученного по указанному пути.
 * 
 * ***
 * @arg {osjectTTFragment} fragment `Фрагмент`
 * @returns {string}
*/
export function osjectGetExpand(fragment) {

    return getExpandDeceit({ fragment, });

};

//#endregion
//#region getLocation 0.0.0

/** ### osjectTFGetLocation
 * - Тип `TF`
 * - Версия `0.0.0`
 * - Модуль `os\osject`
 * ***
 * 
 * Результирующие параметры функции `getLocation`.
 * 
 * @typedef {osjectTFUGetLocation&osjectT&osjectTFragment} osjectTFGetLocation
 * 
*/
/** ### osjectTFUGetLocation
 * - Тип `TFU`
 * - Версия `0.0.0`
 * - Модуль `os\osject`
 * 
 * Уникальные параметры функции `getLocation`.
 * 
 * @typedef osjectTFUGetLocation
 * @prop {any} _
*/

/** @arg {osjectTFGetLocation} t */
function getLocationDeceit(t) {

    try {

        return getLocationVerify(t);

    } catch (e) {

        if (config?.strict) {

            throw e;

        };

        return undefined;

    } finally {



    };

};
/** @arg {osjectTFGetLocation} t */
function getLocationVerify(t) {

    const {



    } = t;

    return getLocationHandle(t);

};
/** @arg {osjectTFGetLocation} t */
function getLocationHandle(t) {

    const {



    } = t;

    t.fragment = pathGet(t.fragment);

    return getLocationComply(t);

};
/** @arg {osjectTFGetLocation} t */
function getLocationComply(t) {

    const {

        fragment,

    } = t;

    return fragment.split('/').slice(0, -1).join('/');

};

/**
 * ### osjectGetLocation
 * - Версия `0.0.0`
 * - Цепочка `DVHCa`
 * - Модуль `os\osject`
 * ***
 * 
 * Функция получения расположения файла, полученного по указанному фрагменту.
 * 
 * ***
 * @arg {osjectTTFragment} fragment `Фрагмент`
*/
export function osjectGetLocation(fragment) {

    return getLocationDeceit({ fragment, });

};

//#endregion

//#region move 0.1.0

/** ### osjectTFMove
 * - Тип `TF`
 * - Версия `0.0.0`
 * - Модуль `osject`
 * ***
 *
 * Результирующие параметры функции `move`.
 *
 * @typedef {osjectTFUMove&osjectT&osjectTFragment} osjectTFMove
 *
*/
/** ### osjectTFUMove
 * - Тип `TFU`
 * - Версия `0.0.0`
 * - Модуль `osject`
 *
 * Уникальные параметры функции `move`.
 *
 * @typedef osjectTFUMove
 * @prop {osjectTTFragment} location
*/

/** @arg {osjectTFMove} t */
function moveDeceit(t) {

    try {

        return moveVerify(t);

    } catch (e) {

        if (config.strict) throw e;

        return undefined;

    };

};
/** @arg {osjectTFMove} t */
function moveVerify(t) {

    const {



    } = t;

    return moveHandle(t);

};
/** @arg {osjectTFMove} t */
function moveHandle(t) {

    const {

        fragment,
        location,

    } = t;

    t.fragment = pathGet(t.fragment);
    t.location = pathGet(t.location);

    return moveComply(t);

};
/** @arg {osjectTFMove} t */
function moveComply(t) {

    const {

        fragment,
        location,

    } = t;

    if (pathExists(location)) {

        const result = location + '/' + osjectGetNameFull(fragment);

        renameSync(fragment, location + '/' + osjectGetNameFull(fragment));

        return result;

    };

    return fragment;

};

/**
 * ### osjectMove
 * - Версия `0.1.0`
 * - Цепочка `DVHCa`
 * - Модуль `osject`
 * ***
 *
 * Функция перемещения файла.
 *
 * ***
 * @arg {osjectTTFragment} fragment `Фрагмент`
 * @arg {osjectTTFragment} location `Размещение`
*/
export function osjectMove(fragment, location) {

    return moveDeceit({ fragment, location });

};

//#endregion
//#region exists 0.0.0

/** ### osjectTFExists
 * - Тип `TF`
 * - Версия `0.0.0`
 * - Модуль `os\osject`
 * ***
 * 
 * Результирующие параметры функции `exists`.
 * 
 * @typedef {osjectTFUExists&osjectT&osjectTFragment} osjectTFExists
 * 
*/
/** ### osjectTFUExists
 * - Тип `TFU`
 * - Версия `0.0.0`
 * - Модуль `os\osject`
 * 
 * Уникальные параметры функции `exists`.
 * 
 * @typedef osjectTFUExists
 * @prop {any} _
*/

/** @arg {osjectTFExists} t */
function existsDeceit(t) {

    try {

        return existsVerify(t);

    } catch (e) {

        if (config?.strict) {

            throw e;

        };

        return undefined;

    } finally {



    };

};
/** @arg {osjectTFExists} t */
function existsVerify(t) {

    const {



    } = t;

    return existsHandle(t);

};
/** @arg {osjectTFExists} t */
function existsHandle(t) {

    const {



    } = t;

    t.fragment = pathGet(t.fragment);

    return existsComply(t);

};
/** @arg {osjectTFExists} t */
function existsComply(t) {

    const {

        fragment,

    } = t;

    if (pathExists(t.fragment)) {

        return !!statSync(t.fragment);

    };

    return false;

};

/**
 * ### osjectexists
 * - Версия `0.0.0`
 * - Цепочка `DVHCa`
 * - Модуль `os\osject`
 * ***
 * 
 * Функция проверки файла полученного по указанному фрагменту на принадлежность к файлам.
 * 
 * ***
 * @arg {osjectTTFragment} fragment `Фрагмент`
*/
export function osjectExists(fragment) {

    return existsDeceit({ fragment, });

};

//#endregion
//#region delete 0.1.0

/** ### osjectTFDelete
 * - Тип `TF`
 * - Версия `0.0.0`
 * - Модуль `osject`
 * ***
 *
 * Результирующие параметры функции `delete`.
 *
 * @typedef {osjectTFUDelete&osjectTFragment} osjectTFDelete
 *
*/
/** ### osjectTFUDelete
 * - Тип `TFU`
 * - Версия `0.0.0`
 * - Модуль `osject`
 *
 * Уникальные параметры функции `delete`.
 *
 * @typedef osjectTFUDelete
 * @prop {any} _
*/

/** @arg {osjectTFDelete} t */
function deleteDeceit(t) {

    try {

        return deleteVerify(t);

    } catch (e) {

        console.log(e);

        if (config.strict) throw e;

        return undefined;

    };

};
/** @arg {osjectTFDelete} t */
function deleteVerify(t) {

    const {



    } = t;

    return deleteHandle(t);

};
/** @arg {osjectTFDelete} t */
function deleteHandle(t) {

    const {



    } = t;

    t.fragment = pathGet(t.fragment);

    return deleteComply(t);

};
/** @arg {osjectTFDelete} t */
function deleteComply(t) {

    const {

        fragment,

    } = t;

    unlinkSync(fragment);

    return fragment;

};

/**
 * ### osjectDelete
 * - Версия `0.1.0`
 * - Цепочка `DVHCa`
 * - Модуль `osject`
 * ***
 *
 * Функция удаления указанного файла по фрагменту пути.
 *
 * ***
 * @arg {osjectTTFragment} fragment `Фрагмент`
*/
export function osjectDelete(fragment) {

    return deleteDeceit({ fragment });

};

//#endregion
//#region rename 0.1.0

/** ### osjectTFRename
 * - Тип `TF`
 * - Версия `0.0.0`
 * - Модуль `osject`
 * ***
 *
 * Результирующие параметры функции `rename`.
 *
 * @typedef {osjectTFURename&osjectTFragment} osjectTFRename
 *
*/
/** ### osjectTFURename
 * - Тип `TFU`
 * - Версия `0.0.0`
 * - Модуль `osject`
 *
 * Уникальные параметры функции `rename`.
 *
 * @typedef osjectTFURename
 * @prop {string} name
*/

/** @arg {osjectTFRename} t */
function renameDeceit(t) {

    try {

        return renameVerify(t);

    } catch (e) {

        console.log(e);

        if (config.strict) throw e;

        return undefined;

    } finally {



    };

};
/** @arg {osjectTFRename} t */
function renameVerify(t) {

    const {



    } = t;

    return renameHandle(t);

};
/** @arg {osjectTFRename} t */
function renameHandle(t) {

    const {



    } = t;

    t.fragment = pathGet(t.fragment);

    return renameComply(t);

};
/** @arg {osjectTFRename} t */
function renameComply(t) {

    const {

        name,
        fragment

    } = t;

    const expand = osjectGetExpand(fragment);
    const location = osjectGetLocation(fragment);

    const result = `${location}/${name}${['dir', ''].includes(expand) ? '' : '.' + expand}`;

    renameSync(t.fragment, result);

    return result;

};

/**
 * ### osjectRename
 * - Версия `0.1.0`
 * - Цепочка `DVHCa`
 * - Модуль `osject`
 * ***
 *
 * Функция переименования объекта файловой системы.
 *
 * ***
 * @arg {string} name `Наименование`
 * @arg {osjectTTFragment} fragment `Фргамент`
*/
export function osjectRename(fragment, name) {

    return renameDeceit({ fragment, name });

};

//#endregion

/**
 * @osject module.mjs
 * @author Yakhin Nikita Artemovich <mr.y.nikita@gmail.com>
 * @copyright Yakhin Nikita Artemovich 2023
*/