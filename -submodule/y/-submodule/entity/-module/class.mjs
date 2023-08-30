//#region YI

import { yClassifyProp } from '@syls/y';
import { configYE as config } from './config.mjs';

//#endregion
//#region YT

/** ### YYET
 * - Тип `T`
 * 
 * Основной параметр модуля `YYE`.
 * 
 * @typedef {YYETE&YYETU&Y} YYET
 * 
*/
/** ### YYETE
 * - Тип `TE`
 * 
 * Параметр наследования `YYE`.
 * 
 * @typedef {Omit<DYE, keyof SYE>} YYETE
 * 
*/
/** ### YYETU
 * - Тип `TU`
 * 
 * Уникальные параметры `YYE`.
 * 
 * @typedef YYETU
 * @prop {any} _
 * 
*/

//#endregion

class SYE extends Y {
    
    /**
     * ### stock
     * 
     * ***
     * 
     * 
     * 
     * ***
     * @type {YYE[]}
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
     * @arg {...YYE} args `Аргументы`
     * @returns {YYE[]}
    */
    static create(...args) {
        
        return Object.getPrototypeOf(SYE).create.apply(this, [...args]);
        
    };
    
};
class DYE extends SYE {
    
    
    
};
class IYE extends DYE {
    
    
    
};
class MYE extends IYE {
    
    
    
};
class FYE extends MYE {
    
    /**
     * ### YYE.constructor
     * 
     * 
     * 
     * ***
     * @arg {YYET} t
    */
    constructor(t) {
        
        t = [...arguments];
        
        super(Object.assign(t = FYE.#before(t), {}));
        
        FYE.#deceit.apply(this, [t]);
        
        return this.correlate();
        
    };
    
    /** @arg {any[]} t */
    static #before(t) {
        
        /** @type {YYET} */
        let r = {};
        
        if (t?.length === 1 && [Object, YYE].includes(t[0]?.constructor) && !Object.getOwnPropertyNames(t[0]).includes('_ytp')) {
            
            r = t[0];
            
            return r;
            
        } else if (!t.length) {
            
            return r;
            
        };
        
        if (t[0]?._ytp) {
        
            t = [...t[0]._ytp];
        
        };
        
        const arg = yClassifyProp(t);
        
        
        
        if (!Object.values(r).length) {
            
            r = { _ytp: t, };
            
        };
        
        return r;
        
    };
    /** @arg {YYET} t @this {YYE} */
    static #deceit(t) {
        
        try {
            
            FYE.#verify.apply(this, [t = { ...t }]);
            
        } catch (e) {
            
            if (config?.strictMode) {
                
                throw e;
                
            };
            
            return new YYE();
            
        } finally {
            
            
            
        };
        
    };
    /** @arg {YYET} t @this {YYE} */
    static #verify(t) {
        
        const {
            
            
            
        } = t;
        
        FYE.#handle.apply(this, [t]);
        
    };
    /** @arg {YYET} t @this {YYE} */
    static #handle(t) {
        
        
        
        FYE.#create.apply(this, [t]);
        
    };
    /** @arg {YYET} t @this {YYE} */
    static #create(t) {
        
        const {
            
            
            
        } = t;
        
        this
            .adopt(t)
            .adoptDefault(this.constructor.config ?? config);
        
    };
    
};

/**
 * ### YYE
 * - Тип `SDIMFY`
 * - Версия `0.0.0`
 * - Цепочка `BDVHC`
 * ***
 * 
 * Класс `YYE`.
 * 
 * ***
 * @class
 * 
*/
export class YE extends FYE {
    
    
    
};

// //#region YI

// import { Y, yClassifyProp } from '@syls/y';
// import { YContext } from '../-submodule/context/-module/export.mjs';
// import { YHandler } from '../-submodule/handler/-module/class.mjs';

// /** @type {import('./config.mjs')['default']['value']?} */
// let config = null;

// await import('./config.mjs')

//     .then(c => config = c.default?.value ? c.default.value : c.default)
//     .catch(e => e);

// /** @type {import('./error.mjs')['default']?} */
// let error = null;

// await import('./error.mjs')

//     .then(e => error = e.default)
//     .catch(e => e);

// //#endregion
// //#region YT

// /** ### YEntityT
//  * - Тип `T`
//  * 
//  * Основной параметр модуля `YEntity`.
//  * 
//  * @typedef {YEntityTE&YEntityTU&Y} YEntityT
//  * 
// */
// /** ### YEntityTE
//  * - Тип `TE`
//  * 
//  * Параметр наследования `YEntity`.
//  * 
//  * @typedef {Omit<DEntity, keyof SEntity>} YEntityTE
//  * 
// */
// /** ### YEntityTU
//  * - Тип `TU`
//  * 
//  * Уникальные параметры `YEntity`.
//  * 
//  * @typedef YEntityTU
//  * @prop {any} _
//  * 
// */

