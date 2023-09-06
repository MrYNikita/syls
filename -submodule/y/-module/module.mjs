//#region YI

import { Y } from './class.mjs';
import { configY as config } from './config.mjs';

//#endregion
//#region YT

/** ### yT
 * - Тип `T`
 * - Версия `0.0.0`
 * 
 * Основной параметр модуля `y`.
 * 
 * @typedef yT
 * @prop {{}} y
 * 
*/

/** ### yTArg
 * 
 * @typedef {[string, Y1]} yTArg
 * @template Y1
 * 
*/
/** ### yTArgs
 * 
 * @typedef yTArgs
 * @prop {yTArg<null>[]} null 
 * @prop {yTArg<Date>[]} date 
 * @prop {yTArg<Object>[]} ject 
 * @prop {yTArg<boolean>[]} bool 
 * @prop {yTArg<function>[]} func
 * @prop {yTArg<number>[]} number
 * @prop {yTArg<string>[]} string 
 * @prop {yTArg<RegExp>[]} regexp 
 * @prop {yTArg<bigint>[]} bigint 
 * @prop {yTArg<any[]>[]} array 
 * @prop {yTArg<null[]>[]} arrayNull 
 * @prop {yTArg<Date[]>[]} arrayDate 
 * @prop {yTArg<Object[]>[]} arrayJect 
 * @prop {yTArg<boolean[]>[]} arrayBool 
 * @prop {yTArg<function[]>[][]} arrayFunc 
 * @prop {yTArg<number[]>[][]} arrayNumber 
 * @prop {yTArg<string[]>[][]} arrayString 
 * @prop {yTArg<RegExp[]>[][]} arrayRegexp 
 * @prop {yTArg<bigint[]>[][]} arrayBigint 
 * 
*/
/** ### yTPropClassify
 * 
 * @typedef yTPropClassify
 * @prop {null[]} null 
 * @prop {Date[]} date 
 * @prop {Object[]} ject 
 * @prop {boolean[]} bool 
 * @prop {function[]} func
 * @prop {number[]} number
 * @prop {string[]} string 
 * @prop {RegExp[]} regexp 
 * @prop {bigint[]} bigint 
 * @prop {any[]} array 
 * @prop {null[][]} arrayNull 
 * @prop {Date[][]} arrayDate 
 * @prop {Object[][]} arrayJect 
 * @prop {boolean[][]} arrayBool 
 * @prop {function[][]} arrayFunc 
 * @prop {number[][]} arrayNumber 
 * @prop {string[][]} arrayString 
 * @prop {RegExp[][]} arrayRegexp 
 * @prop {bigint[][]} arrayBigint 
 * 
*/

//#endregion
//#region YV



//#endregion

//#region fill

/** ### yTFFill
 * - Тип `TF`
 * ***
 * 
 * Результирующие параметры функции `fill`.
 * 
 * @typedef {yTFUFill&yT} yTFFill
 * 
*/
/** ### yTFUFill
 * - Тип `TFU`
 * 
 * Уникальные параметры функции `fill`.
 * 
 * @typedef yTFUFill
 * @prop {any} _
*/

/** @arg {yTFFill} t */
function fillDeceit(t) {
    
    try {
        
        return fillVerify(t);
        
    } catch (e) {
        
        if (config?.strictMode) {
            
            throw e;
            
        };
        
        return undefined;
        
    } finally {
        
        
        
    };
    
};
/** @arg {yTFFill} t */
function fillVerify(t) {
    
    const {
    
    
    
    } = t;
    
    return fillHandle(t);
   
};
/** @arg {yTFFill} t */
function fillHandle(t) {
   
    const {
    
    
    
    } = t;
   
    return fillComply(t);
   
};
/** @arg {yTFFill} t */
function fillComply(t) {
   
    const {
    
    
    
    } = t;
    
    
    
};



//#endregion
//#region clone

/** ### yTFClone
 * - Тип `TF`
 * ***
 * 
 * Результирующие параметры функции `clone`.
 * 
 * @typedef {yTFUClone&yT} yTFClone
 * 
*/
/** ### yTFUClone
 * - Тип `TFU`
 * 
 * Уникальные параметры функции `clone`.
 * 
 * @typedef yTFUClone
 * @prop {boolean} link
*/

