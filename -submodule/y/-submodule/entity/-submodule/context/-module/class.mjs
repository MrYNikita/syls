//#region YI

import { YLog } from '@syls/log';
import { YDate } from '@syls/date';
import { YRept } from '@syls/rept';
import { Y, yClassifyProp } from '@syls/y';


//#endregion
//#region YT

/** ### YContextT
 * - Тип `T`
 * 
 * Основной параметр модуля `YContext`.
 * 
 * @typedef {YContextTE&YContextTU&Y} YContextT
 * 
*/
/** ### YContextTE
 * - Тип `TE`
 * 
 * Параметр наследования `YContext`.
 * 
 * @typedef {Omit<DContext, keyof SContext>} YContextTE
 * 
*/
/** ### YContextTU
 * - Тип `TU`
 * 
 * Уникальные параметры `YContext`.
 * 
 * @typedef YContextTU
 * @prop {any} _
 * 
*/

//#endregion

class SContext extends Y {
    
    /**
     * ### config
     * 
     * Конфигуратор.
     * 
     * ***
     * @public
    */
    static config = config;
    
    /**
     * @arg {...YContext} args `Аргументы`
     * @returns {YContext[]}
    */
    static create(...args) {
        
        return Object.getPrototypeOf(SContext).create.apply(this, [...args]);
        
    };
    
};
class DContext extends SContext {
    
    /**
     * ### id
     * 
     * Идентификатор.
     * 
     * *** 
     * @type {number} 
     * @public
    */
    id;
    /**
     * ### handlers
     * 
     * Обработчики.
     * 
     * *** 
     * @type {YHandler[]} 
     * @public
    */
    handlers;
    
};
class IContext extends DContext {
    
    /**
     * ### log
     * 
     * Журнал.
     * 
     * *** 
     * @type {} 
     * @protected
    */
    log = new YLog();
    /**
     * ### date
     * 
     * Дата.
     * 
     * *** 
     * @type {Date} 
     * @protected
    */
    date = new YDate();
    /**
     * ### rept
     * 
     * Отчёт.
     * 
     * *** 
     * @type {YRept?} 
     * @protected
    */
    rept = new YRept();
    
};
class MContext extends IContext {
    
    
    
};
class FContext extends MContext {
    
    /**
     * ### YContext.constructor
     * 
     * 
     * 
     * ***
     * @arg {YContextT} t
    */
    constructor(t) {
        
        t = [...arguments];
        
        super(Object.assign(t = FContext.#before(t), {}));
        
        FContext.#deceit.apply(this, [t]);
        
        return this.correlate();
        
    };
    
    /** @arg {any[]} t */
    static #before(t) {
        
        /** @type {YContextT} */
        let r = {};
        
        if (t?.length === 1 && [Object, YContext].includes(t[0]?.constructor) && !Object.getOwnPropertyNames(t[0]).includes('_ytp')) {
            
            r = t[0];
            
        } else if (t?.length) {
            
            if (t[0]?._ytp) {
            
                t = [...t[0]._ytp];
            
            };
            
            switch (t.length) {
                
                default: {
                    
                    const arg = yClassifyProp(t);
                    
                    
                    
                };
                
            };
            
            if (!Object.values(r).length) {
                
                r = { _ytp: t, };
                
            };
            
        };
        
        return r;
        
    };
    /** @arg {YContextT} t @this {YContext} */
    static #deceit(t) {
        
        try {
            
            FContext.#verify.apply(this, [t]);
            
        } catch (e) {
            
            throw e;
            
        } finally {
            
            
            
        };
        
    };
    /** @arg {YContextT} t @this {YContext} */
    static #verify(t) {
        
        const {
            
            
            
        } = t;
        
        FContext.#handle.apply(this, [t]);
        
    };
    /** @arg {YContextT} t @this {YContext} */
    static #handle(t) {
        
        
        
        FContext.#create.apply(this, [t]);
        
    };
    /** @arg {YContextT} t @this {YContext} */
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
 * ### YContext
 * - Тип `SDIMFY`
 * - Цепочка `BDVHC`
 * ***
 * 
 * 
 * 
 * ***
 * 
*/
export class YContext extends FContext {
    
    
    
};