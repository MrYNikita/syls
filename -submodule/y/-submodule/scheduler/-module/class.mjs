//#region YI

import { YArg } from '@syls/y/arg';
import { configScheduler as config } from './config.mjs';
import { YEntity } from '../../entity/-module/class.mjs';
import { YEvent } from '../-submodule/event/-module/class.mjs';
import { YCond } from '../../cond/-module/class.mjs';

//#endregion
//#region YT

/** ### YSchedulerT
 * - Тип `T`
 * 
 * Основной параметр модуля `YScheduler`.
 * 
 * @typedef {YSchedulerTE&YSchedulerTU&Y} YSchedulerT
 * 
*/
/** ### YSchedulerTE
 * - Тип `TE`
 * 
 * Параметр наследования `YScheduler`.
 * 
 * @typedef {Omit<DScheduler, keyof SScheduler>} YSchedulerTE
 * 
*/
/** ### YSchedulerTU
 * - Тип `TU`
 * 
 * Уникальные параметры `YScheduler`.
 * 
 * @typedef YSchedulerTU
 * @prop {any} _
 * 
*/

//#endregion

class SScheduler extends YEntity {
    
    /**
     * ### stock
     * 
     * ***
     * 
     * 
     * 
     * ***
     * @type {YScheduler[]}
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
     * @arg {...YScheduler} args `Аргументы`
     * @returns {YScheduler[]}
    */
    static create(...args) {
        
        return Object.getPrototypeOf(SScheduler).create.apply(this, args);
        
    };
    
};
class DScheduler extends SScheduler {
    
    /**
     * ### frequency
     * 
     * Частота.
     * 
     * *** 
     * @type {number}
     * @field
     * @public
    */
    frequency;
    
};
class IScheduler extends DScheduler {
    
    /**
     * ### events
     * 
     * События.
     * 
     * *** 
     * @type {YEvent[]}
     * @field
     * @protected
    */
    events;
    /**
     * ### timeout
     * 
     * Таймаут.
     * 
     * *** 
     * @type {number}
     * @field
     * @protected
    */
    timeout;
    
};
class MScheduler extends IScheduler {
    
    /**
     * ### callback
     * 
     * ***
     * 
     * Метод таймера.
     * 
     * ***
     * @arg {this} y `Таймер`
     * @method
     * @protected
    */
    callback(y) {
        
        y.timeout = setTimeout(y.callback, y.frequency ?? config.value.frequency, y);

        for (const event of y.events) {

            event.accumulate();

            if (event.tact === event.hoarder && event.disposable) {

                y.events = y.events.filter(eventThis => eventThis !== event);

            };

        };

        return y;
        
    };
    
};
class FScheduler extends MScheduler {
    
    /**
     * ### YScheduler.constructor
     * 
     * 
     * 
     * ***
     * @arg {YSchedulerT} args
    */
    constructor(args) {
        
        super(args = FScheduler.#before(args = arguments));
        
        FScheduler.#deceit.apply(this, [args]);
        
        return this.correlate();
        
    };
    
    /** @arg {DScheduler} args */
    static #before(args) {
        
        /** @type {YArg<IScheduler>} */
        const yarg = args instanceof YArg ? args : new YArg(args);
        
        yarg.set(

            ['frequency', 'number']

        )
        
        return yarg;
        
    };
    /** @arg {YArg<IScheduler>} args @this {YScheduler} */
    static #deceit(args) {
        
        try {
            
            FScheduler.#verify.apply(this, arguments);
            
        } catch (e) {
            
            if (config?.strictMode) {
                
                throw e;
                
            };
            
            return new YScheduler();
            
        } finally {
            
            
            
        };
        
    };
    /** @arg {YArg<IScheduler>} args @this {YScheduler} */
    static #verify(args) {
        
        const {
            
            
            
        } = args;
        
        FScheduler.#handle.apply(this, arguments);
        
    };
    /** @arg {YArg<IScheduler>} args @this {YScheduler} */
    static #handle(args) {
        
        
        
        FScheduler.#create.apply(this, arguments);
        
    };
    /** @arg {YArg<IScheduler>} args @this {YScheduler} */
    static #create(args) {
        
        const {
            
            
            
        } = args;
        
        this
        
            .adopt(args.getData());
        
    };
    
};

/**
 * ### YScheduler
 * - Тип `SDIMFY`
 * - Версия `0.0.0`
 * - Цепочка `BDVHC`
 * ***
 * 
 * Класс `YScheduler`.
 * 
 * ***
 * @class
 * 
*/
export class YScheduler extends FScheduler {
    
    /**
     * ### on
     * 
     * ***
     * 
     * Метод активации.
     * 
     * ***
     * @arg {number} frequency `Частота`
     * @method
     * @public
    */
    on(frequency) {

        if (this.timeout) this.off();

        if (YCond.isNumberInt(frequency) && frequency > 0) {

            this.frequency = frequency;

        };

        this.callback(this);

        return this;
        
    };
    /**
     * ### off
     * 
     * ***
     * 
     * Метод отключения.
     * 
     * ***
     * @method
     * @public
    */
    off() {
        
        clearTimeout(this.timeout);

        this.timeout = null;

        return this;
        
    };

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
     * @returns {typeof YScheduler}
    */
    getClass() {
        
        return YScheduler;
        
    };
    /**
     * ### getEvent
     * 
     * ***
     * 
     * Метод получения события по метке.
     * 
     * ***
     * @arg {string} label `Метка`
     * @method
     * @public
    */
    getEvent(label) {
        
        for (const event of this.events) {

            if (event.label === label) return event;

        };

        return null;
        
    };
    
    /**
     * ### appendEvent
     * 
     * ***
     * 
     * Метод добавления события.
     * 
     * ***
     * @arg {string} label `Метка`
     * @arg {number} tact `Такт`
     * @arg {number} priority `Приоритет`
     * @arg {boolean} disposable `Однократность`
     * @arg {()=>void} func `Функция`
     * @method
     * @public
    */
    appendEvent(label, func, tact, priority, disposable) {
        
        const values = YCond.isString(label) ? [[label, func, tact, priority, disposable]] : arguments; 

        for (const value of values) {

            const event = this.getEvent(value[0]);

            if (event) {

                event.func = value[1];
                event.tact = value[2];
                event.priority = value[3];
                event.disposable = value[4];

                continue;

            };

            this.events.push(new YEvent(...value));

        };

        return this;
        
    };

};

//#region YE

YScheduler.getY()['modules'].push(YScheduler);

//#endregion

/**
 * @file scheduler/class.mjs
 * @author Yakhin Nikita Artemovich <mr.y.nikita@gmail.com>
 * @license Apache-2.0
 * @copyright SYLS (Software Y Lib Solutions) 2023
*/