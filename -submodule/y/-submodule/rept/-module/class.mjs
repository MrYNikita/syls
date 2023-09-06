//#region YI

import { Y } from '../../../-module/export.mjs';
import { YArg } from '../../arg/-module/export.mjs';
import { configRept as config } from './config.mjs';

//#endregion
//#region YT

/** ### YReptT
 * - Тип `T`
 * 
 * Основной параметр модуля `YRept`.
 * 
 * ***
 * 
 * @typedef {YReptTE&YReptTU} YReptT
*/
/** ### YReptTE
 * - Тип `TE`
 * 
 * Параметр наследования `YRept`.
 * 
 * @typedef {Omit<DRept, keyof SRept>} YReptTE
*/
/** ### YReptTU
 * - Тип `TU`
 * 
 * Уникальные параметры `YRept`.
 * 
 * @typedef YReptTU
 * @prop {} _
*/
/** ### YReptTUG
 * - Тип `TUP`
 * 
 * Уникальные генеративные параметры `YRept`.
 * 
 * @typedef YReptTUG
 * @prop {null} _
*/

//#endregion

/**
 * @template Y1
*/
class SRept extends Y {
    
    /**
     * ### stock
     * 
     * ***
     * 
     * 
     * 
     * ***
     * @type {YRept[]}
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
     * @arg {...YRept} args `Аргументы`
     * @returns {YRept[]}
    */
    static create(...args) {
        
        return Object.getPrototypeOf(SRept).create.apply(this, args);
        
    };
    
};
/**
 * @extends SRept<Y1>
 * @template Y1
*/
class DRept extends SRept {
    
    /**
     * ### target
     * 
     * Цель.
     * 
     * *** 
     * @type {Y1}
     * @field
     * @public
    */
    target;
    
};
/**
 * @extends DRept<Y1>
 * @template Y1
*/
class IRept extends DRept {
    
    
    
};
/**
 * @extends IRept<Y1>
 * @template Y1
*/
class MRept extends IRept {
    
    
    
};
/**
 * @extends MRept<Y1>
 * @template Y1
*/
class FRept extends MRept {
    
    /**
     * ### YRept.constructor
     * 
     * 
     * 
     * ***
     * @arg {YReptT&G} args
    */
    constructor(args) {
        
        super(args = FRept.#before(args = arguments));
        
        FRept.#deceit.apply(this, [args]);
        
    };
    
    /** @arg {DRept} args */
    static #before(args) {
        
        /** @type {YArg<IRept>} */
        const yarg = args[0] instanceof YArg ? args[0] : new YArg(args);
        
        
        
        return yarg;
        
    };
    /** @arg {YArg<IRept>} args @this {YRept} */
    static #deceit(args) {
        
        try {
            
            FRept.#verify.apply(this, arguments);
            
        } catch (e) {
            
            if (config?.strictMode) {
                
                throw e;
                
            };
            
            return new YRept();
            
        } finally {
            
            
            
        };
        
    };
    /** @arg {YArg<IRept>} args @this {YRept} */
    static #verify(args) {
        
        const {
            
            
            
        } = args;
        
        FRept.#handle.apply(this, arguments);
        
    };
    /** @arg {YArg<IRept>} args @this {YRept} */
    static #handle(args) {
        
        
        
        FRept.#create.apply(this, arguments);
        
    };
    /** @arg {YArg<IRept>} args @this {YRept} */
    static #create(args) {
        
        const {
            
            
            
        } = args;
        
        this
        
            .adopt(args.getData());
        
    };
    
};

/**
 * ### YRept
 * - Тип `SDIMFY`
 * - Версия `0.0.0`
 * - Цепочка `BDVHC`
 * ***
 * 
 * Класс `YRept`.
 * 
 * ***
 * @class
 * @template Y1
 * @extends FRept<YReptTUG&Y1>
 * 
*/
export class YRept extends FRept {
    
