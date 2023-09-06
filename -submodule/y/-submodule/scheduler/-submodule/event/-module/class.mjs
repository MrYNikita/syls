//#region YI

import { Y } from '../../../../../-module/class.mjs';
import { YArg } from '../../../../arg/-module/class.mjs';
import { configEvent as config } from './config.mjs';

//#endregion
//#region YT

/** ### YEventT
 * - Тип `T`
 * 
 * Основной параметр модуля `YEvent`.
 * 
 * @typedef {YEventTE&YEventTU&Y} YEventT
 * 
*/
/** ### YEventTE
 * - Тип `TE`
 * 
 * Параметр наследования `YEvent`.
 * 
 * @typedef {Omit<DEvent, keyof SEvent>} YEventTE
 * 
*/
/** ### YEventTU
 * - Тип `TU`
 * 
 * Уникальные параметры `YEvent`.
 * 
 * @typedef YEventTU
 * @prop {any} _
 * 
*/

//#endregion

class SEvent extends Y {
    
    /**
     * ### stock
     * 
     * ***
     * 
     * 
     * 
     * ***
     * @type {YEvent[]}
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
     * @arg {...YEvent} args `Аргументы`
     * @returns {YEvent[]}
    */
    static create(...args) {
        
        return Object.getPrototypeOf(SEvent).create.apply(this, args);
        
    };
    
};
class DEvent extends SEvent {
    
    /**
     * ### func
     * 
     * Функция.
     * 
     * *** 
     * @type {()=>void}
     * @field
     * @public
    */
    func;
    /**
     * ### tact
     * 
     * Тактовая частота.
     * 
     * *** 
     * @type {number}
     * @field
     * @public
    */
    tact;
    /**
     * ### label
     * 
     * Метка.
     * 
     * *** 
     * @type {string}
     * @field
     * @public
    */
    label;
    /**
     * ### priority
     * 
     * Приоритет.
     * 
     * *** 
     * @type {number}
     * @field
     * @public
    */
    priority;
    /**
     * ### disposable
     * 
     * Однократность.
     * 
     * *** 
     * @type {boolean}
     * @field
     * @public
    */
    disposable;
    
};
class IEvent extends DEvent {
    
    /**
     * ### hoarder
     * 
     * Накопитель.
     * 
     * *** 
     * @type {number}
     * @field
     * @public
    */
    hoarder;
    
};
class MEvent extends IEvent {
    
    
    
};
class FEvent extends MEvent {
    
    /**
     * ### YEvent.constructor
     * 
     * 
     * 
     * ***
     * @arg {YEventT} args
    */
    constructor(args) {
        
        super(args = FEvent.#before(args = arguments));
        
        FEvent.#deceit.apply(this, [args]);
        
        return this.correlate();
        
    };
    
    /** @arg {DEvent} args */
    static #before(args) {
        
        /** @type {YArg<IEvent>} */
        const yarg = args instanceof YArg ? args : new YArg(args);
        
        yarg.set(

            ['func', 'func'],
            ['label', 'string'],
            ['tact', 'number'],
            ['priority', 'number'],
            ['disposable', 'bool'],

        );
        
        return yarg;
        
    };
    /** @arg {YArg<IEvent>} args @this {YEvent} */
    static #deceit(args) {
        
        try {
            
            FEvent.#verify.apply(this, arguments);
            
        } catch (e) {
            
            if (config?.strictMode) {
                
                throw e;
                
            };
            
            return new YEvent();
            
        } finally {
            
            
            
        };
        
    };
    /** @arg {YArg<IEvent>} args @this {YEvent} */
    static #verify(args) {
        
        const {
            
            
            
        } = args;
        
        FEvent.#handle.apply(this, arguments);
        
    };
    /** @arg {YArg<IEvent>} args @this {YEvent} */
    static #handle(args) {
        
        
        
        FEvent.#create.apply(this, arguments);
        
    };
    /** @arg {YArg<IEvent>} args @this {YEvent} */
    static #create(args) {
        
        const {
            
            
            
        } = args;
        
        this
        
            .adopt(args.getData());
        
    };
    
};

/**
 * ### YEvent
 * - Тип `SDIMFY`
 * - Версия `0.0.0`
 * - Цепочка `BDVHC`
 * ***
 * 
 * Класс `YEvent`.
 * 
 * ***
 * @class
 * 
*/
export class YEvent extends FEvent {
    
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
     * @returns {typeof YEvent}
    */
    getClass() {
        
        return YEvent;
        
    };

    /**
     * ### accumulate
     * 
     * ***
     * 
     * Метод перерасчёта накопления.
     * 
     * ***
     * @method
     * @public
    */
    accumulate() {

        if (++this.hoarder >= this.tact) {

            this.hoarder = 0;

            this.func();

        };

        return this;
        
    };
    
};

//#region YE

YEvent.getY()['modules'].push(YEvent);

//#endregion