/** @arg {yTFClone} t */
function cloneDeceit(t) {
    
    try {
        
        return cloneVerify(t);
        
    } catch (e) {
        
        if (config?.strictMode) {
            
            throw e;
            
        };
        
        return undefined;
        
    } finally {
        
        
        
    };
    
};
/** @arg {yTFClone} t */
function cloneVerify(t) {
    
    const {
    
    
    
    } = t;
    
    return cloneHandle(t);
   
};
/** @arg {yTFClone} t */
function cloneHandle(t) {
   
    const {
    
    
    
    } = t;
   
    return cloneComply(t);
   
};
/** @arg {yTFClone} t */
function cloneComply(t) {
   
    const {
    
        y,
        link,
    
    } = t;
    
    if (y instanceof Object) {

        const result = new y.constructor();
        const mirror = [[result, y]];
        const subjects = [];

        const clone = (n, p, v) => {

            const subject = subjects.find(s => s[0] === v);

            if (link && subject) {

                n[p] = subject[1];

            } else if (v instanceof Object) {

                switch (v.constructor) {

                    case Function: n[p] = v; break;
                    default: n[p] = new v.constructor();

                };

                mirror.push([n[p], v]);
                subjects.push([v, n[p]]);

            } else {

                n[p] = v;

            };

        };

        while (mirror.length) {

            const [n, o] = mirror.pop();

            if (o instanceof Array) {

                o.forEach((e, ei) => clone(n, ei, e));

            } else {

                Object.entries(o).forEach(e => clone(n, e[0], e[1]));

            };

        };

        return result;

    } else return y;
    
};

/**
 * ### yClone
 * 
 * ***
 * 
 * Функция клонирования объекта.
 * 
 * ***
 * @arg {Y1} y `Объект`
 * @arg {boolean} link `Ссылки`
 * @returns {Y1}
 * @template Y1
*/
export function yClone(y, link) {

    return cloneDeceit({ y, link, });

};

//#endregion
//#region equal

/** ### yTFEqual
 * - Тип `TF`
 * ***
 * 
 * Результирующие параметры функции `equal`.
 * 
 * @typedef {yTFUEqual&yT} yTFEqual
 * 
*/
/** ### yTFUEqual
 * - Тип `TFU`
 * 
 * Уникальные параметры функции `equal`.
 * 
 * @typedef yTFUEqual
 * @prop {{}} equal
*/

/** @arg {yTFEqual} t */
function equalDeceit(t) {
    
    try {
        
        return equalVerify(t);
        
    } catch (e) {
        
        if (config?.strictMode) {
            
            throw e;
            
        };
        
        return undefined;
        
    } finally {
        
        
        
    };
    
};
/** @arg {yTFEqual} t */
function equalVerify(t) {
    
    const {
    
    
    
    } = t;
    
    return equalHandle(t);
   
};
/** @arg {yTFEqual} t */
function equalHandle(t) {
   
    const {
    
    
    
    } = t;
   
    return equalComply(t);
   
};
/** @arg {yTFEqual} t */
function equalComply(t) {
   
    const {

        y,
        equal,

    } = t;

    if (y === equal) {

        return true;

    };

    const u = [y, equal];
    const s = [[y, equal]];

    while (s.length) {

        const [j, e] = s.pop();
        const [jks, eks] = [j, e].map(e => Object.keys(e));

        if (jks.length !== eks.length) {

            return false;

        };

        for (const jk of jks) {

            if (j[jk].constructor !== e[jk].constructor) {

                return false;

            };

            if (j[jk] instanceof Array) {

                if (u.every(u => u[0] !== j[jk] && u[1] !== e[jk])) {

                    const a = [j[jk].slice().sort((p, c) => p - c), e[jk].slice().sort((p, c) => p - c)];

                    [s, u].forEach(e => e.push(a));

                };

            } else if (j[jk] instanceof Object) {

                if (u.every(u => u[0] !== j[jk] && u[1] !== e[jk])) {

                    const a = [j[jk], e[jk]];

                    [s, u].forEach(e => e.push(a));

                };

            } else if (j[jk] !== e[jk]) {

                return false;

            };

        };

    };

    return true;
    
};

/**
 * ### yEqual
 * 
 * ***
 * 
 * Функция определения эквивалентности двух объектов.
 * 
 * ***
 * @arg {Y1} y `Объект`
 * @arg {Y2} equal `Эквивалент`
 * @returns {boolean}
 * @template Y1,Y2
*/
export function yEqual(y, equal) {

    return equalDeceit({ y, equal, });

};

//#endregion

//#region adopt

