//#region YI

import { YFile } from '@syls/file';

/** @type {import('./config.mjs')['default']?} */
let config = null;

await import('./config.mjs')

    .then(i => config = i.default)
    .catch(e => e);

/** @type {import('./error.mjs')['default']?} */
let error = null;

await import('./error.mjs')

    .then(i => error = i.default)
    .catch(e => e);

//#endregion
//#region YT

/** ### YFileJST
 * - Тип `T`
 * - Версия `0.0.0`
 * 
 * Основной параметр модуля `YFileJS`.
 * 
 * @typedef {YFileJSTE&YFileJSTU} YFileJST
 * 
*/
/** ### YFileJSTE
 * - Тип `TE`
 * - Версия `0.0.0`
 * 
 * Параметр наследования `YFileJS`.
 * 
 * @typedef {{[p in Exclude<keyof DFileJS,keyof SFileJS>|Exclude<keyof SFileJS,keyof DFileJS>]:(DFileJS[p]&SFileJS[p])}} YFileJSTE
 * 
*/
/** ### YFileJSTU
 * - Тип `TU`
 * - Версия `0.0.0`
 * 
 * Уникальные параметры `YFileJS`.
 * 
 * @typedef YFileJSTU
 * @prop {any} _
 * 
*/

//#endregion

class SFileJS extends YFile {
    
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
class DFileJS extends SFileJS {
    
    
    
};
class IFileJS extends DFileJS {
    
    
    
};
class MFileJS extends IFileJS {
    
    
    
};
class FFileJS extends MFileJS {
    
    /**
     * ### YFileJS.constructor
     * 
     * 
     * 
     * ***
     * @arg {YFileJST} t
    */
    constructor(t) {
        
        t = [...arguments];
        
        super(Object.assign(t = FFileJS.#before(t), {}));
        
        FFileJS.#deceit.apply(this, [t]);
        
        return this.correlate();
        
    };
    
    /** @arg {any[]} t */
    static #before(t) {
        
        /** @type {YFileJST} */
        let r = {};
        
        if (t?.length === 1 && [Object, YFileJS].includes(t[0]?.constructor) && !Object.getOwnPropertyNames(t[0]).includes('_ytp')) {
            
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
    /** @arg {YFileJST} t @this {YFileJS} */
    static #deceit(t) {
        
        try {
            
            FFileJS.#verify.apply(this, [t]);
            
        } catch (e) {
            
            throw e;
            
        } finally {
            
            
            
        };
        
    };
    /** @arg {YFileJST} t @this {YFileJS} */
    static #verify(t) {
        
        const {
            
            
            
        } = t;
        
        FFileJS.#handle.apply(this, [t]);
        
    };
    /** @arg {YFileJST} t @this {YFileJS} */
    static #handle(t) {
        
        
        
        FFileJS.#create.apply(this, [t]);
        
    };
    /** @arg {YFileJST} t @this {YFileJS} */
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
 * ### YFileJS
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
export class YFileJS extends FFileJS {
    
    
    
};