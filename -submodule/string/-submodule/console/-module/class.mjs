//#region YI

import { YArg } from "@syls/y/arg";
import { configConsole as config } from "./config.mjs";
import { YString } from "../../../-module/export.mjs";
import { YEntity } from "@syls/y/entity";

//#endregion

/**
 * ### YConsole
 * - Тип `S`
 * - Версия `1.0.0`
 * ***
 * 
 * 
 * 
 * ***
 * @typedef YConsoleTU
 * @prop {} _
 * 
 * @typedef {YConsoleTU&YConsoleTE} YConsoleT
 * @typedef {Omit<YConsole, keyof YString>} YConsoleTE
 * ***
 * @class
 * @since `1.0.0`
 * @version `1.0.0`
 * 
*/
export class YConsole extends YEntity {
    
    //#region field

    /**
     * ### text
     * 
     * Текст.
     * 
     * *** 
     * @type {YString}
     * @field
     * @public
    */
    text;

    //#endregion
    //#region method




    //#endregion
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
     * @type {YConsole[]}
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
     * @arg {...YConsole} args `Аргументы`
     * @returns {YConsole[]}
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
     * @template {YConsole} Y1
    */
    static becomePrototype(value) {
        
        return Object.getPrototypeOf(this).becomePrototype.apply(this, [value]);
        
    };
    
    //#endregion

    /**
     * ### YConsoleConstructor
     * 
     * 
     * 
     * ***
     * @arg {YConsoleT} args `Аргументы`
     * 
     * Представлены единым объектом носителем аргументов.
     * 
     * ***
     * @constructor
    */
    constructor(...args) {
        
        try {
            
            //#region before
            
            /** @type {YArg<YConsole>} */
            const yarg = args instanceof YArg ? args : new YArg(args);
            
            yarg.set(

                ['text', 'ject'],

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
 * @file console/class.mjs
 * @author Yakhin Nikita Artemovich <mr.y.nikita@gmail.com>
 * @license Apache-2.0
 * @copyright SYLS (Software Y Lib Solutions) 2023
*/