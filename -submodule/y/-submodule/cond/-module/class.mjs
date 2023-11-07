//#region YI

import { Y } from "../../../-module/class.mjs";
import { YArg } from "../../arg/-module/export.mjs";
import { configCond as config } from "./config.mjs";
import { condIsBool, condIsFunc, condIsJect, condIsNumber, condIsNumberInt, condIsNumberSig, condIsString, condIsStringSem, condIsStringSig } from "./export.mjs";

//#endregion
//#region YT

/** ### condTC
 * @typedef condTC
 * @prop {}
*/

/** @typedef {import('./module.mjs').condT&condTC} condT */

//#endregion

/**
 * ### YCond
 * 
 * 
 * 
 * ***
 * @class
 * @since `1.0.0`
 * @version `1.0.0`
 * 
*/
export class YCond extends Y {
    
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
     * @type {YCond[]}
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
     * @arg {...YCond} args `Аргументы`
     * @returns {YCond[]}
    */
    static create(...args) {
        
        return super.create(...args);
        
    };
    /**
     * @arg {Y1} value `Значение`
     * @static
     * @method
     * @public
     * @returns {(Y1&YCond)?}
     * @template {YCond} Y1
     * @override
    */
    static setClass(value) {
        
        return super.setClass(value);
        
    };
    /**
     * ### isBool
     * 
     * Метод проверки указанных значений на принадлежность к логическим значениям.
     * 
     * ***
     * @arg {...condT['bool']} bools `Логические значения`
     * 
     * 
     * ***
     * @since `1.0.0`
     * @version `1.0.0`
     * @static
     * @method
     * @public
    */
    static isBool(...bools) {
        
        return condIsBool(...bools);
        
    };
    /**
     * ### isFunc
     * 
     * Метод проверки указанных значений на принадлежность к функциям.
     * 
     * ***
     * @arg {...condT['func']} funcs `Функции`
     * 
     * 
     * ***
     * @since `1.0.0`
     * @version `1.0.0`
     * @static
     * @method
     * @public
    */
    static isFunc(...funcs) {
        
        return condIsFunc(...funcs);
        
    };
    /**
     * ### isJect
     * 
     * Метод проверки указанных значений на принадлежность к объектам.
     * 
     * ***
     * @arg {...condT['ject']} jects `Объекты`
     * 
     * 
     * ***
     * @since `1.0.0`
     * @version `1.0.0`
     * @static
     * @method
     * @public
    */
    static isJect(...jects) {
        
        return condIsJect(...jects);
        
    };
    /**
     * ### isString
     * 
     * Метод проверки указанных значений на принадлежность к строкам.
     * 
     * ***
     * @arg {...condT['string']} strings `Строки`
     * 
     * 
     * ***
     * @since `1.0.0`
     * @version `1.0.0`
     * @static
     * @method
     * @public
    */
    static isString(...strings) {
        
        return condIsString(...strings);
        
    };
    /**
     * ### isStringSig
     * 
     * Метод проверки указанных значений на принадлежность к значимым строкам.
     * 
     * Значимыми строками считаются строки отличные от ``.
     * 
     * ***
     * @arg {...condT['string']} strings `Строки`
     * 
     * 
     * ***
     * @since `1.0.0`
     * @version `1.0.0`
     * @static
     * @method
     * @public
    */
    static isStringSig(...strings) {
        
        return condIsStringSig(...strings);
        
    };
    /**
     * ### isStringSem
     * 
     * Метод проверки указанных значений на принадлежность к смысловым строкам.
     * 
     * ***
     * @arg {...condT['string']} strings `Строки`
     * 
     * 
     * ***
     * @since `1.0.0`
     * @version `1.0.0`
     * @static
     * @method
     * @public
    */
    static isStringSem(...strings) {
        
        return condIsStringSem(...strings);
        
    };
    /**
     * ### isNumber
     * 
     * Метод проверки указанных значений на принадлежность к числам.
     * 
     * ***
     * @arg {...condT['number']} numbers `Числа`
     * 
     * 
     * ***
     * @since `1.0.0`
     * @version `1.0.0`
     * @static
     * @method
     * @public
    */
    static isNumber(...numbers) {
        
        return condIsNumber(...numbers)
        
    };
    /**
     * ### isNumberSig
     * 
     * Метод проверки указанных значений на принадлежность к значимым числам.
     * 
     * Значимыми числами считаются числа отличные от NaN.
     * 
     * ***
     * @arg {...condT['number']} numbers `Числа`
     * 
     * 
     * ***
     * @since `1.0.0`
     * @version `1.0.0`
     * @static
     * @method
     * @public
    */
    static isNumberSig(...numbers) {
        
        return condIsNumberSig(...numbers);
        
    };
    /**
     * ### isNumberInt
     * 
     * Метод проверки указанных значений на принадлежность к целым числам.
     * 
     * ***
     * @arg {...condT['number']} numbers `Числа`
     * 
     * 
     * ***
     * @since `1.0.0`
     * @version `1.0.0`
     * @static
     * @method
     * @public
    */
    static isNumberInt(...numbers) {
        
        return condIsNumberInt(...numbers);
        
    };

    //#endregion
    //#region field
    
    
    
    //#endregion
    //#region method
    
    /**
     * @method
     * @public
     * @returns {YCond}
     * @override
    */
    getClass() {
        
        return YCond;
        
    };
    
    //#endregion
    
    /**
     * ### YCondConstructor
     * - Версия `1.0.0`
     * 
     * 
     * ***
     * 
     * 
     * 
     * ***
     * 
     * @arg {condTC} args `Аргументы`
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
            
            /** @type {YArg<YCond>} */
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
 * @file cond/class.mjs
 * @author Yakhin Nikita Artemovich <mr.y.nikita@gmail.com>
 * @license Apache-2.0
 * @copyright SYLS (Software Y Lib Solutions) 2023
*/