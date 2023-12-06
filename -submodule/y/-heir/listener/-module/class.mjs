//#region YI

import { YArg } from "@syls/y/arg";
import { YEntity } from '@syls/y/entity';
import { emitKeypressEvents } from 'readline';
import { configListener as config } from "./config.mjs";
import { YKey } from "@syls/key";
import { YComb } from "@syls/key/comb";
import { funcLoopRangeIn } from "@syls/func";
import { yIsInstance } from "../../../-module/module.mjs";
import { YTable } from "@syls/table";

//#endregion
//#region YT

/** ### listenerTC
 * @typedef listenerTC
 * @prop {YComb} comb
 * @prop {(string|boolean)[]|YKey} key
 * @prop {listenerTC['key'][]} keys
 * @prop {listenerTC['comb'][]} combs
*/

/** @typedef {import('./module.mjs').listenerT&listenerTC} listenerT */

//#endregion

/**
 * ### YListener
 * 
 * 
 * 
 * ***
 * @class
 * @since `1.0.0`
 * @version `1.0.0`
 * 
*/
export class YListener extends YEntity {
    
    //#region static
    
    static {
        
        process.stdin.setRawMode(true);
        
        emitKeypressEvents(process.stdin);

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
     * @type {YListener[]}
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
     * @arg {...YListener} args `Аргументы`
     * @returns {YListener[]}
    */
    static create(...args) {
        
        return super.create(...args);
        
    };
    /**
     * @arg {Y1} value `Значение`
     * @static
     * @method
     * @public
     * @returns {(Y1&YListener)?}
     * @template {YListener} Y1
     * @override
    */
    static setClass(value) {
        
        return super.setClass(value);
        
    };
    
    //#endregion
    //#region field
    
    /**
     * ### keys
     * 
     * Текущие клавиши.
     * 
     * *** 
     * @since `1.0.0`
     * @type {YKey[]}
     * @field
     * @public
    */
    keys;
    /**
     * ### combs
     * 
     * Комбинации.
     * 
     * *** 
     * @since `1.0.0`
     * @type {YComb[]}
     * @field
     * @public
    */
    combs;
    /**
     * ### enter
     * 
     * нажатие клавиши `enter`.
     * 
     * *** 
     * @since `1.0.0`
     * @type {boolean}
     * @field
     * @public
    */
    enter;
    /**
     * ### active
     * 
     * Активность.
     * 
     * *** 
     * @since `1.0.0`
     * @type {boolean}
     * @field
     * @public
    */
    active = false;
    /**
     * ### callback
     * 
     * Основная функция.
     * 
     * *** 
     * @since `1.0.0`
     * @type {any}
     * @field
     * @protected
    */
    callback;
    /**
     * ### backspace
     * 
     * Нажатие клавиши `backspace`.
     * 
     * *** 
     * @since `1.0.0`
     * @type {boolean}
     * @field
     * @public
    */
    backspace;
    
    //#endregion
    //#region method
    
    /**
     * ### on
     * 
     * Метод запуска прослушивателя.
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
    on() {
        
        this.active = true;

        /** @arg {import("readline").Key} k `Данные клавиши` */
        this.callback = (c, k) => {

            this.combs = this.combs.filter(comb => !(!comb || (comb instanceof Array && comb.length === 0)));

            const key = new YKey(k.name, k.sequence, false, k.ctrl, k.shift);

            if (key.code === '\x1b') {

                process.exit();

            } else if (key.code === '\b') {

                this.backspace = true;

                this.keys.pop();

            } else if (key.code === '\r') {

                this.enter = true;

            } else {

                this.appendKey(key);

                for (const comb of this.combs.flat()) {
                    
                    if (comb instanceof YComb && comb.apply(...this.keys)) {

                        this.keys = [];
                        break;

                    };

                };

            };

            if (key.code !== '\r') this.enter = false;
            if (key.code !== '\b') this.backspace = false;

        };

        process.stdin.on('keypress', this.callback);

        return this;
        
    };
    /**
     * ### off
     * 
     * Метод отключения прослушивателя.
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
    off() {
        
        this.active = false;

        process.stdin.removeListener('keypress', this.callback);

        return this;
        
    };
    /**
     * @method
     * @public
     * @override
    */
    getClass() {
        
        return YListener;
        
    };
    /**
     * ### getInput
     * 
     * Метод получения текущего ввода.
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
    getInput() {
        
        let result = '';

        funcLoopRangeIn(this.keys, key => result += /[^\b\x1b]/.test(key.code) ? key.code : '');

        return result ?? null;
        
    };
    /**
     * ### appendKey
     * 
     * Метод добавления клавиш.
     * 
     * ***
     * @arg {...listenerTC['key']} keys `Клавиши`
     * 
     * 
     * ***
     * @since `1.0.0`
     * @version `1.0.0`
     * @method
     * @public
    */
    appendKey(...keys) {
        
        funcLoopRangeIn(keys, (key, index, array) => !yIsInstance(key, YKey) && (array[index] = new YKey(...key)));

        if (keys.length === config.keysLength) {

            this.keys = keys;

        } else if (keys.length > config.keysLength) {

            this.keys = keys.slice(-config.keysLength);

        } else if (this.keys.length + keys.length > config.keysLength) {

            this.keys = [...this.keys, ...keys].slice(-config.keysLength);

        } else {

            this.keys.push(...keys);

        };
        
        return this;
        
    };
    /**
     * ### appendComb
     * 
     * Метод добавления комбинаций.
     * 
     * ***
     * @arg {...listenerTC['comb']} combs `Комбинации`
     * 
     * 
     * ***
     * @since `1.0.0`
     * @version `1.0.0`
     * @method
     * @public
    */
    appendComb(...combs) {
        
        funcLoopRangeIn(combs, comb => yIsInstance(comb, YComb) && (this.combs.push(comb)));

        return this;
        
    };
    
    //#endregion
    
    /**
     * ### YListenerConstructor
     * - Версия `1.0.0`
     * 
     * 
     * ***
     * 
     * 
     * 
     * ***
     * 
     * @arg {listenerTC} args `Аргументы`
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
            
            /** @type {YArg<YListener&listenerTC>} */
            const yarg = args[0] instanceof YArg ? args[0] : new YArg(...args);
            
            
            
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
 * @file listener/class.mjs
 * @author Yakhin Nikita Artemovich <mr.y.nikita@gmail.com>
 * @license Apache-2.0
 * @copyright SYLS (Software Y Lib Solutions) 2023
*/