//#region YI

import { YArg } from '@syls/y/arg';
import { YCond } from '@syls/y/cond';
import { configPath as config } from './config.mjs';
import { stringPaste, stringUnify } from "@syls/string";
import { existsSync, lstatSync, readdirSync, statSync, } from "fs";
import path from 'path';

//#endregion
//#region YT

/** ### pathT
 * - Тип `T`
 * - Версия `0.0.0`
 * 
 * Основной параметр модуля `path`.
 * 
 * @typedef pathT
 * @prop {string} name
 * @prop {string} path
 * @prop {number} limit
 * @prop {string[]} paths
 * @prop {boolean} cacheMode
 * @prop {string|RegExp} fragment
 * @prop {pathT['fragment'][]} fragments
 * @prop {'ps'|'cmd'|'txt'|'csv'|'mjs'|'js'|'cjs'|'json'} expand
 * 
*/

//#endregion
//#region YV

/**
 * ### pathVRETempalte
 * - Версия `0.0.0`
 * 
 * Шаблон регулярного выражения файловых путей.
 * 
 * ***
 * 
*/
export const pathVRETempalte = /^(\w:|\.|\.\.)\/((\.|\.\.|(\d|\w| |\.|\,|\-)+)\/?)+$/;

//#endregion

//#region isRelative

