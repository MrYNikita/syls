//#region YI

import { Y, yIsInstance } from '../../../-module/export.mjs';
import { YArg } from '../../arg/-module/export.mjs';
import { YCond } from '../../cond/-module/class.mjs';
import { YBlock } from '../-submodule/block/-module/class.mjs';
import { configRept as config } from './config.mjs';

//#endregion
//#region YT

/** ### reptTC
 * @typedef reptTC
 * @prop {}
*/

/** @typedef {import('./module.mjs').reptT&reptTC} reptT */

//#endregion

/**
 * ### YRept
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
export class YRept extends Y {
    
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
        
        return super.create(...args);
        
    };
    /**
     * @arg {Y1} value `Значение`
     * @static
     * @method
     * @public
     * @returns {(Y1&YRept)?}
     * @template {YRept} Y1
     * @override
    */
    static setClass(value) {
        
        return super.setClass(value);
        
    };
    
    //#endregion
    //#region field
    
    /**
     * ### title
     * 
     * Заголовок.
     * 
     * *** 
     * @since `1.0.0`
     * @type {string?}
     * @field
     * @public
    */
    title;
    /**
     * ### target
     * 
     * Цель.
     * 
     * *** 
     * @since `1.0.0`
     * @type {Y1}
     * @field
     * @public
    */
    target;
    /**
     * ### blocks
     * 
     * Блоки.
     * 
     * *** 
     * @since `1.0.0`
     * @type {YBlock[]}
     * @field
     * @protected
    */
    blocks;
    /**
     * ### iterate
     * 
     * Итерация.
     * 
     * *** 
     * @since `1.0.0`
     * @type {number}
     * @field
     * @protected
    */
    iterate;
    
    //#endregion
    //#region method
    
    /**
     * @method
     * @public
     * @override
    */
    getClass() {
        
        return YRept;
        
    };
    
    /**
     * ### get
     * 
     * Метод получения текста отчёта.
     * 
     * ***
     * 
     * 
     * 
     * ***
     * @since `1.0.0`
     * @version `1.0.0`
     * @method
     * @public
    */
    get() {

        let result = '';

        const blocks = [

            ...this.blocks,
            ...config.params.blocks,

        ].sort((p, c) => p.priority - c.priority);

        result += `## ${this.title}\n`;

        for (const block of blocks) {

            result += `### ${block.title ?? block.label}\n`;

            for (const point of block.points) {
                
                result += `${point(this.target)}\n`;

            };

        };

        result += '###';

        return result;
        
    };
    /**
     * ### getBlock
     * 
     * Метод получения блока по метке.
     * 
     * ***
     * @arg {string} label `Метка`
     * 
     * 
     * ***
     * @since `1.0.0`
     * @version `1.0.0`
     * @method
     * @public
    */
    getBlock(label) {
        
        return this.blocks.find(block => block.label === label) ?? null;
        
    };
    /**
     * ### display
     * 
     * Метод отображения отчёта.
     * 
     * ***
     * 
     * 
     * 
     * ***
     * @since `1.0.0`
     * @version `1.0.0`
     * @method
     * @public
    */
    display() {
        
        this.iterate++;

        console.log(this.get());

        return this;
        
    };
    /**
     * ### appendBlock
     * 
     * Метод добавления блоков.
     * 
     * ***
     * @arg {string} label `Метка`
     * @arg {string} title `Заголовок`
     * @arg {number} priority `Приоритет`
     * @arg {string[]} tags `Теги`
     * @arg {((self:Y1)=>string)[]} funcs `Функции`
     * ***
     * @since `1.0.0`
     * @version `1.0.0`
     * @method
     * @public
    */
    appendBlock(label, title, priority, tags, funcs) {
        
        const values = YCond.isString(label) ? [[...arguments]] : arguments;

        for (const value of values) {

            if (!yIsInstance(value, Array) || this.getBlock(value[0])) continue;

            this.blocks.push(new YBlock(...value));

        };

        return this;
        
    };
    
    //#endregion
    
    /**
     * ### YReptConstructor
     * - Версия `1.0.0`
     * 
     * 
     * ***
     * 
     * 
     * 
     * ***
     * 
     * @arg {...reptTC&Y1} args `Аргументы`
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
            
            /** @type {YArg<YRept>} */
            const yarg = args instanceof YArg ? args : new YArg(args);
            
            yarg.set(

                ['target', 'ject'],
                ['title', 'string'],

            );
            
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
 * @file rept/class.mjs
 * @author Yakhin Nikita Artemovich <mr.y.nikita@gmail.com>
 * @license Apache-2.0
 * @copyright SYLS (Software Y Lib Solutions) 2023
*/