    /** @arg {Y1} args */
    constructor(args) { super(...arguments); };
    
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
     * @returns {typeof YRept}
    */
    getClass() {
        
        return YRept;
        
    };
    
};

//#region YE

YRept.getY()['modules'].push(YRept);

//#endregion

/**
 * @file rept/class.mjs
 * @author Yakhin Nikita Artemovich <mr.y.nikita@gmail.com>
 * @license Apache-2.0
 * @copyright SYLS (Software Y Lib Solutions) 2023
*/


// //#region YI

// import { Y } from '@syls/y';
// import { YString } from '@syls/string';
// import { ansiSetColor } from '@syls/string/ansi';
// import { YBlock } from '../-submodule/block/-module/export.mjs';
// import { YTag } from '../-submodule/block/-submodule/tag/-module/export.mjs';


// //#endregion
// //#region YT

// /** ### YReptT
//  * - Тип `T`
//  * - Версия `0.0.0`
//  * - Модуль `ject\entity\rept`
//  * 
//  * Основной параметр модуля `YRept`.
//  * 
//  * ***
//  * 
//  * @typedef {YReptTE&YReptTU} YReptT
// */
// /** ### YReptTE
//  * - Тип `TE`
//  * - Версия `0.0.0`
//  * - Модуль `ject\entity\Rept`
//  * 
//  * Параметр наследования `YRept`.
//  * 
//  * @typedef {{[p in Exclude<keyof DRept,keyof SRept>|Exclude<keyof SRept,keyof DRept>]:(DRept[p]&SRept[p])}} YReptTE
// */
// /** ### YReptTU
//  * - Тип `TU`
//  * - Версия `0.0.0`
//  * - Модуль `ject\entity\Rept`
//  * 
//  * Уникальные параметры `YRept`.
//  * 
//  * @typedef YReptTU
//  * @prop {} _
// */
// /** ### YReptTUG
//  * - Тип `TUP`
//  * - Версия `0.0.0`
//  * - Модуль `ject\entity\Rept`
//  * 
//  * Уникальные генеративные параметры `YRept`.
//  * 
//  * @typedef YReptTUG
//  * @prop {null=} _
// */

// //#endregion

// /**
//  * @template {YReptTUG<G1>} G
// */
// class SRept extends Y {



// };
// /**
//  * @extends {SRept<G>}
//  * @template {YReptTUG} G
// */
// class DRept extends SRept {

//     /**
//      * ### tags
//      * 
//      * Теги.
//      * 
//      * *** 
//      * @type {YTag[]} 
//      * @protected
//     */
//     tags = [];
//     /**
//      * ### blocks
//      * 
//      * Блоки отчета.
//      * 
//      * *** 
//      * @type {YBlock[]} 
//      * @public
//     */
//     blocks = [];

// };
// /**
//  * @extends {DRept<G>}
//  * @template {YReptTUG} G
// */
// class IRept extends DRept {

    

// };
// /**
//  * @extends {IRept<G>}
//  * @template {YReptTUG<G1>} G
// */
// class MRept extends IRept {



// };
// /**
//  * @extends {MRept<G>}
//  * @template {YReptTUG} G
// */
// class FRept extends MRept {

//     /**
//      * ### YRept.constructor
//      * 
//      * 
//      * 
//      * ***
//      * @arg {YReptT&G} t
//     */
//     constructor(t) {

//         t = [...arguments];

//         super(Object.assign(t = FRept.#before(t), {}));

//         FRept.#deceit.apply(this, [t]);

//     };

//     /** @arg {any[]} t */
//     static #before(t) {

//         /** @type {YReptT} */
//         let r = {};

//         if (t?.length === 1 && [Object, YRept].includes(t[0]?.constructor) && !Object.getOwnPropertyNames(t[0]).includes('_ytp')) {

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
//     /** @arg {YReptT} t @this {YRept} */
//     static #deceit(t) {

//         try {

//             FRept.#verify.apply(this, [t]);

