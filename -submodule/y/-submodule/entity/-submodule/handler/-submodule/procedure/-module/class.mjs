//#region YI

import { Y } from '../../../../../../../-module/export.mjs';
import { YArg } from '../../../../../../arg/-module/export.mjs';
import { configProcedure as config } from "./config.mjs";

//#endregion
//#region YT

/** ### procedureTC
 * @typedef procedureTC
 * @prop {}
*/

/** @typedef {import('./module.mjs').procedureT&procedureTC} procedureT */

//#endregion

/**
 * ### YProcedure
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
export class YProcedure extends Y {
    
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
     * @type {YProcedure[]}
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
     * @arg {...YProcedure} args `Аргументы`
     * @returns {YProcedure[]}
    */
    static create(...args) {
        
        return super.create(...args);
        
    };
    /**
     * @arg {Y1} value `Значение`
     * @static
     * @method
     * @public
     * @returns {(Y1&YProcedure)?}
     * @template {YProcedure} Y1
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
     * @type {(self:Y1)=>void}
     * @field
     * @public
    */
    func;
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
        
        return YProcedure;
        
    };
    
    
    //#endregion
    
    /**
     * ### YProcedureConstructor
     * - Версия `1.0.0`
     * 
     * 
     * ***
     * 
     * 
     * 
     * ***
     * 
     * @arg {...procedureTC&Y1} args `Аргументы`
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
            
            /** @type {YArg<YProcedure>} */
            const yarg = args instanceof YArg ? args : new YArg(args);
            
            yarg

                .uncover()
                .set(

                    ['func', 'func'],
                    ['label', 'string'],
                    ['disposable', 'bool'],

                )
            
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
            
            
        } catch (err) {
            
            if (config.params.strictMode) {
                
                throw err;
                
            };
            
        } finally {
            
            
            
        };
        
    };
    
};

/**
 * @file procedure/class.mjs
 * @author Yakhin Nikita Artemovich <mr.y.nikita@gmail.com>
 * @license Apache-2.0
 * @copyright SYLS (Software Y Lib Solutions) 2023
*/