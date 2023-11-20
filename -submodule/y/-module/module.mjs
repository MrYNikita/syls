//#region YI

import { configY as config } from './config.mjs';

//#endregion
//#region YT

/** ### yT
 * 
 * Типы модуля `y`.
 * 
 * @typedef yT
 * @prop {any} ject
 * @prop {yT['ject']} j1
 * @prop {yT['ject']} j2
 * @prop {any} lead
 * @prop {any} value
 * @prop {any} image
 * @prop {any} proto
 * @prop {any} target
 * @prop {any} follower
 * @prop {any[]} followers
 * @prop {any[]} jects
 * @prop {any[]} instances
 * @prop {string} key
 * @prop {string[]} keys
 * @prop {string[]} path
 * @prop {string[]} options
 * @prop {'ru'|'en'} locales
 * @prop {yT['conf']} def
 * @prop {yT['mode'][]} modes
 * @prop {typeof Object} cl
 * @prop {[string, boolean]} mode
 * @prop {import('../-submodule/config/-module/class.mjs').YConfig} conf
 * @prop {{ set: (ject: any, key: string, value: any, followers: any[]) => boolean, }} trap
*/

//#endregion
//#region YV

/** ### yPrimitives
 * 
 * Значение примитивов.
 * 
*/
export const yPrimitives = ['number', 'string', 'null', 'undefined', 'boolean'];

//#endregion

//#region toMap

