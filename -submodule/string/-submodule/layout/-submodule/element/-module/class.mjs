//#region YI

import { Y } from '@syls/y';
import { YANSI } from '../../../../ansi/-module/export.mjs';

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

/** ### YElementT
 * - Тип `T`
 * 
 * Основной параметр модуля `YElement`.
 * 
 * @typedef {YElementTE&YElementTU} YElementT
 * 
*/
/** ### YElementTE
 * - Тип `TE`
 * 
 * Параметр наследования `YElement`.
 * 
 * @typedef {{[p in Exclude<keyof DElement,keyof SElement>|Exclude<keyof SElement,keyof DElement>]:(DElement[p]&SElement[p])}} YElementTE
 * 
*/
/** ### YElementTU
 * - Тип `TU`
 * 
 * Уникальные параметры `YElement`.
 * 
 * @typedef YElementTU
 * @prop {any} _
 * 
*/

//#endregion

class SElement extends Y {
    
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
class DElement extends SElement {
    
    /**
     * ### ansi
     * 
     * Ansi.
     * 
     * *** 
     * @type {YANSI?} 
     * @public
    */
    ansi = null;
    /**
     * ### flow
     * 
     * Поточность.
     * 
     * *** 
     * @type {boolean} 
     * @public
    */
    flow = false;
    /**
     * ### value
     * 
     * Значение.
     * 
     * *** 
     * @type {string} 
     * @public
    */
    value = '';
    
};
class IElement extends DElement {
    
    
    
};
class MElement extends IElement {
    
    
    
};
class FElement extends MElement {
    
    /**
     * ### YElement.constructor
     * 
     * 
     * 
     * ***
     * @arg {YElementT} t
    */
    constructor(t) {
        
        t = [...arguments];
        
        super(Object.assign(t = FElement.#before(t), {}));
        
        FElement.#deceit.apply(this, [t]);
        
        return this.correlate();
        
    };
    
    /** @arg {any[]} t */
    static #before(t) {
        
        /** @type {YElementT} */
        let r = {};
        
        if (t?.length === 1 && [Object, YElement].includes(t[0]?.constructor) && !Object.getOwnPropertyNames(t[0]).includes('_ytp')) {
            
            r = t[0];
            
        } else if (t?.length) {
            
            if (t[0]?._ytp) {
            
                t = [...t[0]._ytp];
            
            };
            
            switch (t.length) {
                
                default:
                case 3: 
                case 2: r.ansi = t[1];
                case 1: r.value = t[0];
                
            };
            
            if (!Object.values(r).length) {
                
                r = { _ytp: t, };
                
            };
            
        };
        
        return r;
        
    };
    /** @arg {YElementT} t @this {YElement} */
    static #deceit(t) {
        
        try {
            
            FElement.#verify.apply(this, [t]);
            
        } catch (e) {
            
            throw e;
            
        } finally {
            
            
            
        };
        
    };
    /** @arg {YElementT} t @this {YElement} */
    static #verify(t) {
        
        const {
            
            
            
        } = t;
        
        FElement.#handle.apply(this, [t]);
        
    };
    /** @arg {YElementT} t @this {YElement} */
    static #handle(t) {
        
        if (!(t.ansi instanceof YANSI)) {

            t.ansi = new YANSI(t.ansi);

        };
        
        FElement.#create.apply(this, [t]);
        
    };
    /** @arg {YElementT} t @this {YElement} */
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
 * ### YElement
 * - Тип `SDIMFY`
 * - Цепочка `BDVHC`
 * ***
 * 
 * 
 * 
 * ***
 * 
*/
export class YElement extends FElement {
    
    
    
};