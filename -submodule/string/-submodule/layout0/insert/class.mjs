//#region YI

import { YANSI } from '@syls/ansi';
import { Y, argClassify } from '../../../y/_module/type.js';


//#endregion
//#region YT

/** ### YInsertT
 * - Тип `T`
 * - Версия `0.0.0`
 * 
 * Основной параметр модуля `YInsert`.
 * 
 * @typedef {YInsertTE&YInsertTU} YInsertT
 * 
*/
/** ### YInsertTE
 * - Тип `TE`
 * - Версия `0.0.0`
 * 
 * Параметр наследования `YInsert`.
 * 
 * @typedef {{[p in Exclude<keyof DInsert,keyof SInsert>|Exclude<keyof SInsert,keyof DInsert>]:(DInsert[p]&SInsert[p])}} YInsertTE
 * 
*/
/** ### YInsertTU
 * - Тип `TU`
 * - Версия `0.0.0`
 * 
 * Уникальные параметры `YInsert`.
 * 
 * @typedef YInsertTU
 * @prop {any} _ 
 * 
*/

//#endregion

class SInsert extends Y {
    
    /**
     * ### config
     * 
     * Конфигуратор.
     * 
     * ***
     * @public
    */
    static config = config;
    
};
class DInsert extends SInsert {
    
    /**
     * ### index
     * 
     * Индекс.
     * 
     * *** 
     * @type {number} 
     * @public
    */
    index;
    
};
class IInsert extends DInsert {
    
    /**
     * ### ansi
     * 
     * Вставка ANSI.
     * 
     * *** 
     * @type {YANSI?} 
     * @protected
    */
    ansi = null;
    
};
class MInsert extends IInsert {
    
    
    
};
class FInsert extends MInsert {
    
    /**
     * ### YInsert.constructor
     * 
     * 
     * 
     * ***
     * @arg {YInsertT} t
    */
    constructor(t) {
        
        t = [...arguments];
        
        super(Object.assign(t = FInsert.#before(t), {}));
        
        FInsert.#deceit.apply(this, [t]);
        
        return this.correlate();
        
    };
    
    /** @arg {any[]} t */
    static #before(t) {
        
        /** @type {YInsertT} */
        let r = {};
        
        if (t?.length === 1 && [Object, YInsert].includes(t[0]?.constructor) && !Object.getOwnPropertyNames(t[0]).includes('_ytp')) {
            
            r = t[0];
            
        } else if (t?.length) {
            
            if (t[0]?._ytp) {
            
                t = [...t[0]._ytp];
            
            };
            
            switch (t.length) {
                
                default:
                case 3: 
                case 2:
                case 1: r.index = t[0];
                
            };
            
            if (!Object.values(r).length) {
                
                r = { _ytp: t, };
                
            };
            
        };
        
        return r;
        
    };
    /** @arg {YInsertT} t @this {YInsert} */
    static #deceit(t) {
        
        try {
            
            FInsert.#verify.apply(this, [t]);
            
        } catch (e) {
            
            throw e;
            
        } finally {
            
            
            
        };
        
    };
    /** @arg {YInsertT} t @this {YInsert} */
    static #verify(t) {
        
        const {
            
            
            
        } = t;
        
        FInsert.#handle.apply(this, [t]);
        
    };
    /** @arg {YInsertT} t @this {YInsert} */
    static #handle(t) {
        
        FInsert.#create.apply(this, [t]);
        
    };
    /** @arg {YInsertT} t @this {YInsert} */
    static #create(t) {
        
        const {
            
            
            
        } = t;
        
        this.adopt(t);
        
        if (config) {
            
            this.adoptDefault(config);
            
        };
        
    };
    
};

/**
 * ### YInsert
 * - Тип `SDIMFY`
 * - Версия `0.0.0`
 * - Цепочка `BDVHC`
 * ***
 * 
 * 
 * 
 * ***
 * 
*/
export class YInsert extends FInsert {
    
    
    
};