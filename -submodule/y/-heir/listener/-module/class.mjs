//#region YI

import { YArg } from '@syls/y/arg';
import { YEntity } from '@syls/y/entity';
import { configListener as config } from './config.mjs';

//#endregion
//#region YT

/** ### YListenerT
 * - Тип `T`
 * 
 * Основной параметр модуля `YListener`.
 * 
 * @typedef {YListenerTE&YListenerTU&Y} YListenerT
 * 
*/
/** ### YListenerTE
 * - Тип `TE`
 * 
 * Параметр наследования `YListener`.
 * 
 * @typedef {Omit<DListener, keyof SListener>} YListenerTE
 * 
*/
/** ### YListenerTU
 * - Тип `TU`
 * 
 * Уникальные параметры `YListener`.
 * 
 * @typedef YListenerTU
 * @prop {any} _
 * 
*/

//#endregion

class SListener extends YEntity {
    
    /**
     * ### stock
     * 
     * ***
     * 
     * 
     * 
     * ***
     * @type {YListener[]}
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
     * @arg {...YListener} args `Аргументы`
     * @returns {YListener[]}
    */
    static create(...args) {
        
        return Object.getPrototypeOf(SListener).create.apply(this, args);
        
    };
    
    /**
     * @arg {Y1} value `Значение`
     * @static
     * @method
     * @public
     * @returns {(Y1&Y1)?}
     * @template {YListener} Y1
    */
    static becomePrototype(value) {
        
        if (!(value instanceof Object)) return null;
        
        Object.setPrototypeOf(value, Y.prototype);
        
        return value;
        
    };
    
    
    
    
};
class DListener extends SListener {
    
    
    
};
class IListener extends DListener {
    
    
    
};
class MListener extends IListener {
    
    
    
};
class FListener extends MListener {
    
    /**
     * ### YListener.constructor
     * 
     * 
     * 
     * ***
     * @arg {YListenerT} args
    */
    constructor(args) {
        
        super(args = FListener.#before(args = arguments));
        
        FListener.#deceit.apply(this, [args]);
        
        return this.correlate();
        
    };
    
    /** @arg {DListener} args */
    static #before(args) {
        
        /** @type {YArg<IListener>} */
        const yarg = args instanceof YArg ? args : new YArg(args);
        
        
        
        return yarg;
        
    };
    /** @arg {YArg<IListener>} args @this {YListener} */
    static #deceit(args) {
        
        try {
            
            FListener.#verify.apply(this, arguments);
            
        } catch (e) {
            
            if (config?.strictMode) {
                
                throw e;
                
            };
            
            return new YListener();
            
        } finally {
            
            
            
        };
        
    };
    /** @arg {YArg<IListener>} args @this {YListener} */
    static #verify(args) {
        
        const {
            
            
            
        } = args;
        
        FListener.#handle.apply(this, arguments);
        
    };
    /** @arg {YArg<IListener>} args @this {YListener} */
    static #handle(args) {
        
        
        
        FListener.#create.apply(this, arguments);
        
    };
    /** @arg {YArg<IListener>} args @this {YListener} */
    static #create(args) {
        
        const {
            
            
            
        } = args;
        
        this
        
            .adopt(args.getData());
        
    };
    
};

/**
 * ### YListener
 * - Тип `SDIMFY`
 * - Версия `0.0.0`
 * - Цепочка `BDVHC`
 * ***
 * 
 * Класс `YListener`.
 * 
 * ***
 * @class
 * 
*/
export class YListener extends FListener {
    
    /**
     * @method
     * @public
     * @returns {typeof YListener}
    */
    getClass() {
        
        return YListener;
        
    };
    
};

//#region YE

YListener.appendModule(YListener);

//#endregion