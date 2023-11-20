//#region YI

import { YArg } from "@syls/y/arg";
import { configFunc as config } from "./config.mjs";
import { Y } from "@syls/y";

//#endregion
//#region YT

/** ### funcTC
 * @typedef funcTC
 * @prop {}
*/

/** @typedef {import('./module.mjs').funcT&funcTC} funcT */

//#endregion

/**
 * ### YFunc
 * 
 * 
 * 
 * ***
 * @class
 * @since `1.0.0`
 * @version `1.0.0`
 * 
*/
export class YFunc extends Y {
    
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
     * @type {YFunc[]}
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
     * @arg {...YFunc} args `Аргументы`
     * @returns {YFunc[]}
    */
    static create(...args) {
        
        return super.create(...args);
        
    };
    /**
     * @arg {Y1} value `Значение`
     * @static
     * @method
     * @public
     * @returns {(Y1&YFunc)?}
     * @template {YFunc} Y1
     * @override
    */
    static setClass(value) {
        
        return super.setClass(value);
        
    };
    
    //#endregion
    //#region field
    
    
    
    //#endregion
    //#region method
    
    /**
     * @method
     * @public
     * @override
    */
    getClass() {
        
        return YFunc;
        
    };
    
    //#endregion
    
    /**
     * ### YFuncConstructor
     * - Версия `1.0.0`
     * 
     * 
     * ***
     * 
     * 
     * 
     * ***
     * 
     * @arg {funcTC} args `Аргументы`
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
            
            /** @type {YArg<YFunc&funcTC>} */
            const yarg = args[0] instanceof YArg ? args[0] : new YArg(args);
            
            
            
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
 * @file func/class.mjs
 * @author Yakhin Nikita Artemovich <mr.y.nikita@gmail.com>
 * @license Apache-2.0
 * @copyright SYLS (Software Y Lib Solutions) 2023
*/

// //#region YI

// import { Y } from '@syls/y';


// //#endregion
// //#region YT

// /** ### YFuncT
//  * - Тип `T`
//  * - Версия `0.0.0`
//  * - Модуль `func`
//  *
//  * Основной параметр модуля `YFunc`.
//  *
//  * @typedef {YFuncTE&YFuncTU} YFuncT
//  *
// */
// /** ### YFuncTE
//  * - Тип `TE`
//  * - Версия `0.0.0`
//  * - Модуль `func`
//  *
//  * Параметр наследования `YFunc`.
//  *
//  * @typedef {{[p in Exclude<keyof DFunc,keyof SFunc>|Exclude<keyof SFunc,keyof DFunc>]:(DFunc[p]&SFunc[p])}} YFuncTE
//  *
// */
// /** ### YFuncTU
//  * - Тип `TU`
//  * - Версия `0.0.0`
//  * - Модуль `func`
//  *
//  * Уникальные параметры `YFunc`.
//  *
//  * @typedef YFuncTU
//  * @prop {any} _
//  *
// */

// //#endregion

// class SFunc extends Y {



// };
// class DFunc extends SFunc {



// };
// class IFunc extends DFunc {



// };
// class MFunc extends IFunc {



// };
// class FFunc extends MFunc {

//     /**
//      * ### YFunc.constructor
//      *
//      *
//      *
//      * ***
//      * @arg {...YFuncT} t
//     */
//     constructor(...t) {

//         super(Object.assign(t = FFunc.#before(t), {}));

//         FFunc.#deceit.apply(this, [t]);

//     };

//     /** @arg {any[]} t */
//     static #before(t) {

//         /** @type {YFuncT} */
//         let r = {};

//         if (t?.length === 1 && [Object, YFunc].includes(t[0]?.constructor) && !Object.getOwnPropertyNames(t[0]).includes('_ytp')) {

//             r = t[0];

//         } else if (t?.length) {

//             if (t[0]?._ytp) {

//                 t = [...t[0]._ytp];

//             };

//             switch (t.length) {

//                 case 3:
//                 case 2:
//                 case 1:

//             };

//             if (!Object.values(r).length) {

//                 r = { _ytp: t, };

//             };

//         };

//         return r;

//     };
//     /** @arg {YFuncT} t @this {YFunc} */
//     static #deceit(t) {

//         try {

//             FFunc.#verify.apply(this, [t]);

//         } catch (e) {

//             throw e;

//         } finally {



//         };

//     };
//     /** @arg {YFuncT} t @this {YFunc} */
//     static #verify(t) {

//         const {



//         } = t;

//         FFunc.#handle.apply(this, [t]);

//     };
//     /** @arg {YFuncT} t @this {YFunc} */
//     static #handle(t) {



//         FFunc.#create.apply(this, [t]);

//     };
//     /** @arg {YFuncT} t @this {YFunc} */
//     static #create(t) {

//         const {



//         } = t;

//         this.adopt(t);

//         if (config) {

//             this.adoptDefault(config);

//         };

//     };

// };

// /**
//  * ### YFunc
//  * - Тип `SDIMFY`
//  * - Версия `0.0.0`
//  * - Модуль `func`
//  * - Цепочка `BDVHC`
//  * ***
//  *
//  *
//  *
//  * ***
//  *
// */
// export class YFunc extends FFunc {



// };