/**
 * ### isRelative
 * - Тип `S`
 * - Версия `1.0.0`
 * ***
 * 
 * 
 * 
 * ***
 * @typedef isRelativeT
 * @prop {string} fragment
 * ***
 * @arg {pathT&isRelativeT} args `Аргументы`
 * @since `1.0.0`
 * @version `1.0.0`
 * @function
*/
function isRelative(args) {
    
    let result;
    
    try {
        
        let {
            
            fragment,
            
        } = args;
        
        //#region verify
        
        
        
        //#endregion
        //#region handle
        
        
        
        //#endregion
        //#region comply
        
        result = /^\/?\.\/|^\/?\.\.\//.test(fragment);
        
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
 * ### pathIsRelative
 * - Тип `S`
 * - Версия `1.0.0`
 * ***
 * 
 * Функция проверки пути на относительность.
 * 
 * ***
 * @arg {pathTFragment} fragment `Фрагмент`
 * 
 * 
 * ***
 * @since `1.0.0`
 * @version `1.0.0`
 * @function
*/
export function pathIsRelative(fragment) {

    return isRelative({ fragment, });

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
 * @prop {} _
 * ***
 * @arg {pathT&getT&pathTFragment&pathTCacheMode} args `Аргументы`
 * @since `1.0.0`
 * @version `1.0.0`
 * @function
*/
function get(args) {

    let result;

    try {

        let {

            fragment,

        } = args;

        //#region verify



        //#endregion
        //#region handle

        fragment = pathNormalize(fragment);

        if (pathIsRelative(fragment)) fragment = pathGetFragment(fragment);

        //#endregion
        //#region comply

        if (pathExist(fragment)) {

            result = fragment;

        } else {

            const pathProject = pathGetProject();

            const paths = readdirSync(pathProject);

            for (const index in paths) paths[index] = pathConcat(pathProject, paths[index]);

            while (paths.length && !result) {

                for (const index in paths) {

                    if (paths[index].match(fragment)) {

                        result = paths[index];

                        break;

                    };

                };

                if (result) break;

                const appends = pathGetIn(paths.pop());

                if (appends?.length) paths.push(...appends);

            };

            if (!result) result = null;

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
 * ### pathGet
 * - Тип `S`
 * - Версия `1.0.0`
 * ***
 * 
 * Функция получения пути до файла/директории по указанному фрагменту пути.
 * Если фрагмент пути уникальный и не повторяется в проекте, то с помощью данной функции можно получить его без необходимости указывать полный путь.
 *
 * Новая версия `1.0.0` ускорила работу функции за счёт изменения работы алгоритма, направленного на получение первого совпадения, для которого не требуются
 * дополнительные проверки и выделение памяти. Были также убраны любые использования непроизводительных ES6 методов массивов.
 * 
 * ***
 * @arg {pathT['fragment']} fragment `Фрагмент`
 * @arg {pathT['cacheMode']} cacheMode `Режим кэширования`
 * @returns {string|null}
 * ***
 * @since `1.0.0`
 * @version `1.0.0`
 * @function
*/
export function pathGet(fragment, cacheMode) {

    return get({ fragment, cacheMode, });

};
/**
 * ### pathGetMany
 * - Тип `S`
 * - Версия `1.0.0`
 * ***
 * 
 * Функция {@link pathGet|получения пути до файла/директории по указанному фрагменту пути} для множества путей.
 * 
 * ***
 * @arg {pathT['fragments']} fragments `Фрагмент`
 * 
 * 
 * ***
 * @since `1.0.0`
 * @version `1.0.0`
 * @function
*/
export function pathGetMany(...fragments) {

    const result = [];

    for (const fragment of fragments) result.push(pathGet(fragment));

    return result;

};

//#endregion
//#region getTo

/**
 * ### getTo
 * - Тип `S`
 * - Версия `1.0.0`
 * ***
 * 
 * 
 * 
 * ***
 * @typedef getToT
 * @prop {string} to
 * @prop {string} from
 * ***
 * @arg {pathT&getToT} args `Аргументы`
 * @since `1.0.0`
 * @version `1.0.0`
 * @function
*/
function getTo(args) {

    let result;

    try {

        let {

            to,
            from,

        } = args;

        //#region verify



        //#endregion
        //#region handle

        result = [];

        if (!from) from = pathGetProject();

        //#endregion
        //#region comply

        const toParts = pathDecompose(to);
        const fromParts = pathDecompose(from);

        let pointAdjacent = null;

        for (const index in toParts.length > fromParts.length ? toParts : fromParts) {

            const toPart = toParts[index];
            const fromPart = fromParts[index];

            if (toPart !== fromPart) {

                pointAdjacent = index - 1;

                break;

            };

        };

        for (let index = fromParts.length - 2; index > pointAdjacent; index--) result.push('..');

        for (let index = pointAdjacent + 1; index < toParts.length; index++) result.push(toParts[index]);

        result = result[0] === '..' ? pathConcat(...result) : pathConcat('.', ...result);

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
 * ### pathGetTo
 * - Тип `S`
 * - Версия `1.0.0`
 * ***
 * 
 * Функция получения относительного пути от одного объекта файловой системы к другому.
 * 
 * ***
 * @arg {string} to `Куда`
 * @arg {string} from `Откуда`
 * ***
 * @since `1.0.0`
 * @version `1.0.0`
 * @function
*/
export function pathGetTo(to, from) {

    return getTo({ from, to, });

};

//#endregion
//#region getIn

/**
 * ### getIn
 * - Тип `S`
 * - Версия `1.0.0`
 * ***
 * 
 * 
 * 
 * ***
 * @typedef getInT
 * @prop {} _
 * ***
 * @arg {pathT&getInT&pathTFragment} args `Аргументы`
 * @since `1.0.0`
 * @version `1.0.0`
 * @function
*/
function getIn(args) {

    let result;

    try {

        let {

            fragment,

        } = args;

        //#region verify



        //#endregion
        //#region handle



        //#endregion
        //#region comply

        if (existsSync(fragment) && lstatSync(fragment).isDirectory()) {

            return readdirSync(fragment).map(f => pathConcat(fragment, f));

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
 * ### pathGetIn
 * - Тип `S`
 * - Версия `1.0.0`
 * ***
 * 
 * Функция получения внутренних путей.
 *
 * Извлекаются все пути, лежащие в указанном пути.
 *
 * ***
 * @arg {pathTTFragment} fragment `Фрагмент`
 * 
 * 
 * ***
 * @since `1.0.0`
 * @version `1.0.0`
 * @function
*/
export function pathGetIn(fragment) {

    return getIn({ fragment, });

};

//#endregion
//#region getAll

/**
 * ### getAll
 * - Тип `S`
 * - Версия `1.0.0`
 * ***
 * 
 * 
 * 
 * ***
 * @typedef getAllT
 * @prop {} _
 * ***
 * @arg {pathT&getAllT&pathTFragment&pathTLimit&pathTCacheMode} args `Аргументы`
 * @since `1.0.0`
 * @version `1.0.0`
 * @function
*/
function getAll(args) {

    let result;

    try {

        let {

            fragment,
            cacheMode,

        } = args;

        //#region verify



        //#endregion
        //#region handle

        result = [];

        fragment = pathNormalize(fragment);

        //#endregion
        //#region comply

        const pathProject = pathGetProject();

        const paths = readdirSync(pathProject);

        for (const index in paths) paths[index] = pathConcat(pathProject, paths[index]);

        while (paths.length) {

            const path = paths.pop();
            const pathsNew = pathGetIn(path);

            if (pathsNew) paths.push(...pathsNew);
            if ((fragment && path.match(fragment)) || !fragment) result.push(path);

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
 * ### pathGetAll
 * - Тип `S`
 * - Версия `1.0.0`
 * ***
 * 
 * Функция получения всех путей проекта.
 * 
 * ***
 * @arg {number} limit `Предел`
 * @arg {pathTTFragment} fragment `Фрагмент`
 * @function
*/
export function pathGetAll(fragment, limit) {

    return getAll({ fragment, limit, });

};

//#endregion
//#region getNow

/**
 * ### getNow
 * - Тип `S`
 * - Версия `1.0.0`
 * ***
 * 
 * 
 * 
 * ***
 * @typedef getNowT
 * @prop {ImportMeta} meta
 * ***
 * @arg {pathT&getNowT} args `Аргументы`
 * @since `1.0.0`
 * @version `1.0.0`
 * @function
*/
function getNow(args) {

    let result;

    try {

        let {

            meta,

        } = args;

        //#region verify



        //#endregion
        //#region handle



        //#endregion
        //#region comply

        result = (meta?.url ? meta.url : import.meta.url).slice(8);

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
 * ### pathGetNow
 * - Тип `S`
 * - Версия `1.0.0`
 * ***
 * 
 * Функция получения пути текущего расположения в файловой системе.
 * 
 * ***
 * @arg {ImportMeta} meta `Метаданные`
 * 
 * 
 * ***
 * @since `1.0.0`
 * @version `1.0.0`
 * @function
*/
export function pathGetNow(meta) {

    return getNow({ meta });

};

//#endregion
//#region getDisk

/**
 * ### getDisk
 * - Тип `S`
 * - Версия `1.0.0`
 * ***
 * 
 * 
 * 
 * ***
 * @typedef getDiskT
 * @prop {} _
 * ***
 * @arg {pathT&getDiskT} args `Аргументы`
 * @since `1.0.0`
 * @version `1.0.0`
 * @function
*/
function getDisk(args) {

    let result;

    try {

        let {

            path,

        } = args;

        //#region verify



        //#endregion
        //#region handle

        

        //#endregion
        //#region comply

        result = path ? path[0] : import.meta.url.match(/\/\/\/(\w+?):/)[1];

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
 * ### pathGetDisk
 * - Тип `S`
 * - Версия `1.0.0`
 * ***
 * 
 * Функция получения диска, на котором расположен проект.
 * 
 * ***
 * @arg {pathT['path']} path `Путь`
 * 
 * 
 * ***
 * @since `1.0.0`
 * @version `1.0.0`
 * @function
*/
export function pathGetDisk(path) {

    return getDisk({ path, });

};

//#endregion
//#region getName

/**
 * ### getName
 * - Тип `S`
 * - Версия `1.0.0`
 * ***
 * 
 * 
 * 
 * ***
 * @typedef getNameT
 * @prop {} _
 * ***
 * @arg {pathT&getNameT} args `Аргументы`
 * @since `1.0.0`
 * @version `1.0.0`
 * @function
*/
function getName(args) {
    
    let result;
    
    try {
        
        let {
            
            path,
            
        } = args;
        
        //#region verify
        
        
        
        //#endregion
        //#region handle
        
        
        
        //#endregion
        //#region comply
        
        result = pathGetNameFull(path).split('.')[0];
        
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
 * ### pathGetName
 * - Тип `S`
 * - Версия `1.0.0`
 * ***
 * 
 * Функция полкчения имени объекта os по указанному пути.
 * 
 * ***
 * @arg {pathT['path']} path `Путь`
 * 
 * 
 * ***
 * @since `1.0.0`
 * @version `1.0.0`
 * @function
*/
export function pathGetName(path) {

    return getName({ path, });

};

//#endregion
//#region getNameFull

/**
 * ### getNameFull
 * - Тип `S`
 * - Версия `1.0.0`
 * ***
 * 
 * 
 * 
 * ***
 * @typedef getNameFullT
 * @prop {} _
 * ***
 * @arg {pathT&getNameFullT} args `Аргументы`
 * @since `1.0.0`
 * @version `1.0.0`
 * @function
*/
function getNameFull(args) {
    
    let result;
    
    try {
        
        let {
            
            path,
            
        } = args;
        
        //#region verify
        
        
        
        //#endregion
        //#region handle
        
        
        
        //#endregion
        //#region comply

        result = path.split('/').at(-1);
        
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
 * ### pathGetNameFull
 * - Тип `S`
 * - Версия `1.0.0`
 * ***
 * 
 * Функция получения полного имени объекта os по указанному пути.
 * 
 * ***
 * @arg {pathT['path']} path `Путь`
 * 
 * 
 * ***
 * @since `1.0.0`
 * @version `1.0.0`
 * @function
*/
export function pathGetNameFull(path) {

    return getNameFull({ path, });

};

//#endregion
//#region getExpand

/**
 * ### getExpand
 * - Тип `S`
 * - Версия `1.0.0`
 * ***
 * 
 * 
 * 
 * ***
 * @typedef getExpandT
 * @prop {} _
 * ***
 * @arg {pathT&getExpandT} args `Аргументы`
 * @since `1.0.0`
 * @version `1.0.0`
 * @function
*/
function getExpand(args) {
    
    let result;
    
    try {
        
        let {
            
            fragment,
            
        } = args;
        
        //#region verify
        
        
        
        //#endregion
        //#region handle
        
        fragment = pathGet(fragment) ?? fragment;
        
        //#endregion
        //#region comply
        
        const name = pathDecompose(fragment).at(-1);

        result = name.match(/\./) ? name.slice(name.indexOf('.') + 1) : statSync(fragment).isDirectory() ? 'dir' : '';
        
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
 * ### pathGetExpand
 * - Тип `S`
 * - Версия `1.0.0`
 * ***
 * 
 * Функция получения расширения объекта os по указанному пути.
 * 
 * ***
 * @arg {pathT['fragment']} fragment `Фрагмент`
 * 
 * 
 * ***
 * @since `1.0.0`
 * @version `1.0.0`
 * @function
*/
export function pathGetExpand(fragment) {

    return getExpand({ fragment });

};

//#endregion
//#region getProject

/**
 * ### getProject
 * - Тип `S`
 * - Версия `1.0.0`
 * ***
 * 
 * 
 * 
 * ***
 * @typedef getProjectT
 * @prop {} _
 * ***
 * @arg {pathT&getProjectT} args `Аргументы`
 * @since `1.0.0`
 * @version `1.0.0`
 * @function
*/
function getProject(args) {

    let result;

    try {

        let {



        } = args;

        //#region verify



        //#endregion
        //#region handle



        //#endregion
        //#region comply

        const fragments = import.meta.url.slice(8).split('/');
        const index = fragments.findIndex(fragment => fragment === 'syls');

        result = fragments.slice(0, index + 1 ?? 0).join('/');

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
 * ### pathGetProject
 * - Тип `S`
 * - Версия `1.0.0`
 * ***
 * 
 * Функция получения полного пути до корневой папки текущего проекта.
 * 
 * ***
 * 
 * 
 * 
 * ***
 * @since `1.0.0`
 * @version `1.0.0`
 * @function
*/
export function pathGetProject() {

    return getProject({});

};

//#endregion
//#region getFragment

/**
 * ### getFragment
 * - Тип `S`
 * - Версия `1.0.0`
 * ***
 * 
 * 
 * 
 * ***
 * @typedef getFragmentT
 * @prop {string|RegExp} fragment
 * ***
 * @arg {pathT&getFragmentT} args `Аргументы`
 * @since `1.0.0`
 * @version `1.0.0`
 * @function
*/
function getFragment(args) {
    
    let result;
    
    try {
        
        let {
            
            fragment,
            
        } = args;
        
        //#region verify
        
        
        
        //#endregion
        //#region handle
        
        
        
        //#endregion
        //#region comply
        
        result = [];
        
        const paths = pathDecompose(fragment);

        for (const part of paths) {

            if (['.', '..'].includes(part)) continue;

            result.push(part);

        };

        result = pathConcat(...result);
        
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
 * ### pathGetFragment
 * - Тип `S`
 * - Версия `1.0.0`
 * ***
 * 
 * Функция получения существенного фрагмента пути из относительных путей.
 * 
 * ***
 * @arg {string|RegExp} fragment `Фрагмент`
 * 
 * 
 * ***
 * @since `1.0.0`
 * @version `1.0.0`
 * @function
*/
export function pathGetFragment(fragment) {

    return getFragment({ fragment, });

};

//#endregion
//#region setName

/**
 * ### setName
 * - Тип `S`
 * - Версия `1.0.0`
 * ***
 * 
 * 
 * 
 * ***
 * @typedef setNameT
 * @prop {} _
 * ***
 * @arg {pathT&setNameT} args `Аргументы`
 * @since `1.0.0`
 * @version `1.0.0`
 * @function
*/
function setName(args) {
    
    let result;
    
    try {
        
        let {
            
            path,
            name,
            
        } = args;
        
        //#region verify
        
        
        
        //#endregion
        //#region handle
        
        
        
        //#endregion
        //#region comply
        
        const nameOld = pathGetName(path);

        result = stringPaste(path, name, path.lastIndexOf(nameOld), nameOld.length);
        
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
 * ### pathSetName
 * - Тип `S`
 * - Версия `1.0.0`
 * ***
 * 
 * Функция изменения имени пути.
 * 
 * ***
 * @arg {pathT['path']} path `Путь`
 * @arg {pathT['name']} name `Наименование`
 * 
 * 
 * ***
 * @since `1.0.0`
 * @version `1.0.0`
 * @function
*/
export function pathSetName(path, name) {

    return setName({ path, name, });

};

//#endregion
//#region setExpand

/**
 * ### setExpand
 * - Тип `S`
 * - Версия `1.0.0`
 * ***
 * 
 * 
 * 
 * ***
 * @typedef setExpandT
 * @prop {} _
 * ***
 * @arg {pathT&setExpandT} args `Аргументы`
 * @since `1.0.0`
 * @version `1.0.0`
 * @function
*/
function setExpand(args) {
    
    let result;
    
    try {
        
        let {
            
            path,
            expand,
            
        } = args;
        
        //#region verify
        
        
        
        //#endregion
        //#region handle
        
        if (!expand) expand = config.params.expandDefault;
        
        //#endregion
        //#region comply
        
        result = path.slice(0, path.match(pathGetExpand(path)).index) + expand;
        
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
 * ### pathSetExpand
 * - Тип `S`
 * - Версия `1.0.0`
 * ***
 * 
 * Функция для изменения пути, с заменой текущего расширения на указанное.
 * 
 * ***
 * @arg {pathT['path']} path `Путь`
 * @arg {pathT['expand']} expand `Расширение`
 * 
 * ***
 * @since `1.0.0`
 * @version `1.0.0`
 * @function
*/
export function pathSetExpand(path, expand) {

    return setExpand({ path, expand, });

};

//#endregion
//#region back

/**
 * ### back
 * - Тип `S`
 * - Версия `1.0.0`
 * ***
 * 
 * 
 * 
 * ***
 * @typedef backT
 * @prop {number} deapth
 * ***
 * @arg {pathT&backT} args `Аргументы`
 * @since `1.0.0`
 * @version `1.0.0`
 * @function
*/
function back(args) {

    let result;

    try {

        let {

            path,
            deapth,

        } = args;

        //#region verify



        //#endregion
        //#region handle

        if (!deapth && deapth !== 0) deapth = 1;

        //#endregion
        //#region comply

        result = path.split('/').reverse().splice(deapth).reverse().join('/');

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
 * ### pathBack
 * - Тип `S`
 * - Версия `1.0.0`
 * ***
 * 
 * Функция получения строки пути с подъёмом на указанное кол-во уровней для указанного пути.
 * 
 * ***
 * @arg {string} path `Путь`
 * @arg {number} deapth `Повторения`
 * 
 * 
 * ***
 * @since `1.0.0`
 * @version `1.0.0`
 * @function
*/
export function pathBack(path, deapth) {

    return back({ path, deapth, });

};

//#endregion
//#region backByName

/**
 * ### backByName
 * - Тип `S`
 * - Версия `1.0.0`
 * ***
 * 
 * 
 * 
 * ***
 * @typedef backByNameT
 * @prop {string} name
 * ***
 * @arg {pathT&backByNameT} args `Аргументы`
 * @since `1.0.0`
 * @version `1.0.0`
 * @function
*/
function backByName(args) {

    let result;

    try {

        let {

            name,
            path,

        } = args;

        //#region verify



        //#endregion
        //#region handle



        //#endregion
        //#region comply

        result = path.split('/');

        for (let i = result.length - 1; i >= 0; i--) {

            if (result[i] === name) {

                break;

            } else {

                result.splice(i);

            };

        };

        result = result.join('/');

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
 * ### pathBackByName
 * - Тип `S`
 * - Версия `1.0.0`
 * ***
 * 
 * Функция перехода на вышестояющую директорию до тех пор, пока не удастся найти указанное наименование.
 * 
 * ***
 * @arg {string} path `Путь`
 * @arg {string} name `Имя`
 * 
 * 
 * ***
 * @since `1.0.0`
 * @version `1.0.0`
 * @function
*/
export function pathBackByName(path, name) {

    return backByName({ path, name, });

};

//#endregion
//#region check

/**
 * ### check
 * - Тип `S`
 * - Версия `1.0.0`
 * ***
 * 
 * 
 * 
 * ***
 * @typedef checkT
 * @prop {} _
 * ***
 * @arg {pathT&checkT} args `Аргументы`
 * @since `1.0.0`
 * @version `1.0.0`
 * @function
*/
function check(args) {

    let result;

    try {

        let {

            path,

        } = args;

        //#region verify



        //#endregion
        //#region handle



        //#endregion
        //#region comply

        result = pathVRETempalte.test(path);

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
 * ### pathCheck
 * - Тип `S`
 * - Версия `1.0.0`
 * ***
 * 
 * Функция проверки корректности пути.
 * 
 * ***
 * @arg {string} path `Путь`
 * 
 * 
 * ***
 * @since `1.0.0`
 * @version `1.0.0`
 * @function
*/
export function pathCheck(path) {

    return check({ path, });

};

//#endregion
//#region exist

/**
 * ### exist
 * - Тип `S`
 * - Версия `1.0.0`
 * ***
 * 
 * 
 * 
 * ***
 * @typedef existT
 * @prop {} _
 * ***
 * @arg {pathT&existT} args `Аргументы`
 * @since `1.0.0`
 * @version `1.0.0`
 * @function
*/
function exist(args) {

    let result;

    try {

        let {

            path,

        } = args;

        //#region verify



        //#endregion
        //#region handle



        //#endregion
        //#region comply

        result = existsSync(path);

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
 * ### pathExist
 * - Тип `S`
 * - Версия `1.0.0`
 * ***
 * 
 * Функция проверки наличия пути. 
 * 
 * ***
 * @arg {string} path `Путь`
 * 
 * 
 * ***
 * @since `1.0.0`
 * @version `1.0.0`
 * @function
*/
export function pathExist(path) {

    return exist({ path, });

};

//#endregion
//#region concat

/**
 * ### concat
 * - Тип `S`
 * - Версия `1.0.0`
 * ***
 * 
 * 
 * 
 * ***
 * @typedef concatT
 * @prop {...string} concats
 * ***
 * @arg {pathT&concatT} args `Аргументы`
 * @since `1.0.0`
 * @version `1.0.0`
 * @function
*/
function concat(args) {

    let result;

    try {

        let {

            path,
            concats,

        } = args;

        //#region verify



        //#endregion
        //#region handle

        path = pathNormalize(path);

        for (const index in concats) concats[index] = pathNormalize(concats[index]);

        //#endregion
        //#region comply

        result = [path, ...concats].join('/');

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
 * ### pathConcat
 * - Тип `S`
 * - Версия `1.0.0`
 * ***
 * 
 * Функция склейки указанных путей.
 *
 * ***
 * @arg {string} path
 * @arg {...string} concats
 * 
 * 
 * ***
 * @since `1.0.0`
 * @version `1.0.0`
 * @function
*/
export function pathConcat(path, ...concats) {

    return concat({ path, concats, });

};

//#endregion
//#region normalize

/**
 * ### normalize
 * - Тип `S`
 * - Версия `1.0.0`
 * ***
 * 
 * 
 * 
 * ***
 * @typedef normalizeT
 * @prop {} _
 * ***
 * @arg {pathT&normalizeT} args `Аргументы`
 * @since `1.0.0`
 * @version `1.0.0`
 * @function
*/
function normalize(args) {

    let result;

    try {

        let {

            path,

        } = args;

        //#region verify



        //#endregion
        //#region handle



        //#endregion
        //#region comply

        path = stringUnify(path, '/');

        if (path[0] === '/') path = path.slice(1);

        if (path.at(-1) === '/') path = path.slice(0, -1);

        result = path;

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
 * ### pathNormalize
 * - Тип `S`
 * - Версия `1.0.0`
 * ***
 * 
 * Функция нормолизации пути.
 *
 * Нормализация убирает возможные дефекты пути, по типу избыточных слешей.
 *
 * ***
 * @arg {string} path `Путь`
 * 
 * 
 * ***
 * @since `1.0.0`
 * @version `1.0.0`
 * @function
*/
export function pathNormalize(path) {

    return normalize({ path, });

};

//#endregion
//#region decompose

/**
 * ### decompose
 * - Тип `S`
 * - Версия `1.0.0`
 * ***
 * 
 * 
 * 
 * ***
 * @typedef decomposeT
 * @prop {} _
 * ***
 * @arg {pathT&decomposeT} args `Аргументы`
 * @since `1.0.0`
 * @version `1.0.0`
 * @function
*/
function decompose(args) {

    let result;

    try {

        let {

            path,

        } = args;

        //#region verify



        //#endregion
        //#region handle

        path = pathNormalize(path);

        //#endregion
        //#region comply

        result = path.split('/');

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
 * ### pathDecompose
 * - Тип `S`
 * - Версия `1.0.0`
 * ***
 * 
 * Функция разбиения пути на директории.
 *
 * ***
 * @arg {pathTTFragment} path `Фрагмент`
 * 
 * 
 * ***
 * @since `1.0.0`
 * @version `1.0.0`
 * @function
*/
export function pathDecompose(path) {

    return decompose({ path, });

};

//#endregion

/**
 * @file path/module.mjs
 * @author Yakhin Nikita Artemovich <mr.y.nikita@gmail.com>
 * @license Apache-2.0
 * @copyright SYLS (Software Y Lib Solutions) 2023
*/