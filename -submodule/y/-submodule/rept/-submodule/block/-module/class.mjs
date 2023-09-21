//#region YI

import { Y } from '../../../../../-module/class.mjs';
import { YArg } from '../../../../arg/-module/export.mjs';
import { configBlock as config } from './config.mjs';

//#endregion
//#region YT

/** ### YBlockT
 * - Тип `T`
 * 
 * Основной параметр модуля `YBlock`.
 * 
 * @typedef {YBlockTE&YBlockTU&Y} YBlockT
 * 
*/
/** ### YBlockTE
 * - Тип `TE`
 * 
 * Параметр наследования `YBlock`.
 * 
 * @typedef {Omit<DBlock, keyof SBlock>} YBlockTE
 * 
*/
/** ### YBlockTU
 * - Тип `TU`
 * 
 * Уникальные параметры `YBlock`.
 * 
 * @typedef YBlockTU
 * @prop {any} _
 * 
*/

//#endregion

class SBlock extends Y {
    
    /**
     * ### stock
     * 
     * ***
     * 
     * 
     * 
     * ***
     * @type {YBlock[]}
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
     * @arg {...YBlock} args `Аргументы`
     * @returns {YBlock[]}
    */
    static create(...args) {
        
        return Object.getPrototypeOf(SBlock).create.apply(this, args);
        
    };
    
};
class DBlock extends SBlock {
    
    /**
     * ### tags
     * 
     * Теги.
     * 
     * *** 
     * @type {string[]}
     * @field
     * @public
    */
    tags;
    /**
     * ### funcs
     * 
     * Функции.
     * 
     * *** 
     * @type {(()=>string)[]}
     * @field
     * @public
    */
    funcs;
    /**
     * ### label
     * 
     * Метка.
     * 
     * *** 
     * @type {string}
     * @field
     * @public
    */
    label;
    /**
     * ### title
     * 
     * Заголовок.
     * 
     * *** 
     * @type {string}
     * @field
     * @public
    */
    title;
    /**
     * ### priority
     * 
     * Приоритет.
     * 
     * *** 
     * @type {number}
     * @field
     * @public
    */
    priority;
    
};
class IBlock extends DBlock {
    
    
    
};
class MBlock extends IBlock {
    
    
    
};
class FBlock extends MBlock {
    
    /**
     * ### YBlock.constructor
     * 
     * 
     * 
     * ***
     * @arg {YBlockT} args
    */
    constructor(args) {
        
        super(args = FBlock.#before(args = arguments));
        
        FBlock.#deceit.apply(this, [args]);
        
        return this.correlate();
        
    };
    
    /** @arg {DBlock} args */
    static #before(args) {
        
        /** @type {YArg<IBlock>} */
        const yarg = args instanceof YArg ? args : new YArg(args);
        
        yarg.set(

            ['tags', 'arrayString'],
            ['label', 'string'],
            ['title', 'string'],
            ['funcs', 'arrayFunc'],
            ['priority', 'number'],

        );
        
        return yarg;
        
    };
    /** @arg {YArg<IBlock>} args @this {YBlock} */
    static #deceit(args) {
        
        try {
            
            FBlock.#verify.apply(this, arguments);
            
        } catch (e) {
            
            if (config?.strictMode) {
                
                throw e;
                
            };
            
            return new YBlock();
            
        } finally {
            
            
            
        };
        
    };
    /** @arg {YArg<IBlock>} args @this {YBlock} */
    static #verify(args) {
        
        const {
            
            
            
        } = args;
        
        FBlock.#handle.apply(this, arguments);
        
    };
    /** @arg {YArg<IBlock>} args @this {YBlock} */
    static #handle(args) {
        
        
        
        FBlock.#create.apply(this, arguments);
        
    };
    /** @arg {YArg<IBlock>} args @this {YBlock} */
    static #create(args) {
        
        const {
            
            
            
        } = args;
        
        this
        
            .adopt(args.getData());
        
    };
    
};

