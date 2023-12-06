//#region YI

import { YArg } from "@syls/y/arg";
import { configEvent as config } from "./config.mjs";

//#endregion
//#region YT

/** ### eventTC
 * @typedef eventTC
 * @prop {}
*/

/** @typedef {import('./module.mjs').eventT&eventTC} eventT */

//#endregion

/**
 * ### YEvent
 * 
 * 
 * 
 * ***
 * @class
 * @since `1.0.0`
 * @version `1.0.0`
 * 
*/
export class YEvent extends Y {
    
    //#region static
    
    static {
        
        this
            
            .appendModule(this)
        
    };
    
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
        
        return super.create(...args);
        
    };
    /**
     * @arg {Y1} value `Значение`
     * @static
     * @method
     * @public
     * @returns {(Y1&YEvent)?}
     * @template {YEvent} Y1
     * @override
    */
    static setClass(value) {
        
        return super.setClass(value);
        
    };
    
    //#endregion
    //#region field
    
    /**
     * ### func
     * 
     * Функция.
     * 
     * *** 
     * @since `1.0.0`
     * @type {(scheduler:YScheduler)=>void}
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
     * @since `1.0.0`
     * @type {number}
     * @field
     * @public
    */
    tact;
    /**
     * ### hoarder
     * 
     * Накопитель.
     * 
     * *** 
     * @since `1.0.0`
     * @type {number}
     * @field
     * @public
    */
    hoarder;
    
    //#endregion
    //#region method
    
    /**
     * @method
     * @public
     * @override
    */
    getClass() {
        
        return YEvent;
        
    };
    
    //#endregion
    
    /**
     * ### YEventConstructor
     * - Версия `1.0.0`
     * 
     * 
     * ***
     * 
     * 
     * 
     * ***
     * 
     * @arg {...eventTC&YEvent} args `Аргументы`
     * 
     * Представлены единым объектом носителем аргументов.
     * 
     * ***
     * @since `1.0.0`
     * @public
     * @version `1.0.0`
     * @constructor
    */
    constructor(...args) {
        
        try {
            
            //#region before
            
            /** @type {YArg<YEvent&eventTC>} */
            const yarg = args[0] instanceof YArg ? args[0] : new YArg(...args);
            
            
            
            super(yarg);
            
            
            
            //#endregion
            //#region verify
            
            
            
            //#endregion
            //#region handle
            
            
            
            //#endregion
            //#region comply
            
            
            
            //#endregion
            
            return this
            
                .adopt(yarg.used)
            
            
        } catch (err) {
            
            if (config.params.strictMode) {
                
                throw err;
                
            };
            
        } finally {
            
            
            
        };
        
    };
    
};

/**
 * @file event/class.mjs
 * @author Yakhin Nikita Artemovich <mr.y.nikita@gmail.com>
 * @license Apache-2.0
 * @copyright SYLS (Software Y Lib Solutions) 2023
*/

//#region YI

import { YScheduler } from '../../../-module/class.mjs';
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
    constructor(...args) {
        
        super(args = FEvent.#before(args = arguments));
        
        FEvent.#deceit.apply(this, [args]);
        
        return this.correlate();
        
    };
    
    /** @arg {DEvent} args */
    static #before(args) {
        
        /** @type {YArg<IEvent>} */
        const yarg = args[0] instanceof YArg ? args[0] : new YArg(...args);
        
        yarg.setFirst(

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
     * ### incr
     * 
     * ***
     * 
     * Метод наращивания накопителя.
     * 
     * ***
     * @method
     * @public
    */
    incr() {
        
        this.hoarder++;

        return this;
        
    };
    /**
     * ### exec
     * 
     * ***
     * 
     * Метод выполнения события.
     * 
     * ***
     * @arg {YScheduler} scheduler `Планировщик`
     * @method
     * @public
    */
    exec(scheduler) {
        
        this.func(scheduler);

        return this;
        
    };
    /**
     * ### reset
     * 
     * ***
     * 
     * Метод сброса накопителя.
     * 
     * ***
     * @method
     * @public
    */
    reset() {
        
        this.hoarder = 0;

        return this;
        
    };

    /**
     * ### accumulate
     * 
     * ***
     * 
     * Метод перерасчёта накопления.
     * 
     * ***
     * @arg {YScheduler} scheduler `Планировщик`
     * @method
     * @public
    */
    accumulate(scheduler) {

        this.incr();

        if (this.isAccumulated()) {

            this
            
                .exec(scheduler)
                .reset();

            return true;

        };

        return false;
        
    };

    /**
     * ### isAccumulated
     * 
     * ***
     * 
     * Метод проверки накопления.
     * 
     * ***
     * @method
     * @public
    */
    isAccumulated() {
        
        return this.hoarder >= this.tact;
        
    };
    
};

//#region YE

YEvent.getY()['modules'].push(YEvent);

//#endregion