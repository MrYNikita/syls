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

/** ### argT
 * - Тип `T`
 * - Версия `0.0.0`
 * 
 * Основной параметр модуля `arg`.
 * 
 * @typedef argT
 * @prop {IArguments} arg
 * 
*/

//#endregion
//#region YV



//#endregion

//#region classify

/** ### argTFClassify
 * - Тип `TF`
 * ***
 * 
 * Результирующие параметры функции `classify`.
 * 
 * @typedef {argTFUClassify&argT} argTFClassify
 * 
*/
/** ### argTFUClassify
 * - Тип `TFU`
 * 
 * Уникальные параметры функции `classify`.
 * 
 * @typedef argTFUClassify
 * @prop {any} _
*/

/** @arg {argTFClassify} t */
function classifyDeceit(t) {
    
    try {
        
        return classifyVerify(t);
        
    } catch (e) {
        
        if (config?.strict) {
            
            throw e;
            
        };
        
        return undefined;
        
    } finally {
        
        
        
    };
    
};
/** @arg {argTFClassify} t */
function classifyVerify(t) {
    
    const {
    
    
    
    } = t;
    
    return classifyHandle(t);
   
};
/** @arg {argTFClassify} t */
function classifyHandle(t) {
   
    const {
    
    
    
    } = t;
   
    return classifyComply(t);
   
};
/** @arg {argTFClassify} t */
function classifyComply(t) {
   
    const {
    
        arg,
    
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
        /** @type {undefined[]} */
        undefined: [],

    };

    for (const index in arg) {

        let segment = null;

        const value = arg[index];

        switch (typeof value) {

            case "object": {

                switch (value.constructor.name) {

                    case "Date": segment = result.date; break;
                    case "Array":
                    case "YArray": segment = result.array; break;
                    case "RegExp":
                    case "YRegExp": segment = result.regexp; break;
                    default: segment = result.ject; break;

                };

            }; break;
            case "string": segment = result.string; break;
            case "number": segment = result.number; break;
            case "bigint": segment = result.bigint; break;
            case "boolean": segment = result.bool; break;
            case "undefined": segment = result.undefined; break;

        };

        if (segment) {

            segment.push(value);

        };

    };

    return result;
    
};

/**
 * ### argClassify
 * 
 * ***
 * 
 * Функция классифиции аргументов.
 * 
 * Разбивает аргументы на типы.
 * 
 * ***
 * @arg {IArguments} arg `Аргументы`
*/
export function argClassify(arg) {
    
    return classifyDeceit({ arg });

};

//#endregion

/**
 * @file module.mjs
 * @author Yakhin Nikita Artemovich <mr.y.nikita@gmail.com>
 * @copyright Yakhin Nikita Artemovich 2023
*/