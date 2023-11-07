//#region YI

import { Y } from '@syls/y';

/** @type {import('./config.mjs')['default']['params']?} */
let config = null;

await import('./config.mjs')

    .then(c => config = c.default?.params ? c.default.params : c.default)
    .catch(e => e);

/** @type {import('./error.mjs')['default']?} */
let error = null;

await import('./error.mjs')

    .then(e => error = e.default)
    .catch(e => e);

//#endregion
//#region YT

/** ### YDimensionT
 * - Тип `T`
 * 
 * Основной параметр модуля `YDimension`.
 * 
 * @typedef {YDimensionTE&YDimensionTU&Y} YDimensionT
 * 
*/
/** ### YDimensionTE
 * - Тип `TE`
 * 
 * Параметр наследования `YDimension`.
 * 
 * @typedef {Omit<DDimension, keyof SDimension>} YDimensionTE
 * 
*/
/** ### YDimensionTU
 * - Тип `TU`
 * 
 * Уникальные параметры `YDimension`.
 * 
 * @typedef YDimensionTU
 * @prop {any} _
 * 
*/

//#endregion

class SDimension extends Y {
    
    /**
     * ### stock
     * 
     * ***
     * 
     * 
     * 
     * ***
     * @type {YDimension[]}
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
     * @arg {...YDimension} args `Аргументы`
     * @returns {YDimension[]}
    */
    static create(...args) {
        
        return Object.getPrototypeOf(SDimension).create.apply(this, [...args]);
        
    };
    
};
class DDimension extends SDimension {
    
    /**
     * ### size
     * 
     * Размер.
     * 
     * *** 
     * @type {number}
     * @field
     * @public
    */
    size;
    /**
     * ### prev
     * 
     * Ссылка на предыдущее измерение. Если отсутсвует, то это говорит о том, что измерение является корневым или первым.
     * 
     * *** 
     * @type {YDimension?}
     * @field
     * @public
    */
    prev;
    
};
class IDimension extends DDimension {
    
    
    
};
class MDimension extends IDimension {
    
    
    
};
class FDimension extends MDimension {
    
    /**
     * ### YDimension.constructor
     * 
     * 
     * 
     * ***
     * @arg {YDimensionT} t
    */
    constructor(t) {
        
        t = [...arguments];
        
        super(Object.assign(t = FDimension.#before(t), {}));
        
        FDimension.#deceit.apply(this, [t]);
        
        return this.correlate();
        
    };
    
    /** @arg {any[]} t */
    static #before(t) {
        
        /** @type {YDimensionT} */
        let r = {};
        
        if (t?.length === 1 && [Object, YDimension].includes(t[0]?.constructor) && !Object.getOwnPropertyNames(t[0]).includes('_ytp')) {
            
            r = t[0];
            
            return r;
            
        } else if (!t.length) {
            
            return r;
            
        };
        
        if (t[0]?._ytp) {
        
            t = [...t[0]._ytp];
        
        };
        
        
        
        if (!Object.values(r).length) {
            
            r = { _ytp: t, };
            
        };
        
        return r;
        
    };
    /** @arg {YDimensionT} t @this {YDimension} */
    static #deceit(t) {
        
        try {
            
            FDimension.#verify.apply(this, [t]);
            
        } catch (e) {
            
            throw e;
            
        } finally {
            
            
            
        };
        
    };
    /** @arg {YDimensionT} t @this {YDimension} */
    static #verify(t) {
        
        const {
            
            
            
        } = t;
        
        FDimension.#handle.apply(this, [t]);
        
    };
    /** @arg {YDimensionT} t @this {YDimension} */
    static #handle(t) {
        
        
        
        FDimension.#create.apply(this, [t]);
        
    };
    /** @arg {YDimensionT} t @this {YDimension} */
    static #create(t) {
        
        const {
            
            
            
        } = t;
        
        this
            .adopt(t)
            .adoptDefault(this.constructor.config ?? config);
        
    };
    
};

/**
 * ### YDimension
 * - Тип `SDIMFY`
 * - Версия `0.0.0`
 * - Цепочка `BDVHC`
 * ***
 * 
 * Класс `YDimension` предназначен для работы с измерениями множеств.
 * 
 * Его свойства содержат описания различных измерений определенного множества, которое может быть предсиавлено массивом или строкой.
 * Они могут дать представление о размерах измерения, предыдущем измерении и о вложенных в него измрениях
 * и также ссылки на соседние подмножества в рамках одного измерения.
 * 
 * ***
 * @class
 * 
*/
export class YDimension extends FDimension {
    
    
    
};