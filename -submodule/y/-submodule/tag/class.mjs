//#region YI

import { Y, argClassify } from '../-module/type.js';


//#endregion
//#region YT

/** ### YTagT
 * - Тип `T`
 * 
 * Основной параметр модуля `YTag`.
 * 
 * @typedef {YTagTE&YTagTU} YTagT
 * 
*/
/** ### YTagTE
 * - Тип `TE`
 * 
 * Параметр наследования `YTag`.
 * 
 * @typedef {{[p in Exclude<keyof DTag,keyof STag>|Exclude<keyof STag,keyof DTag>]:(DTag[p]&STag[p])}} YTagTE
 * 
*/
/** ### YTagTU
 * - Тип `TU`
 * 
 * Уникальные параметры `YTag`.
 * 
 * @typedef YTagTU
 * @prop {any} _
 * 
*/

//#endregion

class STag extends Y {
    
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
class DTag extends STag {
    
    /**
     * ### value
     * 
     * Значение.
     * 
     * *** 
     * @type {string} 
     * @public
    */
    value;
    
};
class ITag extends DTag {
    
    
    
};
class MTag extends ITag {
    
    
    
};
class FTag extends MTag {
    
    /**
     * ### YTag.constructor
     * 
     * 
     * 
     * ***
     * @arg {YTagT} t
    */
    constructor(t) {
        
        t = [...arguments];
        
        super(Object.assign(t = FTag.#before(t), {}));
        
        FTag.#deceit.apply(this, [t]);
        
        return this.correlate();
        
    };
    
    /** @arg {any[]} t */
    static #before(t) {
        
        /** @type {YTagT} */
        let r = {};
        
        if (t?.length === 1 && [Object, YTag].includes(t[0]?.constructor) && !Object.getOwnPropertyNames(t[0]).includes('_ytp')) {
            
            r = t[0];
            
        } else if (t?.length) {
            
            if (t[0]?._ytp) {
            
                t = [...t[0]._ytp];
            
            };
            
            switch (t.length) {
                
                default:
                case 3: 
                case 2: 
                case 1: 
                
            };
            
            if (!Object.values(r).length) {
                
                r = { _ytp: t, };
                
            };
            
        };
        
        return r;
        
    };
    /** @arg {YTagT} t @this {YTag} */
    static #deceit(t) {
        
        try {
            
            FTag.#verify.apply(this, [t]);
            
        } catch (e) {
            
            throw e;
            
        } finally {
            
            
            
        };
        
    };
    /** @arg {YTagT} t @this {YTag} */
    static #verify(t) {
        
        const {
            
            
            
        } = t;
        
        FTag.#handle.apply(this, [t]);
        
    };
    /** @arg {YTagT} t @this {YTag} */
    static #handle(t) {
        
        
        
        FTag.#create.apply(this, [t]);
        
    };
    /** @arg {YTagT} t @this {YTag} */
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
 * ### YTag
 * - Тип `SDIMFY`
 * - Цепочка `BDVHC`
 * ***
 * 
 * 
 * 
 * ***
 * 
*/
export class YTag extends FTag {
    
    
    
};