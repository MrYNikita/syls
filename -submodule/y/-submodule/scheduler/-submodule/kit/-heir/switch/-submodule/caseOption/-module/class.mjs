//#region YI

import { YArg } from "@syls/y/arg";
import { configCaseOption as config } from "./config.mjs";
import { YCase } from "../../../../../-submodule/case/-module/class.mjs";
import { YSwitch } from "../../../-module/class.mjs";

//#endregion
//#region YT

/** ### caseOptionTC
 * @typedef caseOptionTC
 * @prop {}
*/

/** @typedef {import('./module.mjs').caseOptionT&caseOptionTC} caseOptionT */

//#endregion

/**
 * ### YCaseOption
 * 
 * 
 * 
 * ***
 * @class
 * @since `1.0.0`
 * @version `1.0.0`
 * 
*/
export class YCaseOption extends YCase {
    
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
     * @type {YCaseOption[]}
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
     * @arg {...YCaseOption} args `Аргументы`
     * @returns {YCaseOption[]}
    */
    static create(...args) {
        
        return super.create(...args);
        
    };
    /**
     * @arg {Y1} value `Значение`
     * @static
     * @method
     * @public
     * @returns {(Y1&YCaseOption)?}
     * @template {YCaseOption} Y1
     * @override
    */
    static setClass(value) {
        
        return super.setClass(value);
        
    };
    
    //#endregion
    //#region field
    
    /** 
     * @since `1.0.0`
     * @type {(kit:YSwitch)=>void}
     * @field
     * @public
     * @override
    */
    func;
    /**
     * ### active
     * 
     * Активность.
     * 
     * *** 
     * @since `1.0.0`
     * @type {boolean}
     * @field
     * @public
    */
    active;
    /**
     * ### activePost
     * 
     * Пост-активация.
     * 
     * *** 
     * @since `1.0.0`
     * @type {boolean}
     * @field
     * @public
    */
    activePost;
    /**
     * ### deactivePost
     * 
     * Пост-деактивация.
     * 
     * *** 
     * @since `1.0.0`
     * @type {boolean}
     * @field
     * @public
    */
    deactivePost;
    
    //#endregion
    //#region method
    
    /**
     * @method
     * @public
     * @override
    */
    getClass() {
        
        return YCaseOption;
        
    };
    
    //#endregion
    
    /**
     * ### YCaseOptionConstructor
     * - Версия `1.0.0`
     * 
     * 
     * ***
     * 
     * 
     * 
     * ***
     * 
     * @arg {...caseOptionTC&YCaseOption} args `Аргументы`
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
            
            /** @type {YArg<YCaseOption&caseOptionTC>} */
            const yarg = args[0] instanceof YArg ? args[0] : new YArg(...args);
            
            yarg.setFirst(

                ['active', 'bool'],

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
 * @file caseOption/class.mjs
 * @author Yakhin Nikita Artemovich <mr.y.nikita@gmail.com>
 * @license Apache-2.0
 * @copyright SYLS (Software Y Lib Solutions) 2023
*/