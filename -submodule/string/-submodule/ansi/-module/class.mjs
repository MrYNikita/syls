//#region YI

import { Y } from '@syls/y';
import { YArg } from "@syls/y/arg";
import { configANSI as config } from "./config.mjs";

//#endregion
//#region YT

/** ### ansiTC
 * @typedef ansiTC
 * @prop {}
*/

/** @typedef {import('./module.mjs').ansiT&ansiTC} ansiT */

//#endregion

/**
 * ### YANSI
 * 
 * 
 * 
 * ***
 * @class
 * @since `1.0.0`
 * @version `1.0.0`
 * 
*/
export class YANSI extends Y {
    
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
     * @type {YANSI[]}
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
     * @arg {...YANSI} args `Аргументы`
     * @returns {YANSI[]}
    */
    static create(...args) {
        
        return super.create(...args);
        
    };
    /**
     * @arg {Y1} value `Значение`
     * @static
     * @method
     * @public
     * @returns {(Y1&YANSI)?}
     * @template {YANSI} Y1
     * @override
    */
    static setClass(value) {
        
        return super.setClass(value);
        
    };
    
    //#endregion
    //#region field
    
    /**
     * ### underline
     * 
     * Линия подчеркивания.
     * 
     * *** 
     * @since `1.0.0`
     * @type {boolean}
     * @field
     * @public
    */
    underline;
    /**
     * ### foreground
     * 
     * 
     * 
     * *** 
     * @since `1.0.0`
     * @type {number}
     * @field
     * @public
    */
    foreground;
    /**
     * ### background
     * 
     * 
     * 
     * *** 
     * @since `1.0.0`
     * @type {number}
     * @field
     * @public
    */
    background;
    
    //#endregion
    //#region method
    
    /**
     * @method
     * @public
     * @override
    */
    getClass() {
        
        return YANSI;
        
    };
    
    //#endregion
    
    /**
     * ### YANSIConstructor
     * - Версия `1.0.0`
     * 
     * 
     * ***
     * 
     * 
     * 
     * ***
     * 
     * @arg {ansiTC} args `Аргументы`
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
            
            /** @type {YArg<YANSI&ansiTC>} */
            const yarg = args[0] instanceof YArg ? args[0] : new YArg(...args);
            
            
            
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
 * @file ansi/class.mjs
 * @author Yakhin Nikita Artemovich <mr.y.nikita@gmail.com>
 * @license Apache-2.0
 * @copyright SYLS (Software Y Lib Solutions) 2023
*/

// export class YANSI extends FANSI {
    
//     /**
//      * ### get
//      * - Версия `0.1.0`
//      * ***
//      * 
//      * 
//      * 
//      * ***
//      * 
//      * @public
//     */
//     get() {
        
//         const underline = this.underline ? config.params.codeUnderline : config.params.codeUnderlineReset;

//         const foreground = this.foreground ? `${config.params.codeColorForeground}${config.params.codeColor};${this.foreground}` : '';
//         const background = this.background ? `${config.params.codeColorBackground}${config.params.codeColor};${this.background}` : '';

//         return `${config.params.code}${[underline, foreground, background].filter(code => code).join(';')}m`;
        
//     };
//     /**
//      * ### getClass
//      * 
//      * 
//      * 
//      * ***
//      * 
//      * 
//      * 
//      * ***
//      * @method
//      * @public
//      * @returns {typeof YANSI}
//     */
//     getClass() {
        
//         return YANSI;
        
//     };

//     /**
//      * ### setColor
//      * - Версия `0.0.0`
//      * ***
//      * 
//      * Метод установки цветов.
//      * 
//      * ***
//      * @arg {ANSITTColor} background `Цвет фона`
//      * @arg {ANSITTColor} foreground `Цвет символов`
//      * @public
//     */
//     setColor(foreground, background) {
        
//         this.foreground = ansiGetColorCode(foreground) ?? null;
//         this.background = ansiGetColorCode(background) ?? null;

//         return this;
        
//     };
    
// };