/** ### yTFAdopt
 * - Тип `TF`
 * ***
 * 
 * Результирующие параметры функции `adopt`.
 * 
 * @typedef {yTFUAdopt&yT} yTFAdopt
 * 
*/
/** ### yTFUAdopt
 * - Тип `TFU`
 * 
 * Уникальные параметры функции `adopt`.
 * 
 * @typedef yTFUAdopt
 * @prop {any} conf
*/

/** @arg {yTFAdopt} t */
function adoptDeceit(t) {
    
    try {
        
        return adoptVerify(t);
        
    } catch (e) {

        if (config?.strictMode) {
            
            throw e;
            
        };

        console.log(e);
        
        return undefined;
        
    } finally {
        
        
        
    };
    
};
/** @arg {yTFAdopt} t */
function adoptVerify(t) {
    
    const {
    
    
    
    } = t;
    
    return adoptHandle(t);
   
};
/** @arg {yTFAdopt} t */
function adoptHandle(t) {
   
    const {
    
    
    
    } = t;

    if (!t.conf) {

        if (t.y instanceof Y && t.y.constructor.config) {

            t.conf = t.y.constructor.config;

        };

    };
   
    return adoptComply(t);
   
};
/** @arg {yTFAdopt} t */
function adoptComply(t) {
   
    const {
    
        y,
        owner,
        conf,
    
    } = t;

    if (!owner) {

        return y;

    };

    for (const s of Object.keys(y)) {

        owner[s] !== undefined && (y[s] = owner[s])

    };

    if (conf) {

        yAdoptDefault(y, conf);

    };

    return y;
    
};

/**
 * ### yAdopt
 * 
 * ***
 * 
 * Функция перенятия свойств у указанного объекта.
 * 
 * ***
 * @arg {Y1} y `Значение`
 * @arg {Y2} owner `Обладатель`
 * @returns {Y1}
 * @template Y1,Y2
*/
export function yAdopt(y, owner, conf) {

    return adoptDeceit({ y, owner, conf, });

};

//#endregion
//#region adoptDefault

/** ### yTFAdoptDefault
 * - Тип `TF`
 * ***
 * 
 * Результирующие параметры функции `adoptDefault`.
 * 
 * @typedef {yTFUAdoptDefault&yT&yTFAdopt} yTFAdoptDefault
 * 
*/
/** ### yTFUAdoptDefault
 * - Тип `TFU`
 * 
 * Уникальные параметры функции `adoptDefault`.
 * 
 * @typedef yTFUAdoptDefault
 * @prop {any} _
*/

/** @arg {yTFAdoptDefault} t */
function adoptDefaultDeceit(t) {
    
    try {
        
        return adoptDefaultVerify(t);
        
    } catch (e) {
        
        if (config?.strictMode) {
            
            throw e;
            
        };
        
        return undefined;
        
    } finally {
        
        
        
    };
    
};
/** @arg {yTFAdoptDefault} t */
function adoptDefaultVerify(t) {
    
    const {
    
    
    
    } = t;
    
    return adoptDefaultHandle(t);
   
};
/** @arg {yTFAdoptDefault} t */
function adoptDefaultHandle(t) {
   
    if (t.owner.constructor.name === 'YConfig') {

        t.owner = t.owner.value;

    };
   
    return adoptDefaultComply(t);
   
};
/** @arg {yTFAdoptDefault} t */
function adoptDefaultComply(t) {
   
    const {
    
        y,
        owner,
    
    } = t;

    if (!y || !owner) {

        return y;

    };

    for (const property of Object.keys(y)) {
        
        const propertyDefault = property + 'Default';

        if (!y[property]) {

            if (owner[propertyDefault] === undefined) {

                y[property] = y.constructor.config.value.defaultValue;

            } else {

                y[property] = typeof owner[propertyDefault] === 'object' ? yClone(owner[propertyDefault]) : owner[propertyDefault];

            };

        };

    };

    return y;
    
};

/**
 * ### yAdoptDefault
 * 
 * ***
 * 
 * Функция перенятия дефолтных значений.
 * 
 * ***
 * @arg {Y1} y `Значение`
 * @arg {Y2} owner `Обладатель`
 * @returns {Y1}
 * @template Y1,Y2
*/
export function yAdoptDefault(y, owner) {

    return adoptDefaultDeceit({ y, owner, });

};

//#endregion

//#region classifyProp

