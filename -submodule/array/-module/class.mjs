//#region YI

import { YArg } from "@syls/y/arg";
import { configArray as config } from "./config.mjs";
import { Y } from "@syls/y";

//#endregion

/**
 * ### YArray
 * - Тип `S`
 * - Версия `1.0.0`
 * ***
 * 
 * 
 * 
 * ***
 * @typedef YArrayTU
 * @prop {} _
 * 
 * @typedef {YArrayTU&YArrayTE} YArrayT
 * @typedef {Omit<YArray, keyof Y>} YArrayTE
 * ***
 * @class
 * @since `1.0.0`
 * @version `1.0.0`
 * 
*/
export class YArray extends Y {
    
    //#region static
    
    static {
        
        
        
    };
    
    /**
     * ### stock
     * 
     * ***
     * 
     * 
     * 
     * ***
     * @type {YArray[]}
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
     * @arg {...YArray} args `Аргументы`
     * @returns {YArray[]}
    */
    static create(...args) {
        
        return Object.getPrototypeOf(this).create.apply(this, args);
        
    };
    
    /**
     * @arg {Y1} value `Значение`
     * @static
     * @method
     * @public
     * @returns {(Y1&Y1)?}
     * @template {YArray} Y1
    */
    static becomePrototype(value) {
        
        return Object.getPrototypeOf(this).becomePrototype.apply(this, [value]);
        
    };
    
    //#endregion
    
    num;

    /**
     * ### YArrayConstructor
     * 
     * 
     * 
     * ***
     * @arg {YArrayT} args `Аргументы`
     * 
     * Представлены единым объектом носителем аргументов.
     * 
     * ***
     * @constructor
    */
    constructor(...args) {
        
        try {
            
            //#region before
            
            /** @type {YArg<YArray>} */
            const yarg = args instanceof YArg ? args : new YArg(args);
            
            yarg.set(['num', 'number']);

            super(yarg);
            
            //#endregion
            //#region verify
            
            
            
            //#endregion
            //#region handle
            
            
            
            //#endregion
            //#region comply
            
            
            
            //#endregion
            
            return this
            
                .adopt(yarg.getData())
                .correlate()
            
            
        } catch (err) {
            
            if (config.value.strictMode) {
                
                throw err;
                
            };
            
        } finally {
            
            
            
        };
        
    };
    
};

/**
 * @file array/class.mjs
 * @author Yakhin Nikita Artemovich <mr.y.nikita@gmail.com>
 * @license Apache-2.0
 * @copyright SYLS (Software Y Lib Solutions) 2023
*/