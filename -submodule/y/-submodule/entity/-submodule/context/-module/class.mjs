//#region YI

import { Y } from '../../../../../-module/export.mjs';
import { YArg } from '../../../../arg/-module/export.mjs';
import { YLog } from '../../../../log/-module/export.mjs';
import { YDate } from '../../../../date/-module/export.mjs';
import { YHandler } from '../../handler/-module/class.mjs';
import { configContext as config } from "./config.mjs";

//#endregion
//#region YT

/** ### contextTC
 * @typedef contextTC
 * @prop {}
*/

/** @typedef {import('./module.mjs').contextT&contextTC} contextT */

//#endregion

/**
 * ### YContext
 * 
 * 
 * 
 * ***
 * @class
 * @since `1.0.0`
 * @version `1.0.0`
 * @template Y1
 * 
*/
export class YContext extends Y {
    
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
     * @type {YContext[]}
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
     * @arg {...YContext} args `Аргументы`
     * @returns {YContext[]}
    */
    static create(...args) {
        
        return super.create(...args);
        
    };
    /**
     * @arg {Y1} value `Значение`
     * @static
     * @method
     * @public
     * @returns {(Y1&YContext)?}
     * @template {YContext} Y1
     * @override
    */
    static setClass(value) {
        
        return super.setClass(value);
        
    };
    
    //#endregion
    //#region field
    
    /**
     * ### id
     * 
     * ID.
     * 
     * *** 
     * @since `1.0.0`
     * @type {number}
     * @field
     * @public
    */
    id;
    /**
     * ### log
     * 
     * Журнал.
     * 
     * *** 
     * @since `1.0.0`
     * @type {YLog?}
     * @field
     * @public
    */
    log;
    /**
     * ### date
     * 
     * Дата.
     * 
     * *** 
     * @since `1.0.0`
     * @type {YDate}
     * @field
     * @public
    */
    date = new YDate();
    /**
     * ### handlers
     * 
     * Обработчики.
     * 
     * *** 
     * @since `1.0.0`
     * @type {YHandler[]}
     * @field
     * @public
    */
    handlers;
    
    //#endregion
    //#region method
    
    /**
     * @method
     * @public
     * @override
    */
    getClass() {
        
        return YContext;
        
    };
    
    
    //#endregion
    
    /**
     * ### YContextConstructor
     * - Версия `1.0.0`
     * 
     * 
     * ***
     * 
     * 
     * 
     * ***
     * 
     * @arg {...contextTC&Y1} args `Аргументы`
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
            
            /** @type {YArg<YContext>} */
            const yarg = args instanceof YArg ? args : new YArg(args);
            
            
            
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
 * @file context/class.mjs
 * @author Yakhin Nikita Artemovich <mr.y.nikita@gmail.com>
 * @license Apache-2.0
 * @copyright SYLS (Software Y Lib Solutions) 2023
*/