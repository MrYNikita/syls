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

/** ### YLangT
 * - Тип `T`
 * 
 * Основной параметр модуля `YLang`.
 * 
 * @typedef {YLangTE&YLangTU&Y} YLangT
 * 
*/
/** ### YLangTE
 * - Тип `TE`
 * 
 * Параметр наследования `YLang`.
 * 
 * @typedef {Omit<DLang, keyof SLang>} YLangTE
 * 
*/
/** ### YLangTU
 * - Тип `TU`
 * 
 * Уникальные параметры `YLang`.
 * 
 * @typedef YLangTU
 * @prop {any} _
 * 
*/

//#endregion

class SLang extends Y {
    
    /**
     * ### stock
     * 
     * ***
     * 
     * 
     * 
     * ***
     * @type {YLang[]}
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
     * @arg {...YLang} args `Аргументы`
     * @returns {YLang[]}
    */
    static create(...args) {
        
        return Object.getPrototypeOf(SLang).create.apply(this, [...args]);
        
    };
    
};
class DLang extends SLang {
    
    
    
};
class ILang extends DLang {
    
    
    
};
class MLang extends ILang {
    
    
    
};
class FLang extends MLang {
    
    /**
     * ### YLang.constructor
     * 
     * 
     * 
     * ***
     * @arg {YLangT} t
    */
    constructor(t) {
        
        t = [...arguments];
        
        super(Object.assign(t = FLang.#before(t), {}));
        
        FLang.#deceit.apply(this, [t]);
        
        return this.correlate();
        
    };
    
    /** @arg {any[]} t */
    static #before(t) {
        
        /** @type {YLangT} */
        let r = {};
        
        if (t?.length === 1 && [Object, YLang].includes(t[0]?.constructor) && !Object.getOwnPropertyNames(t[0]).includes('_ytp')) {
            
            r = t[0];
            
            return r;
            
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
    /** @arg {YLangT} t @this {YLang} */
    static #deceit(t) {
        
        try {
            
            FLang.#verify.apply(this, [t = { ...t }]);
            
        } catch (e) {
            
            throw e;
            
        } finally {
            
            
            
        };
        
    };
    /** @arg {YLangT} t @this {YLang} */
    static #verify(t) {
        
        const {
            
            
            
        } = t;
        
        FLang.#handle.apply(this, [t]);
        
    };
    /** @arg {YLangT} t @this {YLang} */
    static #handle(t) {
        
        
        
        FLang.#create.apply(this, [t]);
        
    };
    /** @arg {YLangT} t @this {YLang} */
    static #create(t) {
        
        const {
            
            
            
        } = t;
        
        this
            .adopt(t)
            .adoptDefault(this.constructor.config ?? config);
        
    };
    
};

/**
 * ### YLang
 * - Тип `SDIMFY`
 * - Версия `0.0.0`
 * - Цепочка `BDVHC`
 * ***
 * 
 * Класс `YLang`.
 * 
 * ***
 * @class
 * 
*/
export class YLang extends FLang {
    
    
    
};