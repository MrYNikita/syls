//#region YI

import { YArg } from '../../arg/-module/export.mjs';
import { YCond } from '../../cond/-module/class.mjs';
import { YEvent } from '../-submodule/event/-module/class.mjs';
import { YEntity } from '../../entity/-module/class.mjs';
import { configScheduler as config } from './config.mjs';

//#endregion
//#region YT

/** ### schedulerTC
 * @typedef schedulerTC
 * @prop {}
*/

/** @typedef {import('./module.mjs').schedulerT&schedulerTC} schedulerT */

//#endregion

/**
 * ### YScheduler
 * 
 * 
 * 
 * ***
 * @class
 * @since `1.0.0`
 * @version `1.0.0`
 * 
*/
export class YScheduler extends YEntity {

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

        return super.create(...args);

    };
    /**
     * @arg {Y1} value `Значение`
     * @static
     * @method
     * @public
     * @returns {(Y1&YScheduler)?}
     * @template {YScheduler} Y1
     * @override
    */
    static setClass(value) {

        return super.setClass(value);

    };

    //#endregion
    //#region field

    /**
     * ### events
     * 
     * События.
     * 
     * *** 
     * @since `1.0.0`
     * @type {YEvent[]}
     * @field
     * @protected
    */
    events;
    /**
     * ### eventsDisabled
     * 
     * Отключенные события.
     * 
     * *** 
     * @since `1.0.0`
     * @type {YEvent[]}
     * @field
     * @protected
    */
    eventsDisabled;
    /**
     * ### timeout
     * 
     * Индекс `timeout`.
     * 
     * *** 
     * @since `1.0.0`
     * @type {number}
     * @field
     * @protected
    */
    timeout;
    /**
     * ### frequency
     * 
     * Частота.
     * 
     * *** 
     * @since `1.0.0`
     * @type {number}
     * @field
     * @public
    */
    frequency;

    //#endregion
    //#region method

    /**
     * @method
     * @public
     * @override
    */
    getClass() {

        return YScheduler;

    };
    /**
     * ### getEventByLabel
     * 
     * Метод получения события по метке.
     * 
     * ***
     * @arg {string} label `Метка`
     * 
     * 
     * ***
     * @since `1.0.0`
     * @version `1.0.0`
     * @method
     * @public
    */
    getEventByLabel(label) {

        for (const event of this.events) {

            if (event.label === label) return event;

        };

        return null;

    };
    /**
     * ### on
     * 
     * Метод запуска.
     * 
     * ***
     * @arg {this['frequency']} frequency `Частота` 
     * 
     * 
     * ***
     * @since `1.0.0`
     * @version `1.0.0`
     * @method
     * @public
    */
    on(frequency) {

        if (this.timeout) this.off();

        if (YCond.isNumberInt(frequency) && frequency > 0) {

            this.frequency = frequency;

        };

        this.callback();

        return this;

    };
    /**
     * ### off
     * 
     * Метод отключения.
     * 
     * ***
     * 
     * 
     * 
     * ***
     * @since `1.0.0`
     * @version `1.0.0`
     * @method
     * @public
    */
    off() {

        clearTimeout(this.timeout);

        this.timeout = null;

        return this;

    };
    /**
     * ### callback
     * 
     * 
     * 
     * ***
     * 
     * 
     * 
     * ***
     * @since `1.0.0`
     * @version `1.0.0`
     * @method
     * @protected
    */
    callback() {

        this.timeout = setTimeout((self) => self.callback(), this.frequency, this);

        for (const event of this.events) {

            if (event.accumulate() && event.disposable) {

                this.events = this.events.filter(eventThis => eventThis !== event);

            };

        };

        return this;

    };
    /**
     * ### appendEvents
     * 
     * Метод добавления событий.
     * 
     * ***
     * @arg {...[label:string, func:()=>void, tact:number, priority:number, disposable:boolean]} events `События`
     * ***
     * @since `1.0.0`
     * @version `1.0.0`
     * @method
     * @public
    */
    appendEvents(...events) {

        for (let event of events) {

            const find = this.getEventByLabel(event[0]);

            if (find) {

                find.func = event[1];
                find.tact = event[2];
                find.priority = event[3];
                find.disposable = event[4];

                continue;

            };

            this.events.push(event = new YEvent(...event));

        };

        return this;

    };
    /**
     * ### triggerEventByLabel
     * 
     * Метод вызова событий по метке.
     * 
     * ***
     * @arg {string[]} labels `Метки`
     * 
     * 
     * ***
     * @since `1.0.0`
     * @version `1.0.0`
     * @method
     * @public
    */
    triggerEventByLabel(...labels) {

        for (const event of this.events) {

            const index = labels.indexOf(event.label);

            if (index === -1) continue;

            event.exec();

            labels.splice(index, 1);

        };

        return this;

    };
    /**
     * ### onEventByLabel
     * 
     * Метод активации события.
     * 
     * ***
     * @arg {...string} labels `Метки`
     * 
     * 
     * ***
     * @since `1.0.0`
     * @version `1.0.0`
     * @method
     * @public
    */
    onEventByLabel(...labels) {

        for (const label of labels) {

            const event = this.eventsDisabled.findIndex(event => event.label === label);

            if (event === -1) continue;

            this.events.push(...this.eventsDisabled.splice(event, 1));

        };

        return this;
        
    };
    /**
     * ### offEventByLabel
     * 
     * Метод отключения события.
     * 
     * ***
     * @arg {...string} labels `Метки`
     * 
     * 
     * ***
     * @since `1.0.0`
     * @version `1.0.0`
     * @method
     * @public
    */
    offEventByLabel(...labels) {
        
        for (const label of labels) {

            const event = this.events.findIndex(event => event.label === label);

            if (event === -1) continue;

            this.eventsDisabled.push(...this.events.splice(event, 1));

        };

        return this;
        
    };

    //#endregion

    /**
     * ### YSchedulerConstructor
     * - Версия `1.0.0`
     * 
     * 
     * ***
     * 
     * 
     * 
     * ***
     * 
     * @arg {schedulerTC&YScheduler} args `Аргументы`
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

            /** @type {YArg<YScheduler&schedulerTC>} */
            const yarg = args[0] instanceof YArg ? args[0] : new YArg(...args);

            yarg.set(
                
                ['frequency', 'number'],

            );

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
 * @file scheduler/class.mjs
 * @author Yakhin Nikita Artemovich <mr.y.nikita@gmail.com>
 * @license Apache-2.0
 * @copyright SYLS (Software Y Lib Solutions) 2023
*/