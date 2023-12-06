//#region YI

import { Y } from "@syls/y";
import { YArg } from "@syls/y/arg";
import { configKey as config } from "./config.mjs";

//#endregion
//#region YT

/** ### keyTC
 * @typedef keyTC
 * @prop {}
*/

/** @typedef {import('./module.mjs').keyT&keyTC} keyT */

//#endregion

/**
 * ### YKey
 * 
 * 
 * 
 * ***
 * @class
 * @since `1.0.0`
 * @version `1.0.0`
 * 
*/
export class YKey extends Y {
    
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
     * @type {YKey[]}
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
     * @arg {...YKey} args `Аргументы`
     * @returns {YKey[]}
    */
    static create(...args) {
        
        return super.create(...args);
        
    };
    /**
     * @arg {Y1} value `Значение`
     * @static
     * @method
     * @public
     * @returns {(Y1&YKey)?}
     * @template {YKey} Y1
     * @override
    */
    static setClass(value) {
        
        return super.setClass(value);
        
    };
    
    //#endregion
    //#region field
    
    /**
     * ### alt
     * 
     * Alt.
     * 
     * *** 
     * @since `1.0.0`
     * @type {boolean}
     * @field
     * @public
    */
    alt;
    /**
     * ### name
     * 
     * Наименование клавиши.
     * 
     * *** 
     * @since `1.0.0`
     * @type {string}
     * @field
     * @public
    */
    name;
    /**
     * ### code
     * 
     * Код.
     * 
     * *** 
     * @since `1.0.0`
     * @type {string}
     * @field
     * @public
    */
    code;
    /**
     * ### ctrl
     * 
     * Ctrl.
     * 
     * *** 
     * @since `1.0.0`
     * @type {boolean}
     * @field
     * @public
    */
    ctrl;
    /**
     * ### shift
     * 
     * Shift.
     * 
     * *** 
     * @since `1.0.0`
     * @type {boolean}
     * @field
     * @public
    */
    shift;
    
    //#endregion
    //#region method
    
    /**
     * @method
     * @public
     * @override
    */
    getClass() {
        
        return YKey;
        
    };
    /**
     * ### compare
     * 
     * Метод сравнения клавиши.
     * 
     * ***
     * @arg {YKey} key `Клавиша`
     * 
     * 
     * ***
     * @since `1.0.0`
     * @version `1.0.0`
     * @method
     * @public
    */
    compare(key) {
        
        if (this.name === key.name && this.alt === key.alt && this.ctrl === key.ctrl && this.shift === key.shift) {

            return true;

        } else {

            return false;

        };
        
    };
    
    //#endregion
    
    /**
     * ### YKeyConstructor
     * - Версия `1.0.0`
     * 
     * 
     * ***
     * 
     * 
     * 
     * ***
     * 
     * @arg {keyTC} args `Аргументы`
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
            
            /** @type {YArg<YKey&keyTC>} */
            const yarg = args[0] instanceof YArg ? args[0] : new YArg(...args);
            
            yarg.set(

                ['alt', 'bool'],
                ['ctrl', 'bool'],
                ['shift', 'bool'],
                ['name', 'string'],
                ['code', 'string'],

            );
            
            super(yarg);
            
            //#endregion
            //#region verify
            
            
            
            //#endregion
            //#region handle
            
            if (yarg.used.code) {

                if (yarg.used.code.includes('\x1b')) {
    
                    yarg.used.alt = true;
    
                };
                if (yarg.used.code === '\x7F') {
    
                    yarg.used.ctrl = true;
    
                };
    
            };
    
            switch (yarg.used.name) {
    
                case 'up': case 'left': case 'down': case 'right': case 'escape': case 'delete': case 'f1': case 'f2': case 'f3': case 'f4': case 'f5': case 'f6': case 'f7': case 'f8': case 'f9': case 'f10': case 'f11': case 'f12': yarg.used.alt = true; break;
    
            };

            if (/^\p{L}$/u.test(yarg.used.name) && yarg.used.name.toUpperCase() === yarg.used.name) {

                yarg.used.shift = true;
    
            };

            if (/^\w$/.test(yarg.used.name)) {

                yarg.used.code = yarg.used.name;

            };
            
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
 * @file key/class.mjs
 * @author Yakhin Nikita Artemovich <mr.y.nikita@gmail.com>
 * @license Apache-2.0
 * @copyright SYLS (Software Y Lib Solutions) 2023
*/

class SKey extends Y {
    
    /**
     * ### config
     * 
     * Конфигуратор.
     * 
     * ***
     * @public
    */
    static config = config;

    /**
     * ### convert
     * - Версия `0.0.0`
     * - Модуль `ject\entity\terminal\listener\key`
     * ***
     * 
     * Метод превращения значения в `Key`.
     * 
     * ***
     * @arg {any} value `Значение`
     * @public
    */
    static convert(value) {
        
        switch (value.constructor) {

            case Array: {

                value = new YKey(...value);

            }; break;

        };

        return value;
        
    };
    
};