//#region YI

import { yClassifyProp } from '@syls/y';

/** @type {import('./config.mjs')['default']['params']?} */
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

/** ### YVisT
 * - Тип `T`
 * 
 * Основной параметр модуля `YVis`.
 * 
 * @typedef {YVisTE&YVisTU&Y} YVisT
 * 
*/
/** ### YVisTE
 * - Тип `TE`
 * 
 * Параметр наследования `YVis`.
 * 
 * @typedef {Omit<DVis, keyof SVis>} YVisTE
 * 
*/
/** ### YVisTU
 * - Тип `TU`
 * 
 * Уникальные параметры `YVis`.
 * 
 * @typedef YVisTU
 * @prop {any} _
 * 
*/

//#endregion

class SVis extends Y {
    
    /**
     * ### stock
     * 
     * ***
     * 
     * 
     * 
     * ***
     * @type {YVis[]}
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
     * @arg {...YVis} args `Аргументы`
     * @returns {YVis[]}
    */
    static create(...args) {
        
        return Object.getPrototypeOf(SVis).create.apply(this, [...args]);
        
    };
    
};
class DVis extends SVis {
    
    /**
     * ### size
     * 
     * Размер.
     * 
     * *** 
     * @type {[number, number]}
     * @field
     * @public
    */
    size;
    /**
     * ### position
     * 
     * Позиция.
     * 
     * *** 
     * @type {[number, number]}
     * @field
     * @public
    */
    position;
    
};
class IVis extends DVis {
    
    
    
};
class MVis extends IVis {
    
    
    
};
class FVis extends MVis {
    
    /**
     * ### YVis.constructor
     * 
     * 
     * 
     * ***
     * @arg {YVisT} t
    */
    constructor(t) {
        
        t = [...arguments];
        
        super(Object.assign(t = FVis.#before(t), {}));
        
        FVis.#deceit.apply(this, [t]);
        
        return this.correlate();
        
    };
    
    /** @arg {any[]} t */
    static #before(t) {
        
        /** @type {YVisT} */
        let r = {};
        
        if (t?.length === 1 && [Object, YVis].includes(t[0]?.constructor) && !Object.getOwnPropertyNames(t[0]).includes('_ytp')) {
            
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
    /** @arg {YVisT} t @this {YVis} */
    static #deceit(t) {
        
        try {
            
            FVis.#verify.apply(this, [t = { ...t }]);
            
        } catch (e) {
            
            throw e;
            
        } finally {
            
            
            
        };
        
    };
    /** @arg {YVisT} t @this {YVis} */
    static #verify(t) {
        
        const {
            
            
            
        } = t;
        
        FVis.#handle.apply(this, [t]);
        
    };
    /** @arg {YVisT} t @this {YVis} */
    static #handle(t) {
        
        
        
        FVis.#create.apply(this, [t]);
        
    };
    /** @arg {YVisT} t @this {YVis} */
    static #create(t) {
        
        const {
            
            
            
        } = t;
        
        this
            .adopt(t)
            .adoptDefault(this.constructor.config ?? config);
        
    };
    
};

/**
 * ### YVis
 * - Тип `SDIMFY`
 * - Версия `0.0.0`
 * - Цепочка `BDVHC`
 * ***
 * 
 * Класс `YVis`.
 * 
 * ***
 * @class
 * 
*/
export class YVis extends FVis {
    
    
    
};