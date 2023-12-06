//#region YI

import { Y } from '../../../../../-module/class.mjs';
import { YArg } from '../../../../arg/-module/export.mjs';
import { configBlock as config } from "./config.mjs";

//#endregion
//#region YT

/** ### blockTC
 * @typedef blockTC
 * @prop {}
*/

/** @typedef {import('./module.mjs').blockT&blockTC} blockT */

//#endregion

/**
 * ### YBlock
 * 
 * Класс блоков отчёта.
 * 
 * Данный класс предназначен для отображения отдельных элементов отчёта в виде блоков с информацией.
 * Информация в блоках хранится в виде функций, принимающих в качестве аргумента объект, по которому формируется отчёт.
 * 
 * ***
 * @class
 * @since `1.0.0`
 * @version `1.0.0`
 * @template Y1
 * 
*/
export class YBlock extends Y {
    
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
        
        return super.create(...args);
        
    };
    /**
     * @arg {Y1} value `Значение`
     * @static
     * @method
     * @public
     * @returns {(Y1&YBlock)?}
     * @template {YBlock} Y1
     * @override
    */
    static setClass(value) {
        
        return super.setClass(value);
        
    };
    
    //#endregion
    //#region field
    
    /**
     * ### tags
     * 
     * Теги.
     * 
     * *** 
     * @since `1.0.0`
     * @type {string[]}
     * @field
     * @public
    */
    tags;
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
     * ### label
     * 
     * Метка.
     * 
     * *** 
     * @since `1.0.0`
     * @type {string}
     * @field
     * @public
    */
    label;
    /**
     * ### points
     * 
     * Пункты.
     * 
     * *** 
     * @since `1.0.0`
     * @type {((self: Y1) => string)[]}
     * @field
     * @public
    */
    points;
    /**
     * ### priority
     * 
     * Приоритет.
     * 
     * *** 
     * @since `1.0.0`
     * @type {number}
     * @field
     * @public
    */
    priority;
    
    //#endregion
    //#region method
    
    /**
     * @method
     * @public
     * @override
    */
    getClass() {
        
        return YBlock;
        
    };
    
    
    //#endregion
    
    /**
     * ### YBlockConstructor
     * - Версия `1.0.0`
     * 
     * 
     * ***
     * 
     * 
     * 
     * ***
     * 
     * @arg {blockTC&Y1} args `Аргументы`
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
            
            /** @type {YArg<YBlock>} */
            const yarg = args instanceof YArg ? args : new YArg(args);

            yarg
            
                .uncover()
                .set(

                    ['tags', 'arrayString'],
                    ['label', 'string'],
                    ['title', 'string'],
                    ['points', 'arrayFunc', 'arrayString'],
                    ['priority', 'number'],

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
 * @file block/class.mjs
 * @author Yakhin Nikita Artemovich <mr.y.nikita@gmail.com>
 * @license Apache-2.0
 * @copyright SYLS (Software Y Lib Solutions) 2023
*/