//#region YI

import { YArg } from "@syls/y/arg";
import { configCase as config } from "./config.mjs";
import { Y } from "../../../../../../../-module/class.mjs";
import { YKit } from "../../../-module/class.mjs";

//#endregion
//#region YT

/** ### caseTC
 * @typedef caseTC
 * @prop {}
*/

/** @typedef {import('./module.mjs').caseT&caseTC} caseT */

//#endregion

/**
 * ### YCase
 * 
 * 
 * 
 * ***
 * @class
 * @since `1.0.0`
 * @version `1.0.0`
 * 
*/
export class YCase extends Y {
    
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
     * @type {YCase[]}
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
     * @arg {...YCase} args `Аргументы`
     * @returns {YCase[]}
    */
    static create(...args) {
        
        return super.create(...args);
        
    };
    /**
     * @arg {Y1} value `Значение`
     * @static
     * @method
     * @public
     * @returns {(Y1&YCase)?}
     * @template {YCase} Y1
     * @override
    */
    static setClass(value) {
        
        return super.setClass(value);
        
    };
    
    //#endregion
    //#region field
    
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
     * ### func
     * 
     * Функция.
     * 
     * *** 
     * @since `1.0.0`
     * @type {(event:this)=>void}
     * @field
     * @public
    */
    func;
    
    //#endregion
    //#region method
    
    /**
     * ### happen
     * 
     * Метод срабатывания события.
     * 
     * ***
     * @arg {YKit} kit `Набор`
     * ***
     * @since `1.0.0`
     * @version `1.0.0`
     * @method
     * @public
    */
    happen(kit) {
        
        this.func(kit);

        return this;
        
    };
    /**
     * @method
     * @public
     * @override
    */
    getClass() {
        
        return YCase;
        
    };
    
    //#endregion
    
    /**
     * ### YCaseConstructor
     * - Версия `1.0.0`
     * 
     * 
     * ***
     * 
     * 
     * 
     * ***
     * 
     * @arg {...caseTC&YCase} args `Аргументы`
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
            
            /** @type {YArg<YCase&caseTC>} */
            const yarg = args[0] instanceof YArg ? args[0] : new YArg(...args);
            
            yarg.setFirst(

                ['label', 'string'],
                ['func', 'func'],

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
 * @file case/class.mjs
 * @author Yakhin Nikita Artemovich <mr.y.nikita@gmail.com>
 * @license Apache-2.0
 * @copyright SYLS (Software Y Lib Solutions) 2023
*/