// //#endregion

// class SEntity extends Y {

//     /** ### stock
//      * @type {YEntity[]}
//      * @public
//     */
//     static stock = [];
//     /** ### config
//      * 
//      * ***
//      * @public
//     */
//     static config = config;

//     /**
//      * @arg {...YEntity} args `Аргументы`
//      * @returns {YEntity[]}
//     */
//     static create(...args) {

//         return Object.getPrototypeOf(SEntity).create.apply(this, [...args]);

//     };

// };
// class DEntity extends SEntity {



// };
// class IEntity extends DEntity {

//     /**
//      * ### _y
//      *
//      * Контекст.
//      *
//      * ***
//      * @type {YContext?}
//      * @protected
//     */
//     _y = new YContext();

// };
// class MEntity extends IEntity {

//     /**
//      * ### findHandle
//      * 
//      * ***
//      *
//      * Метод получения обработчика по его метке.
//      *
//      * ***
//      * @arg {string} label `Метка`
//      * @public
//      * @method
//      * @returns {YHandler?}
//     */
//     findHandle(label) {

//         const handler = this._y.handlers.find(h => h.label === label);

//         return handler ?? null;

//     };

// };
// class FEntity extends MEntity {

//     /**
//      * ### YEntity.constructor
//      * 
//      * 
//      * 
//      * ***
//      * @arg {YEntityT} t
//     */
//     constructor(t) {

//         t = [...arguments];

//         super(Object.assign(t = FEntity.#before(t), {}));

//         FEntity.#deceit.apply(this, [t]);

//         return this.correlate();

//     };

//     /** @arg {any[]} t */
//     static #before(t) {

//         /** @type {YEntityT} */
//         let r = {};

//         if (t?.length === 1 && [Object, YEntity].includes(t[0]?.constructor) && !Object.getOwnPropertyNames(t[0]).includes('_ytp')) {

//             r = t[0];

//         } else if (!t.length) {

//             return r;

//         };

//         if (t[0]?._ytp) {

//             t = [...t[0]._ytp];

//         };

//         const arg = yClassifyProp(t);



//         if (!Object.values(r).length) {

//             r = { _ytp: t, };

//         };

//         return r;

//     };
//     /** @arg {YEntityT} t @this {YEntity} */
//     static #deceit(t) {

//         try {

//             FEntity.#verify.apply(this, [t]);

//         } catch (e) {

//             throw e;

//         } finally {



//         };

//     };
//     /** @arg {YEntityT} t @this {YEntity} */
//     static #verify(t) {

//         const {



//         } = t;

//         FEntity.#handle.apply(this, [t]);

//     };
//     /** @arg {YEntityT} t @this {YEntity} */
//     static #handle(t) {



//         FEntity.#create.apply(this, [t]);

//     };
//     /** @arg {YEntityT} t @this {YEntity} */
//     static #create(t) {

//         const {



//         } = t;

//         this.adopt(t);

//         if (config) {

//             this.adoptDefault(this.constructor.config ?? config);

//         };

//     };

// };

// /**
//  * ### YEntity
//  * - Тип `SDIMFY`
//  * - Версия `0.0.0`
//  * - Цепочка `BDVHC`
//  * ***
//  * 
//  * Класс YEntity.
//  * 
//  * ***
//  * @class
//  * 
// */
// export class YEntity extends FEntity {

//     /**
//      * ### handle
//      * - Версия `0.0.0`
//      * ***
//      * 
//      * Метод обработки событий.
//      * 
//      * ***
//      * @arg {...string} labels `Метки`
//      * @public
//     */
//     handle(...labels) {

//         for (const label of labels) {

//             const handler = this.findHandle(label);

//             if (handler) {

//                 handler.exec(this);

//                 handler.procedures = handler.procedures.filter(p => !p.disposable);

//             };

//         };

//         return this;

//     };

//     /**
//      * ### appendHandler
//      * - Версия `0.0.0`
//      * ***
//      *
//      * Метод добавления обработчиков.
//      *
//      * ***
//      * @arg {...[string, [string, function(YEntity):void]]} handlers `Обработчики`
//      * @public
//     */
//     appendHandlers(...handlers) {

//         try {

//             handlers.forEach(handle => {

//                 const label = handle[0];
//                 const procedures = handle.slice(1);
//                 const find = this.findHandle(label);

//                 if (find) {

//                     find.appendProcedures(...procedures);

//                 } else {

//                     handle = new YHandler(label).appendProcedures(...procedures);

//                     this._y.handlers.push(handle);

//                 };

//             });

//         } catch (e) {

//             throw new Error(e);

//         };

//         return this;

//     };

// };

// /**
//  * @file entity/class.mjs
//  * @author Yakhin Nikita Artemovich <mr.y.nikita@gmail.com>
//  * @license Apache-2.0
//  * @copyright SYLS (Software Y Lib Solutions) 2023
// */