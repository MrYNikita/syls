//#region YI

import { Y, yClassifyProp } from '@syls/y';

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

/** ### YRegExpT
 * - Тип `T`
 * 
 * Основной параметр модуля `YRegExp`.
 * 
 * @typedef {YRegExpTE&YRegExpTU&Y} YRegExpT
 * 
*/
/** ### YRegExpTE
 * - Тип `TE`
 * 
 * Параметр наследования `YRegExp`.
 * 
 * @typedef {Omit<DRegExp, keyof SRegExp>} YRegExpTE
 * 
*/
/** ### YRegExpTU
 * - Тип `TU`
 * 
 * Уникальные параметры `YRegExp`.
 * 
 * @typedef YRegExpTU
 * @prop {any} _
 * 
*/

//#endregion

class SRegExp extends Y {
    
    /** ### stock
     * @type {YRegExp[]}
     * @public
    */
    static stock = [];
    /** ### config
     * 
     * ***
     * @public
    */
    static config = config;
    
    /**
     * @arg {...YRegExp} args `Аргументы`
     * @returns {YRegExp[]}
    */
    static create(...args) {
        
        return Object.getPrototypeOf(SRegExp).create.apply(this, [...args]);
        
    };
    
};
class DRegExp extends SRegExp {
    
    
    
};
class IRegExp extends DRegExp {
    
    
    
};
class MRegExp extends IRegExp {
    
    
    
};
class FRegExp extends MRegExp {
    
    /**
     * ### YRegExp.constructor
     * 
     * 
     * 
     * ***
     * @arg {YRegExpT} t
    */
    constructor(t) {
        
        t = [...arguments];
        
        super(Object.assign(t = FRegExp.#before(t), {}));
        
        FRegExp.#deceit.apply(this, [t]);
        
        return this.correlate();
        
    };
    
    /** @arg {any[]} t */
    static #before(t) {
        
        /** @type {YRegExpT} */
        let r = {};
        
        if (t?.length === 1 && [Object, YRegExp].includes(t[0]?.constructor) && !Object.getOwnPropertyNames(t[0]).includes('_ytp')) {
            
            r = t[0];
            
        } else if (!t.length) {
            
            return r;
            
        };
        
        if (t[0]?._ytp) {
        
            t = [...t[0]._ytp];
        
        };
        
        const arg = yClassifyProp(t);
        
        
        
        if (!Object.values(r).length) {
            
            r = { _ytp: t, };
            
        };
        
        return r;
        
    };
    /** @arg {YRegExpT} t @this {YRegExp} */
    static #deceit(t) {
        
        try {
            
            FRegExp.#verify.apply(this, [t]);
            
        } catch (e) {
            
            throw e;
            
        } finally {
            
            
            
        };
        
    };
    /** @arg {YRegExpT} t @this {YRegExp} */
    static #verify(t) {
        
        const {
            
            
            
        } = t;
        
        FRegExp.#handle.apply(this, [t]);
        
    };
    /** @arg {YRegExpT} t @this {YRegExp} */
    static #handle(t) {
        
        
        
        FRegExp.#create.apply(this, [t]);
        
    };
    /** @arg {YRegExpT} t @this {YRegExp} */
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
 * ### YRegExp
 * - Тип `SDIMFY`
 * - Версия `0.0.0`
 * - Цепочка `BDVHC`
 * ***
 * 
 * Класс YRegExp.
 * 
 * ***
 * @class
 * 
*/
export class YRegExp extends FRegExp {
    
    
    
};