//#region YI

import { YScheduler } from '../../../-module/class.mjs';
import { YArg } from '../../../../arg/-module/class.mjs';
import { YE } from '../../e/-module/class.mjs';
import { configEvent as config } from './config.mjs';

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
export class YEvent extends YE {
    
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
    /**
     * ### happen
     * 
     * Метод происхождения события.
     * 
     * ***
     * @arg {YScheduler} scheduler `Планировщик`
     * ***
     * @since `1.0.0`
     * @version `1.0.0`
     * @method
     * @public
    */
    happen(scheduler) {
        
        this.func(scheduler);

        return this;
        
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
            const yarg = args instanceof YArg ? args : new YArg(...args);

            yarg.setFirst(

                ['func', 'func'],
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
 * @file event/class.mjs
 * @author Yakhin Nikita Artemovich <mr.y.nikita@gmail.com>
 * @license Apache-2.0
 * @copyright SYLS (Software Y Lib Solutions) 2023
*/