/** ### yTFClassifyProp
 * - Тип `TF`
 * ***
 * 
 * Результирующие параметры функции `classifyProp`.
 * 
 * @typedef {yTFUClassifyProp&yT} yTFClassifyProp
 * 
*/
/** ### yTFUClassifyProp
 * - Тип `TFU`
 * 
 * Уникальные параметры функции `classifyProp`.
 * 
 * @typedef yTFUClassifyProp
 * @prop {any} ject
*/

/** @arg {yTFClassifyProp} t */
function classifyPropDeceit(t) {
    
    try {
        
        return classifyPropVerify(t);
        
    } catch (e) {
        
        if (config?.strictMode) {
            
            throw e;
            
        };
        
        return undefined;
        
    } finally {
        
        
        
    };
    
};
/** @arg {yTFClassifyProp} t */
function classifyPropVerify(t) {
    
    const {
    
    
    
    } = t;
    
    return classifyPropHandle(t);
   
};
/** @arg {yTFClassifyProp} t */
function classifyPropHandle(t) {
   
    const {
    
    
    
    } = t;
   
    return classifyPropComply(t);
   
};
/** @arg {yTFClassifyProp} t */
function classifyPropComply(t) {
   
    const {

        ject,

    } = t;

    const result = {

        /** @type {Date[]} */
        date: [],
        /** @type {Object[]} */
        ject: [],
        /** @type {boolean[]} */
        bool: [],
        /** @type {null[]} */
        null: [],
        /** @type {any[][]} */
        array: [],
        /** @type {number[]} */
        number: [],
        /** @type {string[]} */
        string: [],
        /** @type {RegExp[]} */
        regexp: [],
        /** @type {bigint[]} */
        bigint: [],
        /** @type {function[]} */
        function: [],
        /** @type {undefined[]} */
        undefined: [],
        /** @type {Date[][]} */
        arrayDate: [],
        /** @type {boolean[][]} */
        arrayBool: [],
        /** @type {Object[][]} */
        arrayJect: [],
        /** @type {null[][]} */
        arrayNull: [],
        /** @type {number[][]} */
        arrayNumber: [],
        /** @type {string[][]} */
        arrayString: [],
        /** @type {RegExp[][]} */
        arrayRegexp: [],
        /** @type {bigint[][]} */
        arrayBigint: [],
        /** @type {function[][]} */
        arrayFunction: [],
        /** @type {undefined[][]} */
        arrayUndefined: [],

    };

    for (const index in ject) {

        let segment = null;

        const value = ject[index];

        switch (typeof value) {

            case 'object': {

                switch (value.constructor.name) {

                    case 'Date': segment = result.date; break;
                    case 'Array': {

                        if (value.every(element => typeof element === 'number')) segment = result.arrayNumber;
                        else if (value.every(element => typeof element === 'bigint')) segment = result.arrayBigint;
                        else if (value.every(element => typeof element === 'boolean')) segment = result.arrayBool;
                        else if (value.every(element => typeof element === 'string')) segment = result.arrayString;
                        else if (value.every(element => typeof element === 'function')) segment = result.arrayFunction;
                        else if (value.every(element => typeof element === 'undefined')) segment = result.arrayUndefined;
                        else if (value.every(element => element instanceof RegExp)) segment = result.arrayRegexp;
                        else if (value.every(element => element instanceof Date)) segment = result.arrayDate;
                        else segment = result.array;

                    } break;
                    case 'RegExp':
                    case 'YRegExp': segment = result.regexp; break;
                    default: segment = result.ject; break;

                };

            }; break;
            case 'string': segment = result.string; break;
            case 'number': segment = result.number; break;
            case 'bigint': segment = result.bigint; break;
            case 'boolean': segment = result.bool; break;
            case 'function': segment = result.function; break;
            case 'undefined': segment = result.undefined; break;

        };

        if (segment) {

            segment.push(value);

        };

    };

    return result;
    
};

/**
 * ### yClassifyProp
 * - Версия `1.0.0`
 * - Цепочка `DVHC`
 * ***
 * 
 * Функция извлечения и классификации свойств по их типу.
 * 
 * ***
 * @arg {any} ject `Объект`
 * @since `1.0.0`
 * @version `1.0.0`
 * @function
*/
export function yClassifyProp(ject) {

    return classifyPropDeceit({ ject });

};

//#endregion

//#region correlate