/**
 * ### YBlock
 * - Тип `SDIMFY`
 * - Версия `1.0.0`
 * - Цепочка `BDVHC`
 * ***
 * 
 * Класс `YBlock`.
 * 
 * Блок отчёта предназначен для формирования строкового сообщения, пригодного для формирования какой-либо отчётности по указанной сущности.
 * Обычно блоки одной сущности описывают разные её параметры, сгруппированные по каким-либо признакам, определённым автором отчёта.
 * 
 * Они представлены:
 * - Метками определения
 * - Тегами, позволяющими объединять блоки в группы
 * - Функциями, описывающими контент блоков
 * - Приоритетами, определяющими порядок отображения блоков
 * 
 * Блоки отображаются последовательно друг за другом в зависимости от приоритета того или иного блока.
 * Для каждого из них указывается метка и псевдоним (используемый для отображения названия блока).
 * В первую очередь указывается псевдоним блока, затем внутрнее содержимое.
 * Завершает блок разделительная линия отчёта, которая позволяет отделить один блок от другого.
 * 
 * Контроль отображения тех или иных блоков осуществляется с помощью приоритетов и тегов.
 * Теги дают возможность определять группы блоков и контролировать их отображения.
 * Например, можно определить определенную группу блоков и отфильтровать её, чтобы она и, следовательно, всё её блоки не отобразились.
 * Приоритеты же определюят порядок отображения блоков, где 0 имеет минимальный приоритет, а большие числа - максимальный.
 * Блоки максимального приоритета будут отображаться последними в логировании, чтобы их можно было увидеть сразу.
 * 
 * ***
 * @class
 * 
*/
export class YBlock extends FBlock {
    
    /**
     * @method
     * @public
     * @returns {typeof YBlock}
    */
    getClass() {
        
        return YBlock;
        
    };
    
};

//#region YE

YBlock.getY()['modules'].push(YBlock);

//#endregion

// //#region YI

// import { Y } from '@syls/y';
// import { YTag } from '../-submodule/tag/-module/export.mjs';
// import { YRept } from '../../../-module/export.mjs';


// //#endregion
// //#region YT

// /** ### YBlockT
//  * - Тип `T`
//  * - Версия `0.0.0`
//  * - Модуль `ject\entity\report\block`
//  * 
//  * Основной параметр модуля `YBlock`.
//  * 
//  * ***
//  * 
//  * @typedef {YBlockTE&YBlockTU} YBlockT
// */
// /** ### YBlockTE
//  * - Тип `TE`
//  * - Версия `0.0.0`
//  * - Модуль `ject\entity\report\block`
//  * 
//  * Параметр наследования `YBlock`.
//  * 
//  * @typedef {{[p in Exclude<keyof DBlock,keyof SBlock>|Exclude<keyof SBlock,keyof DBlock>]:(DBlock[p]&SBlock[p])}} YBlockTE
// */
// /** ### YBlockTU
//  * - Тип `TU`
//  * - Версия `0.0.0`
//  * - Модуль `ject\entity\report\block`
//  * 
//  * Уникальные параметры `YBlock`.
//  * 
//  * @typedef YBlockTU
//  * @prop {} _
// */
// /** ### YBlockTUG
//  * - Тип `TUP`
//  * - Версия `0.0.0`
//  * - Модуль `ject\entity\report\block`
//  * 
//  * Уникальные генеративные параметры `YBlock`.
//  * 
//  * @typedef YBlockTUG
//  * @prop {null=} _
// */

// //#endregion

// /**
//  * @template {YBlockTUG} G
// */
// class SBlock extends Y {
    
    
    
// };
// /**
//  * @extends {SBlock<G>}
//  * @template {YBlockTUG} G
// */
// class DBlock extends SBlock {
    
