//#region YI

import { Y } from '../../../-module/class.mjs';
import { YArg } from '../../arg/-module/export.mjs';
import { configLog as config } from './config.mjs';

//#endregion
//#region YT

/** ### YLogT
 * - Тип `T`
 * 
 * Основной параметр модуля `YLog`.
 * 
 * @typedef {YLogTE&YLogTU&Y} YLogT
 * 
*/
/** ### YLogTE
 * - Тип `TE`
 * 
 * Параметр наследования `YLog`.
 * 
 * @typedef {Omit<DLog, keyof SLog>} YLogTE
 * 
*/
/** ### YLogTU
 * - Тип `TU`
 * 
 * Уникальные параметры `YLog`.
 * 
 * @typedef YLogTU
 * @prop {any} _
 * 
*/

//#endregion

class SLog extends Y {
    
    /**
     * ### stock
     * 
     * ***
     * 
     * 
     * 
     * ***
     * @type {YLog[]}
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
     * @arg {...YLog} args `Аргументы`
     * @returns {YLog[]}
    */
    static create(...args) {
        
        return Object.getPrototypeOf(SLog).create.apply(this, args);
        
    };
    
};
class DLog extends SLog {
    
    
    
};
class ILog extends DLog {
    
    
    
};
class MLog extends ILog {
    
    
    
};
class FLog extends MLog {
    
    /**
     * ### YLog.constructor
     * 
     * 
     * 
     * ***
     * @arg {YLogT} args
    */
    constructor(args) {
        
        super(args = FLog.#before(args = arguments));
        
        FLog.#deceit.apply(this, [args]);
        
        return this.correlate();
        
    };
    
    /** @arg {DLog} args */
    static #before(args) {
        
        /** @type {YArg<ILog>} */
        const yarg = args instanceof YArg ? args : new YArg(args);
        
        
        
        return yarg;
        
    };
    /** @arg {YArg<ILog>} args @this {YLog} */
    static #deceit(args) {
        
        try {
            
            FLog.#verify.apply(this, arguments);
            
        } catch (e) {
            
            if (config?.strictMode) {
                
                throw e;
                
            };
            
            return new YLog();
            
        } finally {
            
            
            
        };
        
    };
    /** @arg {YArg<ILog>} args @this {YLog} */
    static #verify(args) {
        
        const {
            
            
            
        } = args;
        
        FLog.#handle.apply(this, arguments);
        
    };
    /** @arg {YArg<ILog>} args @this {YLog} */
    static #handle(args) {
        
        
        
        FLog.#create.apply(this, arguments);
        
    };
    /** @arg {YArg<ILog>} args @this {YLog} */
    static #create(args) {
        
        const {
            
            
            
        } = args;
        
        this
        
            .adopt(args.getData());
        
    };
    
};

/**
 * ### YLog
 * - Тип `SDIMFY`
 * - Версия `0.0.0`
 * - Цепочка `BDVHC`
 * ***
 * 
 * Класс `YLog`.
 * 
 * ***
 * @class
 * 
*/
export class YLog extends FLog {
    
    /**
     * @method
     * @public
     * @returns {typeof YLog}
    */
    getClass() {
        
        return YLog;
        
    };
    
};

//#region YE

YLog.getY()['modules'].push(YLog);

//#endregion

// //#region YI

// import { Y } from '@syls/y';
// import { YString } from '@syls/string';

// import { YTag } from '../-submodule/tag/-module/export.mjs';
// import { YPage, configPage, } from '../-submodule/page/-module/export.mjs';
// import { YRecord } from '../-submodule/record/-module/export.mjs';

// /** @type {import('./config.mjs')['default']?} */
// let config = null;

// await import('./config.mjs')

//     .then(i => config = i.default.value)
//     .catch(e => e);

// /** @type {import('./error.mjs')['default']?} */
// let error = null;

// await import('./error.mjs')

//     .then(i => error = i.default)
//     .catch(e => e);