/** ### yTFCorrelate
 * - Тип `TF`
 * ***
 * 
 * Результирующие параметры функции `correlate`.
 * 
 * @typedef {yTFUCorrelate&yT} yTFCorrelate
 * 
*/
/** ### yTFUCorrelate
 * - Тип `TFU`
 * 
 * Уникальные параметры функции `correlate`.
 * 
 * @typedef yTFUCorrelate
 * @prop {string[][]} options
*/

/** @arg {yTFCorrelate} t */
function correlateDeceit(t) {
    
    try {
        
        return correlateVerify(t);
        
    } catch (e) {
        
        if (config?.strictMode) {
            
            throw e;
            
        };
        
        return undefined;
        
    } finally {
        
        
        
    };
    
};
/** @arg {yTFCorrelate} t */
function correlateVerify(t) {
    
    const {
    
    
    
    } = t;
    
    return correlateHandle(t);
   
};
/** @arg {yTFCorrelate} t */
function correlateHandle(t) {
   
    const {
    
    
    
    } = t;
   
    return correlateComply(t);
   
};
/** @arg {yTFCorrelate} t */
function correlateComply(t) {
   
    const {
    
        y,
        options,
    
    } = t;
    
    const aliases = options.map(option => {

        return {

            name: option[0],
            options: option.slice(1),

        };

    });

    return new Proxy(y, {

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
    
};

/**
 * ### yCorrelate
 * 
 * ***
 * 
 * Функция корреляции значений.
 * 
 * ***
 * @arg {Y1} y `Значение`
 * @arg {...string[]} options `Опции`
 * @returns {Y1}
 * @template Y1
*/
export function yCorrelate(y, ...options) {

    return correlateDeceit({ y, options, });

};

//#endregion
//#region supplement

/** ### yTFSupplement
 * - Тип `TF`
 * ***
 * 
 * Результирующие параметры функции `supplement`.
 * 
 * @typedef {yTFUSupplement&yT} yTFSupplement
 * 
*/
/** ### yTFUSupplement
 * - Тип `TFU`
 * 
 * Уникальные параметры функции `supplement`.
 * 
 * @typedef yTFUSupplement
 * @prop {any} supplementer
*/

/** @arg {yTFSupplement} t */
function supplementDeceit(t) {
    
    try {
        
        return supplementVerify(t);
        
    } catch (e) {
        
        if (config?.strictMode) {
            
            throw e;
            
        };
        
        return undefined;
        
    } finally {
        
        
        
    };
    
};
/** @arg {yTFSupplement} t */
function supplementVerify(t) {
    
    const {
    
    
    
    } = t;
    
    return supplementHandle(t);
   
};
/** @arg {yTFSupplement} t */
function supplementHandle(t) {
   
    const {
    
    
    
    } = t;
   
    return supplementComply(t);
   
};
/** @arg {yTFSupplement} t */
function supplementComply(t) {
   
    const {
    
        y,
        supplementer,
    
    } = t;
    
    Object.keys(supplementer).forEach(k => [undefined, null, NaN].includes(y[k]) && (y[k] = supplementer[k]));

    return y;
    
};

/**
 * ### ySupplement
 * - Версия `0.0.0`
 * - Цепочка `DVHCa`
 * - Модуль `ject`
 * ***
 *
 * Функция дополнения объекта свойствами указанного дополнителя.
 *
 * ***
 * @arg {Y1} y `Значение`
 * @arg {Y2} supplementer `Дополнитель`
 * @returns {Y1}
 * @template Y1,Y2
*/
export function ySupplement(y, supplementer) {

    return supplementDeceit({ y, supplementer, });

};

//#endregion

//#region getProperty

/** ### yTFGetProperty
 * - Тип `TF`
 * ***
 * 
 * Результирующие параметры функции `getProperty`.
 * 
 * @typedef {yTFUGetProperty&yT} yTFGetProperty
 * 
*/
/** ### yTFUGetProperty
 * - Тип `TFU`
 * 
 * Уникальные параметры функции `getProperty`.
 * 
 * @typedef yTFUGetProperty
 * @prop {string} property
*/

/** @arg {yTFGetProperty} t */
function getPropertyDeceit(t) {
    
    try {
        
        return getPropertyVerify(t);
        
    } catch (e) {
        
        if (config?.strictMode) {
            
            throw e;
            
        };
        
        return undefined;
        
    } finally {
        
        
        
    };
    
};
/** @arg {yTFGetProperty} t */
function getPropertyVerify(t) {
    
    const {
    
    
    
    } = t;
    
    return getPropertyHandle(t);
   
};
/** @arg {yTFGetProperty} t */
function getPropertyHandle(t) {
   
    const {
    
    
    
    } = t;
   
    return getPropertyComply(t);
   
};
/** @arg {yTFGetProperty} t */
function getPropertyComply(t) {
   
    const {

        y,
        property,

    } = t;

    const structures = [y];

    while (structures.length) {

        const s = structures.pop();

        if (s.hasOwnProperty(property)) {

            return s[property];

        } else {

            for (const v of Object.values(s)) {

                if (typeof v === 'object') {

                    structures.push(v);

                };

            };

        };

    };

    return undefined;
    
};

/**
 * ### yGetProperty
 * - Версия `0.0.1`
 * - Цепочка `DVHCa`
 * ***
 *
 * Функция извлечения указанного свойства из указанного объекта с применением глубокого поиска.
 *
 * ***
 * @arg {{}} y `Объект`
 * Необязательный параметр, типизирующий результат.
 * @arg {string} property `Свойство`
 * @returns {T|undefined}
 * @template T
*/
export function yGetProperty(y, property) {

    return getPropertyDeceit({ y, property, });

};

//#endregion
//#region getPropertyByPath

/** ### yTFGetPropertyByPath
 * - Тип `TF`
 * ***
 * 
 * Результирующие параметры функции `getPropertyByPath`.
 * 
 * @typedef {yTFUGetPropertyByPath&yT} yTFGetPropertyByPath
 * 
*/
/** ### yTFUGetPropertyByPath
 * - Тип `TFU`
 * 
 * Уникальные параметры функции `getPropertyByPath`.
 * 
 * @typedef yTFUGetPropertyByPath
 * @prop {string} path
*/

/** @arg {yTFGetPropertyByPath} t */
function getPropertyByPathDeceit(t) {
    
    try {
        
        return getPropertyByPathVerify(t);
        
    } catch (e) {
        
        if (config?.strictMode) {
            
            throw e;
            
        };
        
        return undefined;
        
    } finally {
        
        
        
    };
    
};
/** @arg {yTFGetPropertyByPath} t */
function getPropertyByPathVerify(t) {
    
    const {
    
    
    
    } = t;
    
    return getPropertyByPathHandle(t);
   
};
/** @arg {yTFGetPropertyByPath} t */
function getPropertyByPathHandle(t) {
   
    const {
    
    
    
    } = t;
   
    return getPropertyByPathComply(t);
   
};
/** @arg {yTFGetPropertyByPath} t */
function getPropertyByPathComply(t) {
   
    const {

        y,
        path,

    } = t;

    let c = 0;
    let u = [];
    let r = [y];

    const l = path.length - 1;

    while (c !== l && r.length) {

        const p = path.pop();

        for (const j of r) {

            u.push(j);

            switch (p) {

                case 'f': {

                    const f = Object.values(j).find(v => v instanceof Object && !u.includes(v));

                    if (f) {

                        r = [f];

                        u.push(f);
                        break;

                    };

                }; break;
                case 'l': {

                    const f = Object.values(j).reverse().find(v => v instanceof Object && !u.includes(v));

                    if (f) {

                        r = [f];

                        u.push(f);
                        break;

                    };

                }; break;
                case '*': {

                    r.push(...Object.values(j).filter(v => v instanceof Object && !u.includes(v)));

                }; break;
                default: {

                    if (j[p] instanceof Object) {

                        r = [j[p]];
                        break;

                    };

                }; break;

            };

        };

        if (!r) return undefined;

        c++;

    };

    for (const j of r) {

        switch (path[0]) {

            default: {

                if (j[path[0]]) {

                    return j[path[0]];

                };


            }; break;

        };

    };

    return undefined;
    
};

/**
 * ### yGetPropertyByPath
 * - Версия `0.0.0`
 * - Цепочка `DVHCa`
 * ***
 *
 * Функция получения значения свойства полученного из указанного объекта по указанному пути.
 *
 * ***
 * @arg {Y1} y `Объект`
 * @arg {string} path `Путь`
 * @template Y1
*/
export function yGetPropertyByPath(y, path) {

    return getPropertyByPathDeceit({ y, path, });

};

//#endregion

/**
 * @file module.mjs
 * @author Yakhin Nikita Artemovich <mr.y.nikita@gmail.com>
 * @copyright Yakhin Nikita Artemovich 2023
*/