//     /**
//      * ### name
//      * 
//      * Наименование.
//      * 
//      * *** 
//      * @type {string?} 
//      * @public
//     */
//     name;
//     /**
//      * ### tags
//      * 
//      * Теги.
//      * 
//      * По тегам можно отфильтровать лишние блоки из отчета или осуществлять манипуляции над ними.
//      * 
//      * *** 
//      * @type {YTag[]} 
//      * @public
//     */
//     tags = [];
//     /**
//      * ### texts
//      * 
//      * Текста.
//      * 
//      * Представлены массивом функций, которые принимают на вход объект отчета и возвращают строки.
//      * 
//      * *** 
//      * @type {[function(G):string][]} 
//      * @public
//     */
//     texts;
//     /**
//      * ### priority
//      * 
//      * Приоритет.
//      * 
//      * Наиболее приоритетные блоки будут отображены снизу, чтобы их можно было увидеть в числе первых.
//      * 
//      * *** 
//      * @type {number?} 
//      * @public
//     */
//     priority;
    
// };
// /**
//  * @extends {DBlock<G>}
//  * @template {YBlockTUG} G
// */
// class IBlock extends DBlock {
    
    
    
// };
// /**
//  * @extends {IBlock<G>}
//  * @template {YBlockTUG} G
// */
// class MBlock extends IBlock {
    
    
    
// };
// /**
//  * @extends {MBlock<G>}
//  * @template {YBlockTUG} G
// */
// class FBlock extends MBlock {
    
//     /**
//      * ### YBlock.constructor
//      * 
//      * 
//      * 
//      * ***
//      * @arg {YBlockT&G} t
//     */
//     constructor(t) {

//         t = [...arguments];

//         super(Object.assign(t = FBlock.#before(t), {}));
        
//         FBlock.#deceit.apply(this, [t]);
        
//     };
    
//     /** @arg {any[]} t */
//     static #before(t) {
        
//         /** @type {YBlockT} */
//         let r = {};
        
//         if (t?.length === 1 && [Object, YBlock].includes(t[0]?.constructor) && !Object.getOwnPropertyNames(t[0]).includes('_ytp')) {
            
//             r = t[0];
            
//         } else if (t?.length) {
            
//             if (t[0]?._ytp) {

//                 t = [...t[0]._ytp];
            
//             };
            
//             switch (t.length) {
                
//                 default: r.tags = t.slice(3);
//                 case 3: r.priority = t[2];
//                 case 2: r.texts = t[1];
//                 case 1: r.name = t[0]; 
                
//             };
            
//             if (!Object.values(r).length) {
                
//                 r = { _ytp: t, };
                
//             };
            
//         };
        
//         return r;
        
//     };
//     /** @arg {YBlockT} t @this {YBlock} */
//     static #deceit(t) {
        
//         try {
            
//             FBlock.#verify.apply(this, [t]);
            
//         } catch (e) {
            
//             throw e;
            
//         } finally {
            
            
            
//         };
        
//     };
//     /** @arg {YBlockT} t @this {YBlock} */
//     static #verify(t) {
        
//         const {
            
            
            
//         } = t;
        
//         FBlock.#handle.apply(this, [t]);
        
//     };
//     /** @arg {YBlockT} t @this {YBlock} */
//     static #handle(t) {
        
//         if (t.texts) {

//             if (t.texts.constructor !== Array) {

//                 t.texts = [t.texts];

//             };

//         };

//         if (t.tags?.length) {

//             t.tags = t.tags.map(tag => new YTag(this, tag));

//         };
        
//         FBlock.#create.apply(this, [t]);
        
//     };
//     /** @arg {YBlockT} t @this {YBlock} */
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
//  * ### YBlock
//  * - Тип `SDIMFY`
//  * - Версия `0.0.0`
//  * - Модуль `ject\entity\report\block`
//  * - Цепочка `BDVHC`
//  * ***
//  * 
//  * 
//  * 
//  * ***
//  * @extends {FBlock<G>}
//  * @template {YBlockTUG&YRept} G
// */
// export class YBlock extends FBlock {
    
    
    
// };