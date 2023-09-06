//#region YI

import { Y } from '@syls/y';
import { YArg } from '@syls/y/arg';
import { YANSI } from '../../../../ansi/-module/class.mjs';
import { configElement as config } from './config.mjs';

//#endregion
//#region YT

/** ### YElementT
 * - Тип `T`
 * 
 * Основной параметр модуля `YElement`.
 * 
 * @typedef {YElementTE&YElementTU&Y} YElementT
 * 
*/
/** ### YElementTE
 * - Тип `TE`
 * 
 * Параметр наследования `YElement`.
 * 
 * @typedef {Omit<DElement, keyof SElement>} YElementTE
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
     * ### stock
     * 
     * ***
     * 
     * 
     * 
     * ***
     * @type {YElement[]}
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
     * @arg {...YElement} args `Аргументы`
     * @returns {YElement[]}
    */
    static create(...args) {
        
        return Object.getPrototypeOf(SElement).create.apply(this, args);
        
    };
    
};
class DElement extends SElement {
    
    /**
     * ### ansi
     * 
     * ANSI вставка.
     * 
     * *** 
     * @type {YANSI}
     * @field
     * @public
    */
    ansi;
    /**
     * ### flow
     * 
     * Поточность.
     * 
     * *** 
     * @type {boolean}
     * @field
     * @public
    */
    flow;
    /**
     * ### value
     * 
     * Значение.
     * 
     * *** 
     * @type {string}
     * @field
     * @public
    */
    value;

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
     * @arg {YElementT} args
    */
    constructor(args) {
        
        super(args = FElement.#before(args = arguments));
        
        FElement.#deceit.apply(this, [args]);
        
        return this.correlate();
        
    };
    
    /** @arg {DElement} args */
    static #before(args) {
        
        /** @type {YArg<IElement>} */
        const yarg = args instanceof YArg ? args : new YArg(args);
        
        yarg
        
            .set(

                ['ansi', 'ject'],
                ['flow', 'bool'],
                ['value', 'string'],

            )
        
        return yarg;
        
    };
    /** @arg {YArg<IElement>} args @this {YElement} */
    static #deceit(args) {
        
        try {
            
            FElement.#verify.apply(this, arguments);
            
        } catch (e) {
            
            if (config?.strictMode) {
                
                throw e;
                
            };
            
            return new YElement();
            
        } finally {
            
            
            
        };
        
    };
    /** @arg {YArg<IElement>} args @this {YElement} */
    static #verify(args) {
        
        const {
            
            
            
        } = args;
        
        FElement.#handle.apply(this, arguments);
        
    };
    /** @arg {YArg<IElement>} args @this {YElement} */
    static #handle(args) {
        
        
        
        FElement.#create.apply(this, arguments);
        
    };
    /** @arg {YArg<IElement>} args @this {YElement} */
    static #create(args) {
        
        const {
            
            
            
        } = args;
        
        this
        
            .adopt(args.getData());
        
    };
    
};

/**
 * ### YElement
 * - Тип `SDIMFY`
 * - Версия `0.0.0`
 * - Цепочка `BDVHC`
 * ***
 * 
 * Класс `YElement`.
 * 
 * ***
 * @class
 * 
*/
export class YElement extends FElement {
    
    /**
     * ### getClass
     * 
     * 
     * 
     * ***
     * 
     * 
     * 
     * ***
     * @method
     * @public
     * @returns {typeof YElement}
    */
    getClass() {
        
        return YElement;
        
    };
    
};