//#region YI

import { Y, yClassifyProp } from '@syls/y';

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

/** ### YGeoT
 * - Тип `T`
 * 
 * Основной параметр модуля `YGeo`.
 * 
 * @typedef {YGeoTE&YGeoTU&Y} YGeoT
 * 
*/
/** ### YGeoTE
 * - Тип `TE`
 * 
 * Параметр наследования `YGeo`.
 * 
 * @typedef {Omit<DGeo, keyof SGeo>} YGeoTE
 * 
*/
/** ### YGeoTU
 * - Тип `TU`
 * 
 * Уникальные параметры `YGeo`.
 * 
 * @typedef YGeoTU
 * @prop {any} _
 * 
*/

//#endregion

class SGeo extends Y {
    
    /** ### stock
     * @type {YGeo[]}
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
     * @arg {...YGeo} args `Аргументы`
     * @returns {YGeo[]}
    */
    static create(...args) {
        
        return Object.getPrototypeOf(SGeo).create.apply(this, [...args]);
        
    };
    
};
class DGeo extends SGeo {
    
    
    
};
class IGeo extends DGeo {
    
    
    
};
class MGeo extends IGeo {
    
    
    
};
class FGeo extends MGeo {
    
    /**
     * ### YGeo.constructor
     * 
     * 
     * 
     * ***
     * @arg {YGeoT} t
    */
    constructor(t) {
        
        t = [...arguments];
        
        super(Object.assign(t = FGeo.#before(t), {}));
        
        FGeo.#deceit.apply(this, [t]);
        
        return this.correlate();
        
    };
    
    /** @arg {any[]} t */
    static #before(t) {
        
        /** @type {YGeoT} */
        let r = {};
        
        if (t?.length === 1 && [Object, YGeo].includes(t[0]?.constructor) && !Object.getOwnPropertyNames(t[0]).includes('_ytp')) {
            
            r = t[0];
            
        } else if (t?.length) {
            
            if (t[0]?._ytp) {
            
                t = [...t[0]._ytp];
            
            };
            
            const arg = argClassify(t);
            
            
            
            if (!Object.values(r).length) {
                
                r = { _ytp: t, };
                
            };
            
        };
        
        return r;
        
    };
    /** @arg {YGeoT} t @this {YGeo} */
    static #deceit(t) {
        
        try {
            
            FGeo.#verify.apply(this, [t]);
            
        } catch (e) {
            
            throw e;
            
        } finally {
            
            
            
        };
        
    };
    /** @arg {YGeoT} t @this {YGeo} */
    static #verify(t) {
        
        const {
            
            
            
        } = t;
        
        FGeo.#handle.apply(this, [t]);
        
    };
    /** @arg {YGeoT} t @this {YGeo} */
    static #handle(t) {
        
        
        
        FGeo.#create.apply(this, [t]);
        
    };
    /** @arg {YGeoT} t @this {YGeo} */
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
 * ### YGeo
 * - Тип `SDIMFY`
 * - Версия `0.0.0`
 * - Цепочка `BDVHC`
 * ***
 * 
 * Класс YGeo.
 * 
 * ***
 * @class
 * 
*/
export class YGeo extends FGeo {
    
    
    
};