// //#endregion
// //#region YT

// /** ### YLogT
//  * - Тип `T`
//  * - Версия `0.0.0`
//  * - Модуль `ject\entity\log`
//  * 
//  * Основной параметр модуля `YLog`.
//  * 
//  * @typedef {YLogTE&YLogTU} YLogT
//  * 
// */
// /** ### YLogTE
//  * - Тип `TE`
//  * - Версия `0.0.0`
//  * - Модуль `ject\entity\log`
//  * 
//  * Параметр наследования `YLog`.
//  * 
//  * @typedef {{[p in Exclude<keyof DLog,keyof SLog>|Exclude<keyof SLog,keyof DLog>]:(DLog[p]&SLog[p])}} YLogTE
//  * 
// */
// /** ### YLogTU
//  * - Тип `TU`
//  * - Версия `0.0.0`
//  * - Модуль `ject\entity\log`
//  * 
//  * Уникальные параметры `YLog`.
//  * 
//  * @typedef YLogTU
//  * @prop {number} size
//  * 
// */

// //#endregion

// class SLog extends Y {
    
//     /**
//      * ### config
//      * 
//      * Конфигуратор.
//      * 
//      * ***
//      * @public
//     */
//     static config = config;
    
// };
// class DLog extends SLog {
    
//     /**
//      * ### tags
//      * 
//      * Теги.
//      * 
//      * *** 
//      * @type {YTag[]} 
//      * @public
//     */
//     tags = [];
//     /**
//      * ### size
//      * 
//      * Размер страниц.
//      * 
//      * *** 
//      * @type {number} 
//      * @public
//     */
//     size;
//     /**
//      * ### limit
//      * 
//      * Предел страниц.
//      * 
//      * *** 
//      * @type {number?} 
//      * @public
//     */
//     limit;
    
// };
// class ILog extends DLog {
    
//     /**
//      * ### pages
//      * 
//      * Страницы.
//      * 
//      * *** 
//      * @type {YPage[]} 
//      * @protected
//     */
//     pages = [];
    
// };
// class MLog extends ILog {
    
    
    
// };
// class FLog extends MLog {
    
//     /**
//      * ### YLog.constructor
//      * 
//      * 
//      * 
//      * ***
//      * @arg {YLogT} t
//     */
//     constructor(t) {
        
//         t = [...arguments];
        
//         super(Object.assign(t = FLog.#before(t), {}));
        
//         FLog.#deceit.apply(this, [t]);
        
//     };
    
//     /** @arg {any[]} t */
//     static #before(t) {
        
//         /** @type {YLogT} */
//         let r = {};
        
//         if (t?.length === 1 && [Object, YLog].includes(t[0]?.constructor) && !Object.getOwnPropertyNames(t[0]).includes('_ytp')) {
            
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
//     /** @arg {YLogT} t @this {YLog} */
//     static #deceit(t) {
        
//         try {
            
//             FLog.#verify.apply(this, [t]);
            
//         } catch (e) {
            
//             throw e;
            
//         } finally {
            
            
            
//         };
        
//     };
//     /** @arg {YLogT} t @this {YLog} */
//     static #verify(t) {
        
//         const {
            
            
            
//         } = t;
        
//         FLog.#handle.apply(this, [t]);
        
//     };
//     /** @arg {YLogT} t @this {YLog} */
//     static #handle(t) {
        
        
        
//         FLog.#create.apply(this, [t]);
        
//     };
//     /** @arg {YLogT} t @this {YLog} */
//     static #create(t) {
        
//         const {
            
            
            
//         } = t;
        
//         this.adopt(t);
        
//         if (config) {
            
//             this.adoptDefault(config);
            
//         };

//         config.tagsRequired.forEach(tag => {

//             this.tags.push(new YTag(tag));

//         });

//         this.pages = [new YPage(this)];
        
//     };
    
// };

