//#region YI

import { YArg } from "@syls/y/arg";
import { YMany } from "@syls/y/many";
import { YLayout } from '../-submodule/layout/-module/class.mjs';
import { YCorrecter } from '../-submodule/correcter/-module/class.mjs';
import { condIsArray, condIsEqualIn, condIsFunc, condIsInstance, condIsNumber, condIsNumberInt, condIsString, condIsStringSig } from "@syls/y/cond";
import { configString as config } from "./config.mjs";
import { stringAppendEvery, stringGetColumn, stringGetColumns, stringGetRow, stringGetRows, stringGetSizes, stringGetStat, stringPad, stringSetColumn, stringSetColumns, stringSetRow, stringSetRows, stringToCaseDown, stringToCaseUp, stringGetMatrix, stringSkip, stringSplitEvery, stringUnify, stringPaste, stringPasteWrap, stringPaint } from "./module.mjs";
import { funcLoopRangeIn } from "@syls/func";
import { ansiGetParamColor, ansiGetParamColorReset } from "../-submodule/ansi/-module/module.mjs";


//#endregion
//#region YT

/** ### stringTC
 * @typedef stringTC
 * @prop {}
*/

/** @typedef {import('./module.mjs').stringT&stringTC} stringT */

//#endregion


/**
 * ### YString
 * 
 * 
 * 
 * ***
 * @class
 * @since `1.0.0`
 * @version `1.0.0`
 * @extends YMany<Y1>
 * @template {string} Y1
*/
export class YString extends YMany {

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
     * @type {YString[]}
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
     * @arg {...YString} args `Аргументы`
     * @returns {YString[]}
    */
    static create(...args) {

        return super.create(...args);

    };
    /**
     * @arg {Y1} value `Значение`
     * @static
     * @method
     * @public
     * @returns {(Y1&YString)?}
     * @template {YString} Y1
     * @override
    */
    static setClass(value) {

        return super.setClass(value);

    };

    //#endregion
    //#region field
    
    /**
     * ### ansi
     * 
     * `Ansi` вставки.
     * 
     * *** 
     * @since `1.0.0`
     * @type {[number, string][]}
     * @field
     * @public
    */
    ansi;
    /**
     * ### sizes
     * 
     * Размеры.
     * 
     * *** 
     * @since `1.0.0`
     * @type {number?}
     * @field
     * @public
    */
    sizes;
    /**
     * ### visSizes
     * 
     * Размеры области видимости.
     * 
     * *** 
     * @since `1.0.0`
     * @type {number?}
     * @field
     * @public
    */
    visSizes;
    /**
     * ### layout
     * 
     * Разметка.
     * 
     * *** 
     * @since `1.0.0`
     * @type {YLayout}
     * @field
     * @public
    */
    layout;
    /**
     * ### prefix
     * 
     * Префикс.
     * 
     * *** 
     * @since `1.0.0`
     * @type {()=>string}
     * @field
     * @public
    */
    prefix;
    /**
     * ### postfix
     * 
     * Постфикс.
     * 
     * *** 
     * @since `1.0.0`
     * @type {()=>string}
     * @field
     * @public
    */
    postfix;
    /**
     * ### templates
     * 
     * Шаблоны.
     * 
     * *** 
     * @since `1.0.0`
     * @type {any[]}
     * @field
     * @public
    */
    templates;
    /**
     * ### filters
     * 
     * Фильтры.
     * 
     * *** 
     * @since `1.0.0`
     * @type {(string|RegExp)[]}
     * @field
     * @public
    */
    filters;

    //#endregion
    //#region method

    /**
     * ### get
     * 
     * Метод получения текущего текста.
     * 
     * ***
     * @arg {boolean} style `Стиль`
     * ***
     * @since `1.0.0`
     * @version `1.0.0`
     * @method
     * @public
    */
    get(style) {

        let result = this.values;

        if (style) {



        };

        return result;
        
    };
    /**
     * ### appendFilter
     * 
     * Метод добавления фильтров.
     * 
     * ***
     * @arg {...(string|RegExp)} filters `Фильтры`
     * ***
     * @since `1.0.0`
     * @version `1.0.0`
     * @method
     * @public
    */
    appendFilter(...filters) {
        
        for (const filter of filters) if (!condIsEqualIn(this.filters, filter)) this.filters.push(filter);

        return this;
        
    };

    //#endregion

    /**
     * ### YStringConstructor
     * 
     * 
     * 
     * ***
     * 
     * 
     * 
     * ***
     * 
     * @arg {...stringTC&YString} args `Аргументы`
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

            /** @type {YArg<YString&stringTC>} */
            const yarg = args[0] instanceof YArg ? args[0] : new YArg(...args);



            super(yarg);

            yarg.setFirst(

                ['prefix', 'string', 'func'],
                ['postfix', 'string', 'func'],
                ['sizes', 'arrayNumber'],
                ['visSizes', 'arrayNumber'],

            );

            //#endregion
            //#region verify



            //#endregion
            //#region handle

            if (condIsString(yarg.used.prefix)) {

                yarg.used.prefix = () => yarg.used.prefix;

            };

            if (condIsString(yarg.used.postfix)) {

                yarg.used.postfix = () => yarg.used.postfix;

            };

            //#endregion
            //#region comply



            //#endregion

            return this

                .adopt(yarg.used)
                .do(self => {

                    const cursorController = self.getCursorController();

                    if (!cursorController.get()) return;

                    cursorController

                        .get()
                        .move(0, this.values.length)

                })


        } catch (err) {

            if (config.params.strictMode) {

                throw err;

            };

        } finally {



        };

    };

    [Symbol.toPrimitive](to) {

        return this.values;

    };

};

/**
 * @file string/class.mjs
 * @author Yakhin Nikita Artemovich <mr.y.nikita@gmail.com>
 * @license Apache-2.0
 * @copyright SYLS (Software Y Lib Solutions) 2023
*/