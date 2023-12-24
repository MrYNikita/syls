//#region YI

import { Y } from '../../../../../-module/class.mjs';
import { YArg } from '../../../../arg/-module/class.mjs';
import { YScheduler } from '../../../-module/class.mjs';
import { condIsNumberSig } from '../../../../cond/-module/module.mjs';
import { configE as config } from './config.mjs';

//#endregion
//#region YT

/** ### eTC
 * @typedef eTC
 * @prop {}
*/

/** @typedef {import('./module.mjs').eT&eTC} eT */

//#endregion

/**
 * ### YE
 * 
 * Абстрактный класс событий.
 * 
 * ***
 * @class
 * @since `1.0.0`
 * @version `1.0.0`
 * @abstract
*/
export class YE extends Y {
    
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
     * @type {YE[]}
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
     * @arg {...YE} args `Аргументы`
     * @returns {YE[]}
    */
    static create(...args) {
        
        return super.create(...args);
        
    };
    /**
     * @arg {Y1} value `Значение`
     * @static
     * @method
     * @public
     * @returns {(Y1&YE)?}
     * @template {YE} Y1
     * @override
    */
    static setClass(value) {
        
        return super.setClass(value);
        
    };
    
    //#endregion
    //#region field
    
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
    /**
     * ### label
     * 
     * Метка.
     * 
     * *** 
     * @since `1.0.0`
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
     * @since `1.0.0`
     * @type {number}
     * @field
     * @public
    */
    priority;
    /**
     * ### disposable
     * 
     * Одноразовость.
     * 
     * *** 
     * @since `1.0.0`
     * @type {boolean}
     * @field
     * @public
    */
    disposable;
    
    //#endregion
    //#region method
    
    /**
     * @method
     * @public
     * @override
    */
    getClass() {
        
        return YE;
        
    };
    /**
     * ### reset
     * 
     * Метод сброса события.
     * 
     * ***
     * @since `1.0.0`
     * @version `1.0.0`
     * @method
     * @public
    */
    reset() {
        
        this.hoarder = 0;

        return this;
        
    };
    /**
     * ### happen
     * 
     * Метод выполнения события.
     * 
     * ***
     * @since `1.0.0`
     * @version `1.0.0`
     * @method
     * @public
    */
    happen() {
        
        return this;
        
    };
    /**
     * ### increase
     * 
     * Метод наращивания накопителя.
     * 
     * ***
     * @arg {number} value `Значение`
     * ***
     * @since `1.0.0`
     * @version `1.0.0`
     * @method
     * @public
    */
    increase(value = 1) {
        
        if (!condIsNumberSig(value) || value <= 0) return this;

        this.hoarder += value;

        return this;
        
    };
    /**
     * ### decrease
     * 
     * Метод уменьшения значения накопителя.
     * 
     * ***
     * @arg {number} value `Значение`
     * ***
     * @since `1.0.0`
     * @version `1.0.0`
     * @method
     * @public
    */
    decrease(value) {
        
        if (!condIsNumberSig(value) || value >= 0) return this;

        this.hoarder -= value;

        return this;
        
    };
    /**
     * ### accumulate
     * 
     * Метод перерасчёта накопления.
     * 
     * ***
     * @arg {YScheduler} scheduler `Планировщик`
     * ***
     * @since `1.0.0`
     * @version `1.0.0`
     * @method
     * @public
    */
    accumulate(scheduler) {

        if (this.increase().hoarder >= this.tact) {

            this.happen(scheduler).reset();

            return true;

        };

        return false;
        
    };
    
    //#endregion
    
    /**
     * ### YEConstructor
     * - Версия `1.0.0`
     * 
     * 
     * ***
     * 
     * 
     * 
     * ***
     * 
     * @arg {...eTC&YE} args `Аргументы`
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
            
            /** @type {YArg<YE&eTC>} */
            const yarg = args[0] instanceof YArg ? args[0] : new YArg(...args);
            
            yarg

                .setFirst(

                    ['label', 'string'],
                    ['tact', 'number'],
                    ['priority', 'number'],
                    ['disposable', 'bool'],

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
 * @file e/class.mjs
 * @author Yakhin Nikita Artemovich <mr.y.nikita@gmail.com>
 * @license Apache-2.0
 * @copyright SYLS (Software Y Lib Solutions) 2023
*/