// /**
//  * ### YLog
//  * - Тип `SDIMFY`
//  * - Версия `0.0.0`
//  * - Модуль `ject\entity\log`
//  * - Цепочка `BDVHC`
//  * ***
//  * 
//  * 
//  * 
//  * ***
//  * 
// */
// export class YLog extends FLog {
    

//     /**
//      * ### getRecords
//      * - Версия `0.0.0`
//      * - Модуль `ject\entity\log`
//      * ***
//      * 
//      * Метод получения записей журнала.
//      * 
//      * Если будут указаны `теги`, то будут выбраны лишь соотвествующие им записи. В противном случае будут получены все записи.
//      * 
//      * Также отражены будут только те `теги`, которые не были отфильтрованы.
//      * 
//      * ***
//      * @arg {...string} tags `Теги`
//      * @public
//     */
//     getRecords(...tags) {
        
//         const records = this.pages.map(page => page.records).flat().filter(record => record.tags.every(tag => !tag.filtred));
        
//         return tags.length ? records.filter(record => record.tags.find(tag => tags.includes(tag.name))) : records;
        
//     };

//     /**
//      * ### display
//      * - Версия `0.0.0`
//      * - Модуль `ject\entity\log`
//      * ***
//      * 
//      * Метод отображения журнала.
//      * 
//      * ***
//      * @public
//     */
//     display() {
        
//         new YString()

//             .setPostfix('\n')
//             .paste(...this.pages.map(page => page.records).flat().map(record => record.toString()))
//             .display();

//         return this;
        
//     };

//     /**
//      * ### appendTags
//      * - Версия `0.0.0`
//      * - Модуль `ject\entity\log`
//      * ***
//      * 
//      * Метод добавления новых тегов в журнал.
//      * 
//      * ***
//      * @arg {...string} tags `Теги`
//      * @public
//     */
//     appendTags(...tags) {

//         tags.forEach(tag => {

//             if (tag.constructor !== YTag) {

//                 tag = new YTag(tag);

//             };

//             const tagThis = this.tags.find(tagThis => tagThis.name === tag.name);

//             if (tagThis) {

//                 tag = tagThis;

//             } else {

//                 this.tags.push(tag);

//             };

//         });

//         return this;
        
//     };
//     /**
//      * ### appendRecords
//      * - Версия `0.0.0`
//      * - Модуль `ject\entity\log`
//      * ***
//      * 
//      * Метод добавления новых записей в журнал. 
//      * 
//      * ***
//      * @arg {...[string, string[]]} records `Записи`.
//      * @public
//     */
//     appendRecords(...records) {

//         records.filter(data => data.constructor === Array).forEach(data => {

//             const record = new YRecord(...data);

//             record.tags.forEach((tag, i, a) => {

//                 this.appendTags(tag = new YTag(tag));

//                 const tagThis = this.tags.find(tagThis => tagThis.name === tag.name);

//                 a[i] = tagThis;

//                 tagThis.appendRecords(record);

//             });

//             let page = this.pages.at(-1);
//             let count = this.pages.reduce((p, c) => p + c.records.length, 0);

//             if ((page.size ?? this.size ?? configPage.size) <= this.pages.at(-1).records.length) {

//                 this.pages.push(new YPage(this));

//             };

//             if (this.limit ?? this.constructor.config.limit > count) {

//                 this.pages.at(-1).records.push(record);

//             };

//         });

//         return this;
        
//     };
//     /**
//      * ### appendFilters
//      * - Версия `0.0.0`
//      * - Модуль `ject\entity\log`
//      * ***
//      * 
//      * Метод добавления фильтров по тегам.
//      * 
//      * ***
//      * @arg {...string} filters `Фильтры`
//      * @public
//     */
//     appendFilters(...filters) {
        
//         this.tags.forEach(tag => {

//             if (filters.includes(tag.name)) {

//                 tag.filtred = true;

//             };

//         });

//         return this;
        
//     };
    
// };