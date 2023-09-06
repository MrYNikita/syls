//#region YI

import { Y } from '../../../-module/class.mjs';
import { YArg } from '../../arg/-module/class.mjs';
import { configCond as config } from './config.mjs';

//#endregion
//#region YT

/** ### YCondT
 * - Тип `T`
 * 
 * Основной параметр модуля `YCond`.
 * 
 * @typedef {YCondTE&YCondTU&Y} YCondT
 * 
*/
/** ### YCondTE
 * - Тип `TE`
 * 
 * Параметр наследования `YCond`.
 * 
 * @typedef {Omit<DCond, keyof SCond>} YCondTE
 * 
*/
/** ### YCondTU
 * - Тип `TU`
 * 
 * Уникальные параметры `YCond`.
 * 
 * @typedef YCondTU
 * @prop {any} _
 * 
*/

//#endregion

class SCond extends Y {
    
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
        
        return Object.getPrototypeOf(SCond).create.apply(this, args);
        
    };

    /**
     * ### isFunc
     * 
     * ***
     * 
     * Метод проверки значений на принадлежность к функциям.
     * 
     * ***
     * @arg {...any} values `Значения`
     * @static
     * @method
     * @public
    */
    static isFunc(...values) {
        
        for (const value of values) {

            if (typeof value !== 'function') {

                return false;

            };

        };

        return true;
        
    };
    /**
     * ### isBool
     * - Версия `0.0.1`
     * - Модуль `bool\cond`
     * ***
     *
     * Метод проверки значений на принадлежность к логическим значениям.
     *
     * ***
     * @arg {...any} values `Значения`
     * @public
    */
    static isBool(...values) {

        return condIsBool(...values);

    };
    /**
     * ### isFloat
     * - Версия `0.0.1`
     * - Модуль `bool\cond`
     * ***
     *
     * Метод проверки значений на принадлежность к дробным числам.
     *
     * ***
     * @arg {...any} values `Значения`
     * @public
    */
    static isFloat(...values) {

        return condIsFloat(...values);

    };
    /**
     * ### isArray
     * 
     * ***
     * 
     * Метод проверки значений на принадлежность к массивам.
     * 
     * ***
     * @arg {...any} values `Значения`
     * @static
     * @method
     * @public
    */
    static isArray(...values) {
        
        for (const value of values) {

            if (!(value instanceof Array)) {

                return false;

            };

        };

        return true;
        
    };
    /**
     * ### isString
     * - Версия `1.0.0`
     * 
     * 
     * ***
     *
     * Метод проверки значений на принадлежность к строкам.
     *
     * ***
     * @arg {...any} values `Значения`
     * @public
    */
    static isString(...values) {

        for (const value of values) {

            if (!(value instanceof String || typeof value === 'string')) return false;

        };

        return true;

    };
    /**
     * ### isNumber
     * - Версия `1.0.0`
     * ***
     *
     * Метод проверки значений на принадлежнсоть к числу.
     *
     * ***
     * @arg {...any} values `Значения`
     * @public
    */
    static isNumber(...values) {

        for (const value of values) {

            if (!(value instanceof Number || typeof value === 'number')) return false;

        };

        return true;

    };
    /**
     * ### isNumberInt
     * 
     * ***
     * 
     * Метод проверки значений на принадлежнсоть к целым числам.
     * 
     * ***
     * @arg {...any} values `Значения`
     * @static
     * @method
     * @public
    */
    static isNumberInt(...values) {
        
        if (!this.isNumber(...values)) return false;

        for (const value of values) {

            if (value % 10 !== 0) return false;

        };

        return true;
        
    };
    
};
class DCond extends SCond {
    
    
    
};
class ICond extends DCond {
    
    
    
};
class MCond extends ICond {
    
    
    
};
class FCond extends MCond {
    
    /**
     * ### YCond.constructor
     * 
     * 
     * 
     * ***
     * @arg {YCondT} args
    */
    constructor(args) {
        
        super(args = FCond.#before(args = arguments));
        
        FCond.#deceit.apply(this, [args]);
        
        return this.correlate();
        
    };
    
    /** @arg {DCond} args */
    static #before(args) {
        
        /** @type {YArg<ICond>} */
        const yarg = args instanceof YArg ? args : new YArg(args);
        
        
        
        return yarg;
        
    };
    /** @arg {YArg<ICond>} args @this {YCond} */
    static #deceit(args) {
        
        try {
            
            FCond.#verify.apply(this, arguments);
            
        } catch (e) {
            
            if (config?.strictMode) {
                
                throw e;
                
            };
            
            return new YCond();
            
        } finally {
            
            
            
        };
        
    };
    /** @arg {YArg<ICond>} args @this {YCond} */
    static #verify(args) {
        
        const {
            
            
            
        } = args;
        
        FCond.#handle.apply(this, arguments);
        
    };
    /** @arg {YArg<ICond>} args @this {YCond} */
    static #handle(args) {
        
        
        
        FCond.#create.apply(this, arguments);
        
    };
    /** @arg {YArg<ICond>} args @this {YCond} */
    static #create(args) {
        
        const {
            
            
            
        } = args;
        
        this
        
            .adopt(args.getData());
        
    };
    
};

/**
 * ### YCond
 * - Тип `SDIMFY`
 * - Версия `0.0.0`
 * - Цепочка `BDVHC`
 * ***
 * 
 * Класс `YCond`.
 * 
 * ***
 * @class
 * 
*/
export class YCond extends FCond {
    
    /**
     * ### getClass
     * 
     * 
     * 
     * ***
     * 
     * 
     * 
     * ***
     * @method
     * @public
     * @returns {typeof YCond}
    */
    getClass() {
        
        return YCond;
        
    };

    /**
     * ### check
     * - Версия `0.0.0`
     * - Модуль `bool\cond`
     * ***
     *
     * Метод выполнения проверки для указанных аргументов.
     *
     * ***
     * @arg {...any} transmits `Аргументы`
     * @public
    */
    check(...transmits) {

        if (this.condition(...transmits) && this.conds.every(cond => cond.check(...transmits))) {

            this.funcSucs && this.funcSucs() && this.conds.forEach(cond => cond.funcSucs());

            if (this.sucs) {

                return this.sucs;

            } else {

                return true;

            };

        } else {

            this.funcsFail && this.funcFail() && this.conds.forEach(cond => cond.funcFail());

            if (this.fail !== undefined) {

                return this.fail;

            } else {

                return false;

            };

        };

    };
    /**
     * ### combine
     * - Версия `0.0.0`
     * - Модуль `bool\cond`
     * ***
     *
     * Метод комбинирования условий.
     *
     * ***
     * @arg {...YCond} conds Условия.
     * @public
    */
    combine(...conds) {

        this.conds.push(...conds.filter(cond => !this.conds.includes(cond)));

        return this;

    };
    
};

//#region YE

YCond.getY()['modules'].push(YCond);

//#endregion

/**
 * @file cond/class.mjs
 * @author Yakhin Nikita Artemovich <mr.y.nikita@gmail.com>
 * @license Apache-2.0
 * @copyright SYLS (Software Y Lib Solutions) 2023
*/