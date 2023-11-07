//#region YI

import { YArg } from '@syls/y/arg';
import { YCond } from '@syls/y/cond';
import { pathDecompose, pathExist, pathGet, pathGetMany } from '../../path/-module/export.mjs';
import { configOsject as config } from './config.mjs';
import { unlinkSync, statSync, renameSync, } from 'fs';

//#endregion
//#region YT

/** ### osjectT
 * - Тип `T`
 * - Версия `0.0.0`
 * 
 * Основной параметр модуля `osject`.
 * 
 * @typedef osjectT
 * @prop {string} name
 * @prop {string} expand
 * @prop {string} fragment
 * @prop {string} location
 * 
*/

//#endregion
//#region YV



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
 * @arg {osjectT&getNameT} args `Аргументы`
 * @since `1.0.0`
 * @version `1.0.0`
 * @function
*/
function getName(args) {

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

        result = osjectGetNameFull(fragment).split('.')[0];

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
 * ### osjectGetName
 * - Тип `S`
 * - Версия `1.0.0`
 * ***
 * 
 * Функция получения имени объекта os.
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
export function osjectGetName(fragment) {

    return getName({ fragment, });

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
 * @arg {osjectT&getNameFullT} args `Аргументы`
 * @since `1.0.0`
 * @version `1.0.0`
 * @function
*/
function getNameFull(args) {

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

        result = fragment.split('/').at(-1);

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
 * ### osjectGetNameFull
 * - Тип `S`
 * - Версия `1.0.0`
 * ***
 * 
 * 
 * 
 * ***
 * @arg {osjectT['fragment']} fragment
 * 
 * 
 * ***
 * @since `1.0.0`
 * @version `1.0.0`
 * @function
*/
export function osjectGetNameFull(fragment) {

    return getNameFull({ fragment, });

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
 * @arg {osjectT&getExpandT} args `Аргументы`
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
 * ### osjectGetExpand
 * - Тип `S`
 * - Версия `1.0.0`
 * ***
 * 
 * Функция получения расширения указанного объекта os.
 * 
 * ***
 * @arg {osjectT['fragment']} fragment `Фрагмент`
 * 
 * 
 * ***
 * @since `1.0.0`
 * @version `1.0.0`
 * @function
*/
export function osjectGetExpand(fragment) {

    return getExpand({ fragment, });

};

//#endregion
//#region getLocation

/**
 * ### getLocation
 * - Тип `S`
 * - Версия `1.0.0`
 * ***
 * 
 * 
 * 
 * ***
 * @typedef getLocationT
 * @prop {} _
 * ***
 * @arg {osjectT&getLocationT} args `Аргументы`
 * @since `1.0.0`
 * @version `1.0.0`
 * @function
*/
function getLocation(args) {

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

        result = fragment.split('/').slice(0, -1).join('/');

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
 * ### osjectGetLocation
 * - Тип `S`
 * - Версия `1.0.0`
 * ***
 * 
 * 
 * 
 * ***
 * @arg {osjectT['fragment']} fragment `Фрагмент`
 * 
 * 
 * ***
 * @since `1.0.0`
 * @version `1.0.0`
 * @function
*/
export function osjectGetLocation(fragment) {

    return getLocation({ fragment, });

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
 * @arg {osjectT&setExpandT} args `Аргументы`
 * @since `1.0.0`
 * @version `1.0.0`
 * @function
*/
function setExpand(args) {
    
    let result;
    
    try {
        
        let {
            
            expand,
            fragment,
            
        } = args;
        
        //#region verify
        
        
        
        //#endregion
        //#region handle
        
        fragment = pathGet(fragment);

        if (!expand) expand = 'txt';
        
        //#endregion
        //#region comply
        
        result = osjectRename(fragment, null, expand);
        
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
 * ### osjectSetExpand
 * - Тип `S`
 * - Версия `1.0.0`
 * ***
 * 
 * Функция для изменения расширения объекта os.
 * 
 * ***
 * @arg {osjectT['expand']} expand `Расширение`
 * @arg {osjectT['fragment']} fragment `Фрагмент`
 * 
 * 
 * ***
 * @since `1.0.0`
 * @version `1.0.0`
 * @function
*/
export function osjectSetExpand(fragment, expand) {

    return setExpand({ fragment, expand, });

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
 * @prop {} _
 * ***
 * @arg {osjectT&moveT} args `Аргументы`
 * @since `1.0.0`
 * @version `1.0.0`
 * @function
*/
function move(args) {

    let result;

    try {

        let {

            fragment,
            location,

        } = args;

        //#region verify



        //#endregion
        //#region handle

        [location, fragment] = pathGetMany(location, fragment);

        //#endregion
        //#region comply

        result = fragment;

        if (location) {

            result = location + '/' + osjectGetNameFull(fragment);

            renameSync(fragment, location + '/' + osjectGetNameFull(fragment));

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
 * ### osjectMove
 * - Тип `S`
 * - Версия `1.0.0`
 * ***
 * 
 * Функция перемещения объекта os в указанную локацию.
 * 
 * ***
 * @arg {osjectT['location']} location `Локация`
 * @arg {osjectT['fragment']} fragment `Фрагмент`
 * 
 * ***
 * @since `1.0.0`
 * @version `1.0.0`
 * @function
*/
export function osjectMove(fragment, location) {

    return move({ fragment, location, });

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
 * @prop {} _
 * ***
 * @arg {osjectT&removeT} args `Аргументы`
 * @since `1.0.0`
 * @version `1.0.0`
 * @function
*/
function remove(args) {
    
    let result;
    
    try {
        
        let {
            
            fragment,
            
        } = args;
        
        //#region verify
        
        
        
        //#endregion
        //#region handle
        
        fragment = pathGet(fragment);
        
        //#endregion
        //#region comply
        
        unlinkSync(fragment);

        result = fragment;
        
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
 * ### osjectRemove
 * - Тип `S`
 * - Версия `1.0.0`
 * ***
 * 
 * Функция удаления объекта os.
 * 
 * ***
 * @arg {osjectT['fragment']} fragment `Фрагмент`
 * 
 * 
 * ***
 * @since `1.0.0`
 * @version `1.0.0`
 * @function
*/
export function osjectRemove(fragment) {

    return remove({ fragment, });

};

//#endregion
//#region rename

/**
 * ### rename
 * - Тип `S`
 * - Версия `1.0.0`
 * ***
 * 
 * 
 * 
 * ***
 * @typedef renameT
 * @prop {} _
 * ***
 * @arg {osjectT&renameT} args `Аргументы`
 * @since `1.0.0`
 * @version `1.0.0`
 * @function
*/
function rename(args) {

    let result;

    try {

        let {

            name,
            expand,
            fragment,

        } = args;

        //#region verify



        //#endregion
        //#region handle

        fragment = pathGet(fragment);

        if (!name) name = osjectGetName(fragment);
        if (!expand) expand = osjectGetExpand(fragment);

        //#endregion
        //#region comply

        const location = osjectGetLocation(fragment);

        result = `${location}/${name}${['dir', ''].includes(expand) ? '' : '.' + expand}`;

        renameSync(fragment, result);

        return result;

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
 * ### osjectRename
 * - Тип `S`
 * - Версия `1.0.0`
 * ***
 * 
 * Функция для переименования объектов os.
 * 
 * ***
 * @arg {osjectT['name']} name `Наименование`
 * @arg {osjectT['expand']} expand `Расширение`
 * @arg {osjectT['fragment']} fragment `Фрагмент`
 * ***
 * @since `1.0.0`
 * @version `1.0.0`
 * @function
*/
export function osjectRename(fragment, name, expand) {

    return rename({ fragment, name, expand, });

};

//#endregion

/**
 * @file osject/module.mjs
 * @author Yakhin Nikita Artemovich <mr.y.nikita@gmail.com>
 * @license Apache-2.0
 * @copyright SYLS (Software Y Lib Solutions) 2023
*/