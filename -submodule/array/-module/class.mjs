//#region YI

import { Y, yClassifyProp, } from "@syls/y";
import { YCursor } from "../-submodule/cursor/-module/export.mjs";
import { YMany } from "@syls/y/many";

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

/** ### YArrayT
 * - Тип `T`
 * 
 * Основной параметр модуля `YArray`.
 * 
 * ***
 * 
 * @typedef {YArrayTE&YArrayTU} YArrayT
*/
/** ### YArrayTE
 * - Тип `TE`
 * 
 * Параметр наследования `YArray`.
 * 
 * @typedef {Omit<DArray, keyof SArray>} YArrayTE
*/
/** ### YArrayTU
 * - Тип `TU`
 * 
 * Уникальные параметры `YArray`.
 * 
 * @typedef YArrayTU
 * @prop {number} length
*/
/** ### YArrayTUG
 * - Тип `TUP`
 * 
 * Уникальные генеративные параметры `YArray`.
 * 
 * @typedef YArrayTUG
 * @prop {null} _
*/

//#endregion

/**
 * @template Y1
*/
class SArray extends YMany {
    
    /**
     * ### stock
     * 
     * ***
     * 
     * 
     * 
     * ***
     * @type {YArray[]}
     * @field
     * @static
     * @public
    */
    static stock = [];
    /**
     * ### config
     * 
     * 
     * 
     * ***
     * @field
     * @static
     * @public
    */
    static config = config;
    
    /**
     * @arg {...YArray} args `Аргументы`
     * @returns {YArray[]}
    */
    static create(...args) {
        
        return Object.getPrototypeOf(SArray).create.apply(this, [...args]);
        
    };
    /**
     * ### sequence
     * 
     * ***
     * 
     * Метод создания массива из указанной последовательности значений.
     * 
     * ***
     * @arg {...any} args `Аргументы`
     * @static
     * @method
     * @public
    */
    static sequence(...args) {

        return new YArray({ values: args, });
        
    };
    
};
/**
 * @extends SArray<Y1>
 * @template Y1
*/
class DArray extends SArray {
    
    /**
     * ### values
     * 
     * Значения.
     * 
     * *** 
     * @type {Y1[]}
     * @field
     * @public
    */
    values;
    
};
/**
 * @extends DArray<Y1>
 * @template Y1
*/
class IArray extends DArray {
    
    /**
     * ### cursors
     * 
     * Курсоры.
     * 
     * *** 
     * @type {YCursor[]}
     * @field
     * @public
    */
    cursors;
    
};
/**
 * @extends IArray<Y1>
 * @template Y1
*/
class MArray extends IArray {
    
    
    
};
/**
 * @extends MArray<Y1>
 * @template Y1
*/
class FArray extends MArray {
    
    /**
     * ### YArray.constructor
     * 
     * 
     * 
     * ***
     * @arg {YArrayT&G} t
    */
    constructor(t) {
        
        t = [...arguments];

        super(Object.assign(t = FArray.#before(t), {}));
        
        FArray.#deceit.apply(this, [t]);
        
    };
    
    /** @arg {any[]} t */
    static #before(t) {
        
        /** @type {YArrayT} */
        let r = {};

        if (t?.length === 1 && [Object, YArray].includes(t[0]?.constructor) && !Object.getOwnPropertyNames(t[0]).includes('_ytp')) {

            r = t[0];

            return r;
            
        } else if (!t.length) {
            
            return r;
            
        };
        
        if (t[0]?._ytp) {
        
            t = [...t[0]._ytp];
        
        };
        
        const arg = yClassifyProp(t);
        
        r.values = arg.array[0];
        
        if (!Object.values(r).length) {
            
            r = { _ytp: t, };
            
        };
        
        return r;
        
    };
    /** @arg {YArrayT} t @this {YArray} */
    static #deceit(t) {

        try {
            
            FArray.#verify.apply(this, [t]);
            
        } catch (e) {
            
            throw e;
            
        } finally {
            
            
            
        };
        
    };
    /** @arg {YArrayT} t @this {YArray} */
    static #verify(t) {
        
        FArray.#handle.apply(this, [t]);
        
    };
    /** @arg {YArrayT} t @this {YArray} */
    static #handle(t) {
        
        
        
        FArray.#create.apply(this, [t]);
        
    };
    /** @arg {YArrayT} t @this {YArray} */
    static #create(t) {
        
        const {
            
            
            
        } = t;
        
        this.adopt(t);
        
        if (config) {
            
            this.adoptDefault(this.constructor.config ?? config);
            
        };

    };
    
};

/**
 * ### YArray
 * - Тип `SDIMFY`
 * - Цепочка `BDVHC`
 * ***
 * 
 * Класс `YArray` предназначен для работы с индексируемыми множествами.
 * 
 * ***
 * @class
 * @extends FArray<YArrayTUG&Y1>
 * @template Y1
 * 
*/
export class YArray extends FArray {
    
    /** @arg {Y1} t */
    constructor(t) { super(t); };
    
};