/**
 * ### toMap
 * 
 * 
 * 
 * ***
 * @typedef toMapT
 * @prop {} _
 * ***
 * @arg {yT&toMapT} args `Аргументы`
 * *** 
 * @since `1.0.0`
 * @version `1.0.0`
 * @function
*/
function toMap(args) {

    let result;

    try {

        let {

            ject,

        } = args;

        //#region verify



        //#endregion
        //#region handle



        //#endregion
        //#region comply

        result = new Map();

        for (const step of yForDeep(ject)) result.set(step.path.join('.'), step.value);

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
 * ### yToMap
 * 
 * Функция получения `map` версии объекта.
 * 
 * ***
 * @arg {Y1} ject `Объект`
 * @template Y1
 * ***
 * @since `1.0.0`
 * @version `1.0.0`
 * @function
*/
export function yToMap(ject) {

    return toMap({ ject, });

};

//#endregion
//#region toMapSubscribe

/**
 * ### toMapSubscribe
 * 
 * 
 * 
 * ***
 * @typedef toMapSubscribeT
 * @prop {} _
 * ***
 * @arg {yT&toMapSubscribeT} args `Аргументы`
 * *** 
 * @since `1.0.0`
 * @version `1.0.0`
 * @function
*/
function toMapSubscribe(args) {

    let result;

    try {

        let {

            ject,

        } = args;

        //#region verify



        //#endregion
        //#region handle



        //#endregion
        //#region comply

        result = yToMap(ject);

        result.set = new Proxy(result.set, {

            apply(target, thisArg, argList) {

                target.apply(thisArg, argList);

                if (target.name === 'set') ySetPropByKeys(ject, argList[0].split('.'), argList[1]);

            },

        })

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
 * ### yToMapSubscribe
 * 
 * Функция получения `map` на основе `ject` с подпиской.
 * 
 * Подписанный `map` при изменении того или иного свойства будет вносить изменения также и в исходный `ject`.
 * 
 * ***
 * @arg {Y1} ject `Объект`
 * @template Y1
 * 
 * ***
 * @since `1.0.0`
 * @version `1.0.0`
 * @function
*/
export function yToMapSubscribe(ject) {

    return toMapSubscribe({ ject, });

};

//#endregion
//#region isInstance

/**
 * ### isInstance
 * 
 * 
 * 
 * ***
 * @typedef isInstanceT
 * @prop {} _
 * ***
 * @arg {yT&isInstanceT} args `Аргументы`
 * *** 
 * @since `1.0.0`
 * @version `1.0.0`
 * @function
*/
function isInstance(args) {

    let result;

    try {

        let {

            ject,
            instances,

        } = args;

        //#region verify



        //#endregion
        //#region handle

        result = false;

        //#endregion
        //#region comply

        for (const instance of instances) {

            if (ject instanceof instance) {

                result = true;

                break;

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
 * ### yIsInstance
 * 
 * Функция аналог `instanceof`.
 * 
 * ***
 * @arg {Y1} ject `Объект`
 * @arg {...Y2} instances `Инстанции`
 * ***
 * @since `1.0.0`
 * @version `1.0.0`
 * @function
*/
export function yIsInstance(ject, ...instances) {

    return isInstance({ ject, instances, });

};

//#endregion
//#region isInstanceAll

/**
 * ### isInstanceAll
 * 
 * 
 * 
 * ***
 * @typedef isInstanceAllT
 * @prop {} _
 * ***
 * @arg {yT&isInstanceAllT} args `Аргументы`
 * *** 
 * @since `1.0.0`
 * @version `1.0.0`
 * @function
*/
function isInstanceAll(args) {

    let result;

    try {

        let {

            ject,
            instances,

        } = args;

        //#region verify



        //#endregion
        //#region handle

        result = true;

        //#endregion
        //#region comply

        for (const instance of instances) {

            if (!(ject instanceof instance)) {

                result = false;

                break;

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
 * ### yIsInstanceAll
 * 
 * Функция {@link yIsInstance|аналог instanceof} проводящая строгую проверку для всех приведенных типов.
 * 
 * ***
 * @arg {Y1} ject `Объект`
 * @arg {...Y2} instances `Инстанции`
 * 
 * ***
 * @since `1.0.0`
 * @version `1.0.0`
 * @function
*/
export function yIsInstanceAll(ject, ...instances) {

    return isInstanceAll({ ject, instances, });

};

//#endregion
//#region getPropByKeys

/**
 * ### getPropByKeys
 * 
 * 
 * 
 * ***
 * @typedef getPropByKeysT
 * @prop {} _
 * ***
 * @arg {yT&getPropByKeysT} args `Аргументы`
 * *** 
 * @since `1.0.0`
 * @version `1.0.0`
 * @function
*/
function getPropByKeys(args) {

    let result;

    try {

        let {

            ject,
            path,

        } = args;

        //#region verify



        //#endregion
        //#region handle



        //#endregion
        //#region comply

        result = ject;

        for (const subpath of path) {

            result = result[subpath];

            if (result === undefined) {

                break;

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
 * ### yGetPropByPath
 * 
 * Функция получения свойства объекта через глубокий поиск по указанному пути.
 * 
 * ***
 * @arg {yT['ject']} ject `Объект`
 * @arg {...yT['key']} path `Путь`
 * 
 * ***
 * @since `1.0.0`
 * @version `1.0.0`
 * @function
*/
export function yGetPropByKeys(ject, ...path) {

    return getPropByKeys({ ject, path, });

};

//#endregion
//#region getProp

/**
 * ### getProp
 * 
 * 
 * 
 * ***
 * @typedef getPropT
 * @prop {} _
 * ***
 * @arg {yT&getPropT} args `Аргументы`
 * *** 
 * @since `1.0.0`
 * @version `1.0.0`
 * @function
*/
function getProp(args) {

    let result;

    try {

        let {

            key,
            ject,

        } = args;

        //#region verify



        //#endregion
        //#region handle



        //#endregion
        //#region comply

        const gen = yForDeep(ject);

        for (const step of gen) if (step.key === key) return step.value;

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
 * ### yGetProp
 * 
 * Функция получения свойства по указанному ключу через глубойкий поиск.
 * 
 * ***
 * @arg {yT['key']} key `Ключ`
 * @arg {yT['ject']} ject `Объект`
 * 
 * 
 * ***
 * @since `1.0.0`
 * @version `1.0.0`
 * @function
*/
export function yGetProp(ject, key) {

    return getProp({ ject, key, });

};

//#endregion
//#region getProps

/**
 * ### getProps
 * 
 * 
 * 
 * ***
 * @typedef getPropsT
 * @prop {} _
 * ***
 * @arg {yT&getPropsT} args `Аргументы`
 * *** 
 * @since `1.0.0`
 * @version `1.0.0`
 * @function
*/
function getProps(args) {

    let result;

    try {

        let {

            ject,
            keys,

        } = args;

        //#region verify



        //#endregion
        //#region handle

        result = [];

        //#endregion
        //#region comply

        for (const step of yForDeep(ject)) if (keys.includes(step.key)) result.push(step.value);

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
 * ### yGetProps
 * 
 * Функция получения множества свойств объекта по ключам с помощью глубокого поиска.
 * 
 * ***
 * @arg {Y1} ject `Объект`
 * @arg {...yT['key']} keys `Ключи`
 * 
 * ***
 * @since `1.0.0`
 * @version `1.0.0`
 * @function
*/
export function yGetProps(ject, ...keys) {

    return getProps({ ject, keys, });

};

//#endregion
//#region getPaths

/**
 * ### getPaths
 * 
 * 
 * 
 * ***
 * @typedef getPathsT
 * @prop {} _
 * ***
 * @arg {yT&getPathsT} args `Аргументы`
 * *** 
 * @since `1.0.0`
 * @version `1.0.0`
 * @function
*/
function getPaths(args) {

    let result;

    try {

        let {

            ject,

        } = args;

        //#region verify



        //#endregion
        //#region handle

        result = [];

        //#endregion
        //#region comply

        const gen = yForDeep(ject);

        for (const step of gen) result.push(step.path);

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
 * ### yGetPaths
 * 
 * Функция получения путей.
 * 
 * ***
 * @arg {Y1} ject `Объект`
 * @returns {string[]}
 * ***
 * @since `1.0.0`
 * @version `1.0.0`
 * @function
*/
export function yGetPaths(ject) {

    return getPaths({ ject, });

};

//#endregion
//#region getProto

/**
 * ### getProto
 * 
 * 
 * 
 * ***
 * @typedef getProtoT
 * @prop {} _
 * ***
 * @arg {yT&getProtoT} args `Аргументы`
 * *** 
 * @since `1.0.0`
 * @version `1.0.0`
 * @function
*/
function getProto(args) {

    let result;

    try {

        let {

            ject,

        } = args;

        //#region verify



        //#endregion
        //#region handle



        //#endregion
        //#region comply

        result = Object.getPrototypeOf(ject);

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
 * ### yGetProto
 * 
 * Функция получения прототипа указанного объекта.
 * 
 * ***
 * @arg {Y1} ject `Объект`
 * @returns {Y1['__proto__']}
 * ***
 * @since `1.0.0`
 * @version `1.0.0`
 * @function
*/
export function yGetProto(ject) {

    return getProto({ ject, });

};

//#endregion
//#region setProp

/**
 * ### setProp
 * 
 * 
 * 
 * ***
 * @typedef setPropT
 * @prop {} _
 * ***
 * @arg {yT&setPropT} args `Аргументы`
 * *** 
 * @since `1.0.0`
 * @version `1.0.0`
 * @function
*/
function setProp(args) {

    let result;

    try {

        let {

            key,
            ject,
            value,

        } = args;

        //#region verify



        //#endregion
        //#region handle



        //#endregion
        //#region comply

        for (const step of yForDeep(ject)) {

            if (step.key === key) {

                step.level[step.key] = value;

                break;

            };

        };

        return ject;

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
 * ### ySetProp
 * 
 * Функция установки значения по указанному ключу.
 * 
 * ***
 * @arg {Y1} ject `Объект`
 * @arg {yT['key']} key `Ключ`
 * @arg {yT['params']} value `Значение`
 * ***
 * @since `1.0.0`
 * @version `1.0.0`
 * @function
*/
export function ySetProp(ject, key, value) {

    return setProp({ ject, key, value, });

};

//#endregion
//#region setProto

/**
 * ### setProto
 * 
 * 
 * 
 * ***
 * @typedef setProtoT
 * @prop {} _
 * ***
 * @arg {yT&setProtoT} args `Аргументы`
 * *** 
 * @since `1.0.0`
 * @version `1.0.0`
 * @function
*/
function setProto(args) {

    let result;

    try {

        let {

            ject,
            proto,

        } = args;

        //#region verify



        //#endregion
        //#region handle



        //#endregion
        //#region comply

        Object.setPrototypeOf(ject, proto);

        result = ject;

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
 * ### ySetProto
 * 
 * Функция установки прототипа для указанного объекта.
 * 
 * ***
 * @arg {Y1} ject `Объект`
 * @arg {Y2} proto `Прототип`
 * @returns {Y1}
 * ***
 * @since `1.0.0`
 * @version `1.0.0`
 * @function
*/
export function ySetProto(ject, proto) {

    return setProto({ ject, proto, });

};

//#endregion
//#region setClass

/**
 * ### setClass
 * 
 * 
 * 
 * ***
 * @typedef setClassT
 * @prop {} _
 * ***
 * @arg {yT&setClassT} args `Аргументы`
 * *** 
 * @since `1.0.0`
 * @version `1.0.0`
 * @function
*/
function setClass(args) {
    
    let result;
    
    try {
        
        let {
            
            cl,
            target,
            
        } = args;
        
        //#region verify
        
        
        
        //#endregion
        //#region handle
        
        if (!yIsInstance(target, Object)) return null;
        
        //#endregion
        //#region comply

        Object.setPrototypeOf(target, cl.prototype);

        // if (typeof target === 'function' && 'prototype' in target) Object.setPrototypeOf(target['prototype'], cl.prototype);

        result = target;
        
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
 * ### ySetClass
 * 
 * Функция установки класса для указанного объекта.
 * 
 * ***
 * @arg {Y1} target `Цель`
 * @arg {Y2} cl `Класс`
 * @returns {(Y1&Y2)|null}
 * @template Y1
 * ***
 * @since `1.0.0`
 * @version `1.0.0`
 * @function
*/
export function ySetClass(target, cl) {

    return setClass({ target, cl, });

};

//#endregion
//#region setPropByKeys

/**
 * ### setPropByKeys
 * 
 * 
 * 
 * ***
 * @typedef setPropByKeysT
 * @prop {} _
 * ***
 * @arg {yT&setPropByKeysT} args `Аргументы`
 * *** 
 * @since `1.0.0`
 * @version `1.0.0`
 * @function
*/
function setPropByKeys(args) {

    let result;

    try {

        let {

            ject,
            keys,
            value,

        } = args;

        //#region verify



        //#endregion
        //#region handle



        //#endregion
        //#region comply

        const begin = ject;

        for (const key of keys.slice(0, -1)) {

            if (!(ject[key] instanceof Object)) return begin;

            ject = ject[key];

        };

        ject[keys.at(-1)] = value;

        result = begin;

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
 * ### ySetPropByPath
 * 
 * Функция установки значения по указанному пути.
 * 
 * ***
 * @arg {Y1} ject `Объект`
 * @arg {yT['keys']} keys `Путь`
 * @arg {yT['params']} value `Значение`
 * ***
 * @since `1.0.0`
 * @version `1.0.0`
 * @function
*/
export function ySetPropByKeys(ject, keys, value) {

    return setPropByKeys({ ject, keys, value, });

};

//#endregion
//#region forDeep

/**
 * ### forDeep
 * 
 * 
 * 
 * ***
 * @typedef forDeepT
 * @prop {} _
 * ***
 * @arg {yT&forDeepT} args `Аргументы`
 * *** 
 * @since `1.0.0`
 * @version `1.0.0`
 * @function
*/
function* forDeep(args) {

    let result;

    try {

        let {

            ject,

        } = args;

        //#region verify



        //#endregion
        //#region handle



        //#endregion
        //#region comply
        
        const sequence = Object.entries(ject);
        
        for (const index in sequence) sequence[index].push(ject);

        const points = new Set().add(ject);

        while (sequence.length) {

            let [key, value, level, path] = sequence.pop();

            (path = path ? path.slice() : []).push(key);

            yield { value, key, level, path, };

            if (!yIsInstance(value, Object) || points.has(value)) continue;

            points.add(value);

            const adds = Object.entries(value);

            for (const index in adds) adds[index].push(value, path);

            sequence.unshift(...adds);

        };

        result = ject;

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
 * ### yForDeep
 * 
 * Функция глубокого перебора свойств.
 * 
 * Перебор осуществляется через генеративную функцию.
 * Генератор перебирает свойства в том числе и самые вложенные.
 * 
 * ***
 * @arg {Y1} ject `Объект`
 * ***
 * @since `1.0.0`
 * @version `1.0.0`
 * @function
 * @generator
*/
export function yForDeep(ject) {

    return forDeep({ ject, });

};

//#endregion
//#region stat

/**
 * ### stat
 * 
 * 
 * 
 * ***
 * @typedef statT
 * @prop {} _
 * ***
 * @arg {yT&statT} args `Аргументы`
 * *** 
 * @since `1.0.0`
 * @version `1.0.0`
 * @function
*/
function stat(args) {

    let result;

    try {

        let {

            ject,

        } = args;

        //#region verify



        //#endregion
        //#region handle



        //#endregion
        //#region comply

        result = {

            precent: 0,
            propNum: 0,
            byteNum: 8,
            levelNum: 0,
            prototype: Object.getPrototypeOf(ject) === Object.prototype ? false : true,

        };

        for (const step of yForDeep(ject)) {

            result.propNum++;

            if (step.path.length - 1 > result.levelNum) result.levelNum = step.path.length - 1;

            switch (typeof step.value) {

                case 'string': result.byteNum += step.value.length * 2; break;
                case 'boolean': result.byteNum += 4; break;
                case 'number': case 'object': result.byteNum += 8; break;
                case 'function': result.byteNum += ((step.value.name.length ?? 0) + step.value.toString().length) * 2; break;

            };

        };

        result.precent = result.byteNum / ((process?.memoryUsage?.()?.heapUsed ?? performance?.memory?.usedJSHeapSize) / 100);

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
 * ### yStat
 * 
 * Функция получения статистики по объекту.
 * 
 * ***
 * @arg {Y1} ject `Объект`
 * ***
 * @since `1.0.0`
 * @version `1.0.0`
 * @function
*/
export function yStat(ject) {

    return stat({ ject, });

};

//#endregion
//#region fill

/**
 * ### fill
 * 
 * 
 * 
 * ***
 * @typedef fillT
 * @prop {} _
 * ***
 * @arg {yT&fillT} args `Аргументы`
 * *** 
 * @since `1.0.0`
 * @version `1.0.0`
 * @function
*/
function fill(args) {

    let result;

    try {

        let {

            image,
            target,

        } = args;

        //#region verify



        //#endregion
        //#region handle



        //#endregion
        //#region comply

        for (const prop in target) {

            if (prop in image) {

                target[prop] = image[prop];

            };

        };

        return target;

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
 * ### yFill
 * 
 * Функция заполнения свойств объекта `target` совпадающими свойствами из `image`.
 * 
 * ***
 * @arg {Y1} target `Цель`
 * @arg {Y2} image `Образ`
 * @returns {Y1}
 * @template Y1,Y2
 * ***
 * @since `1.0.0`
 * @version `1.0.0`
 * @function
*/
export function yFill(target, image) {

    return fill({ target, image, });

};

//#endregion
//#region seal

/**
 * ### seal
 * 
 * 
 * 
 * ***
 * @typedef sealT
 * @prop {} _
 * ***
 * @arg {yT&sealT} args `Аргументы`
 * *** 
 * @since `1.0.0`
 * @version `1.0.0`
 * @function
*/
function seal(args) {

    let result;

    try {

        let {

            ject,

        } = args;

        //#region verify



        //#endregion
        //#region handle

        result = ject;

        //#endregion
        //#region comply

        Object.seal(ject);

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
 * ### ySeal
 * 
 * Функция запечатывания объекта.
 * 
 * ***
 * @arg {Y1} ject `Объект`
 * @returns {Y1}
 * 
 * ***
 * @since `1.0.0`
 * @version `1.0.0`
 * @function
*/
export function ySeal(ject) {

    return seal({ ject, });

};

//#endregion
//#region mode

/**
 * ### mode
 * 
 * 
 * 
 * ***
 * @typedef modeT
 * @prop {} _
 * ***
 * @arg {yT&modeT} args `Аргументы`
 * *** 
 * @since `1.0.0`
 * @version `1.0.0`
 * @function
*/
function mode(args) {

    let result;

    try {

        let {

            ject,
            modes,

        } = args;

        //#region verify



        //#endregion
        //#region handle



        //#endregion
        //#region comply

        for (const mode of modes) {

            if (!mode.length || typeof mode[0] !== 'string') continue;

            else ySetProp(ject, mode[0], mode[1] === undefined ? !yGetProp(ject, mode[0]) : !!mode[1]);

        };

        result = ject;

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
 * ### yMode
 * 
 * Функция переключения логичких свойств или их явную установку.
 * 
 * ***
 * @arg {Y1} ject `Объект`
 * @arg {...yT['mode']} mode `Режимы`
 * @returns {Y1}
 * ***
 * @since `1.0.0`
 * @version `1.0.0`
 * @function
*/
export function yMode(ject, ...modes) {

    return mode({ ject, modes, });

};

//#endregion
//#region turn

/**
 * ### turn
 * 
 * 
 * 
 * ***
 * @typedef turnT
 * @prop {} _
 * ***
 * @arg {yT&turnT} args `Аргументы`
 * *** 
 * @since `1.0.0`
 * @version `1.0.0`
 * @function
*/
function turn(args) {

    let result;

    try {

        let {

            j1,
            j2,

        } = args;

        //#region verify



        //#endregion
        //#region handle



        //#endregion
        //#region comply

        const shell = new Proxy({

            getPrev() {

                return j1;

            },

        }, {

            get(t, p) {

                return j2[p] ?? t[p];

            },
            set(t, p, v) {

                j2[p] = v;

                return true;

            },

        });

        Object.setPrototypeOf(shell, j2);

        return shell;

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
 * ### yTurn
 * 
 * Функция перехода с объекта `j1` на объект `j2`.
 * 
 * ***
 * 
 * @arg {Y1} j1 `Объект первый`
 * @arg {Y2} j2 `Объект второй`
 * @returns {Y2&{ unturn(): Y1, }}
 * @template Y1,Y2
 * ***
 * @since `1.0.0`
 * @version `1.0.0`
 * @function
*/
export function yTurn(j1, j2) {

    return turn({ j1, j2 });

};

//#endregion
//#region clone

/**
 * ### clone
 * 
 * 
 * 
 * ***
 * @typedef cloneT
 * @prop {} _
 * ***
 * @arg {yT&cloneT} args `Аргументы`
 * *** 
 * @since `1.0.0`
 * @version `1.1.0`
 * @function
*/
function clone(args) {

    let result;

    try {

        let {

            target,

        } = args;

        //#region verify



        //#endregion
        //#region handle

        if (target.constructor) {

            if (yIsInstance(target, RegExp, Date)) {

                result = new target.constructor(target);

                return result;

            } else if (yIsInstance(target, Function)) {

                ''.startsWith

                const fstr = target.toString();
                const fname = target.name;
                const farg = fstr.slice(fname.length + (fstr.startsWith('function') ? 10 : 1), fstr.indexOf(')')).match(/\w+/ig).join(', ');
                const fin = fstr.match(/\{(.+)/msi)[1].slice(0, -1);

                console.log(fstr);

                eval(`result = function ${fname}(${farg}) {${fin}}`);

                return result;

            } else result = new target.constructor();

        } else {

            result = {};

            Object.setPrototypeOf(result, Object.getPrototypeOf(target));

        };

        //#endregion
        //#region comply

        const mirrors = [];

        for (const step of yForDeep(target)) {

            if (!(step.value instanceof Object)) {

                ySetPropByKeys(result, step.path, step.value);

                continue;

            };

            let index = mirrors.findIndex(mirror => mirror[0] === step.value);

            if (index !== -1) {

                ySetPropByKeys(result, step.path, step.value);

                continue;

            };

            let prop;

            if (step.value.constructor) {

                if (yIsInstance(step.value, RegExp, Date)) {

                    prop = new step.value.constructor(step.value);

                } else prop = new step.value.constructor();

            } else {

                prop = {};

                Object.setPrototypeOf(prop, Object.getPrototypeOf(step.value));

            };

            ySetPropByKeys(result, step.path, prop);

            mirrors.push([step.value, prop]);

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
 * ### yClone
 * 
 * Функция клонирования `target`.
 * 
 * ***
 * @arg {Y1} target `Цель`
 * @returns {Y1}
 * @template Y1
 * ***
 * @since `1.0.0`
 * @version `1.0.0`
 * @function
*/
export function yClone(target) {

    return clone({ target, });

};

//#endregion
//#region unite

/**
 * ### unite
 * 
 * 
 * 
 * ***
 * @typedef uniteT
 * @prop {} _
 * ***
 * @arg {yT&uniteT} args `Аргументы`
 * *** 
 * @since `1.0.0`
 * @version `1.0.0`
 * @function
*/
function unite(args) {

    let result;

    try {

        let {

            j1,
            j2,

        } = args;

        //#region verify



        //#endregion
        //#region handle



        //#endregion
        //#region comply

        result = new Proxy(yCombine(j1, j2), {

            get(t, p, r) {

                return t[p];

            },
            set(t, p, v, r) {

                t[p] = v;

                return true;

            },


        });

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
 * ### yUnite
 * 
 * Функция объединения объектов.
 * 
 * Данная функция отличается от функции {@link yCombine}.
 * 
 * Она позволяет:
 * - Объединить несколько объектов.
 * - Использовать прототипы обоих объектов.
 * 
 * Приоритетным объектом для слияния является первый указанный объект.
 * В паре со вторым указанным объектом он будет иметь доминирующее значение.
 * Это означает, что поля, методы и прототип первого объекта будут иметь приоритетное
 * значение при создании объекта через объединение и люыбе последующие обращения к нему.
 * 
 * ***
 * @arg {Y1} j1 `Объект первый`
 * @arg {Y2} j2 `Объект второй`
 * @returns {Y1&Y2}
 * @template Y1,Y2
 * ***
 * @since `1.0.0`
 * @version `1.0.0`
 * @function
*/
export function yUnite(j1, j2) {

    return unite({ j1, j2, });

};

//#endregion
//#region equal

/**
 * ### equal
 * 
 * 
 * 
 * ***
 * @typedef equalT
 * @prop {} _
 * ***
 * @arg {yT&equalT} args `Аргументы`
 * *** 
 * @since `1.0.0`
 * @version `2.0.0`
 * @function
*/
function equal(args) {

    let result;

    try {

        let {

            jects,

        } = args;

        //#region verify



        //#endregion
        //#region handle

        result = true;

        //#endregion
        //#region comply

        for (const step of yForDeep(jects.pop())) {

            let flag = false;

            for (const ject of jects) {

                const mirror = yGetPropByKeys(ject, ...step.path);

                if ((step.value instanceof Object && mirror instanceof Object) || mirror === step.value) continue;

                flag = true;
                result = false;
                break;

            };

            if (flag) break;

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
 * ### yEqual
 * 
 * Функция проверки объектов на подобие.
 * 
 * Подобными объектами называются те объекты, которые являются взаимозаменяемыми по свойствам.
 * 
 * ***
 * @arg {...any} jects `Объекты`
 * 
 * 
 * ***
 * @since `1.0.0`
 * @version `2.0.0`
 * @function
*/
export function yEqual(...jects) {

    return equal({ jects, });

};

//#endregion
//#region adopt

/**
 * ### adopt
 * - Тип `S`
 * - Версия `2.0.0`
 * ***
 * 
 * 
 * 
 * ***
 * @typedef adoptT
 * @prop {} _
 * ***
 * @arg {yT&adoptT} args `Аргументы`
 * *** 
 * @since `1.0.0`
 * @version `1.0.0`
 * @function
*/
function adopt(args) {

    let result;

    try {

        let {

            conf,
            image,
            target,

        } = args;

        //#region verify

        if (!image) return;

        //#endregion
        //#region handle

        if (!conf) {

            if (target.constructor?.config) {

                conf = target.constructor.config;

            };

        };

        //#endregion
        //#region comply

        for (const step of yForDeep(target)) {

            if (step.level[step.key] === undefined) {

                const prop = yGetPropByKeys(image, ...step.path);

                if (prop) step.level[step.key] = prop;

            };

        };

        if (conf) yAdoptDefault(target, conf);

        result = target;

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
 * ### yAdopt
 * ***
 * 
 * Функция перенятия свойств от `image` к `target`.
 * 
 * Перенятие подразумевает назначение смежных с `image` свойств в том случае, если таковое свойство из `target` отсутствует.
 * 
 * ***
 * @arg {yT['conf']} conf `Конфигуратор`
 * @arg {Y2} image `Владелец`
 * @arg {Y1} target `Объект`
 * @returns {Y1}
 * @template Y1,Y2
 * ***
 * @since `1.0.0`
 * @version `2.0.0`
 * @function
*/
export function yAdopt(target, image, conf) {

    return adopt({ target, conf, image, });

};

//#endregion
//#region adoptDefault

/**
 * ### adoptDefault
 * 
 * 
 * 
 * ***
 * 
 * 
 * 
 * ***
 * @typedef adoptDefaultT
 * @prop {} _
 * ***
 * @arg {yT&adoptDefaultT} args `Аргументы`
 * *** 
 * @since `1.0.0`
 * @version `1.1.0`
 * @function
*/
function adoptDefault(args) {

    let result;

    try {

        let {

            def,
            target,

        } = args;

        //#region verify



        //#endregion
        //#region handle



        //#endregion
        //#region comply

        for (const step of yForDeep(target)) {

            if (step.value !== undefined) continue;

            const keyDefault = step.key + 'Default';

            let param;

            if (def.params[keyDefault] === undefined) {

                param = target?.constructor?.config?.params?.defaultValue;
                
            } else if (typeof def.params[keyDefault] === 'object') {
                
                param = yClone(def.params[keyDefault]);
                
            } else {

                param = def.params[keyDefault];

            };
            
            ySetPropByKeys(target, step.path, param);
        
        };

        result = target;

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
 * ### yAdoptDefault
 * 
 * Функция перенятия дефолтных свойств от `def` к `target`.
 * 
 * ***
 * @arg {Y1} target `Цель`
 * @arg {yT['def']} def `Дефолт`
 * @returns {Y1}
 * @template Y1
 * ***
 * @since `1.0.0`
 * @version `1.0.0`
 * @function
*/
export function yAdoptDefault(target, def) {

    return adoptDefault({ target, def, });

};

//#endregion
//#region clean

/**
 * ### clean
 * 
 * 
 * 
 * ***
 * @typedef cleanT
 * @prop {} _
 * ***
 * @arg {yT&cleanT} args `Аргументы`
 * *** 
 * @since `1.0.0`
 * @version `1.0.0`
 * @function
*/
function clean(args) {

    let result;

    try {

        let {

            target,

        } = args;

        //#region verify



        //#endregion
        //#region handle



        //#endregion
        //#region comply

        for (const prop in target) if (target[prop] === undefined) delete target[prop];

        result = target;

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
 * ### yClean
 * 
 * Функция очистки объекта.
 * 
 * Очистка удаляет из объекта те свойства, которые имеют значение undefined.
 * 
 * ***
 * @arg {Y1} target `Цель`
 * @returns {Y1}
 * @template Y1
 * ***
 * @since `1.0.0`
 * @version `1.0.0`
 * @function
*/
export function yClean(target) {

    return clean({ target, });

};

//#endregion
//#region select

/**
 * ### select
 * 
 * 
 * 
 * ***
 * @typedef selectT
 * @prop {} _
 * ***
 * @arg {yT&selectT} args `Аргументы`
 * *** 
 * @since `1.0.0`
 * @version `1.0.0`
 * @function
*/
function select(args) {
    
    let result;
    
    try {
        
        let {
            
            keys,
            jects,
            
        } = args;
        
        //#region verify
        
        
        
        //#endregion
        //#region handle
        
        
        
        //#endregion
        //#region comply
        
        result = [keys];

        for (const ject of jects) {

            const arr = [];

            result.push(arr);

            for (const keyIndex in keys) {

                const key = keys[keyIndex];

                arr[keyIndex] = yGetPropByKeys(ject, ...key.split('.'));              

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
 * ### ySelect
 * 
 * Функция получения свойств из указанных объектов.
 * 
 * ***
 * @arg {yT['key']} keys `Ключи`
 * @arg {...yT['ject']} jects `Объекты`
 * ***
 * @since `1.0.0`
 * @version `1.0.0`
 * @function
*/
export function ySelect(keys, ...jects) {

    return select({ keys, jects, });

};

//#endregion
//#region combine

/**
 * ### combine
 * 
 * 
 * 
 * ***
 * @typedef combineT
 * @prop {} _
 * ***
 * @arg {yT&combineT} args `Аргументы`
 * *** 
 * @since `1.0.0`
 * @version `1.0.0`
 * @function
*/
function combine(args) {

    let result;

    try {

        let {

            j1,
            j2,

        } = args;

        //#region verify



        //#endregion
        //#region handle

        result = {};

        //#endregion
        //#region comply

        for (const ject of [j1, j2]) {

            for (const step of yForDeep(ject)) {

                if (!yGetPropByKeys(result, ...step.path)) {

                    ySetPropByKeys(result, step.path, yIsInstance(step.value, Function) ? yClone(step.value) : yIsInstance(step.value, Object) ? {} : step.value);

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
 * ### yCombine
 * 
 * Функция объединения свойств нескольких объектов в новом едином объекте.
 * 
 * ***
 * @arg {Y1} j1 `Объект первый`
 * @arg {Y2} j2 `Объект второй`
 * @returns {Y1&Y2}
 * ***
 * @since `1.0.0`
 * @version `1.0.0`
 * @function
*/
export function yCombine(j1, j2) {

    return combine({ j1, j2, });

};

//#endregion
//#region correlate

/**
 * ### correlate
 * 
 * 
 * 
 * ***
 * @typedef correlateT
 * @prop {} _
 * ***
 * @arg {yT&correlateT} args `Аргументы`
 * *** 
 * @since `1.0.0`
 * @version `1.0.0`
 * @function
*/
function correlate(args) {

    let result;

    try {

        let {

            ject,
            options,

        } = args;

        //#region verify



        //#endregion
        //#region handle



        //#endregion
        //#region comply

        const aliases = [];

        for (const option of options) aliases.push({ name: option[0], options: option.slice(1), });

        result = new Proxy(ject, {

            get(t, p) {

                if (t[p] === undefined) {

                    let result = t;

                    const alias = aliases.find(alias => alias.name === p);

                    if (alias) {

                        for (const index in alias.options) {

                            const step = alias.options[index];

                            result = result[step];

                        };

                        return result;

                    };

                };

                return t[p];

            },
            set(t, p, v) {

                if (t[p] === undefined) {

                    const alias = aliases.find(alias => alias.name === p);

                    if (alias) {

                        let link = t;

                        for (const index in alias.options) {

                            const step = alias.options[index];

                            if (index === alias.options.length - 1) {

                                link[step] = v;

                            } else {

                                link = link[step];

                            };

                        };

                        return true;

                    }

                };

                t[p] = v;

                return true;

            },

        });

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
 * ### yCorrelate
 * 
 * Функция корреляции значений.
 * 
 * ***
 * @arg {Y1} ject `Объект`
 * @arg {yT['options']} options `Опции`
 * 
 * ***
 * @since `1.0.0`
 * @version `1.0.0`
 * @function
*/
export function yCorrelate(ject, ...options) {

    return correlate({ ject, options, });

};

//#endregion
//#region subscribe

/**
 * ### subscribe
 * 
 * 
 * 
 * ***
 * @typedef subscribeT
 * @prop {} _
 * ***
 * @arg {yT&subscribeT} args `Аргументы`
 * *** 
 * @since `1.0.0`
 * @version `1.0.0`
 * @function
*/
function subscribe(args) {

    let result;

    try {

        let {

            trap,
            lead,
            followers,

        } = args;

        //#region verify



        //#endregion
        //#region handle

        if (!lead) lead = {};

        result = { unsubscribe() { return lead; } };

        //#endregion
        //#region comply

        ySetProto(result, lead);

        result = new Proxy(result, {

            set(t, p, v) {

                trap.set(t, p, v);

                lead[p] = v;

                return true;

            },

        });

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
 * ### ySubscribe
 * 
 * Функция подписывания указанных объектов на изменения указанного ведущего объекта.
 * 
 * ***
 * @arg {Y1} lead `Ведущий`
 * @arg {yT['trap']} trap `Ловушка`
 * @arg {...yT['follower']} followers `Последователи`
 * @returns {Y1&{ unsubscribe(): Y1 }}
 * @template Y1
 * ***
 * @since `1.0.0`
 * @version `1.0.0`
 * @function
*/
export function ySubscribe(lead, trap, ...followers) {

    return subscribe({ lead, trap, followers, });

};

//#endregion
//#region subscribeSet

/**
 * ### subscribeSet
 * 
 * 
 * 
 * ***
 * @typedef subscribeSetT
 * @prop {} _
 * ***
 * @arg {yT&subscribeSetT} args `Аргументы`
 * *** 
 * @since `1.0.0`
 * @version `1.0.0`
 * @function
*/
function subscribeSet(args) {

    let result;

    try {

        let {

            lead,
            followers,

        } = args;

        //#region verify



        //#endregion
        //#region handle



        //#endregion
        //#region comply

        result = ySubscribe(lead, {

            set(ject, key, value) {

                for (const follower of followers) ySetProp(follower, key, value);

            },

        }, ...followers);

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
 * ### ySubscribeSet
 * 
 * Функция {@link ySubscribe|подписывания указанных объектов на изменения указанного ведущего объекта} ориентированная на изменение.
 * 
 * Данная ориентация принуждает `подписчиков` внести измения в свойства аналогичные изменениям `ведущего` объекта.
 * 
 * ***
 * @arg {Y1} lead `Ведущий`
 * @arg {...yT['follower']} followers `Последователи`
 * 
 * ***
 * @since `1.0.0`
 * @version `1.0.0`
 * @function
*/
export function ySubscribeSet(lead, ...followers) {

    return subscribeSet({ lead, followers, });

};

//#endregion
//#region subscribeInc

/**
 * ### subscribeInc
 * 
 * 
 * 
 * ***
 * @typedef subscribeIncT
 * @prop {} _
 * ***
 * @arg {yT&subscribeIncT} args `Аргументы`
 * *** 
 * @since `1.0.0`
 * @version `1.0.0`
 * @function
*/
function subscribeInc(args) {

    let result;

    try {

        let {

            lead,
            followers,

        } = args;

        //#region verify



        //#endregion
        //#region handle



        //#endregion
        //#region comply

        result = ySubscribe(lead, {

            set(ject, key, value) {

                const valueNow = yGetProp(lead, key);

                if (typeof valueNow !== 'number') {

                    return;

                } else value -= valueNow;

                for (const follower of followers) {

                    ySetProp(follower, key, yGetProp(follower, key) + value)

                };

            },

        }, ...followers);

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
 * ### ySubscribeInc
 * 
 * Функция {@link ySubscribe|подписывания указанных объектов на изменения указанного ведущего объекта} ориентированная на изменение.
 * 
 * Данная ориентация принуждает `подписчиков` прирастить свойства аналогичные приращениям свойств `ведущего` объекта.
 * 
 * ***
 * @arg {Y1} lead `Ведущий`
 * @arg {...yT['follower']} followers `Последователи`
 * 
 * 
 * ***
 * @since `1.0.0`
 * @version `1.0.0`
 * @function
*/
export function ySubscribeInc(lead, ...followers) {

    return subscribeInc({ lead, followers, });

};

//#endregion

//#endregion

/**
 * @file y/module.mjs
 * @author Yakhin Nikita Artemovich <mr.y.nikita@gmail.com>
 * @license Apache-2.0
 * @copyright SYLS (Software Y Lib Solutions) 2023
*/