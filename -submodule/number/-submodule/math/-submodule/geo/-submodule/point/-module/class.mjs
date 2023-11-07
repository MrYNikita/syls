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

/** ### YPointT
 * - Тип `T`
 * 
 * Основной параметр модуля `YPoint`.
 * 
 * @typedef {YPointTE&YPointTU&Y} YPointT
 * 
*/
/** ### YPointTE
 * - Тип `TE`
 * 
 * Параметр наследования `YPoint`.
 * 
 * @typedef {Omit<DPoint, keyof SPoint>} YPointTE
 * 
*/
/** ### YPointTU
 * - Тип `TU`
 * 
 * Уникальные параметры `YPoint`.
 * 
 * @typedef YPointTU
 * @prop {any} _
 * 
*/

//#endregion

class SPoint extends Y {
    
    /** ### stock
     * @type {YPoint[]}
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
     * @arg {...YPoint} args `Аргументы`
     * @returns {YPoint[]}
    */
    static create(...args) {
        
        return Object.getPrototypeOf(SPoint).create.apply(this, [...args]);
        
    };
    
};
class DPoint extends SPoint {
    
    
    
};
class IPoint extends DPoint {
    
    
    
};
class MPoint extends IPoint {
    
    
    
};
class FPoint extends MPoint {
    
    /**
     * ### YPoint.constructor
     * 
     * 
     * 
     * ***
     * @arg {YPointT} t
    */
    constructor(t) {
        
        t = [...arguments];
        
        super(Object.assign(t = FPoint.#before(t), {}));
        
        FPoint.#deceit.apply(this, [t]);
        
        return this.correlate();
        
    };
    
    /** @arg {any[]} t */
    static #before(t) {
        
        /** @type {YPointT} */
        let r = {};
        
        if (t?.length === 1 && [Object, YPoint].includes(t[0]?.constructor) && !Object.getOwnPropertyNames(t[0]).includes('_ytp')) {
            
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
    /** @arg {YPointT} t @this {YPoint} */
    static #deceit(t) {
        
        try {
            
            FPoint.#verify.apply(this, [t]);
            
        } catch (e) {
            
            throw e;
            
        } finally {
            
            
            
        };
        
    };
    /** @arg {YPointT} t @this {YPoint} */
    static #verify(t) {
        
        const {
            
            
            
        } = t;
        
        FPoint.#handle.apply(this, [t]);
        
    };
    /** @arg {YPointT} t @this {YPoint} */
    static #handle(t) {
        
        
        
        FPoint.#create.apply(this, [t]);
        
    };
    /** @arg {YPointT} t @this {YPoint} */
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
 * ### YPoint
 * - Тип `SDIMFY`
 * - Версия `0.0.0`
 * - Цепочка `BDVHC`
 * ***
 * 
 * Класс YPoint.
 * 
 * ***
 * @class
 * 
*/
export class YPoint extends FPoint {
    
    
    
};