//         } catch (e) {

//             throw e;

//         } finally {



//         };

//     };
//     /** @arg {YReptT} t @this {YRept} */
//     static #verify(t) {

//         const {



//         } = t;

//         FRept.#handle.apply(this, [t]);

//     };
//     /** @arg {YReptT} t @this {YRept} */
//     static #handle(t) {



//         FRept.#create.apply(this, [t]);

//     };
//     /** @arg {YReptT} t @this {YRept} */
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
//  * ### YRept
//  * - Тип `SDIMFY`
//  * - Версия `0.0.0`
//  * - Модуль `ject\entity\Rept`
//  * - Цепочка `BDVHC`
//  * ***
//  * 
//  * 
//  * 
//  * ***
//  * @extends {FRept<G>}
//  * @template {YReptTUG} G
// */
// export class YRept extends FRept {

//     /**
//      * ### filter
//      * - Версия `0.0.0`
//      * - Модуль `ject\entity\rept`
//      * ***
//      * 
//      * Метод фильтрации по тегам.
//      * 
//      * ***
//      * @arg {...string} tags `Теги`
//      * @public
//     */
//     filter(...tags) {

//         this.tags.forEach(tag => {

//             if (tags.includes(tag.name)) {

//                 tag.hide = true;

//             };

//         });

//         return this;
        
//     };
//     /**
//      * ### display
//      * - Версия `0.0.0`
//      * - Модуль `ject\entity\Rept`
//      * ***
//      * 
//      * Метод отображения отчета.
//      * 
//      * ***
//      * @arg {any} entity `Сущность`
//      * @public
//     */
//     display(entity) {

//         const blocks = this.blocks.filter(block => block.tags.every(tag => !tag.hide)).map(block => {

//             const text = block.texts.map(text => text(entity)).join('\n');

//             if (text) {

//                 return new YString()

//                     .setPostfix('\n')
//                     .paste(`--- ${block.name}`)
//                     .setPostfix()
//                     .paste(text)
//                     .get(true);

//             } else {

//                 return '';

//             };

//         });

//         const result = new YString()

//             .paste(

//                 '###\n',
//                 ...blocks.filter(block => block),
//                 '###',

//             )
//             .formatReport()
//             .get(true);

//         let format = null;

//         const formats = [

//             { reg: /\p{L}/u, foreground: 'white', },
//             { reg: /\p{P}/u, foreground: 'cyan', },
//             { reg: /\p{N}|∞/u, foreground: 'yellow', },

//         ];

//         for (const char of result) {

//             if (!format || !format.reg.test(char)) {

//                 format = formats.find(format => format.reg.test(char)) ?? formats[0];

//                 ansiSetColor(format.foreground);

//             };

//             process.stdout.write(char);

//         };

//         return this;

//     };

//     /**
//      * ### appendBlocks
//      * - Версия `0.0.0`
//      * - Модуль `ject\entity\rept`
//      * ***
//      * 
//      * Метод добавления новых блоков.
//      * 
//      * ***
//      * @arg {...([string, function(G):string, number, ...]|YBlock<G>[])} blocks `Блоки`
//      * @public
//     */
//     appendBlocks(...blocks) {

//         blocks.forEach(block => {

//             if (block.constructor === Array) {

//                 block = new YBlock(...block);

//             };

//             const find = this.blocks.find(blockThis => blockThis.name === block.name);

//             if (find) {

//                 find.texts.push(...block.texts);

//             } else {

//                 this.blocks.push(block);

//             };

//             for (const i in block.tags) {

//                 const tag = block.tags[i];

//                 const find = this.tags.findIndex(tagThis => tagThis.name === tag.name);

//                 if (find === -1) {

//                     this.tags.push(tag);

//                 } else {

//                     block.tags[i] = this.tags[find];
                    
//                     this.tags[find].links.push(block);
                    
//                 };

//             };

//         });

//         return this;

//     };

// };