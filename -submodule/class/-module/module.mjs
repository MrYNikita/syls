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

/** ### classT
 * - Тип `T`
 * - Версия `0.0.0`
 * - Модуль `class`
 *
 * Основной параметр модуля `class`.
 *
 * @typedef classT
 * @prop {typeof Object} cls
 *
*/

//#endregion
//#region YV



//#endregion

//#region getChain 0.0.0

/** ### classTFGetChain
 * - Тип `TF`
 * - Версия `0.0.0`
 * - Модуль `class`
 * ***
 * 
 * Результирующие параметры функции `getChain`.
 * 
 * @typedef {classTFUGetChain&classT} classTFGetChain
 * 
*/
/** ### classTFUGetChain
 * - Тип `TFU`
 * - Версия `0.0.0`
 * - Модуль `class`
 * 
 * Уникальные параметры функции `getChain`.
 * 
 * @typedef classTFUGetChain
 * @prop {any} _
*/

/** @arg {classTFGetChain} t */
function getChainDeceit(t) {
    
    try {
        
        return getChainVerify(t);
        
    } catch (e) {
        
        if (config?.strictMode) {
            
            throw e;
            
        };
        
        return undefined;
        
    } finally {
        
        
        
    };
    
};
/** @arg {classTFGetChain} t */
function getChainVerify(t) {
    
    const {
    
    
    
    } = t;
    
    return getChainHandle(t);
   
};
/** @arg {classTFGetChain} t */
function getChainHandle(t) {
   
    const {
    
    
    
    } = t;
   
    return getChainComply(t);
   
};
/** @arg {classTFGetChain} t */
function getChainComply(t) {
   
    const {
    
        cls,
    
    } = t;
    
    const result = [];

    let value = cls;

    while (value && value !== Object.getPrototypeOf(Object)) {

        result.push(value);

        value = Object?.getPrototypeOf?.(value);

    };

    return result;
    
};

/**
 * ### classGetChain
 * - Версия `0.0.0`
 * - Цепочка `DVHCa`
 * - Модуль `class`
 * ***
 * 
 * Функция получения цепочки наследования указанного класса.
 * 
 * ***
 * @arg {T} cls `Класс`
 * @returns {T[]}
 * @template T
*/
export function classGetChain(cls) {

    return getChainDeceit({ cls });

};

//#endregion

//#region union 0.1.0

/** ### classTFUnion
 * - Тип `TF`
 * - Версия `0.0.0`
 * - Модуль `class`
 * ***
 *
 * Результирующие параметры функции `union`.
 *
 * @typedef {classTFUUnion&classT} classTFUnion
 *
*/
/** ### classTFUUnion
 * - Тип `TFU`
 * - Версия `0.0.0`
 * - Модуль `class`
 *
 * Уникальные параметры функции `union`.
 *
 * @typedef classTFUUnion
 * @prop {string} name
 * @prop {typeof Object} clUnion
*/

/** @arg {classTFUnion} t */
function unionDeceit(t) {

    try {

        return unionVerify(t);

    } catch (e) {

        if (config.strict) throw e;

        return undefined;

    };

};
/** @arg {classTFUnion} t */
function unionVerify(t) {

    const {



    } = t;

    return unionHandle(t);

};
/** @arg {classTFUnion} t */
function unionHandle(t) {

    const {



    } = t;

    return unionComply(t);

};
/** @arg {classTFUnion} t */
function unionComply(t) {

    const {

        cl,
        name,
        clUnion,

    } = t;

    let result;

    eval(`

    result = class ${name ?? 'YUnionClass'} {

        constructor(...t) {

            [cl, clUnion].forEach(cl => jectAdopt(this, new cl(...t)));

        };

    };

    Object.setPrototypeOf(result, Object.assign(cl, clUnion));
    Object.setPrototypeOf(result.prototype, Object.assign(cl.prototype, clUnion.prototype));

    `);

    return result;

};

/**
 * ### classUnion
 * - Версия `0.1.0`
 * - Цепочка `DVHCa`
 * - Модуль `class`
 * ***
 *
 * Функция объединения классов.
 *
 * Объекдиненные классы образуют новый общий прототип путем слияния.
 * Экземпляр класса заполняется полями образованных обоими классов элементами.
 *
 * Класс можно наименовать: для этого необходимо указать третьим аргументом имя нового класса.
 *
 * ***
 * @arg {TCL1} cl `Класс`
 * @arg {TCL2} clUnion `Объединитель`
 * @arg {string} name `Наименование`
 * @returns {TCL1&TCL2}
 * @template TCL1
 * @template TCL2
*/
export function classUnion(cl, clUnion, name) {

    return unionDeceit({ cl, clUnion, name, });

};

//#endregion

/**
 * @file module.mjs
 * @author Yakhin Nikita Artemovich <mr.y.nikita@gmail.com>
 * @copyright Yakhin Nikita Artemovich 2023
*/