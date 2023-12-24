//#region YI

import { YArg } from "@syls/y/arg";
import { configLoop as config } from "./config.mjs";
import { YKit } from "../../../-module/class.mjs";
import { funcLoopRange, funcLoopRangeIn } from "@syls/func";
import { condIsNumberSig } from "../../../../../../cond/-module/module.mjs";

//#endregion
//#region YT

/** ### loopTC
 * @typedef loopTC
 * @prop {}
*/

/** @typedef {import('./module.mjs').loopT&loopTC} loopT */

//#endregion

/**
 * ### YLoop
 * 
 * 
 * 
 * ***
 * @class
 * @since `1.0.0`
 * @version `1.0.0`
 * 
*/
export class YLoop extends YKit {
    
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
     * @type {YLoop[]}
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
     * @arg {...YLoop} args `Аргументы`
     * @returns {YLoop[]}
    */
    static create(...args) {
        
        return super.create(...args);
        
    };
    /**
     * @arg {Y1} value `Значение`
     * @static
     * @method
     * @public
     * @returns {(Y1&YLoop)?}
     * @template {YLoop} Y1
     * @override
    */
    static setClass(value) {
        
        return super.setClass(value);
        
    };
    
    //#endregion
    //#region field
    
    /**
     * ### index
     * 
     * Индекс.
     * 
     * *** 
     * @since `1.0.0`
     * @type {number}
     * @field
     * @public
    */
    index;
    /**
     * ### stoped
     * 
     * Остановленность.
     * 
     * *** 
     * @since `1.0.0`
     * @type {boolean}
     * @field
     * @public
    */
    stoped;
    /**
     * ### reverseMode
     * 
     * Обратный режим.
     * 
     * *** 
     * @since `1.0.0`
     * @type {boolean}
     * @field
     * @public
    */
    reverseMode;
    
    //#endregion
    //#region method
    
    /**
     * @method
     * @public
     * @override
    */
    getClass() {
        
        return YLoop;
        
    };
    /**
     * ### setIndex
     * 
     * Метод установки индекса.
     * 
     * ***
     * @arg {number} value `Значение`
     * ***
     * @since `1.0.0`
     * @version `1.0.0`
     * @method
     * @public
    */
    setIndex(value) {
        
        this.index = value;

        if (this.index < 0) {

            this.index = this.cases.length - 1;

        } else if (this.index >= this.cases.length) {

            this.index = 0;

        };

        return this;
        
    };
    /**
     * ### setIndexByLabel
     * 
     * Метод установки индекса по индексу события с совпадающей меткой.
     * 
     * ***
     * @arg {string} label `Метка`
     * ***
     * @since `1.0.0`
     * @version `1.0.0`
     * @method
     * @public
    */
    setIndexByLabel(label) {
        
        funcLoopRangeIn(this.cases, (ycase, index, array, dc, db) => {

            if (ycase.label !== label) return;

            this.index = index;

            db();

        });

        return this;
        
    };
    /**
     * ### next
     * 
     * Метод пропуска следующих `value` событий.
     * 
     * ***
     * @arg {number} value `Значение`
     * ***
     * @since `1.0.0`
     * @version `1.0.0`
     * @method
     * @public
    */
    next(value = 1) {
        
        if (!condIsNumberSig(value) || value <= 0) return this;

        this.setIndex(this.index += value);

        return this;
        
    };
    /**
     * ### prev
     * 
     * Метод возврата на следующие `value` событий.
     * 
     * ***
     * @arg {number} value `Значение`
     * ***
     * @since `1.0.0`
     * @version `1.0.0`
     * @method
     * @public
    */
    prev(value = 1) {
        
        if (!condIsNumberSig(value) || value < 0) return this;

        this.setIndex(this.index -= value);

        return this;
        
    };
    /**
     * ### stop
     * 
     * Метод остановки цикла на определенном событии.
     * 
     * ***
     * @since `1.0.0`
     * @version `1.0.0`
     * @method
     * @public
    */
    stop() {
        
        this.stoped = true;

        return this;
        
    };
    /**
     * ### unstop
     * 
     * Метод продолжения цикла событий.
     * 
     * ***
     * @since `1.0.0`
     * @version `1.0.0`
     * @method
     * @public
    */
    unstop() {
        
        this.stoped = false;

        return this;
        
    };
    /**
     * @since `1.0.0`
     * @version `1.0.0`
     * @method
     * @public
     * @override
    */
    happen() {
        
        if (this.index >= this.cases.length || this.index < 0) this.index = 0;

        this.cases[this.index].happen(this);

        if (!this.stoped) this.next(1);

        return this;
        
    };

    //#endregion
    
    /**
     * ### YLoopConstructor
     * - Версия `1.0.0`
     * 
     * 
     * ***
     * 
     * 
     * 
     * ***
     * 
     * @arg {...loopTC&YLoop} args `Аргументы`
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
            
            /** @type {YArg<YLoop&loopTC>} */
            const yarg = args[0] instanceof YArg ? args[0] : new YArg(...args);
            
            yarg.setFirst(

                ['stoped', 'bool'],
                ['index', 'number'],
                ['reverseMode', 'bool'],

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
 * @file loop/class.mjs
 * @author Yakhin Nikita Artemovich <mr.y.nikita@gmail.com>
 * @license Apache-2.0
 * @copyright SYLS (Software Y Lib Solutions) 2023
*/